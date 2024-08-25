# Visitor Statistics

You can easily use the **Visitor Statistics API** to track blog visit counts similar to those of **Bukanzi**.

For related configuration options, see [Statistics Configuration](/configs/statistic).

## Introduction

This is an example HTML integration interface.
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
    Site Visits: <span id="qexo-site-pv">Loading...</span>
    Site Visitors: <span id="qexo-site-uv">Loading...</span>
    Page Views: <span id="qexo-page-pv">Loading...</span>
    <script src="https://cdn.jsdelivr.net/npm/qexo-static@1.6.0/hexo/statistic.js"></script>
    <script>
        loadStatistic("https://qexo.yoursite.com")
    </script>
</body>
</html>
```