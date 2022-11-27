# 自定字段
您可以在"自定义字段"页面新增字段, 并通过 API 调用, 你甚至可以在自定义字段中执行 Python 代码
## API 调用
```python
url = "https://yoursite.com/pub/get_custom/"
data = {"key":"xxx"}
```
```json
{
    "data": "xxx",
    "status": true
}
```
支持 POST/GET 调用