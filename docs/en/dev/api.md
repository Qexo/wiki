# Public API

Qexo Public API provides a RESTful HTTP interface for blog content management, friend links management, talks management, statistics, and more.

**Base URL**: `https://your-qexo-domain.com/pub/`


## 🔐 Authentication

### Get API Token

1. Login to Qexo Admin Panel
2. Navigate to **Settings > API Configuration**
3. Generate or view your API Key

### Using Token

Pass the token in authenticated endpoints via:

- **GET requests**: `?token=your_api_token`
- **POST requests**: Form parameter `token=your_api_token`

### Authentication Status

| Icon | Description |
|------|-------------|
| 🔒 | Requires Token Authentication |
| 🌐 | Public Access, No Authentication Required |
| 🤖 | Requires reCAPTCHA Verification |

---

## 📑 API Categories

- [Content Management API](#content-management-api)
- [Friend Links Management API](#friend-links-management-api)
- [Talks Management API](#talks-management-api)
- [Custom Fields API](#custom-fields-api)
- [Notification and Statistics API](#notification-and-statistics-api)

---

## 🗂️ Content Management API

### 1. Save File Content 🔒

**Endpoint**: `POST /pub/save`

**Description**: Save or update file content to Git Provider

**Request Parameters**:
```json
{
  "token": "your_api_token",
  "file": "source/_posts/my-article.md",
  "content": "# Article Title\n\nArticle content...",
  "commitchange": "Update article" // Optional
}
```

**Response Example**:
```json
{
  "msg": "Saved successfully!",
  "status": true
}
```

**curl Example**:
```bash
curl -X POST https://your-domain.com/pub/save \
  -d "token=your_token" \
  -d "file=source/_posts/test.md" \
  -d "content=Hello World"
```

---

### 2. Delete File 🔒

**Endpoint**: `POST /pub/delete`

**Description**: Delete specified file from Provider

**Request Parameters**:
```json
{
  "token": "your_api_token",
  "file": "source/_posts/old-article.md",
  "commitchange": "Delete old article" // Optional
}
```

**Response Example**:
```json
{
  "msg": "Deleted successfully and deployed!",
  "status": true
}
```

---

### 3. Create Webhook 🔒

**Endpoint**: `POST /pub/create_webhook`

**Description**: Automatically configure Git Provider Webhook

**Request Parameters**:
```json
{
  "token": "your_api_token",
  "uri": "https://your-domain.com/api/webhook"
}
```

**Response Example**:
```json
{
  "msg": "Webhook created successfully!",
  "status": true,
  "token": "generated_webhook_token",
  "webhook_url": "https://your-domain.com/api/webhook?token=xxx"
}
```

---

### 4. Get Posts List 🔒

**Endpoint**: `GET /pub/get_posts`

**Description**: Get all posts list

**Request Parameters**:
- `token` (Required): API Token
- `s` (Optional): Search keyword

**Response Example**:
```json
{
  "status": true,
  "posts": [
    {
      "name": "My First Post",
      "path": "source/_posts/my-first-post.md",
      "fullname": "source/_posts/my-first-post.md",
      "size": 1024,
      "date": "2026-01-07 10:30:00"
    }
  ]
}
```

**curl Example**:
```bash
curl "https://your-domain.com/pub/get_posts?token=your_token&s=keyword"
```

---

### 5. Get Pages List 🔒

**Endpoint**: `GET /pub/get_pages`

**Description**: Get all standalone pages list

**Request Parameters**:
- `token` (Required): API Token  
- `s` (Optional): Search keyword

**Response Format**: Same as `get_posts`

---

### 6. Get Configs List 🔒

**Endpoint**: `GET /pub/get_configs`

**Description**: Get all configuration files list

**Request Parameters**:
- `token` (Required): API Token
- `s` (Optional): Search keyword

**Response Format**: Same as `get_posts`

---

### 7. Get Images List 🔒

**Endpoint**: `GET /pub/get_images`

**Description**: Get all uploaded images records

**Request Parameters**:
- `token` (Required): API Token
- `s` (Optional): Search keyword

**Response Example**:
```json
{
  "status": true,
  "images": [
    {
      "name": "avatar.png",
      "size": "125.6 KB",
      "url": "https://cdn.example.com/avatar.png",
      "date": "2026-01-07 10:30:00",
      "time": "1704599400"
    }
  ]
}
```

---

### 8. Auto Fix Configuration 🔒

**Endpoint**: `POST /pub/fix`

**Description**: Automatically detect and fix system configuration issues

**Request Parameters**:
```json
{
  "token": "your_api_token"
}
```

**Response Example**:
```json
{
  "msg": "Attempted to auto-fix 5 fields, please check and modify the configuration later",
  "status": true
}
```

---

## 👥 Friend Links Management API

### 9. Get Public Friend Links 🌐

**Endpoint**: `GET /pub/friends`

**Description**: Get all publicly displayed friend links (no authentication required)

**Request Parameters**: None

**Response Example**:
```json
{
  "data": [
    {
      "name": "Zhang San's Blog",
      "url": "https://zhangsan.com",
      "image": "https://zhangsan.com/avatar.jpg",
      "description": "A programmer who loves technology",
      "time": "1704599400"
    }
  ],
  "status": true
}
```

**curl Example**:
```bash
curl "https://your-domain.com/pub/friends"
```

**⚠️ Backward Compatible**: This endpoint maintains the original response format

---

### 10. Get All Friend Links 🔒

**Endpoint**: `GET /pub/get_friends`

**Description**: Get all friend links (including hidden ones, requires authentication)

**Request Parameters**:
- `token` (Required): API Token
- `s` (Optional): Search keyword

**Response Example**:
```json
{
  "data": [
    {
      "name": "Zhang San's Blog",
      "url": "https://zhangsan.com",
      "image": "https://zhangsan.com/avatar.jpg",
      "description": "A programmer who loves technology",
      "time": "1704599400",
      "status": true
    }
  ],
  "status": true
}
```

**⚠️ Backward Compatible**: This endpoint maintains the original response format

---

### 11. Add Friend Link 🔒

**Endpoint**: `POST /pub/add_friend`

**Description**: Add a new friend link

**Request Parameters**:
```json
{
  "token": "your_api_token",
  "name": "Li Si's Blog",
  "url": "https://lisi.com",
  "image": "https://lisi.com/avatar.jpg",
  "description": "Focused on frontend development",
  "status": "显示" // or "隐藏" (Show/Hide)
}
```

**Response Example**:
```json
{
  "msg": "Added successfully!",
  "time": "1704599400",
  "status": true
}
```

---

### 12. Edit Friend Link 🔒

**Endpoint**: `POST /pub/edit_friend`

**Description**: Edit existing friend link

**Request Parameters**:
```json
{
  "token": "your_api_token",
  "time": "1704599400", // Friend link ID
  "name": "Li Si's New Blog",
  "url": "https://new-lisi.com",
  "image": "https://new-lisi.com/avatar.jpg",
  "description": "Full-stack engineer",
  "status": "显示"
}
```

**Response Example**:
```json
{
  "msg": "Modified successfully!",
  "status": true
}
```

---

### 13. Delete Friend Link 🔒

**Endpoint**: `POST /pub/del_friend`

**Description**: Delete specified friend link

**Request Parameters**:
```json
{
  "token": "your_api_token",
  "time": "1704599400" // Friend link ID
}
```

**Response Example**:
```json
{
  "msg": "Deleted successfully!",
  "status": true
}
```

---

### 14. Apply Friend Link 🤖

**Endpoint**: `POST /pub/ask_friend`

**Description**: Public friend link application endpoint (requires reCAPTCHA verification)

**Request Parameters**:
```json
{
  "name": "Wang Wu's Blog",
  "url": "https://wangwu.com",
  "image": "https://wangwu.com/avatar.jpg",
  "description": "Technology sharing",
  "verify": "recaptcha_response_token"
}
```

**Response Example**:
```json
{
  "msg": "Applied successfully!",
  "time": "1704599400",
  "status": true
}
```

**Notes**:
- Friend link application must be enabled in Qexo settings
- Requires reCAPTCHA configuration (v2 or v3)
- Applied friend links are hidden by default and require admin approval

**⚠️ Backward Compatible**: This endpoint maintains the original response format

---

## 💬 Talks Management API

### 15. Get Talks List 🌐

**Endpoint**: `GET /pub/talks`

**Description**: Get talks list (paginated, no authentication required)

**Request Parameters**:
- `page` (Optional): Page number, default 1
- `limit` (Optional): Items per page, default 5

**Response Example**:
```json
{
  "msg": "Retrieved successfully!",
  "status": true,
  "count": 50,
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "content": "The weather is great today!",
      "time": "1704599400",
      "tags": ["Life", "Essay"],
      "like": 5,
      "liked": false,
      "values": {"location": "Beijing"}
    }
  ]
}
```

**curl Example**:
```bash
curl "https://your-domain.com/pub/talks?page=1&limit=10"
```

**⚠️ Backward Compatible**: This endpoint maintains the original response format

---

### 16. Like Talk 🌐

**Endpoint**: `POST /pub/like_talk`

**Description**: Like/unlike a talk (IP-based duplicate prevention)

**Request Parameters**:
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000"
}
```

**Response Example**:
```json
{
  "msg": "Liked successfully!",
  "action": true, // true=liked, false=unliked
  "status": true
}
```

**⚠️ Backward Compatible**: This endpoint maintains the original response format

---

### 17. Save Talk 🔒

**Endpoint**: `POST /pub/save_talk`

**Description**: Create or edit a talk

**Request Parameters (Create)**:
```json
{
  "token": "your_api_token",
  "content": "The weather is great today!",
  "tags": "[\"Life\", \"Essay\"]",
  "values": "{\"location\": \"Beijing\"}"
}
```

**Request Parameters (Edit)**:
```json
{
  "token": "your_api_token",
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "content": "Updated content",
  "tags": "[\"Life\"]",
  "time": "1704599400",
  "values": "{}"
}
```

**Response Example (Create)**:
```json
{
  "msg": "Saved successfully!",
  "status": true,
  "id": "550e8400-e29b-41d4-a716-446655440000"
}
```

**Response Example (Edit)**:
```json
{
  "msg": "Modified successfully!",
  "status": true
}
```

---

### 18. Delete Talk 🔒

**Endpoint**: `POST /pub/del_talk`

**Description**: Delete specified talk

**Request Parameters**:
```json
{
  "token": "your_api_token",
  "id": "550e8400-e29b-41d4-a716-446655440000"
}
```

**Response Example**:
```json
{
  "msg": "Deleted successfully!",
  "status": true
}
```

---

### 19. Get All Talks 🔒

**Endpoint**: `GET /pub/get_all_talks`

**Description**: Get all talks (for admin, with search)

**Request Parameters**:
- `token` (Required): API Token
- `s` (Optional): Search keyword

**Response Example**:
```json
{
  "msg": "Retrieved successfully!",
  "status": true,
  "data": [
    {
      "content": "The weather is great today!...",
      "tags": "Life, Essay",
      "time": "2026-01-07 10:30:00",
      "like": 5,
      "id": "550e8400-e29b-41d4-a716-446655440000"
    }
  ]
}
```

---

## 🎨 Custom Fields API

### 20. Get Custom Field 🔒

**Endpoint**: `GET/POST /pub/get_custom`

**Description**: Get and execute custom field content (with RestrictedPython sandbox)

**Security Features**:
- ✅ Mandatory Token Authentication
- ✅ **RestrictedPython 8.1 Professional Sandbox Environment**
- ✅ Log all execution attempts and errors
- ✅ Automatic compile-time security checks
- ⚠️ Prohibits file system access, network, and dangerous operations

**Request Parameters**:
```json
{
  "token": "your_api_token",
  "key": "custom_field_name",
  "param1": "value1", // Custom parameters
  "param2": "value2"
}
```

**Response Example**:
```json
{
  "data": "Execution result output",
  "status": true
}
```

**Sandbox Environment**:

Using [RestrictedPython](https://pypi.org/project/RestrictedPython/) for enterprise-grade security:

- **limited_builtins**: Limited built-in functions set
- **utility_builtins**: Utility functions (safe_iter, safe_range, etc.)
- **safe_globals**: Safe global variables set
- **Additionally provides**: `json` module, `print` function

**Security Restrictions**:
- ❌ Not allowed: `open`, `eval`, `exec`, `compile`, `__import__`
- ❌ Not allowed: Access to `__` prefixed special attributes
- ❌ Not allowed: Import arbitrary modules
- ✅ Only allows: Safe data operations and computations

**Example Code**:
```python
# ✅ Allowed operations
result = sum([1, 2, 3, 4, 5])
data = {"name": param1, "value": int(param2)}
print(json.dumps(data))

# ❌ Prohibited operations
import os  # Compile error
open('/etc/passwd')  # Name does not exist
__import__('subprocess')  # Compile error
```

---

### 21. Edit Custom Field 🔒

**Endpoint**: `POST /pub/set_custom`

**Description**: Edit or create custom field

**Request Parameters**:
```json
{
  "token": "your_api_token",
  "name": "my_custom_field",
  "content": "print('Hello World')"
}
```

**Response Example**:
```json
{
  "msg": "Saved successfully!",
  "status": true
}
```

---

### 22. Delete Custom Field 🔒

**Endpoint**: `POST /pub/del_custom`

**Description**: Delete specified custom field

**Request Parameters**:
```json
{
  "token": "your_api_token",
  "name": "my_custom_field"
}
```

**Response Example**:
```json
{
  "msg": "Deleted successfully!",
  "status": true
}
```

---

### 23. Create Custom Field 🔒

**Endpoint**: `POST /pub/new_custom`

**Description**: Create new custom field (same functionality as `set_custom`)

**Request Parameters**: Same as `set_custom`

**Response Example**: Same as `set_custom`

---

## 📊 Notification and Statistics API

### 24. Get Notifications List 🔒

**Endpoint**: `GET /pub/get_notifications`

**Description**: Get all system notifications

**Request Parameters**:
```json
{
  "token": "your_api_token"
}
```

**Response Example**:
```json
{
  "data": [
    {
      "label": "Friend Link Application - Zhang San's Blog",
      "content": "Site Name: Zhang San's Blog<br>Link: https://zhangsan.com<br>...",
      "time": "1704599400"
    }
  ],
  "status": true
}
```

---

### 25. Get Blog Status 🌐

**Endpoint**: `GET /pub/status`

**Description**: Get blog basic information (no authentication required)

**Request Parameters**: None

**Response Example**:
```json
{
  "data": {
    "posts": "42",
    "last": "2026-01-07 10:30:00"
  },
  "status": true
}
```

**⚠️ Backward Compatible**: This endpoint maintains the original response format

---

### 26. Page Visit Statistics 🌐

**Endpoint**: `GET /pub/statistic`

**Description**: Record and return page visit statistics (requires domain whitelist)

**Request Requirements**:
- Must be initiated from configured allowed domains
- Identifies source via `HTTP_REFERER` header

**Response Example**:
```json
{
  "site_pv": 1250,
  "page_pv": 45,
  "site_uv": 320,
  "status": true
}
```

**Configuration Requirements**:
1. Enable statistics feature in Qexo settings
2. Configure allowed domain list

**⚠️ Backward Compatible**: This endpoint maintains the original response format

---

### 27. Create Custom Notification 🔒

**Endpoint**: `POST /pub/notifications`

**Description**: Create custom notification message

**Request Parameters (JSON Body)**:
```json
{
  "title": "System Maintenance Notice",
  "content": "The system will undergo maintenance at 22:00 tonight, expected to last 1 hour."
}
```

**Request Headers**:
```
Content-Type: application/json
```

**Response Example**:
```json
{
  "msg": "Added successfully!",
  "status": true
}
```

**curl Example**:
```bash
curl -X POST https://your-domain.com/pub/notifications \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Notification","content":"This is a test notification"}' \
  -d "token=your_token"
```

---

## 📋 Error Handling

### Standard Error Response

All APIs return a unified format on error:

```json
{
  "msg": "Error description",
  "status": false
}
```

### Common Error Codes

| HTTP Status | Description |
|------------|-------------|
| 200 | Success (check `status` field in response) |
| 403 | Authentication failed or insufficient permissions |
| 500 | Internal server error |

### Common Error Messages

| Error Message | Cause | Solution |
|--------------|-------|----------|
| "Authentication Failed!" | Invalid or missing Token | Check if Token is correct |
| "Captcha verification failed!" | reCAPTCHA verification failed | Obtain new verification token |
| "Domain not verified" | Statistics API domain not in whitelist | Add domain in settings |
| "Platform not supported" | Provider doesn't support this operation | Check Provider configuration |

---

## 🔄 Migration Guide (v1.x → v2.0)

### Major Changes

1. **All authenticated endpoints require explicit token passing**
   - ❌ Old: Some endpoints might not require token
   - ✅ New: Unified use of `@api_auth_required` decorator

2. **Response message internationalization**
   - ❌ Old: Hardcoded Chinese messages
   - ✅ New: Multi-language support, returns based on system language settings

3. **Unified error response format**
   - All error responses include `status: false` field

4. **Significant get_custom security enhancement**
   - ❌ Old: No authentication, can execute arbitrary code, extremely dangerous
   - ✅ New: Mandatory Token authentication + RestrictedPython 8.1 professional sandbox
   - ✅ Added: Compile-time security checks, runtime isolated environment
   - ⚠️ **Important**: Requires `RestrictedPython==8.1` dependency installation

### Environment Requirements

**New Dependency**:
```bash
pip install RestrictedPython==8.1
```

Or reinstall after updating `requirements.txt` / `Pipfile`.

### Backward Compatible Endpoints

The following endpoints **completely maintain the original response format**, no need to modify calling code:

- `GET /pub/friends`
- `GET /pub/get_friends`
- `POST /pub/ask_friend`
- `GET /pub/talks`
- `POST /pub/like_talk`
- `GET /pub/status`
- `GET /pub/statistic`

### Endpoints Requiring Adjustments

#### Example: save endpoint

**Old Version Call**:
```python
# May not explicitly check status field
response = requests.post("/pub/save", data={"file": "...", "content": "..."})
```

**New Version Call**:
```python
# Must pass token, recommended to check status
response = requests.post("/pub/save", data={
    "token": "your_token",
    "file": "...",
    "content": "..."
})
result = response.json()
if result.get("status"):
    print(result.get("msg"))  # Multi-language message
```

---

## 📝 Best Practices

### 1. Token Security

```python
# ✅ Recommended: Use environment variables to store Token
import os
TOKEN = os.environ.get("QEXO_API_TOKEN")

# ❌ Not recommended: Hardcode Token
TOKEN = "my_secret_token_123"
```

### 2. Error Handling

```python
import requests

def call_qexo_api(endpoint, data):
    try:
        response = requests.post(
            f"https://your-domain.com/pub/{endpoint}",
            data=data,
            timeout=10
        )
        response.raise_for_status()
        result = response.json()
        
        if not result.get("status"):
            raise Exception(f"API Error: {result.get('msg')}")
            
        return result
    except requests.exceptions.RequestException as e:
        print(f"Request failed: {e}")
        return None
```

### 3. Batch Operations

```python
# Use search feature to reduce requests when fetching data in batches
posts = []
for keyword in ["Python", "Django", "API"]:
    response = requests.get(
        f"https://your-domain.com/pub/get_posts",
        params={"token": TOKEN, "s": keyword}
    )
    posts.extend(response.json().get("posts", []))
```

---

## 🚀 Quick Start Examples

### Python Example

```python
import requests
import json

# Configuration
BASE_URL = "https://your-qexo-domain.com/pub"
TOKEN = "your_api_token"

# 1. Get posts list
def get_posts():
    response = requests.get(f"{BASE_URL}/get_posts", params={"token": TOKEN})
    return response.json()

# 2. Create talk
def create_talk(content, tags):
    data = {
        "token": TOKEN,
        "content": content,
        "tags": json.dumps(tags),
        "values": "{}"
    }
    response = requests.post(f"{BASE_URL}/save_talk", data=data)
    return response.json()

# 3. Apply friend link (public endpoint)
def apply_friend_link(name, url, image, description, recaptcha_token):
    data = {
        "name": name,
        "url": url,
        "image": image,
        "description": description,
        "verify": recaptcha_token
    }
    response = requests.post(f"{BASE_URL}/ask_friend", data=data)
    return response.json()

# Usage example
if __name__ == "__main__":
    # Get posts
    posts = get_posts()
    print(f"Total {len(posts.get('posts', []))} posts")
    
    # Create talk
    result = create_talk("Learned Qexo API today!", ["Tech", "Learning"])
    if result.get("status"):
        print(f"Talk created successfully, ID: {result.get('id')}")
```

### JavaScript Example

```javascript
const BASE_URL = 'https://your-qexo-domain.com/pub';
const TOKEN = 'your_api_token';

// 1. Get friend links
async function getFriends() {
  const response = await fetch(`${BASE_URL}/friends`);
  const data = await response.json();
  return data.data;
}

// 2. Like talk
async function likeTalk(talkId) {
  const formData = new FormData();
  formData.append('id', talkId);
  
  const response = await fetch(`${BASE_URL}/like_talk`, {
    method: 'POST',
    body: formData
  });
  
  return await response.json();
}

// 3. Save file (requires Token)
async function saveFile(filePath, content) {
  const formData = new FormData();
  formData.append('token', TOKEN);
  formData.append('file', filePath);
  formData.append('content', content);
  
  const response = await fetch(`${BASE_URL}/save`, {
    method: 'POST',
    body: formData
  });
  
  return await response.json();
}

// Usage example
getFriends().then(friends => {
  console.log(`Total ${friends.length} friend links`);
  friends.forEach(friend => {
    console.log(`- ${friend.name}: ${friend.url}`);
  });
});
```

---

## 🔗 Related Links

- [Qexo Official Documentation](https://github.com/am-abudu/Qexo)
- [Qexo Changelog](https://github.com/am-abudu/Qexo/releases)
- [Issue Feedback](https://github.com/am-abudu/Qexo/issues)
