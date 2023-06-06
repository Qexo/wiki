---
article: ''
date: ''
title: ''
updated: 2023-6-6T20:18:37.575+8:0
---
# 图床配置

从 2.0.0 开始, Qexo 支持了模块化的图床接入方法, 先前的 S3、FTP、Custom 文档合并至此

## 远程 API

Qexo 提供了自定义 API 图床功能, 在配置完成图床设置后即可在文章/页面编辑界面上传图片

### API 地址

图床图片上传的 API

```
https://7bu.top/api/upload
```

### POST 参数名

图床图片上传 API 参数中图片文件的参数名

```
image
```

![](https://pic.hipyt.cn/pic/2023/01/03/2fe2d42c3e5ae.png)

### JSON 路径

图床 API 返回数据中图片 URL 所在的路径, 若为整个返回值请留空
示例：![](https://pic.hipyt.cn/pic/2023/01/03/84a75fd5cf024.png)

```
data.url
```

### 自定义请求头

POST 请求时附带的请求头, 需要标准 JSON 格式, 若不需要请留空

```json
{"key":"value"}
```

### 自定义 BODY

POST 请求时额外的请求主体, 需要标准 JSON 格式, 若不需要请留空

```json
{"key":"value"}
```

### 自定义前缀

返回 URL 所需要添加的前缀, 若不需要请留空

```
some_text_or_url
```

## S3协议

Qexo 为 S3 存储桶提供了支持, 在配置完成 S3 存储桶设置后即可在文章/页面编辑界面上传图片

### 应用密钥 ID

S3 应用程序的 Access Key ID

```
1000000000000080000000000
```

### 应用密钥

S3 应用程序的 Access Key

```
S12******************6129E
```

### 存储桶名

S3 Bucket 名称

```
Bucket
```

### 边缘节点

S3 Endpoint

```
https://s3.us-west-002.backblazeb2.com
```

### 保存路径

文件上传后保存的路径 包含文件名

| 关键词         | 意义            | 示例                             |
| -------------- | --------------- | -------------------------------- |
| *{year}*     | 当前年份        | 21                               |
| *{month}*    | 当前月份        | 1                                |
| *{day}*      | 当前日份        | 2                                |
| *{YEAR}*     | 当前年份        | 2021                             |
| *{MONTH}*    | 当前月份        | 01                               |
| *{DAY}*      | 当前日份        | 02                               |
| *{filename}* | 无后缀的文件名  | image                            |
| ~~{time}~~    | ~~时间戳~~     | ~~1640186955.4339228~~          |
| *{extName}*  | 文件后缀名      | png                              |
| *{md5}*      | 图片的 Md5-Hash | 0c8bfe6821a91c3d96b25e2ea2dcf827 |

```
Qexo/{year}/{month}/{md5}.{extName}
```

### 自定义域名

返回文件链接的 URL 最终返回的链接, 支持关键词同上

```
https://file.example.com/file/CDN/Qexo/{year}/{month}/{md5}.{extName}
```

## FTP 协议

你可以借助这个模块将图片上传至远程 FTP 位置

### FTP 主机

所连接的 FTP 主机

```
127.0.0.1
```

### FTP 端口

FTP 连接端口 通常为 **21**

```
21
```

### 用户名

FTP 登录用户名

```
username
```

### 密码

FTP 登录密码

```
password
```

### 保存路径

文件上传后保存的路径 包含文件名

| 关键词         | 意义                 | 示例                                  |
| -------------- | -------------------- | ------------------------------------- |
| *{year}*     | 当前年份             | 21                                    |
| *{month}*    | 当前月份             | 1                                     |
| *{day}*      | 当前日份             | 2                                     |
| *{YEAR}*     | 当前年份             | 2021                                  |
| *{MONTH}*    | 当前月份             | 01                                    |
| *{DAY}*      | 当前日份             | 02                                    |
| *{filename}* | 无后缀的文件名       | image                                 |
| *{time}*     | 时间戳               | 1640186955.4339228                    |
| ~~{md5}~~     | ~~图片的 Md5-Hash~~ | ~~0c8bfe6821a91c3d96b25e2ea2dcf827~~ |
| *{extName}*  | 文件后缀名           | png                                   |

```
/Qexo/{year}/{month}/{time}.{extName}
```

### 自定义域名

返回文件链接的 URL 最终返回的链接, 支持关键词同上

```
https://file.example.com/file/CDN/Qexo/{year}/{month}/{time}.{extName}
```

## Github

(不建议)将图片上传至 Github 仓库以借助 Github Action 进行进一步操作

### Github仓库

您图片上传到的仓库

```
username/repo
```

### 项目分支

您图片需要上传仓库的分支

```
master
```

### Github 密钥

于 [Github 设置](https://github.com/settings/tokens) 生成的 Token
需要 Repo 下的至少读取和写入权限 *不建议给出所有权限*

```
wrq_P8sYPlYA9fjMlOPEYSKA84xxxxxxxxxxxxxx
```

### 保存路径

文件上传后保存的路径 包含文件名

| 关键词         | 意义           | 示例                             |
| -------------- | -------------- | -------------------------------- |
| *{year}*     | 当前年份       | 21                               |
| *{month}*    | 当前月份       | 1                                |
| *{day}*      | 当前日份       | 2                                |
| *{YEAR}*     | 当前年份       | 2021                             |
| *{MONTH}*    | 当前月份       | 01                               |
| *{DAY}*      | 当前日份       | 02                               |
| *{filename}* | 无后缀的文件名 | image                            |
| *{time}*     | 时间戳         | 1640186955.4339228               |
| *{md5}*      | 文件 MD5-Hash  | 0c8bfe6821a91c3d96b25e2ea2dcf827 |
| *{extName}*  | 文件后缀名     | png                              |

```
Qexo/{year}/{month}/{filename}_{md5}.{extName}
```

### 自定义域名

返回文件链接的 URL 最终返回的链接, 支持关键词同上

```
https://github.com/username/repo/raw/master/Qexo/{year}/{month}/{filename}_{md5}.{extName}
```
