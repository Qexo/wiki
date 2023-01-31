# 服务商设置
Qexo 在 2.0 版本支持了服务商拓展
|  | Github | Gitlab | 本地 |
| --- | --- | --- | --- |
| 获取文件 | √ | 无Size数据 | √ |
| 获取目录 | √ | √ | √ |
| 保存文件 | √ | √ | √ |
| 删除文件 | √ | √ | √ |
| Webhook | 自动 | 手动 | × |
| 自动部署 | Action | Action | 命令行 |
# 博客程序设置
Qexo 在2.6版本开始支持多博客程序(截止2.6已支持Hexo、Hugo和Valaxy)
## 使用 Github
如果部署中遇到问题，可以访问 [HPP校验助手](https://hexoplusplus.cronfly.workers.dev/?step=start) 自检配置 *仅支持Github*，若确认无误，可检查仓库内是否有已经发布的文章
### Github 仓库
您 博客源码 **自动化部署**所在的仓库
```
username/repo
```
参考文献: 

https://blog.cyfan.top/p/e626cb30.html

https://www.oplog.cn/archives/24998.html

https://crazywong.com/posts/74006f42
### 项目分支
您 博客源码 自动化部署所在仓库的分支
```
master
```
### Github 密钥
于 [Github 设置](https://github.com/settings/tokens) 生成的 Token (建议使用 Classical)
需要 Repo 下的至少读取和写入权限 *不建议给出所有权限*
```
wrq_P8sYPlYA9fjMlOPEYSKA84xxxxxxxxxxxxxx
```
### 仓库路径
您 博客源码 自动化部署所在仓库的路径 若为根目录请留空
```
path/
```
## 使用 Gitlab
### Gitlab 仓库
您 博客源码 **自动化部署**所在的仓库
```
username/repo
```
参考文献: 

https://blog.cyfan.top/p/e626cb30.html

https://www.oplog.cn/archives/24998.html

https://crazywong.com/posts/74006f42
### 项目分支
您 博客源码 自动化部署所在仓库的分支
```
master
```
### Gitlab 密钥
于 [Gitlab 设置](https://gitlab.com/-/profile/personal_access_tokens) 生成的 Token 
需要 Repo 下的至少读取和写入权限 *不建议给出所有权限*
```
wrq_P8sYPlYA9fjMlOPEYSKA84xxxxxxxxxxxxxx
```
### 仓库路径
您 博客源码 自动化部署所在仓库的路径 若为根目录请留空
```
path/
```
## 使用本地
### 博客 路径
您 博客源码 所在本地的 *绝对路径*
```
D:\Hexo
```
```
/www/myblog
```
### 自动部署
自动部署命令，将在每次源码修改后执行，若留空则默认不执行
```
hexo clean && hexo g && hexo d
```
```
hugo
```
