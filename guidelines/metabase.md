---
sidebar_position: 5
tags:
  - database
  - sql
  - data
---

# Metabase Guideline

This is a documentation on Metabase usage at Preface.


## Metabase Upgrade 

1. Set up google cloud CLI and then prepare metabase docker in upload in cloud run
2. in your local computer, in command line, run

```

gcloudinit
```

and follow instructions

3. on your local computer, create a new directory in your computer named `metabase`

4. Open your favorite editor and create a file named `Dockerfile` inside the `metabase` directory. Don't forget the upper case on the D or it wont work

5. Copy the below code and add this in your `Dockerfile` file .

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
7. Create a new file in the same `metabase` directory and name it as `startup.sh`

Copy the below code and add this in your `startup.sh` file.

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
http://asia.gcr.io/preface-data/metabase ## for preface
```

11. Access Cloud Run from GCP console and update the existing metabase image with the new one 