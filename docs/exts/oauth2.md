# OAuth2/OIDC 登录

这个教程将帮助你在几分钟内为 Qexo 接入 OAuth2/OIDC 登录功能

## 须知

1. Auth2/OIDC 功能要求 Qexo >= 4.0.0，且使用现代浏览器
2. 在使用这个教程前，你需要准备好身份提供方的接入信息

## 添加身份提供方

请复制如下配置模板到您本地的文本编辑器，参照具体的提供商类型进行配置

```json
{
  "oidc_provider": {
    "type": "oidc",
    "info": {
      "server_metadata_url": "https://example.com/.well-known/openid-configuration",
      "client_id": "YOUR_CLIENT_ID",
      "client_secret": "YOUR_CLIENT_SECRET",
      "client_kwargs": {
        "scope": "openid profile"
      }
    },
    "friendly_name": "Display Name",
    "icon": "https://example.com/icon.png"
  },
  "github": {
    "type": "github",
    "info": {
      "client_id": "YOUR_CLIENT_ID",
      "client_secret": "YOUR_CLIENT_SECRET",
      "client_kwargs": {
        "scope": ""
      }
    },
    "friendly_name": "GitHub",
    "icon": "https://example.com/github-icon.png"
  }
}
```

该模板提供了两个不同类型的提供商示例

### 支持 OIDC 规范的提供商，如Google, Authentik

1. 将`oidc_provider`更名为您自己的提供商名称，这个名称不会显示在页面上，它应该是简短的英文单词
   <h4>请注意，在配置文件中，提供商名称（即`oidc_provider`这个位置的内容）必须是唯一的</h4>
2. 根据您的提供商配置，修改`server_metadata_url` `client_id` `client_secret`
3. 修改`friendly_name`和`icon`，这将决定在前端如何显示提供商
4. 如您不需要，删除配置文件中不需要的`github`字段
5. 在您的提供商处，设置回调 URL 为 `https://<您的Qexo地址>/api/oauth/callback/<您第一步设置的提供商名称>`

<h4> 关于OpenID Scopes: </h4>

Qexo 只需要 openid 与 profile 两个 scopes,您可以添加其他的scope，但在默认情况下不起作用

### 不支持 OIDC 规范的提供商，如 GitHub

<h4> 对于不支持 OIDC 规范的提供商，Qexo 目前只支持 GitHub，如您有需要可以自行修改代码</h4>

1. 从 GitHub 处获得 `client_id` `client_secret` 填入配置文件
2. 将 icon 配置为一个指向 GitHub 微标的 URL
3. 将 GitHub OAuth App 的回调 URL 设置为`https://<您的Qexo地址>/api/oauth/callback/github`
4. 如您不需要，删除配置文件中的`oidc_provider`字段

## 应用您的配置文件

在环境变量编辑中，新建一个名为`OAUTH_PROVIDERS`的环境变量，将刚刚的配置文件全文作为环境变量的值

### 可选：启用 仅SSO 登录功能

<h4> 注意：开启本功能后，Qexo 默认的用户名+密码登录与通行密钥登录都会被禁用，仅允许使用第三方登录 </h4>

安全起见，仅 SSO 登录功能有以下限制

1. 未配置任何的身份提供商时，仅 SSO 登录功能不会生效
2. 已配置提供商，但未在设置中将其链接到您的 Qexo 本地用户时，仅 SSO 登录功能不会生效
3. 当仅 SSO 登录功能开启时，不允许用户解绑最后一个第三方身份

如您确定使用仅 SSO 登录功能，请设置环境变量`SSO_ONLY=1`  
您可以放心在初次部署时启用该功能，Qexo 不会在未进行身份绑定时关闭密码/密钥登录功能

## 链接您的第三方账户

1. 同往常一样登录 Qexo
2. 单击右上角的设置按钮
3. 点击 管理第三方账号绑定 按钮
4. 在此绑定您的第三方身份

至此，Qexo 的 OAuth/OIDC登录功能配置结束

------
### 贡献与扩展 
如果你需要接入除 GitHub 以外的其他非标准 OAuth2 提供商，可以参考 `hexoweb.libs.oauth.OAuthProvider` 及其子类下的实现。