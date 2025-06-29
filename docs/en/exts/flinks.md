---
article: ''
date: ''
title: ''
updated: '2024-07-19T22:38:40.315+08:00'
---
# Adding Friend Links

This tutorial will guide you through integrating a friend link system into your blog using Qexo in just a few minutes.

![](https://s2.loli.net/2024/07/19/NKhuBMOeTqlHYc7.png)

## Prerequisites

1. The friend link feature requires Qexo >= 1.5.0 and the user’s browser must support file uploads.
2. Before using this tutorial, you need to disable the friend link system provided by your theme if it has one.

## Adding Friend Links

1. In the Qexo sidebar, find **Friend Links** and click to enter.
2. Click the **Add Friend Link** button in the top right corner. Enter the site name, link, and other data. Ensure that both the link and image link include the `http` protocol.
3. Click **Confirm** to save the friend link data.

## Integrating into Your Blog

1. Open a command line in your root directory and enter the command to **create a page**:

    ```shell
    hexo new page links
    ```

2. Open **source/links/index.md** and modify the page configuration.
3. Include Qexo-Friends in the page, replacing **${SITE}** with your Qexo link, e.g., **https://admin.mysite.com**:

    ```html
    <div id="qexo-friends"></div>
    <link rel="stylesheet" href="https://unpkg.com/qexo-friends/friends.css"/>
    <script src="https://cdn.jsdelivr.net/npm/qexo-static@1.6.0/hexo/friends.js"></script>
    <script>loadQexoFriends("qexo-friends", "${SITE}")</script>
    ```

4. Push the blog to your GitHub repository.

## Theme Adaptation

I and other developers have provided additional adaptations for some themes. If you are using one of these themes, you can try the following configurations:

### Volantis

Author: Fgaoxing

Sidebar:

```html
<ul class="list entry navigation" id="list entry navigation"></ul>
<link rel="stylesheet" href="https://unpkg.com/qexo-friends/friends.css"/>
<script src="https://unpkg.com/qexo-friends/volantis/side-friends.js"></script>
<script>loadQexoFriends("list entry navigation", "URL")</script>
```

Due to sidebar issues, Pjax needs to configure the reload function manually. Also, set:

```md
---
layout: friends # Required
title: My Friends # Optional, title of the friend link page
---
```

Page:

```html
<div class="friends-group"><div id="friend-content" class="friend-content"></div></div>
<link rel="stylesheet" href="https://unpkg.com/qexo-friends/friends.css"/>
<script src="https://unpkg.com/qexo-friends/volantis/friends.js"></script>
<script>loadQexoFriends("friend-content", "URL")</script>
```

### Icarus

Author: Abudu

Sidebar: Requires theme modification. Refer to [Abudu's Blog](https://oplog.cn/archives/8962.html#%E6%B7%BB%E5%8A%A0-Qexo-%E5%8F%8B%E9%93%BE%E4%BE%A7%E8%BE%B9%E6%A0%8F)

Page:

```html
<div id="qexo-friends"></div>
<link rel="stylesheet" href="https://unpkg.com/qexo-friends/friends.css"/>
<script src="https://unpkg.com/qexo-friends/Icarus/friends.js"></script>
<script>loadQexoFriends("qexo-friends", "URL")</script>
```

### Tuhome

Author: Fgaoxing

Page:

```html
<div id="friends"></div>
<link rel="stylesheet" href="https://unpkg.com/qexo-friends/friends.css">
<script src="https://unpkg.com/qexo-friends/tuhome/friends.js"></script>
<script>loadQexoFriends("friends", "URL")</script>
```

### Yun

Author: Fgaoxing

Page:

```html
<div id="links"></div>
<link rel="stylesheet" href="https://unpkg.com/qexo-friends/friends.css">
<script src="https://unpkg.com/qexo-friends/yun/friends.js"></script>
<script>loadQexoFriends("links", "URL", "ThemeColor (with #)")</script>
```

### Stellar

Author: Fgaoxing

Page:

```html
<div id="friend-content" class="friend-content"></div>
<link rel="stylesheet" href="https://unpkg.com/qexo-friends/friends.css"/>
<script src="https://unpkg.com/qexo-friends/Stellar/friends.js"></script>
<script>loadQexoFriends("friend-content", "URL")</script>
```

### Jian

……

## Friend Link Application Theme Adaptation

### Default

Author: Fgaoxing

```html
<div id="friends-api"></div>
<script src="https://unpkg.com/qexo-friends/friends-api.js"></script>
<script>qexo_friend_api("friends-api", "QexoDomain", "CaptchaSecret (if any)");</script>
```

### Icarus

Author: Abudu

Friend link application page: [Application Page HTML](https://unpkg.com/browse/qexo-friends/Icarus/friend-api.html)

### Jian

……

### Butterfly

> - Edited by [Apursuer](https://iam.apursuer.com/link), check out my site for the effect.
> - Ensure you have Qexo configured and operational.
> - Recommended to use the latest version of Qexo, tested with version 2.8.1.
> - Configure some links in Qexo => Friend Links before starting.

#### Steps

1. Ensure you have configured the Butterfly link page. If not, create it with `hexo new page links`. To retain the Butterfly style, keep the `index.md` file with `type: "link"` and adjust `comments: false` as needed.
2. The author used the [Bulma framework](https://bulma.io/), so CSS might be tricky. The style is like this [without CSS](https://gitcode.net/m0_55338218/apursuer-pics/-/raw/master/pictures/2023/05/13_20_27_45_202305132027788.png) and [with CSS](https://iam.apursuer.com/link).![](https://gitcode.net/m0_55338218/apursuer-pics/-/raw/master/pictures/2023/05/13_20_53_52_202305132053778.png)
3. You can modify CSS styles and HTML code according to your needs.
4. To enable the friend link application, go to Qexo => Settings => API Configuration => Enable Friend Link Application API => Yes. Configure reCaptcha if needed.

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
                        <i class="fas

 fa-info"></i>
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
<script src="https://recaptcha.net/recaptcha/api.js?render=YourRecaptchaSiteKey"></script>
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
          grecaptcha.execute('YourRecaptchaSiteKey', {action: 'submit'}).then(function(token) {
              $.ajax({
                type: 'get',
                cache: false,
                url: url,
                dataType: "jsonp",
                async: false,
                processData: false,
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
                        url: 'https://your-qexo-address/pub/ask_friend/',
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