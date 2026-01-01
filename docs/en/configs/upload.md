# Image Hosting Configuration

Starting from version 2.0.0, Qexo supports a modular approach to image hosting, merging previous S3, FTP, and Custom documentations.

## Remote API

Qexo offers a custom API image hosting feature. After configuring the image hosting settings, you can upload images from the article/page editing interface.

### API URL

API for uploading images to the image hosting service

```
https://7bu.top/api/upload
```

### POST Parameter Name

Parameter name for the image file in the API for image uploads

```
image
```

![](https://s2.loli.net/2024/07/19/9IJXAxzrCcKvs3Y.png)

### JSON Path

Path in the API response data where the **image URL** is located. Leave blank if it is the entire response.
Example:

```
data.url
```

### Custom Request Headers

Request headers to include in the POST request, must be in standard JSON format. Leave blank if not needed.

```json
{"key":"value"}
```

### Custom BODY

Additional request body for the POST request, must be in standard JSON format. Leave blank if not needed.

```json
{"key":"value"}
```

### Custom Prefix

Prefix to add to the returned URL. Leave blank if not needed.

```
some_text_or_url
```

### Delete API

Path in the API response data where the **delete image URL** is located. Leave blank if it does not exist.
Example:

```
data.delete_url
```

## S3 Protocol

Qexo provides support for S3 buckets. After configuring the S3 bucket settings, you can upload images from the article/page editing interface.

### Access Key ID

S3 Access Key ID for the application

```
1000000000000080000000000
```

### Access Key

S3 Access Key for the application

```
S12******************6129E
```

### Bucket Name

S3 Bucket name

```
Bucket
```

### Endpoint

S3 Endpoint

```
https://s3.us-west-002.backblazeb2.com
```

### Save Path

Path where the file will be saved after upload, including the file name

| Keyword       | Meaning          | Example                           |
| ------------- | ----------------- | --------------------------------- |
| *{year}*      | Current year      | 21                                |
| *{month}*     | Current month     | 1                                 |
| *{day}*       | Current day       | 2                                 |
| *{YEAR}*      | Current year      | 2021                              |
| *{MONTH}*     | Current month     | 01                                |
| *{DAY}*       | Current day       | 02                                |
| *{filename}*  | Filename without extension | image                        |
| *{time}*      | Timestamp         | 1640186955.4339228                |
| *{extName}*   | File extension    | png                               |
| *{md5}*       | Image MD5-Hash    | 0c8bfe6821a91c3d96b25e2ea2dcf827  |

```
Qexo/{year}/{month}/{md5}.{extName}
```

### Custom Domain

Final URL of the returned file link, supports the same keywords

```
https://file.example.com/file/CDN/Qexo/{year}/{month}/{md5}.{extName}
```

## FTP Protocol

You can use this module to upload images to a remote FTP location.

### FTP Host

FTP host address

```
127.0.0.1
```

### FTP Port

FTP connection port, usually **21**

```
21
```

### Username

FTP login username

```
username
```

### Password

FTP login password

```
password
```

### Save Path

Path where the file will be saved after upload, including the file name

| Keyword       | Meaning          | Example                           |
| ------------- | ----------------- | --------------------------------- |
| *{year}*      | Current year      | 21                                |
| *{month}*     | Current month     | 1                                 |
| *{day}*       | Current day       | 2                                 |
| *{YEAR}*      | Current year      | 2021                              |
| *{MONTH}*     | Current month     | 01                                |
| *{DAY}*       | Current day       | 02                                |
| *{filename}*  | Filename without extension | image                        |
| *{time}*      | Timestamp         | 1640186955.4339228                |
| *{md5}*       | Image MD5-Hash    | 0c8bfe6821a91c3d96b25e2ea2dcf827  |
| *{extName}*   | File extension    | png                               |

```
/Qexo/{year}/{month}/{time}.{extName}
```

### Custom Domain

Final URL of the returned file link, supports the same keywords

```
https://file.example.com/file/CDN/Qexo/{year}/{month}/{time}.{extName}
```

## Github

(Not recommended) Upload images to a Github repository to leverage Github Actions for further operations.

### Github Repository

Repository where your images are uploaded

```
username/repo
```

### Project Branch

Branch in the repository where images need to be uploaded

```
master
```

### Github Token

Token generated at [Github Settings](https://github.com/settings/tokens)  
Requires at least read and write permissions for Repo *not recommended to give all permissions*

```
wrq_P8sYPlYA9fjMlOPEYSKA84xxxxxxxxxxxxxx
```

### Save Path

Path where the file will be saved after upload, including the file name

| Keyword       | Meaning          | Example                           |
| ------------- | ----------------- | --------------------------------- |
| *{year}*      | Current year      | 21                                |
| *{month}*     | Current month     | 1                                 |
| *{day}*       | Current day       | 2                                 |
| *{YEAR}*      | Current year      | 2021                              |
| *{MONTH}*     | Current month     | 01                                |
| *{DAY}*       | Current day       | 02                                |
| *{filename}*  | Filename without extension | image                        |
| *{time}*      | Timestamp         | 1640186955.4339228                |
| *{md5}*       | File MD5-Hash     | 0c8bfe6821a91c3d96b25e2ea2dcf827  |
| *{extName}*   | File extension    | png                               |

```
Qexo/{year}/{month}/{filename}_{md5}.{extName}
```

### Custom Domain

Final URL of the returned file link, supports the same keywords

```
https://github.com/username/repo/raw/master/Qexo/{year}/{month}/{filename}_{md5}.{extName}
```