---
article: ''
date: ''
title: ''
updated: '2024-07-21T23:40:37.381+08:00'
---
# Deploy Application

Thanks to Python's powerful cross-platform capabilities, Qexo supports deployment on various platforms. The supported deployment methods are Vercel or Docker. Local source code deployment is only recommended for advanced users.

It is worth noting that if you are using Vercel for deployment, I do not recommend using your own database, as you often cannot guarantee the connection quality with Vercel.

## Docker Deployment

It is recommended to use Docker to deploy the Qexo application anywhere with one click.

> Qexo now supports pulling images from the ghcr.io or cnb.cool container registries. If you are a user in China, we recommend replacing `abudulin/qexo` in the following text with `docker.cnb.cool/qexo/qexo` to speed up deployment.

```bash
docker run -d \
    --restart=unless-stopped \
    -v $(pwd)/db:/app/db \
    -p 8000:8000 \
    -e TIMEOUT=600 \
    --name="qexo" \
    abudulin/qexo:latest
```
Where `$(pwd)/db` is the data storage directory, you can change it to the desired address.

If you need the Dev branch, please pull `qexo:testing`.

Of course, you can also use docker-compose.
```yml
version: '3.8'

services:
  qexo:
    image: abudulin/qexo:latest
    container_name: qexo
    restart: unless-stopped
    ports:
      - "8000:8000"
    environment:
      WORKERS: 4
      THREADS: 4
      TIMEOUT: 600
    volumes:
      - ./db:/app/db
```

## Vercel Deployment (PostgreSQL/Vercel)

You can use the free database provided by Vercel. But please note that this is a Beta feature.

### One-click Deployment

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/am-abudu/Qexo)

The first deployment will report an error, please ignore it and proceed to the next steps.

### Apply for Vercel Database

