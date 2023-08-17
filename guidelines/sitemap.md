---
sidebar_position: 4
tags:
  - coding
  - js
---

# Sitemap Update Automation

This is the documentation of automation process for updating the 'sitemap.xml' and 'sitemap_images.xml' files on our public website.

## Requirements
```
1. Github token from the repository owner
2. Pro-sitemaps sitemap.xml and sitemap_images.xml hosting page url
3. Cloud Function
4. Service Account
5. Cloud Scheduler

```

### 1. Github Token

```ruby
Goto Github developer settings and create personal acess token. 
## MAKE SURE TO SAVE THE TOKEN OTHERWISE YOU WON'T BE ABLE TO SEE IT LATER!!
```

### 2. Pro-sitemaps 

``` 
Goto the pro-sitemaps website where our sitemap would have the most updated files. 

View and copy the url of 'searchsitemap_4374980.xml' and 'searchsitemap_4374980_images.xml' 
for the usage in the code.
```

### 3. Cloud Function
#### Setup
```
- Create a new cloud function and goto the 2nd step where you need to insert the code.

- There should be a file named 'index.js' by default and the function code needs to be 
in that file while the packages can be in 'package.json' file.

- After that, grant access and enter the email of the created service account in the 
new principal field and give assign the role as a Cloud Functions Invoker.
```
#### Code explanation
``` 
- The code below 'index.js'is written in javascript with the runtime as Node.js 18 in 
cloud function. 

- The function will compare the 'sitemap.xml' and 'sitemap_images.xml' in the github repository 
with the same files from the pro-sitemaps. 

- If the content of the files are not same then it will replace the file in the repository with
the file from pro-sitemaps.

- Usage of the github token will be used to access the repository and the pro-sitemap url to 
access the sitemap file content. 
```

#### index.js
```javascript
const { Octokit } = require('@octokit/rest');
const get = require('axios');

// Set the GitHub personal access token
const githubToken = 'ghp_XXXXXXXXXXXXXXXXXXXXX';

// Set the GitHub repository owner and name
const repositoryOwner = 'preface-ai';
const repositoryName = 'preface-website-frontend';

const sitemapUrl = 'https://a315886.sitemaphosting6.com/4374980/sitemap_4374980.xml';
const sitemapimagesURL = 'https://a315886.sitemaphosting6.com/4374980/sitemap_4374980_images.xml';

// Entry point for the Cloud Function
exports.helloHttp = async (req, res) => {
  try {
    // Call the function to update the 'sitemap_images.xml' file
    await updateSitemapImages();

    // Call the function to update the 'sitemap.xml' file
    await updateSitemap();

    // Send a response indicating success
    res.writeHead(200);
    res.end('Cloud Function executed successfully.');
  }
    catch (error) {
    // Send an error response
    res.writeHead(500);
    res.end('An error occurred during the execution of the Cloud Function.');
  }
}


async function downloadSitemap() {
  try {
    const response = await get(sitemapUrl, { responseType: 'arraybuffer' });

    if (response.status === 200) {
      return response.data;
    } 

    throw new Error("Failed to download the new 'sitemap.xml'");
  } catch (error) {
    throw new Error("Failed to download the new 'sitemap.xml'");
  }
}

async function updateSitemap() {
  try {
    // Initialize Octokit with the GitHub personal access token
    const octokit = new Octokit({
      auth: githubToken,
      request: {
      fetch: fetch,
  },
    });
    console.log("Something here...1")

    // Fetch the new 'sitemap.xml' content (as binary data)
    const newSitemapContent = await downloadSitemap();
    console.log("Something here...2")

    // Get the 'sitemap.xml' file content from the GitHub repository
    const { data } = await octokit.repos.getContent({
      owner: repositoryOwner,
      repo: repositoryName,
      path: 'public/sitemap.xml',
    });
    console.log("Something here...3")

    // Decode the content from Base64 to a string
    const oldSitemapContent = Buffer.from(data.content, 'base64').toString();
    console.log("Something here...4")

    // Compare the content of the old and new 'sitemap.xml'
    if (oldSitemapContent === newSitemapContent.toString()) {
      console.log("No updates found in 'sitemap.xml'.");
      return;
    }
    console.log("Something here...5")

    // Upload the new 'sitemap.xml' to the GitHub repository
    await octokit.repos.createOrUpdateFileContents({
      owner: repositoryOwner,
      repo: repositoryName,
      path: 'public/sitemap.xml',
      message: 'Updated sitemap.xml',
      content: newSitemapContent.toString('base64'), // Encode the binary data to Base64
      sha: data.sha,
      branch: 'main', // Specify the target branch directly (no need to create a new branch)
    });
    console.log("Something here...6")

    console.log("Updated 'sitemap.xml' in the GitHub repository.");
  } catch (error) {
    console.error('An error occurred during the git automation process:', error);
  }
}
// ... Sitemap_images.xml ...


async function downloadSitemapImages() {
  try {
    const response = await get(sitemapimagesURL, { responseType: 'arraybuffer' });

    if (response.status === 200) {
      return response.data;
    } 

    throw new Error("Failed to download the new 'sitemap_images.xml'");
  } catch (error) {
    throw new Error("Failed to download the new 'sitemap_images.xml'");
  }
}

async function updateSitemapImages() {
  try {
    // Initialize Octokit with the GitHub personal access token
    const octokit = new Octokit({
      auth: githubToken,
      request: {
      fetch: fetch,
  },
    });

    // Fetch the new 'sitemap_images.xml' content (as binary data)
    const newFileContent = await downloadSitemapImages();

    // Get the 'sitemap_images.xml' file content from the GitHub repository
    const { data } = await octokit.repos.getContent({
      owner: repositoryOwner,
      repo: repositoryName,
      path: 'public/sitemap_images.xml',
    });

    // Decode the content from Base64 to a string
    const oldFileContent = Buffer.from(data.content, 'base64').toString();

    // Compare the content of the old and new 'sitemap_images.xml'
    if (oldFileContent === newFileContent.toString()) {
      console.log("No updates found in 'sitemap_images.xml'.");
      return;
    }

    // Upload the new 'sitemap_images.xml' to the GitHub repository
    await octokit.repos.createOrUpdateFileContents({
      owner: repositoryOwner,
      repo: repositoryName,
      path: 'public/sitemap_images.xml',
      message: 'Updated sitemap_images.xml',
      content: newFileContent.toString('base64'), // Encode the binary data to Base64
      sha: data.sha,
      branch: 'main', // Specify the target branch directly (no need to create a new branch)
    });

    console.log("Updated 'sitemap_images.xml' in the GitHub repository.");
  } catch (error) {
    console.error('An error occurred during the git automation process:', error);
  }
}

```
#### package.json
``` json
{
  "dependencies": {
    "@google-cloud/functions-framework": "^3.0.0",
    "@octokit/rest": "^20.0.1",
    "axios": "^1.4.0",
    "node-fetch": "^3.0.0"
  }
}

```
### 4. Service Account
```
Create a service account and assign that account the permission as a 
cloud functions invoker, cloud functions service agent and cloud scheduler service agent.

``` 
### 5. Cloud Scheduler
```
- While creating a scheduler, inside the 'Frequency' insert the frequency to run 
this particular job. 

- It will be in cron expression and use "https://crontab.guru/" for assistance.

- In the next step, the Target type would be 'HTTP' and in the URL 
insert the email of the cloud function that you created. 

- After that in the 'Auth header' select 'Add OIDC token' and select your 
service account under the field of 'Service account'.
```