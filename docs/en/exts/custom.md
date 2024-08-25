# Custom Fields

You can add fields on the "Custom Fields" page and use API calls to manage them. You can even execute Python code within custom fields.

## API Calls

To interact with custom fields, you can use the following API calls:

### Example in Python

```python
url = "https://yoursite.com/pub/get_custom/"
data = {"key":"xxx"}
response = requests.get(url, params=data)
result = response.json()

print(result)
```

### Example Response

```json
{
    "data": "xxx",
    "status": true
}
```

### Supported Methods

- **GET**: Retrieve data from custom fields.
- **POST**: Send data to custom fields.

Make sure to replace `"https://yoursite.com/pub/get_custom/"` with the actual URL of your custom fields API endpoint and adjust `"key":"xxx"` as needed.