Go to the [Vercel Storage page](https://vercel.com/dashboard/stores) and click Create Database in the upper right corner, select Postgres to create a free PostgreSQL database, and get the database connection information on the Connect page. Please note to select the region corresponding to your project in the previous step (usually Washington, D.C., USA (East) - iad1).

### Bind Project

Select Projects in the left sidebar and click Connect Project to connect to the project you created in the first step.

### Deployment

Go back to your project page, click Redeploy in Deployments to start the deployment. If there is no Error message, you can open the domain to enter the initialization guide.

## Vercel Deployment (MySQL/PlanetScale)

> The popular database platform PlanetScale has removed the free plan. Developers must pay before April 8.

You can use the free database provided by PlanetScale.

### Apply for PlanetScale Database

[Register a PlanetScale account](https://www.planetscale.com/) to create a free MySQL database (not supported for mainland China IPs). The region **must be AWS / N. Virginia (us-east-1)**, and record the database connection information.

### One-click Deployment

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/am-abudu/Qexo)

The first deployment will report an error, please ignore it and re-enter the project. Add environment variables in the project settings page.

| Name           | Meaning                              | Example                     |
| -------------- | ------------------------------------ | -------------------------- |
| MYSQL_HOST     | MySQL database connection address    | us-east.connect.psdb.cloud |
| MYSQL_PORT     | MySQL database communication port    | 3306                       |
| MYSQL_USER     | MySQL database username              | abudu                      |
| MYSQL_NAME     | MySQL database name                  | mydatabase                 |
| MYSQL_PASSWORD | MySQL database password              | password                   |
| PLANETSCALE    | (Optional) Set to 1 if using PlanetScale | 1                          |

The `PLANETSCALE` is used to disable foreign key constraints to prevent PlanetScale database deployment failures. If you are using your own database and have no special requirements, **do not fill in**.

Click Redeploy in Deployments to start the deployment. If there is no Error message, you can open the domain to enter the initialization guide.

## Vercel Deployment (PostgreSQL/SupaBase)

You can use the free database provided by SupaBase.

### Apply for SupaBase Database

[Register a SupaBase account](https://supabase.com) to create a free SupaBase database. The region **must be N. Virginia (us-east-1)**. Get the database connection information on the project settings page. The password is the value you set.

### One-click Deployment

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/am-abudu/Qexo)

The first deployment will report an error, please ignore it and re-enter the project. Add environment variables in the project settings page.

| Name    | Meaning                              | Example               |
| ------- | ------------------------------------ | --------------------- |
| PG_HOST | PostgreSQL database connection address | db.xxx.supabase.co    |
| PG_PORT | PostgreSQL database communication port | 5432                  |
| PG_USER | PostgreSQL database username          | postgres              |
| PG_DB   | PostgreSQL database name              | postgres              |
| PG_PASS | PostgreSQL database password          | password              |

Click Redeploy in Deployments to start the deployment. If there is no Error message, you can open the domain to enter the initialization guide.

## Vercel Deployment (MongoDB/Not Recommended)

Considering that Djongo's support for MongoDB is not perfect, it is recommended to **use other databases (MySQL/PostgreSQL)**.

### Apply for MongoDB Database

[Register a MongoDB account](https://www.mongodb.com/cloud/atlas/register) to create a free MongoDB database. The region **must be AWS / N. Virginia (us-east-1)**. Click CONNECT on the Clusters page, follow the steps to allow connections from all IP addresses, create a database user, and record the database connection information. The password is the value you set.
![](https://s2.loli.net/2024/07/19/9axCOdNGJWUIqQ7.png)

### One-click Deployment

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/am-abudu/Qexo)

The first deployment will report an error, please ignore it and re-enter the project. Add environment variables in the project settings page.

| Name         | Meaning                              | Example                                    |
| ------------ | ------------------------------------ | ------------------------------------------ |
| MONGODB_HOST | MongoDB database connection address  | mongodb+srv://cluster0.xxxx.mongodb.net    |
| MONGODB_PORT | MongoDB database communication port  | 27017                                      |
| MONGODB_USER | MongoDB database username            | abudu                                      |
| MONGODB_DB   | MongoDB database name                | Cluster0                                   |
| MONGODB_PASS | MongoDB database password            | password                                   |

Click Redeploy in Deployments to start the deployment. If there is no Error message, you can open the domain to enter the initialization guide.

## Local Source Code Deployment (Advanced)

Starting from version 2.0, Qexo has provided more comprehensive support for local deployment.

Due to the diversity and uncertainty of local deployment issues, the maintainers cannot guarantee effective support. General users are recommended to use Docker deployment. Source code deployment is only recommended for advanced users who need to configure the local Python3 environment by themselves.

If you want to use local deployment, please use version 2.0+ or the Dev branch.

### Download Release

Download the latest version *Source code (zip)* from [Release](https://github.com/am-abudu/Qexo/releases) and unzip it.

### Prepare Database

Refer to the [Django official documentation](https://docs.djangoproject.com/en/3.2/ref/databases/).

| Official Support | Third-party Support   |
| ---------------- | --------------------- |
| PostgreSQL       | CockroachDB           |
| MariaDB          | Firebird              |
| MySQL            | Google Cloud Spanner  |
| Oracle           | Microsoft SQL Server  |
| SQLite           | ......                |

Note 1: You may need to modify `requirement.txt` to install dependencies according to the database you use.

Note 2: During one-click updates, files in the directory named `db` and the file named `configs.py` will not be deleted. You should place important files (such as databases) in this folder.

### Edit Configuration

Take using MySQL as an example. After confirming the installation of related dependencies, create and modify `configs.py` in the same directory as `manage.py`.

```python
import pymysql
pymysql.install_as_MySQLdb()
DOMAINS = ["127.0.0.1", "yoursite.com"]
DATABASES = {
    'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'qexo',
            'USER': 'root',
            'PASSWORD': 'password',
            'HOST': '127.0.0.1',
            'PORT': '3306',
            'OPTIONS': {
                "init_command": "SET sql_mode='STRICT_TRANS_TABLES'"
            }
    }
}
```

If you need to import other libraries or execute code in `init.py`, you can directly write `import pymysql` at the top.

### Execute Commands to Run

```bash
pip3 install -r requirements.txt
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver 0.0.0.0:8000 --noreload
```
For a production environment, it is recommended to switch to uWSGI or Gunicorn.
