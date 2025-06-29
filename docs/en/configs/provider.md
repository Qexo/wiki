---
article: ''
date: ''
title: ''
updated: '2024-07-22T17:30:53.285+08:00'
---
# Service Provider Settings

Qexo version 2.0 supports service provider extensions.

|          | Github | Gitlab     | Local   |
| -------- | ------ | ---------- | ------- |
| Get File  | √      | No Size Data | √     |
| Get Directory | √  | √         | √       |
| Save File | √      | √          | √       |
| Delete File | √    | √          | √       |
| Webhook   | Automatic | Manual    | ×       |
| Auto Deployment | Action | Action | Command Line |

# Blog Software Settings

Qexo version 2.6 and later supports multiple blog software (up to 2.6, Hexo, Hugo, and Valaxy are supported).

## Using Github

If you encounter issues during deployment, you can use the [HPP Validation Assistant](https://hexoplusplus.cronfly.workers.dev/?step=start) for configuration self-checks *only supports Github*. If everything is correct, check if there are any published articles in the repository.

### Github Repository

The repository where your blog source code **automatically deploys**

```
username/repo
```

References:

- https://blog.cyfan.top/p/e626cb30.html
- https://oplog.cn/archives/24998.html
- https://crazywong.com/posts/74006f42

### Project Branch

The branch of your blog source code repository for automatic deployment

```
master
```

### Github Token

Token generated at [Github Settings](https://github.com/settings/tokens) (Classical recommended)
Requires permissions under Repo & Workflow *do not provide all permissions*

```
wrq_P8sYPlYA9fjMlOPEYSKA84xxxxxxxxxxxxxx
```

### Repository Path

Path within your blog source code repository for automatic deployment. Leave empty if it is the root directory.

```
path/
```

## Using Gitlab

### Gitlab Repository

The repository where your blog source code **automatically deploys**

```
username/repo
```

References:

- https://blog.cyfan.top/p/e626cb30.html
- https://oplog.cn/archives/24998.html
- https://crazywong.com/posts/74006f42

### Project Branch

The branch of your blog source code repository for automatic deployment

```
master
```

### Gitlab Token

Token generated at [Gitlab Settings](https://gitlab.com/-/profile/personal_access_tokens)
Requires at least read and write permissions under Repo *do not provide all permissions*

```
wrq_P8sYPlYA9fjMlOPEYSKA84xxxxxxxxxxxxxx
```

### Repository Path

Path within your blog source code repository for automatic deployment. Leave empty if it is the root directory.

```
path/
```

## Using Local

### Blog Path

*Absolute path* where your blog source code is located locally

```
D:\Hexo
```

```
/www/myblog
```

### Auto Deployment

Command for automatic deployment, executed after each source code modification. Leave empty for no auto deployment.

```bash
hexo clean && hexo g && hexo d
```

```bash
hugo
```

If you encounter `/bin/sh: 1: xxx: not found`, try adding `/bin/bash -c` before each command

```bash
/bin/bash -c "hexo clean" && /bin/bash -c "hexo g"
```