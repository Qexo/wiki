---
article: ''
date: ''
title: ''
updated: '2024-07-21T23:40:37.381+08:00'
---
# Deploying the Application

Thanks to Python's powerful cross-platform capabilities, Qexo supports deployment on various platforms, with supported methods being Vercel or local deployment. It is important to note that if you are using Vercel for deployment, it is not recommended to use your own database, as you may not be able to guarantee the quality of the connection with Vercel.

> Due to a [Bug on Vercel's side](https://vercel.com/docs/functions/runtimes/python#python-dependencies), you need to change the Node.js version to 18.x in the project Settings -> General -> Node.js Version to complete the deployment.

## Vercel Deployment (PostgreSQL/Vercel)

You can use the free database provided by Vercel. Note that this is a Beta feature.

### One-Click Deployment

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/am-abudu/Qexo)

The first deployment will result in an error, which can be ignored; proceed to the next steps.

### Apply for Vercel Database

Go to the [Vercel Storage page](https://vercel.com/dashboard/stores), click on Create Database in the top right corner, and select Postgres to create a free PostgreSQL database. Obtain the database connection information on the Connect page. Make sure to choose the same region for the database as your project from the previous step (typically Washington, D.C., USA (East) - iad1).

### Link Project

In the left sidebar, select Projects and click Connect Project to link to the project you created in the first step.

### Deployment

Return to your project page, click Redeploy under Deployments to start the deployment. If there are no Error messages, you can open the domain and begin the initialization process.

## Vercel Deployment (MySQL/PlanetScale)

> Popular database platform PlanetScale has removed its free plan. Developers must pay by April 8th.

You can use the free database provided by PlanetScale.

### Apply for PlanetScale Database

[Register for a PlanetScale account](https://www.planetscale.com/) to create a free MySQL database (not supported for mainland China IPs). The region **must be set to AWS / N. Virginia (us-east-1)**. Record the database connection information.

### One-Click Deployment

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/am-abudu/Qexo)

The first deployment will result in an error, which can be ignored. Re-enter the project and add the Environment Variables in the project settings.

| Name           | Meaning                                | Example                      |
| -------------- | -------------------------------------- | ---------------------------- |
| MYSQL_HOST     | MySQL database connection address      | us-east.connect.psdb.cloud   |
| MYSQL_PORT     | MySQL database communication port      | 3306                         |
| MYSQL_USER     | MySQL database username                | abudu                        |
| MYSQL_NAME     | MySQL database name                    | mydatabase                   |
| MYSQL_PASSWORD | MySQL database password                | password                     |
| PLANETSCALE    | (Optional) Set to 1 if using PlanetScale | 1                          |

The `PLANETSCALE` variable is used to disable foreign key constraints to prevent deployment failures on PlanetScale. If you are using your own database and have no specific requirements, **do not fill this out**.

Click Redeploy under Deployments to start the deployment. If there are no Error messages, you can open the domain and begin the initialization process.

## Vercel Deployment (PostgreSQL/SupaBase)

You can use the free database provided by SupaBase.

### Apply for SupaBase Database

[Register for a SupaBase account](https://supabase.com) to create a free SupaBase database. The region **must be set to N. Virginia (us-east-1)**. Obtain the database connection information from the project settings page. The password will be what you set.

### One-Click Deployment

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/am-abudu/Qexo)

The first deployment will result in an error, which can be ignored. Re-enter the project and add the Environment Variables in the project settings.

| Name    | Meaning                                | Example                |
| ------- | -------------------------------------- | ---------------------- |
| PG_HOST | PostgreSQL database connection address | db.xxx.supabase.co     |
| PG_PORT | PostgreSQL database communication port | 5432                   |
| PG_USER | PostgreSQL database username           | postgres               |
| PG_DB   | PostgreSQL database name               | postgres               |
| PG_PASS | PostgreSQL database password           | password               |

Click Redeploy under Deployments to start the deployment. If there are no Error messages, you can open the domain and begin the initialization process.

## Vercel Deployment (MongoDB)

Given that Djongo's support for MongoDB is not robust, it is recommended to **use another database (MySQL/PostgreSQL)**.

### Apply for MongoDB Database

[Register for a MongoDB account](https://www.mongodb.com/cloud/atlas/register) to create a free MongoDB database. The region **must be set to AWS / N. Virginia (us-east-1)**. Click CONNECT on the Clusters page, follow the steps to allow connections from all IP addresses, create a database user, and record the database connection information. The password will be what you set.
![](https://s2.loli.net/2024/07/19/9axCOdNGJWUIqQ7.png)

### One-Click Deployment

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/am-abudu/Qexo)

The first deployment will result in an error, which can be ignored. Re-enter the project and add the Environment Variables in the project settings.

| Name         | Meaning                              | Example                                 |
| ------------ | ------------------------------------ | --------------------------------------- |
| MONGODB_HOST | MongoDB database connection address  | mongodb+srv://cluster0.xxxx.mongodb.net |
| MONGODB_PORT | MongoDB database communication port  | 27017                                   |
| MONGODB_USER | MongoDB database username            | abudu                                   |
| MONGODB_DB   | MongoDB database name                | Cluster0                                |
| MONGODB_PASS | MongoDB database password            | password                                |

Click Redeploy under Deployments to start the deployment. If there are no Error messages, you can open the domain and begin the initialization process.

## Local Deployment

Starting from version 2.0, Qexo offers more complete support for local deployment.

Due to the diversity and uncertainty of local deployment issues, the maintainers cannot guarantee effective support. It is only recommended for advanced users, who need to configure the local Python3 environment themselves.

If you want to use local deployment, please use version 2.0+ or the Dev branch.

### Download Release

Download the latest version *Source code (zip)* from [Release](https://github.com/am-abudu/Qexo/releases) and extract it.

### Prepare Database

Refer to the [Django Official Documentation](https://docs.djangoproject.com/en/3.2/ref/databases/)

| Official Support | Third-Party Support        |
| ---------------- | -------------------------- |
| PostgreSQL       | CockroachDB                |
| MariaDB          | Firebird                   |
| MySQL            | Google Cloud Spanner       |
| Oracle           | Microsoft SQL Server       |
| SQLite           | ......                     |

Note 1: You may need to modify `requirement.txt` based on the database you are using to install dependencies.

Note 2: During a one-click update, files under the directory named `db` and the file named `configs.py` will not be deleted. You should place important files (such as databases) in this folder.

### Edit Configuration

To use MySQL as an example, after confirming that the relevant dependencies are installed, create and modify `configs.py` in the same directory as `manage.py`.

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

### Run Commands

```bash
pip3 install -r requirements.txt
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver 0.0.0.0:8000 --noreload
```
