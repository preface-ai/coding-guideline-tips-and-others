---
sidebar_position: 5
tags:
  - database
  - sql
  - data
---

# Metabase Guideline

This is a documentation on Metabase usage at Preface.

## Overview

Preface uses Metabase as our business intelligence and data visualization tool. Our setup leverages Google Cloud Platform (GCP) infrastructure:

- **Database**: Google Cloud SQL (PostgreSQL) hosts our data warehouse and application databases
- **Application**: Metabase runs on Google Cloud Run for scalable containerized deployment

The Metabase instance connects to our GCP SQL databases to provide analytics dashboards, reports, and data exploration capabilities for our team.

## Metabase Upgrade 

1. Set up google cloud CLI and then prepare metabase docker in upload for cloud run
2. in your local computer, in command line, run

```
gcloudinit
```

and follow instructions

3. on your local computer, create a new directory in your computer named `metabase`

4. Open your favorite editor and create a file named `Dockerfile` inside the `metabase` directory. Don't forget the upper case on the D or it wont work

5. Copy the below code and add this in your `Dockerfile` file .

```
FROM metabase/metabase

RUN apk update
RUN apk add --no-cache socat

# Set up symlink to Cloud SQL UNIX socket
RUN ln -s /cloudsql/preface-data:asia-east2:metabase-test/.s.PGSQL.5432 pg.sock

COPY startup.sh startup.sh
RUN chmod +x startup.sh
ENTRYPOINT ["./startup.sh"]
```

6. Save your file.
7. Create a new file in the same `metabase` directory and name it as `startup.sh`

Copy the below code and add this in your `startup.sh` file.

```
#! /bin/bash

# Forward TCP:5432 to Cloud SQL Unix socket
nohup socat -d -d TCP4-LISTEN:5432,fork UNIX-CONNECT:pg.sock &

# Runs Metabase
/app/run_metabase.sh
```

8. save file
9. Inside your terminal switch to the metabase folder you just created and set your GCloud project by running:

`gcloud config set project your_project_name`

10. Then, we can build the image (image name contains project name and the folder name, metabase in this case):

```
gcloud builds submit --tag
asia.gcr.io/preface-data/metabase ## for preface
```

11. Access Cloud Run from GCP console and update the existing metabase image with the new one 

## Deploying the New Image on Cloud Run

After building the new image, you need to manually deploy it through the Cloud Run interface:

1. **Access Cloud Run Console**:
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Navigate to Cloud Run from the left sidebar
   - Select your Metabase service

2. **Deploy New Revision**:
   - Click "Edit & Deploy New Revision" button at the top
   - In the "Container" section, update the "Container image URL" field
   - Replace the existing image URL with your newly built image:
     ```
     asia.gcr.io/preface-data/metabase:latest
     ```
   - Or use the specific tag if you tagged your image with a version

3. **Configuration Settings**:
   - Ensure the following settings are maintained:
     - **CPU allocation**: "CPU is only allocated during request processing"
     - **Minimum instances**: 0 (for cost optimization)
     - **Maximum instances**: Set according to your traffic needs
     - **Cloud SQL connections**: Ensure your Cloud SQL instance is connected

4. **Environment Variables**:
   - Verify that all necessary Metabase environment variables are set:
     - Database connection settings
     - Metabase admin credentials
     - Any custom configuration variables

5. **Deploy**:
   - Click "Deploy" to create the new revision
   - Monitor the deployment progress in the Cloud Run console
   - Once deployed, the new revision will automatically receive 100% of the traffic

6. **Verification**:
   - Test the Metabase application to ensure it's working correctly
   - Verify database connections are functioning
   - Check that all dashboards and queries are loading properly
