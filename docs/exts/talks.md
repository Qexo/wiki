# 接入说说
从2.1.0版本开始，Qexo对说说进行了支持，你可以参考这个教程为你的博客快速接入说说
![](https://pic.hipyt.cn/pic/2023/01/03/172d2b1c5e0d5.png)
## 添加说说
1. 在 Qexo 侧边栏找到 **说说** 点击进入
2. 点击右上角 **新增说说** 输入信息
3. 点击 **发布** 按键或使用快捷键保存说说数据
## 接入博客
1. 在根目录打开命令行 输入命令**创建页面**
```shell
hexo new page talks
```
2. 打开 **source/talks/index.md** 修改页面配置
3. 在页面内引入 Qexo-Talks 将其中的 **${SITE}** 改为你的 Qexo 链接 例如 https://admin.mysite.com
```html
<script src="https://cdn.jsdelivr.net/npm/qexo-static@1.5.1/hexo/talks.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/qexo-static@1.5.1/hexo/talks.min.css">
<div id="qexot"></div>
<script>showQexoTalks("qexot", "${SITE}", 5)</script>
```
Tips: 第三个参数为每页的说说数量，可结合实际进行修改

4. 将博客推送至你的 Github 仓库
## (可选)个性化
默认的样式比较简陋，你可以参考以下的教程进行美华
1. 下载 [CSS文件](https://cdn.jsdelivr.net/npm/qexo-static@1.5.1/hexo/talks.css)
2. 编辑样式并引入博客 :)
3. 如果你需要使用代码高亮请自行引入

或者，你可以使用现有的美化方案
1. https://uyoahz.cn/2022111530055/

如果你希望你的方案出现在这里，可以发起 [Discussion](https://github.com/Qexo/Qexo/discussions) 来告诉我
