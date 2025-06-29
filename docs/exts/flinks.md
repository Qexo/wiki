---
article: ''
date: ''
title: ''
updated: '2024-07-19T22:38:40.315+08:00'
---
# 友情链接

这个教程将帮助你在几分钟内利用 Qexo 为博客接入友链系统
![](https://s2.loli.net/2024/07/19/NKhuBMOeTqlHYc7.png)

## 须知

1. 友链功能要求 Qexo >= 1.5.0 且用户浏览器必须支持文件上传
2. 在使用这个教程前, 你需要先关闭主题自带的有页面的友链系统

## 添加友链

1. 在 Qexo 侧边栏找到 **友链** 点击进入
2. 点击右上角 **新增友链** 输入站点名称、链接等数据 其中链接及图片链接**必须包含http协议头**
3. 点击 **确定** 按键保存友链数据

## 接入博客

1. 在根目录打开命令行 输入命令**创建页面**

```shell
hexo new page links
```

2. 打开 **source/links/index.md** 修改页面配置
3. 在页面内引入 Qexo-Friends 将其中的 **${SITE}** 改为你的 Qexo 链接 例如 **https://admin.mysite.com**

```html
<div id="qexo-friends"></div>
<link rel="stylesheet" href="https://unpkg.com/qexo-friends/friends.css"/>
<script src="https://registry.npmmirror.com/qexo-static/1.6.0/files/hexo/friends.js"></script>
<script>loadQexoFriends("qexo-friends", "${SITE}")</script>
```

4. 将博客推送至你的 Github 仓库

## 主题适配

我和其他开发者为部分主题提供了进一步的适配, 如果你使用的是相同主题, 可以尝试配置

### Volantis

作者：Fgaoxing

侧边栏:

```HTML
<ul class="list entry navigation" id="list entry navigation"></ul>
<link rel="stylesheet" href="https://unpkg.com/qexo-friends/friends.css"/>
<script src="https://unpkg.com/qexo-friends/volantis/side-friends.js"></script>
<script>loadQexoFriends("list entry navigation", "网址")</script>
```

由于侧边栏原因，Pjax需要自行配置重载函数

且需设置

```md
---
layout: friends # 必须
title: 我的朋友们 # 可选，这是友链页的标题
---
```

页面:

```HTML
<div class="friends-group"><div id="friend-content" class="friend-content"></div></div>
<link rel="stylesheet" href="https://unpkg.com/qexo-friends/friends.css"/>
<script src="https://unpkg.com/qexo-friends/volantis/friends.js"></script>
<script>loadQexoFriends("friend-content", "网址")</script>
```

### Icarus

作者：Abudu

侧边栏: 需要修改主题，请参考 [Abudu的博客](https://oplog.cn/archives/8962.html#%E6%B7%BB%E5%8A%A0-Qexo-%E5%8F%8B%E9%93%BE%E4%BE%A7%E8%BE%B9%E6%A0%8F)

页面：

```HTML
<div id="qexo-friends"></div>
<link rel="stylesheet" href="https://unpkg.com/qexo-friends/friends.css"/>
<script src="https://unpkg.com/qexo-friends/Icarus/friends.js"></script>
<script>loadQexoFriends("qexo-friends", "网址")</script>
```

### Tuhome

作者：Fgaoxing

页面:

```HTML
<div id="friends"></div>
<link rel="stylesheet" href="https://unpkg.com/qexo-friends/friends.css">
<script src="https://unpkg.com/qexo-friends/tuhome/friends.js"></script>
<script>loadQexoFriends("friends", "网址")</script>
```

### Yun

作者：Fgaoxing

页面：

```HTML
<div id="links"></div>
<link rel="stylesheet" href="https://unpkg.com/qexo-friends/friends.css">
<script src="https://unpkg.com/qexo-friends/yun/friends.js"></script>
<script>loadQexoFriends("links", "网址", "主题色（带#）")</script>
```

### Stellar

作者：Fgaoxing

页面：

```HTML
<div id="friend-content" class="friend-content"></div>
<link rel="stylesheet" href="https://unpkg.com/qexo-friends/friends.css"/>
<script src="https://unpkg.com/qexo-friends/Stellar/friends.js"></script>
<script>loadQexoFriends("friend-content", "网址")</script>
```

### Jian

……

## 友链申请主题适配

### 默认

作者：Fgaoxing

```html
<div id="friends-api"></div>
<script src="https://unpkg.com/qexo-friends/friends-api.js"></script>
<script>qexo_friend_api("friends-api","Qexo域名","人机验证秘钥，没有的不填");</script>
```

### Icarus

作者：Abudu

友链申请页面:[友链页面HTML](https://unpkg.com/browse/qexo-friends/Icarus/friend-api.html)

### Jian

……

### Butterfly

> - Edited by [Apursuer](https://iam.apursuer.com/link), 可以进到我的站点康康效果
> - 前提是你已经配置好了qexo，并且可以正常投入使用
> - 建议使用最新版本qexo，本人使用2.8.1版本测试无误
> - 先在qexo=>友链 页面配置几条链接，然后再开始动手操作

#### 步骤

1. 前提你已经配置好了butterfly的link页面，如果没有你可以先`hexo new page links`, 如果还想保留butterfly原样式你可保留link页面`index.md`=>font-matter中的`type: "link"`, 根据个人情况开启`comments: false`
2. 作者使用了，[Bulma框架](https://bulma.io/)所以css有点不太好搞，如果你使用不加css的友链申请感觉还是有些不美观的，样式大概就像这样![](https://gitcode.net/m0_55338218/apursuer-pics/-/raw/master/pictures/2023/05/13_20_27_45_202305132027788.png)使用了css后是这样的[样式](https://iam.apursuer.com/link).![](https://gitcode.net/m0_55338218/apursuer-pics/-/raw/master/pictures/2023/05/13_20_53_52_202305132053778.png)
3. 有能力的可以自己修改一下css样式和HTML代码，个人的css样式是仿作者的友链界面~~抄的~~写的，respect
4. 想要让友链申请生效，请先打开qexo=>设置=>API配置=>启用友链申请API=>是，如果使用reCaptcha可以自己配置一下，也相对来说比较简单
5. 话不多说，上代码，个人网站是英文网站所以是英文（英文用Ctrl+F替换一下就行），可以根据自己的需求修改代码

```html
# Friend's links

<div id="qexo-friends"></div>
<link rel="stylesheet" href="https://unpkg.com/qexo-static@1.6.0/hexo/friends.css"/>

<script src="https://unpkg.com/qexo-static@1.6.0/hexo/friends.js"></script>
<script>loadQexoFriends("qexo-friends", "https://qexo.apursuer.com")</script>

# Apply for Apursuer's friend chain
<link rel="stylesheet" href="https://unpkg.com/apursuer-qexo-friend-links@1.0.2/apursuer-hexo-friend-links.css"/>

<article class="message is-info">
    <div class="message-header">
        Apply for friend chain
    </div>
    <div class="message-body">
        <div class="form-ask-friend">
            <div class="field">
                <label class="label">Name</label>
                <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="Your site name" id="friend-name" required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-signature"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <label class="label">Link</label>
            <div class="control has-icons-left">
                <input class="input" type="url" placeholder="A link to your site's homepage" id="friend-link" required>
                <span class="icon is-small is-left">
                    <i class="fas fa-link"></i>
                </span>
            </div>
            <p class="help ">Please make sure the site is accessible!</p>
            </div>
            <div class="field">
                <label class="label">Icon</label>
                <div class="control has-icons-left">
                    <input class="input" type="url" placeholder="Your website icon (as round as possible)" id="friend-icon" required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-image"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <label class="label">Description</label>
                <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="Please describe your site in one sentence." id="friend-des" required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-info"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <label class="checkbox">
                        <input type="checkbox" id="friend-check"/> I am not submitting nonsense information.
                    </label>
                </div>
            </div>
            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-info" type="submit" onclick="askFriend(event)">Apply</button>
                </div>
            </div>
        </div>
    </div>
</article>
<script src="https://recaptcha.net/recaptcha/api.js?render=你的recaptcha网页秘钥"></script>
<script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
<script>
function TestUrl(url) {
    var Expression=/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
    var objExp=new RegExp(Expression);
    if(objExp.test(url) != true){
        return false;
    }
    return true;
}
function askFriend (event) {
    let check = $("#friend-check").is(":checked");
    let name = $("#friend-name").val();
    let url = $("#friend-link").val();
    let image = $("#friend-icon").val();
    let des = $("#friend-des").val();
    if(!check){
        alert("Please check \"I am not submitting nonsense information\"");
        return;
    }
    if(!(name&&url&&image&&des)){
        alert("The information is incomplete! ");
        return;
    }
    if (!(TestUrl(url))){
        alert("URL format error! Need to include HTTP protocol header! ");
        return;
    }
    if (!(TestUrl(image))){
        alert("The format of the slice URL is wrong! It needs to contain the HTTP protocol header! ");
        return;
    }
    event.target.classList.add('is-loading');
    grecaptcha.ready(function() {
          grecaptcha.execute('你的recaptcha网页秘钥', {action: 'submit'}).then(function(token) {
              $.ajax({
                type: 'get',
                cache: false,
                url: url,
                dataType: "jsonp",
                async: false,
                processData: false,
                //timeout:10000, 
                complete: function (data) {
                    if(data.status==200){
                    $.ajax({
                        type: 'POST',
                        dataType: "json",
                        data: {
                            "name": name,
                            "url": url,
                            "image": image,
                            "description": des,
                            "verify": token,
                        },
                        url: 'https://你的qexo地址/pub/ask_friend/',
                        success: function (data) {
                            alert(data.msg);
                        }
                    });}
                    else{
                        alert("The URL cannot be reached!");
                    }
                    event.target.classList.remove('is-loading');
                }
          });
        });
    });
}
</script>

```
