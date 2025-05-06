# Deployment workflow of PAPP

## Procedure

![figure](../../static/img/papp-deployment-timeline.jpg)

### Purpose

- The deployment timeline is a guideline for the update and build process for the preface app. It is a standardised way to make sure we deliver changes in a quick cadence while maintaining our app.

### Procedure Notes

- The cycle is set to four weeks per month and remaining days for last week does not carry over to next month
- Every month is capstoned by a minor version upgrade, requiring a new build
- EAS update should be handled midweek if possible to enable quick response in case any error occurs
- EAS build => submission => approval process will take around 1-3 days
- Native changes to the app will prompt a new build for the week
- Determine the apps that need to be update by referring to the app version dashboard as detailed below

#### Access to preface app version dashboard

[Preface app version dashboard](https://data.preface.ai/dashboard/197-preface-app-version-dashboard)

- This dashboard is used to track the app version usage of iOS and Android. (i.e.: how many users are using the app with the version)
- It should help us to decide which version should be omitted for any updates.

#### Update Actions

1. Review the app version usage using the app version dashboard before the weekly EAS update

2. If the active users of an old version is less than or equal 5% of the the active users of all versions, this version can be omitted for any updates.

3. Announce this decision in the channel to let everyone aware before updates to the different versions

4. Refer to readme file in Preface app for update procedure

#### Build actions

1. Refer to the timeline decision tree for build for bugs, otherwise always build for native code changes and end of month.

2. Refer to readme file in Preface app for build procedure

### Implementation Details

Responsible person: [On-duty person](https://docs.google.com/spreadsheets/d/1keGZmctYOXUs-XPzAIPbA6AfxroSlMB2H3NO7k_NSN4/edit?gid=1777765259#gid=1777765259)

### Version Handling

Version numbers are structured as `MAJOR.MINOR.PATCH`.

#### Version Increment

- **Patch Build**:  
  - Patch builds are for builds in between the minor version builds
  - Increment the **PATCH** version: `1.0.0` → `1.0.1` → `1.0.2` ... → `1.0.13` and so on.  

- **Minor Build**:
  - Minor builds are for builds that are necessary at the end of the monthly app cycle.
  - Increment the **MINOR** version and reset the **PATCH** version to `0`: `1.0.0` → `1.1.0` → `1.2.0` and so on.  

- **Major Build**:  
  - TODO: Currently we do not have a set rule for when to build a major version.
  - Increment the **MAJOR** version and reset both the **MINOR** and **PATCH** versions to `0`: `1.0.0` → `2.0.0`.  


#### Misc

- **Google Play**:
  - Deployment
    - When deploying to Android via the play console, sometimes you might come across an error stating that there are missing values in the manifest file. Google looks into *all* active bundles in production and testing(open, closed, internal). So if there are any active old versions without the value we must deploy newer versions into the testing environment as well. 