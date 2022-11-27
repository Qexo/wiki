# API 文档
## 写在前面
1. Qexo 的 API 后方通常加上斜杠，否则可能出现重定向，可能会影响使用
2. 若没有特殊说明，以下 API **都需要鉴权**，具体方法为在 POST 或 GET 中添加项 token="API密钥"
3. Qexo 的 API 分为对公与程序内部调用两种，分别位于 pub 和 api 路径下，本文只说明对外 API，即可以通过 API 密钥进行访问
4. 若没有特殊说明，本文提到的参数均需要 POST 请求
## 对公 API
### pub/save/
修改文件
|  file   | content  |
|  ----  | ----  |
| 文件路径  | 内容 |
```json
{
    "msg": "OK!",
    "status": true
}
```
### pub/save_post/
修改文章
|  file   | content  |
|  ----  | ----  |
| 文章名  | 内容 |
```json
{
    "msg": "OK!",
    "status": true
}
```
### pub/save_draft/
保存文章草稿
|  file   | content  |
|  ----  | ----  |
| 文章名  | 内容 |
```json
{
    "msg": "OK!",
    "status": true
}
```
### pub/new/
新建文件
|  file   | content  |
|  ----  | ----  |
| 文件路径  | 内容 |
```json
{
    "msg": "OK!",
    "status": true
}
```
### pub/delete/
删除文件
|  file   |
|  ----  |
| 文件路径  |
```json
{
    "msg": "OK!",
    "status": true
}
```
### pub/delete_post/
删除文章
|  file   |
|  ----  |
| 文章名  |
```json
{
    "msg": "OK!",
    "status": true
}
```
### pub/create_webhook/
创建 Webhook 事件
|  uri   |
|  ----  |
| https://xxx/api/webhook/  |
```json
{
    "msg": "设置成功！",
    "status": true
}
```
### pub/get_update/
获取更新
```json
{
    "hasNew": false,
    "newer": "1.5.5",
    "newer_link": "https://github.com/am-abudu/Qexo/releases/tag/1.5.5",
    "newer_time": "2022-02-16 23:27:23",
    "newer_text": " 修复已知BUG; 添加友链清理功能  ",
    "status": true
}
```
### pub/get_posts/
获取文章列表
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
### pub/get_pages/
获取页面列表
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
### pub/get_configs/
获取配置列表
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
### pub/get_images/
获取图片列表
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
### pub/fix/
自动修复程序
```json
{
    "msg": "尝试自动修复了 1 个字段，请在稍后检查和修改配置",
    "status": true
}
```
### pub/friends/
获取友链 **无需鉴权**
```json
{
    "data": [
        {
            "name": "iMaeGoo’s Blog",
            "url": "https://www.imaegoo.com/",
            "image": "https://www.imaegoo.com/images/avatar.jpg",
            "description": "虹墨空间站",
            "time": "1642516414.3821218"
        },
        {
            "name": "Icarus",
            "url": "https://ppoffice.github.io/hexo-theme-icarus/",
            "image": "https://ppoffice.github.io/hexo-theme-icarus/img/avatar.png",
            "description": "本站主题",
            "time": "1642516682.7982264"
        }
    ],
    "status": true
}
```
### pub/add_friend
新增友链
|  name   | url  | image | description | status |
|  ----  | ----  | ---- | ---- | ---- |
| 名称  | 链接 | 图片URL | 描述 | 状态(隐藏/显示) |
```json
{
    "msg": "添加成功！",
    "time": "1642516682.7982264",
    "status": true
}
```
### pub/edit_friend
编辑友链
|  name   | url  | image | description | time | status |
|  ----  | ----  | ---- | ---- | ---- | ---- |
| 名称  | 链接 | 图片URL | 描述 | 该友链的时间戳 | 状态(隐藏/显示) |
```json
{
    "msg": "修改成功！",
    "status": true
}
```
### pub/del_friend
删除友链
| time |
| ---- |
| 该友链的时间戳 |
```json
{
    "msg": "删除成功！",
    "status": true
}
```
### pub/ask_friend
申请友链 **无需鉴权但需要在设置中开启**
|  name   | url  | image | description |
|  ----  | ----  | ---- | ---- |
| 名称  | 链接 | 图片URL | 描述 |
```json
{
    "msg": "申请成功！",
    "time": "1642516682.7982264",
    "status": true
}
```
### pub/last **已移除于1.6.2**
获取博主最后在线时间 **已移除请使用/pub/status/**
```json
{
    "msg": "1645543096",
    "status": true
}
```
### pub/get_custom
获取自定义的字段 **无需鉴权**
|  key  |
|  ----  |
| 字段名  |
```json
{
    "data": "xxxx",
    "status": true
}
```
### pub/get_notifications
获取消息
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
        },

    ],
    "status": true
}

```
### pub/status
获取博客基本信息 **无需鉴权**
```json
{
    "data": {
        "posts": "68",
        "last": "1648050031"
    },
    "status": true
}
```
# 错误示例
错误返回在大多数情况相同
```json
{
    "msg": "Error Message", 
    "status": false
}
```