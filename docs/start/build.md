# 部署程序

得益于 Python 强大的跨平台功能, Qexo 支持在各种平台进行部署, 受支持的部署方式为 Vercel 或 Docker 部署。本地源码部署只建议高级用户使用。

值得注意的一点是, 如果你使用的是 Vercel 部署, 我不建议你自备数据库, 因为你往往无法保证与 Vercel 的连接质量。

## Docker 部署
建议使用 Docker 随时随地一键部署 Qexo 应用

> Qexo 已经支持使用 ghcr.io 或 cnb.cool 制品库提取镜像, 如果你是国内用户, 建议将下文中的 `abudulin/qexo` 替换为 `docker.cnb.cool/qexo/qexo` 以加快部署

```bash
docker run -d \
    --restart=unless-stopped \
    -v $(pwd)/db:/app/db \
    -p 8000:8000 \
    -e TIMEOUT=600 \
    -e DOMAINS="['yourdomain.com','www.yourdomain.com']" \
    --name="qexo" \
    abudulin/qexo:latest
```
其中 `$(pwd)/db` 为数据存储目录, 你可以改为需要的地址

如果你需要 Dev 分支, 请拉取 `qexo:testing`

当然, 你也可以使用 docker-compose
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
      DOMAINS: "['yourdomain.com','www.yourdomain.com']"
    volumes:
      - ./db:/app/db
