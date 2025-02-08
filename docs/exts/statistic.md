# 访客统计
你可以轻松地使用 **访客统计API** 进行类似 不算子 的博客访问量统计

相关配置项请见 [统计配置](/configs/statistic)
## 引入
这是一个示例的 HTML 引入界面
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    站点访问量 <span id="qexo-site-pv">Loading...</span>
    站点访客数 <span id="qexo-site-uv">Loading...</span>
    页面访问量 <span id="qexo-page-pv">Loading...</span>
    <script src="https://registry.npmmirror.com/qexo-static/1.6.0/files/hexo/statistic.js"></script>
    <script>
        loadStatistic("https://qexo.yoursite.com")
    </script>
</body>
</html>
```