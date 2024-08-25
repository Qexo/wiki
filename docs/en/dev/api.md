# API Documentation

## Introduction

1. Qexo's API endpoints usually have a trailing slash; otherwise, redirects might occur, potentially affecting usage.
2. Unless specified otherwise, all APIs **require authentication**. The method is to include `token="API_KEY"` in the POST or GET request.
3. Qexo's API is divided into public and internal program calls, located under the `pub` and `api` paths, respectively. This document covers only the public APIs, accessible with an API key.
4. Unless stated otherwise, parameters mentioned in this document are for POST requests.

## Public API

### `pub/save/`
Modify a file

| Field      | Description    |
|------------|----------------|
| file       | File path      |
| content    | Content        |

```json
{
    "msg": "OK!",
    "status": true
}
```

### `pub/save_post/`
Modify an article

| Field      | Description    |
|------------|----------------|
| file       | Article name   |
| content    | Content        |

```json
{
    "msg": "OK!",
    "status": true
}
```

### `pub/save_draft/`
Save an article draft

| Field      | Description    |
|------------|----------------|
| file       | Article name   |
| content    | Content        |

```json
{
    "msg": "OK!",
    "status": true
}
```

### `pub/new/`
Create a new file

| Field      | Description    |
|------------|----------------|
| file       | File path      |
| content    | Content        |

```json
{
    "msg": "OK!",
    "status": true
}
```

### `pub/delete/`
Delete a file

| Field      | Description    |
|------------|----------------|
| file       | File path      |

```json
{
    "msg": "OK!",
    "status": true
}
```

### `pub/delete_post/`
Delete an article

| Field      | Description    |
|------------|----------------|
| file       | Article name   |

```json
{
    "msg": "OK!",
    "status": true
}
```

### `pub/create_webhook/`
Create a Webhook event

| Field      | Description                  |
|------------|------------------------------|
| uri        | https://xxx/api/webhook/     |

```json
{
    "msg": "Settings updated successfully!",
    "status": true
}
```

### `pub/get_update/`
Get update information

```json
{
    "hasNew": false,
    "newer": "1.5.5",
    "newer_link": "https://github.com/am-abudu/Qexo/releases/tag/1.5.5",
    "newer_time": "2022-02-16 23:27:23",
    "newer_text": "Fixed known bugs; Added friend link cleanup feature",
    "status": true
}
```

### `pub/get_posts/`
Get a list of articles

```json
{
    "status": true,
    "posts": [
        {
            "name": "10",
            "fullname": "10.md",
            "path": "source/_posts/10.md",
            "size": 592,
            "status": true
        },
        {
            "name": "11",
            "fullname": "11.md",
            "path": "source/_posts/11.md",
            "size": 1118,
            "status": true
        }
    ]
}
```

### `pub/get_pages/`
Get a list of pages

```json
{
    "status": true,
    "pages": [
        {
            "name": "404",
            "path": "source/404/index.md",
            "size": 5059
        },
        {
            "name": "about",
            "path": "source/about/index.md",
            "size": 141
        }
    ]
}
```

### `pub/get_configs/`
Get a list of configurations

```json
{
    "status": true,
    "configs": [
        {
            "name": "main.yml",
            "path": ".github/workflows/main.yml",
            "size": 1500
        },
        {
            "name": "_config.butterfly.yml",
            "path": "_config.butterfly.yml",
            "size": 27990
        }
    ]
}
```

### `pub/get_images/`
Get a list of images

```json
{
    "status": true,
    "images": [
        {
            "name": "avatar-new-test3.png",
            "size": 556194,
            "url": "https://xxx",
            "date": "2021-11-15 23:03:53",
            "time": "1636988633.7590833"
        },
        {
            "name": "image.png",
            "size": 2080250,
            "url": "https://xxx",
            "date": "2022-02-15 16:05:39",
            "time": "1644912339.5202296"
        }
    ]
}
```

### `pub/fix/`
Automatic repair program

```json
{
    "msg": "Attempted to automatically fix 1 field, please check and modify the configuration later",
    "status": true
}
```

### `pub/friends/`
Get friend links **No authentication required**

```json
{
    "data": [
        {
            "name": "iMaeGoo’s Blog",
            "url": "https://www.imaegoo.com/",
            "image": "https://www.imaegoo.com/images/avatar.jpg",
            "description": "Rainbow Space Station",
            "time": "1642516414.3821218"
        },
        {
            "name": "Icarus",
            "url": "https://ppoffice.github.io/hexo-theme-icarus/",
            "image": "https://ppoffice.github.io/hexo-theme-icarus/img/avatar.png",
            "description": "Theme of this site",
            "time": "1642516682.7982264"
        }
    ],
    "status": true
}
```

### `pub/add_friend`
Add a friend link

| Field      | Description                |
|------------|----------------------------|
| name       | Name                       |
| url        | Link                       |
| image      | Image URL                  |
| description| Description                 |
| status     | Status (hidden/visible)    |

```json
{
    "msg": "Added successfully!",
    "time": "1642516682.7982264",
    "status": true
}
```

### `pub/edit_friend`
Edit a friend link

| Field      | Description                |
|------------|----------------------------|
| name       | Name                       |
| url        | Link                       |
| image      | Image URL                  |
| description| Description                 |
| time       | Timestamp of the friend link|
| status     | Status (hidden/visible)    |

```json
{
    "msg": "Modified successfully!",
    "status": true
}
```

### `pub/del_friend`
Delete a friend link

| Field      | Description        |
|------------|--------------------|
| time       | Timestamp of the friend link |

```json
{
    "msg": "Deleted successfully!",
    "status": true
}
```

### `pub/ask_friend`
Apply for a friend link **No authentication required but needs to be enabled in settings**

| Field      | Description    |
|------------|----------------|
| name       | Name           |
| url        | Link           |
| image      | Image URL      |
| description| Description    |

```json
{
    "msg": "Application successful!",
    "time": "1642516682.7982264",
    "status": true
}
```

### `pub/last` **Removed in 1.6.2**
Get the last online time of the blogger **Removed, please use `/pub/status/`**

```json
{
    "msg": "1645543096",
    "status": true
}
```

### `pub/get_custom`
Get custom fields **No authentication required**

| Field      | Description  |
|------------|--------------|
| key        | Field name   |

```json
{
    "data": "xxxx",
    "status": true
}
```

### `pub/get_notifications`
Get notifications

```json
{
    "data": [
        {
            "label": "title",
            "content": "text",
            "timestamp": "1647668134.7664979",
            "time": "2022-03-19 13:35:34"
        },
        {
            "label": "title1",
            "content": "text1",
            "timestamp": "1647668134.7664979",
            "time": "2022-03-19 13:35:34"
        }
    ],
    "status": true
}
```

### `pub/status`
Get basic blog information **No authentication required**

```json
{
    "data": {
        "posts": "68",
        "last": "1648050031"
    },
    "status": true
}
```

# Error Example

Error responses are generally similar:

```json
{
    "msg": "Error Message", 
    "status": false
}
```