```

## Vercel 部署 (PostgreSQL/Vercel)

你可以通过 Vercel 提供的免费数据库。但请注意这是个 Beta 功能

### 一键部署

[![部署到 Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/am-abudu/Qexo)

首次部署会报错, 请无视并进行接下来的步骤

### 申请 Vercel 数据库

进入[Vercel Storage 界面](https://vercel.com/dashboard/stores) 然后点击右上角的 Create Database 并选择 Postgres 创建免费 PostgreSQL 数据库, 在 Connect 页面获取数据库连接信息。请注意在地区选择的位置选择与你上一步项目对应的地区（通常为 Washington, D.C., USA (East) - iad1）。

### 绑定项目

在左侧边栏选择 Projects 点击 Connect Project 连接到你第一步创建的项目

### 部署

回到你的项目页面，在 Deployments 点击 Redeploy 开始部署, 若没有 Error 信息即可打开域名进入初始化引导

## Vercel 部署 (MySQL/PlanetScale)

> 流行的数据库平台PlanetScale删除免费计划 开发者必须在4月8日前付费

你可以通过使用 PlanetScale 提供的免费数据库

### 申请 PlanetScale 数据库

[注册 PlanetScale 账号](https://www.planetscale.com/) 创建免费 MySQL 数据库(不支持大陆IP), 区域**一定要选择 AWS / N. Virginia (us-east-1)**, 并记录数据库连接信息

### 一键部署

[![部署到 Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/am-abudu/Qexo)

首次部署会报错, 请无视并重新进入项目, 在项目设置界面添加环境变量 Environment Variables


| 名称           | 意义                                 | 示例                       |
| -------------- | ------------------------------------ | -------------------------- |
| MYSQL_HOST     | MySQL 数据库连接地址                 | us-east.connect.psdb.cloud |
| MYSQL_PORT     | MySQL 数据库通信端口 默认应填写 3306 | 3306                       |
| MYSQL_USER     | MySQL 数据库用户名                   | abudu                      |
| MYSQL_NAME     | MySQL 数据库名                       | mydatabase                 |
| MYSQL_PASSWORD | MySQL 数据库密码                     | password                   |
| PLANETSCALE    | (可选)用PlanetScale则设置为1         | 1                          |


其中 `PLANETSCALE` 用于禁用外键约束, 以防止PlanetScale数据库部署失败, 若你自备数据库且没有特殊需求请**不要填写**

在 Deployments 点击 Redeploy 开始部署, 若没有 Error 信息即可打开域名进入初始化引导

## Vercel 部署 (PostgreSQL/SupaBase)

你可以通过 SupaBase 提供的免费数据库

### 申请 SupaBase 数据库

[注册 SupaBase 账号](https://supabase.com) 创建免费 SupaBase 数据库, 区域**一定要选择 N. Virginia (us-east-1)** 在项目设置页面获取数据库连接信息, 密码即为你所设置的值（由于涉及URL解析，建议避免在密码中出现 "@ # &"等符号。如使用，在设置环境变量时须注意转义）

### 一键部署

[![部署到 Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/am-abudu/Qexo)

首次部署会报错, 请无视并重新进入项目, 在项目设置界面添加环境变量 Environment Variables

| 名称    | 意义                                      | 示例               |
| ------- | ----------------------------------------- | ------------------ |
| PG_HOST | PostgreSQL 数据库连接地址                 | db.xxx.supabase.co |
| PG_PORT | PostgreSQL 数据库通信端口 默认应填写 5432 | 5432               |
| PG_USER | PostgreSQL 数据库用户名                   | postgres           |
| PG_DB   | PostgreSQL 数据库名                       | postgres           |
| PG_PASS | PostgreSQL 数据库密码                     | password           |

在 Deployments 点击 Redeploy 开始部署, 若没有 Error 信息即可打开域名进入初始化引导

> [!TIP]
> 如果在Vercel部署时出现以下报错信息：
> ``` bash
> django.db.utils.OperationalError: connection to server at "db.xxxxx.supabase.co" (1xx4:qw12:bcda:abcd:x12x:xx23:45xx:xx67), port 5432 failed: Network is unreachable
> Is the server running on that host and accepting TCP/IP connections?
> ```
> 说明 Vercel 仅支持IPv4，没有成功解析 Supabase免费版的IPv6地址。要解决此问题，请前往Supabase控制台 -> 右上方connect ，在弹出的面板中，将 Connection String -> Method 修改为 Transaction pooler ，然后点击 View parameters 查看新的数据库连接信息，并按照上表修改对应的 Vercel 环境变量后重新部署。当然，也可以在 Supabase 升级至专业版，开启IPv4地址

## Vercel 部署 (MongoDB)

目前 Qexo 已支持使用 MongoDB 作为数据库进行部署, 请注意新版本修改了 MongoDB 连接方式, 旧版本用户可能需要重新初始化数据库

### 申请 MongoDB 数据库

[注册 MongoDB 账号](https://www.mongodb.com/cloud/atlas/register) 创建免费 MongoDB 数据库, 区域**一定要选择 AWS / N. Virginia (us-east-1)** 在 Clusters 页面点击 CONNECT, 按步骤设置允许所有 IP 地址的连接）, 创建数据库用户, 并记录数据库连接信息, 密码即为你所设置的值
![](https://s2.loli.net/2024/07/19/9axCOdNGJWUIqQ7.png)

### 一键部署

[![部署到 Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/am-abudu/Qexo)

首次部署会报错, 请无视并重新进入项目, 在项目设置界面添加环境变量 Environment Variables


| 名称         | 意义                                    | 示例                                    |
| ------------ | --------------------------------------- | --------------------------------------- |
| MONGODB_HOST | MongoDB 数据库连接地址                  | mongodb+srv://cluster0.xxxx.mongodb.net |
| MONGODB_PORT | MongoDB 数据库通信端口 默认应填写 27017 | 27017                                   |
| MONGODB_USER | MongoDB 数据库用户名                    | abudu                                   |
| MONGODB_DB   | MongoDB 数据库名                        | Cluster0                                |
| MONGODB_PASS | MongoDB 数据库密码                      | password                                |

在 Deployments 点击 Redeploy 开始部署, 若没有 Error 信息即可打开域名进入初始化引导

## 本地源码部署 (高级)

从 2.0 版本开始, Qexo 对本地部署进行了较为完善的支持

由于本地部署问题的多样性及不确定性, 维护者不能保证给予有效的支持, 一般用户建议使用 Docker 部署。只建议高级用户使用源码部署, 需要自行配置本地 Python3 环境

如果要使用本地部署, 请使用2.0+版本或Dev分支

### 下载 Release

在 [Release](https://github.com/am-abudu/Qexo/releases) 下载最新的版本 *Source code (zip)* 并解压

### 准备数据库

参考 [Django 官方文档](https://docs.djangoproject.com/zh-hans/5.2/ref/databases)


| 官方支持   | 第三方支持           |
| ---------- | -------------------- |
| PostgreSQL | CockroachDB          |
| MariaDB    | Firebird             |
| MySQL      | Google Cloud Spanner |
| Oracle     | Microsoft SQL Server |
| SQLite     | MongoDB              |

注1: 你可能需要根据你使用的数据库修改 `requirement.txt` 以安装依赖

注2: 在进行一键更新时，名称为`db`的目录下的文件以及名称为`configs.py`文件将不会被删除，你应该把重要文件（如数据库）放在该文件夹下

### 编辑配置

以使用 Mysql 为例, 确认好安装相关依赖后在`manage.py`的同级目录下创建并修改 `configs.py`

```python
import pymysql
pymysql.install_as_MySQLdb()
DOMAINS = ['yourdomain.com','www.yourdomain.com']
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

如果需要引入其他的库, 或在`init.py`中执行代码, 可以直接在顶部写入`import pymysql`

### 执行命令运行

```bash
pip3 install -r requirements.txt
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver 0.0.0.0:8000 --noreload
```
生产环境下，建议更换至 uWSGI 或 Gunicorn
```bash
gunicorn --bind 0.0.0.0:8000 \
         --workers 4 \
         --threads 2 \
         --timeout 600 \
         --access-logfile - \
         --error-logfile - \
         core.wsgi:application
```