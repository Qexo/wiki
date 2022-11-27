# 友情链接 
这个教程将帮助你在几分钟内利用 Qexo 为博客接入友链系统
![](https://user-images.githubusercontent.com/51912589/150155767-61199848-75a0-4f86-bb8f-2916864469ef.png)
## 须知
友链功能要求 Qexo >= 1.5.0 且用户浏览器必须支持文件上传
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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/qexo-static@1.1.3/hexo/friends/friends.css"/>
<script src="https://cdn.jsdelivr.net/npm/qexo-static@1.1.3/hexo/friends/friends.js"></script>
<script>loadQexoFriends("qexo-friends", "${SITE}")</script>
```
4. 将博客推送至你的 Github 仓库
## 主题适配
我和其他开发者为部分主题提供了进一步的适配，如果你使用的是相同主题，可以尝试配置
### Volantis
侧边栏: 
```html
<ul class="list entry navigation" id="list entry navigation"></ul>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/qexo-static@1.0.7/hexo/friends/friends.css"/>
<script src="https://cdn.jsdelivr.net/gh/Fgaoxing/blog-cdn@main/source/js/side-friends.js"></script>
<script>loadQexoFriends("list entry navigation", "网址")</script>
```
由于侧边栏原因，Pjax需要自行配置重载函数
页面: 
```html
<div class="friends-group"><div id="friend-content" class="friend-content"></div></div>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/qexo-static@1.0.7/hexo/friends/friends.css"/>
<script src="https://cdn.jsdelivr.net/gh/Fgaoxing/blog-cdn@main/source/js/friends.js"></script>
<script>loadQexoFriends("friend-content", "网址")</script>
```
### Icarus
侧边栏: 需要修改主题，请参考 [我的博客](https://github.com/am-abudu/hexo_source_code/commit/e0b61ec0fda90fdda949817a394e57f90050ef1a)

友链申请页面:
```html
<article class="message is-info">
    <div class="message-header">
        申请友链
    </div>
    <div class="message-body">
        <div class="form-ask-friend">
            <div class="field">
                <label class="label">名称</label>
                <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="您的站点名" id="friend-name" required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-signature"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <label class="label">链接</label>
            <div class="control has-icons-left">
                <input class="input" type="url" placeholder="您网站首页的链接" id="friend-link" required>
                <span class="icon is-small is-left">
                    <i class="fas fa-link"></i>
                </span>
            </div>
            <p class="help ">请确保站点可访问！</p>
            </div>
            <div class="field">
                <label class="label">图标</label>
                <div class="control has-icons-left">
                    <input class="input" type="url" placeholder="您的网站图标(尽量为正圆形)" id="friend-icon" required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-image"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <label class="label">描述</label>
                <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="请用一句话介绍您的站点" id="friend-des" required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-info"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <label class="checkbox">
                        <input type="checkbox" id="friend-check"/> 我提交的不是无意义信息
                    </label>
                </div>
            </div>
            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-info" type="submit" onclick="askFriend(event)">申请友链</button>
                </div>
            </div>
        </div>
    </div>
</article>
<script src="https://recaptcha.net/recaptcha/api.js?render=reCaptcha密钥"></script>
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
        alert("请勾选\"我提交的不是无意义信息\"");
        return;
    }
    if(!(name&&url&&image&&des)){
        alert("信息填写不完整! ");
        return;
    }
    if (!(TestUrl(url))){
        alert("URL格式错误! 需要包含HTTP协议头! ");
        return;
    }
    if (!(TestUrl(image))){
        alert("图片URL格式错误! 需要包含HTTP协议头! ");
        return;
    }
    event.target.classList.add('is-loading');
    grecaptcha.ready(function() {
          grecaptcha.execute('reCaptcha密钥', {action: 'submit'}).then(function(token) {
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
                        url: 'https://QEXO域名/pub/ask_friend/',
                        success: function (data) {
                            alert(data.msg);
                        }
                    });}
                    else{
                        alert("URL无法连通!");
                    }
                    event.target.classList.remove('is-loading');
                }
          });
        });
    });
}
</script>
```
### Tutu
页面: 
```html
<div id="friends"></div>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/qexo-static@1.0.7/hexo/friends/friends.css">
<script src="https://cdn.jsdelivr.net/gh/Fgaoxing/blog-cdn@main/source/js/tulinks.js"></script>
<script>loadQexoFriends("friends", "网址")</script>
```
### Yun
```html
<div id="friends-api"></div>
<script src="https://cdn.jsdelivr.net/gh/Fgaoxing/blog-cdn@main/source/js/friends-api.js"></script>
<script>qexo_friend_api("friends-api","Qexo域名");</script>
```
## 友链申请
由 @Fgaoxing 适配的友链申请 API
```html
<div id="friends-api"></div>
<script src="https://cdn.jsdelivr.net/gh/Fgaoxing/blog-cdn@main/source/js/friends-api.js"></script>
<script>qexo_friend_api("friends-api","Qexo域名");</script>
```