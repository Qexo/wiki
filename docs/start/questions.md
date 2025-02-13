# 常见问题
## 什么是 API 密钥
在您完成初始化之后可在设置界面修改/创建 API 密钥, 用于 Webhook 中的身份验证。若留空系统会随机生成一个 API 密钥
## 为什么我新建的文章没有显示 | Qexo 如何保证文件最新
Qexo 为了加快访问速度引进了缓存机制, 你可以在设置清除缓存 & 设置 Webhook自动清除缓存
## Webhook 是什么
Qexo 中的 Webhook 指 /api/webhook 用于自动化操作, 目前可用于自动清除缓存
## 安装后出现 504 Time out
1. 您的数据库没有正确配置或没有允许所有 IP 白名单访问, 可在 MongoDB 控制台进行修改, 修改完成后**一定要重新部署**
2. 删除并重建数据库, 注意区域**一定要选择 AWS / N. Virginia (us-east-1)**
## 安装/更新后出现 5xx 错误
Qexo 每个 Release 都经过 Dev 分支的测试, 一般情况下不会出现较大问题, 如果你遇到了500等错误, 请尝试以下步骤
1. 检查数据库配置
2. 清除浏览器缓存 / 程序缓存
3. 在 `/settings.html` 页面检查 博客程序 服务商配置并点击保存
4. 在 `/advanced.html` 中点击“修复”按钮
5. 若无法登录请使用API: `/pub/fix?token=(Your API Key)`
6. 保留数据库配置的环境变量并重新部署
7. 重新部署整个程序
8. 尝试 Dev 分支
## AssertionError("xxx object ... its id attribute is set to None.")
请检查你是否曾使用过0.01或0.1版本, 这两个版本有严重问题, 请重新创建数据库并部署
## 如何创建子目录下的文章
在文章名一栏填写 dir/filename 例如您希望创建 source/_posts/about/me.md 则需要输入 about/me
## KeyError: 'XXX'
表示并没有获取到 "XXX" 这个环境变量, 请根据表格添加后 Redeploy
| 名称 | 意义 | 示例 |
| --- | --- | --- |
| DOMAINS | 你所允许通信的安全域名 注意双引号而且是英文半角 | [".vercel.app", "127.0.0.1", ".yoursite.com"] |
| MONGODB_HOST | MongoDB 数据库连接地址 | mongodb+srv://cluster0.xxxx.mongodb.net |
| MONGODB_PORT | MongoDB 数据库通信端口 默认应填写 27017 | 27017 |
| MONGODB_USER | MongoDB 数据库用户名 | abudu |
| MONGODB_DB | MongoDB 数据库名 | Cluster0 |
| MONGODB_PASS | MongoDB 数据库密码 | JWo0xxxxxxxx |
## Github 配置校验错误
如果配置中遇到问题, 可以访问 [HPP校验助手](https://hexoplusplus.cronfly.workers.dev/?step=start) 自检配置, 若确认无误, 可检查仓库内是否有已经发布的文章

注意：Github 仓库一定为您 博客源码 **自动化部署**所在的仓库
## Vercel 用量问题
Vercel 的无服务器函数用量对于 Qexo 来说是充裕的, 但这依然抵挡不住有心之人的攻击行为, 所以要保护好自己后台地址, 不过好在 Vercel 不会随意扣费, 所以在资源用完之后并不会产生费用, 若依然不放心可以考虑部署在自己的服务器上 [#服务器部署#](https://github.com/am-abudu/Qexo/wiki/%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%83%A8%E7%BD%B2)
## 在线更新失败了
检查高级设置中的 VERCEL_TOKEN 和 PROJECT_ID 是否正确为 Qexo 的部署项目
## 我的 CDN 出现问题
如果你使用的是 `.top` 域名, 请你不要尝试使用 CNPM 作为 CDN 源, 这会产生致命问题。如果悲剧已经发生, 请使用命令行恢复:
```shell
python manage.py shell
```
然后运行Python脚本即可
```python
from hexoweb.functions import get_setting, save_setting
save_setting('CDN_PREV', "https://unpkg.com/qexo-static@{version}/qexo")
```
## 忘记管理员密码
如果你很不幸忘记了自己的管理员密码, 修改密码可以直接使用自带的命令行
```shell
python manage.py changepassword [user_name]
```
## 其他问题
如果还有问题, 可以发 [issue](https://github.com/am-abudu/Qexo/issues) 或加入 [HexoPlusPlus交流群](https://jq.qq.com/?_wv=1027&k=rAcnhzqK) 询问

如果你无法通过链接添加 QQ 群, 请使用群号`467731779`