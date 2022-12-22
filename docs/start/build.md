# 部署程序
得益于 Python 强大的跨平台功能, Qexo 支持在各式各样的平台进行部署, 受支持的部署方式为 Vercel 或本地部署
## Vercel 部署
### 申请 MongoDB 
[注册 MongoDB 账号](https://www.mongodb.com/cloud/atlas/register) 创建免费 MongoDB 数据库，区域**一定要选择 AWS / N. Virginia (us-east-1)** 在 Clusters 页面点击 CONNECT，按步骤设置允许所有 IP 地址的连接），创建数据库用户，并记录数据库连接信息，密码即为你所设置的值
![](https://user-images.githubusercontent.com/51912589/140946317-bafeac24-fe3f-408b-927a-ca9a88168fa8.png)
### 一键部署
[![部署到 Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/am-abudu/Qexo)

首次部署会报错, 请无视并重新进入项目, 在项目设置界面添加环境变量 Environment Variables
| 名称 | 意义 | 示例 |
| --- | --- | --- |
| ~~DOMAINS~~ | ~~你所允许通信的安全域名 注意双引号而且是英文半角~~ | ~~[".vercel.app", "127.0.0.1", ".yoursite.com"]~~ |
| MONGODB_HOST | MongoDB 数据库连接地址 | mongodb+srv://cluster0.xxxx.mongodb.net |
| MONGODB_PORT | MongoDB 数据库通信端口 默认应填写 27017 | 27017 |
| MONGODB_USER | MongoDB 数据库用户名 | abudu |
| MONGODB_DB | MongoDB 数据库名 | Cluster0 |
| MONGODB_PASS | MongoDB 数据库密码 | JWo0xxxxxxxx |

在 Deployments 点击 Redeploy 开始部署，若没有 Error 信息即可打开域名进入初始化引导
## 本地部署
从 2.0 版本开始, Qexo 对本地部署进行了较为完善的支持

由于本地部署问题的多样性及不确定性，维护者不能保证给予有效的支持，只建议高级用户操作，且需要自行配置本地 Python3 环境

如果要使用本地部署，请使用2.0+版本或Dev分支
### 下载 Release
在 [Release](https://github.com/am-abudu/Qexo/releases) 下载最新的版本 *Source code (zip)* 并解压
### 准备数据库
参考 [Django 官方文档](https://docs.djangoproject.com/zh-hans/3.2/ref/databases/)
| 官方支持 | 第三方支持 |
| --- | --- |
| PostgreSQL | CockroachDB |
| MariaDB | Firebird |
| MySQL | Google Cloud Spanner |
| Oracle | Microsoft SQL Server |
| SQLite | ...... |

注意: 你可能需要根据你使用的数据库修改 `requirement.txt` 以安装依赖
### 编辑配置
以使用 Mysql 为例, 确认好安装相关依赖后在`manage.py`的同级目录下创建并修改 `configs.py`
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
如果需要引入其他的库，或在`init.py`中执行代码，可以直接在顶部写入`import pymysql`
### 执行命令运行
```bash
pip3 install -r requirements.txt
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver --noreload
```
