![Docusaurus](https://badgen.net/badge/Docusaurus/2.0.0-beta.22/green)

# Quick Access

| Subject | View | Edit |
|  ---  |  ---  |  ---  |
| Coding Guideline         | [:globe_with_meridians: Website](https://coding-guideline-tips-and-others.vercel.app/guidelines/coding) | [:memo: Github](https://github.com/preface-ai/coding-guideline-tips-and-others/blob/main/guidelines/coding.md) |
| Git Development Workflow | [:globe_with_meridians: Website](https://coding-guideline-tips-and-others.vercel.app/guidelines/git-development-workflow) | [:memo: Github](https://github.com/preface-ai/coding-guideline-tips-and-others/blob/main/guidelines/git-development-workflow.md) |
| Database Guideline       | [:globe_with_meridians: Website](https://coding-guideline-tips-and-others.vercel.app/guidelines/database) | [:memo: Github](https://github.com/preface-ai/coding-guideline-tips-and-others/blob/main/guidelines/database.md) |
| Development Tips         | [:globe_with_meridians: Website](https://coding-guideline-tips-and-others.vercel.app/tips) | [:memo: Github](https://github.com/preface-ai/coding-guideline-tips-and-others/blob/main/tips) |
| Blog Posts               | [:globe_with_meridians: Website](https://coding-guideline-tips-and-others.vercel.app/blog) | [:memo: Github](https://github.com/preface-ai/coding-guideline-tips-and-others/blob/main/blog) |


# Write Blog post/Guideline/Tips

* You can easily edit/ add more document directly via Github and then submit a Pull request for peer reveiw first, or directly commit if you are comfortable enough.
* Your change will get deployed automatically after pushing to `main` branch. Enjoy :hugging_face:!

# Development

## Setup

* remember to switch Node.js version to the target version using `nvm` first:
```bash
nvm use
# Node.js expected version is defined at `.nvmrc` file
```

* Install all packages via npm
```bash
npm install
```

## Start application locally

* run this:
```bash
npm run start
```

* To understand more what you can do via Docusaurus, check the official document here:
  https://docusaurus.io/docs

## Deployment

* Vercel deployment has been setup, any commit push to default branch `main` will get deployed automatically here
  * https://coding-guideline-tips-and-others.vercel.app/
* feel free to submit your Pull Request for Peer review before merging into `main`
