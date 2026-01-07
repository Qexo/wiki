# Public API

Qexo Public API 提供了一套RESTful风格的HTTP接口，用于博客内容管理、友链管理、说说管理、统计数据等功能。

**基础URL**: `https://your-qexo-domain.com/pub/`

## 🔐 鉴权说明

### 获取API Token

1. 登录 Qexo 管理面板
2. 进入 **设置 > API配置**
3. 生成或查看您的 API Key

### 使用Token

在需要鉴权的接口中，通过以下方式传递token：

- **GET请求**: `?token=your_api_token`
- **POST请求**: 表单参数 `token=your_api_token`

### 鉴权状态

| 图标 | 说明 |
|------|------|
| 🔒 | 需要Token鉴权 |
| 🌐 | 公开访问，无需鉴权 |
| 🤖 | 需要reCAPTCHA人机验证 |

---

## 📑 API 分类

- [内容管理 API](#内容管理-api)
- [友链管理 API](#友链管理-api)
- [说说管理 API](#说说管理-api)
- [自定义字段 API](#自定义字段-api)
- [通知与统计 API](#通知与统计-api)

---

## 🗂️ 内容管理 API

### 1. 保存文件内容 🔒

**端点**: `POST /pub/save`

**描述**: 保存或更新文件内容到Git Provider

**请求参数**:
```json
{
  "token": "your_api_token",
  "file": "source/_posts/my-article.md",
  "content": "# 文章标题\n\n文章内容...",
  "commitchange": "Update article" // 可选
}
```

**响应示例**:
```json
{
  "msg": "保存成功!",
  "status": true
}
```

**curl示例**:
```bash
curl -X POST https://your-domain.com/pub/save \
  -d "token=your_token" \
  -d "file=source/_posts/test.md" \
  -d "content=Hello World"
```

---

### 2. 删除文件 🔒

**端点**: `POST /pub/delete`

**描述**: 从Provider删除指定文件

**请求参数**:
```json
{
  "token": "your_api_token",
  "file": "source/_posts/old-article.md",
  "commitchange": "Delete old article" // 可选
}
```

**响应示例**:
```json
{
  "msg": "删除成功并提交部署!",
  "status": true
}
```

---

### 3. 创建Webhook 🔒

**端点**: `POST /pub/create_webhook`

**描述**: 自动配置Git Provider的Webhook

**请求参数**:
```json
{
  "token": "your_api_token",
  "uri": "https://your-domain.com/api/webhook"
}
```

**响应示例**:
```json
{
  "msg": "Webhook创建成功！",
  "status": true,
  "token": "generated_webhook_token",
  "webhook_url": "https://your-domain.com/api/webhook?token=xxx"
}
```

---

### 4. 获取文章列表 🔒

**端点**: `GET /pub/get_posts`

**描述**: 获取所有文章列表

**请求参数**:
- `token` (必需): API Token
- `s` (可选): 搜索关键词

**响应示例**:
```json
{
  "status": true,
  "posts": [
    {
      "name": "我的第一篇文章",
      "path": "source/_posts/my-first-post.md",
      "fullname": "source/_posts/my-first-post.md",
      "size": 1024,
      "date": "2026-01-07 10:30:00"
    }
  ]
}
```

**curl示例**:
```bash
curl "https://your-domain.com/pub/get_posts?token=your_token&s=关键词"
```

---

### 5. 获取页面列表 🔒

**端点**: `GET /pub/get_pages`

**描述**: 获取所有独立页面列表

**请求参数**:
- `token` (必需): API Token  
- `s` (可选): 搜索关键词

**响应格式**: 与 `get_posts` 相同

---

### 6. 获取配置文件列表 🔒

**端点**: `GET /pub/get_configs`

**描述**: 获取所有配置文件列表

**请求参数**:
- `token` (必需): API Token
- `s` (可选): 搜索关键词

**响应格式**: 与 `get_posts` 相同

---

### 7. 获取图片列表 🔒

**端点**: `GET /pub/get_images`

**描述**: 获取所有上传的图片记录

**请求参数**:
- `token` (必需): API Token
- `s` (可选): 搜索关键词

**响应示例**:
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

### 8. 自动修复配置 🔒

**端点**: `POST /pub/fix`

**描述**: 自动检测并修复系统配置问题

**请求参数**:
```json
{
  "token": "your_api_token"
}
```

**响应示例**:
```json
{
  "msg": "尝试自动修复了 5 个字段，请在稍后检查和修改配置",
  "status": true
}
```

---

## 👥 友链管理 API

### 9. 获取公开友链 🌐

**端点**: `GET /pub/friends`

**描述**: 获取所有公开显示的友情链接（无需鉴权）

**请求参数**: 无

**响应示例**:
```json
{
  "data": [
    {
      "name": "张三的博客",
      "url": "https://zhangsan.com",
      "image": "https://zhangsan.com/avatar.jpg",
      "description": "一个热爱技术的程序员",
      "time": "1704599400"
    }
  ],
  "status": true
}
```

**curl示例**:
```bash
curl "https://your-domain.com/pub/friends"
```

**⚠️ 向后兼容**: 此接口保持原有响应格式

---

### 10. 获取全部友链 🔒

**端点**: `GET /pub/get_friends`

**描述**: 获取所有友链（包括隐藏的，需要鉴权）

**请求参数**:
- `token` (必需): API Token
- `s` (可选): 搜索关键词

**响应示例**:
```json
{
  "data": [
    {
      "name": "张三的博客",
      "url": "https://zhangsan.com",
      "image": "https://zhangsan.com/avatar.jpg",
      "description": "一个热爱技术的程序员",
      "time": "1704599400",
      "status": true
    }
  ],
  "status": true
}
```

**⚠️ 向后兼容**: 此接口保持原有响应格式

---

### 11. 新增友链 🔒

**端点**: `POST /pub/add_friend`

**描述**: 添加新的友情链接

**请求参数**:
```json
{
  "token": "your_api_token",
  "name": "李四的博客",
  "url": "https://lisi.com",
  "image": "https://lisi.com/avatar.jpg",
  "description": "专注前端开发",
  "status": "显示" // 或 "隐藏"
}
```

**响应示例**:
```json
{
  "msg": "添加成功！",
  "time": "1704599400",
  "status": true
}
```

---

### 12. 编辑友链 🔒

**端点**: `POST /pub/edit_friend`

**描述**: 编辑现有友情链接

**请求参数**:
```json
{
  "token": "your_api_token",
  "time": "1704599400", // 友链ID
  "name": "李四的新博客",
  "url": "https://new-lisi.com",
  "image": "https://new-lisi.com/avatar.jpg",
  "description": "全栈工程师",
  "status": "显示"
}
```

**响应示例**:
```json
{
  "msg": "修改成功！",
  "status": true
}
```

---

### 13. 删除友链 🔒

**端点**: `POST /pub/del_friend`

**描述**: 删除指定友情链接

**请求参数**:
```json
{
  "token": "your_api_token",
  "time": "1704599400" // 友链ID
}
```

**响应示例**:
```json
{
  "msg": "删除成功！",
  "status": true
}
```

---

### 14. 申请友链 🤖

**端点**: `POST /pub/ask_friend`

**描述**: 公开的友链申请接口（需要reCAPTCHA验证）

**请求参数**:
```json
{
  "name": "王五的博客",
  "url": "https://wangwu.com",
  "image": "https://wangwu.com/avatar.jpg",
  "description": "技术分享",
  "verify": "recaptcha_response_token"
}
```

**响应示例**:
```json
{
  "msg": "申请成功！",
  "time": "1704599400",
  "status": true
}
```

**注意事项**:
- 需要在Qexo设置中启用友链申请功能
- 需要配置reCAPTCHA (v2或v3)
- 申请的友链默认为隐藏状态，需管理员审核

**⚠️ 向后兼容**: 此接口保持原有响应格式

---

## 💬 说说管理 API

### 15. 获取说说列表 🌐

**端点**: `GET /pub/talks`

**描述**: 获取说说列表（分页，无需鉴权）

**请求参数**:
- `page` (可选): 页码，默认1
- `limit` (可选): 每页数量，默认5

**响应示例**:
```json
{
  "msg": "获取成功！",
  "status": true,
  "count": 50,
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "content": "今天天气真不错！",
      "time": "1704599400",
      "tags": ["生活", "随笔"],
      "like": 5,
      "liked": false,
      "values": {"location": "北京"}
    }
  ]
}
```

**curl示例**:
```bash
curl "https://your-domain.com/pub/talks?page=1&limit=10"
```

**⚠️ 向后兼容**: 此接口保持原有响应格式

---

### 16. 点赞说说 🌐

**端点**: `POST /pub/like_talk`

**描述**: 点赞/取消点赞说说（通过IP防止重复点赞）

**请求参数**:
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000"
}
```

**响应示例**:
```json
{
  "msg": "点赞成功！",
  "action": true, // true=点赞，false=取消点赞
  "status": true
}
```

**⚠️ 向后兼容**: 此接口保持原有响应格式

---

### 17. 保存说说 🔒

**端点**: `POST /pub/save_talk`

**描述**: 创建或编辑说说

**请求参数（新建）**:
```json
{
  "token": "your_api_token",
  "content": "今天天气真不错！",
  "tags": "[\"生活\", \"随笔\"]",
  "values": "{\"location\": \"北京\"}"
}
```

**请求参数（编辑）**:
```json
{
  "token": "your_api_token",
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "content": "更新后的内容",
  "tags": "[\"生活\"]",
  "time": "1704599400",
  "values": "{}"
}
```

**响应示例（新建）**:
```json
{
  "msg": "保存成功!",
  "status": true,
  "id": "550e8400-e29b-41d4-a716-446655440000"
}
```

**响应示例（编辑）**:
```json
{
  "msg": "修改成功！",
  "status": true
}
```

---

### 18. 删除说说 🔒

**端点**: `POST /pub/del_talk`

**描述**: 删除指定说说

**请求参数**:
```json
{
  "token": "your_api_token",
  "id": "550e8400-e29b-41d4-a716-446655440000"
}
```

**响应示例**:
```json
{
  "msg": "删除成功！",
  "status": true
}
```

---

### 19. 获取全部说说 🔒

**端点**: `GET /pub/get_all_talks`

**描述**: 获取所有说说（管理用，带搜索）

**请求参数**:
- `token` (必需): API Token
- `s` (可选): 搜索关键词

**响应示例**:
```json
{
  "msg": "获取成功！",
  "status": true,
  "data": [
    {
      "content": "今天天气真不错！...",
      "tags": "生活, 随笔",
      "time": "2026-01-07 10:30:00",
      "like": 5,
      "id": "550e8400-e29b-41d4-a716-446655440000"
    }
  ]
}
```

---

## 🎨 自定义字段 API

### 20. 获取自定义字段 🔒

**端点**: `GET/POST /pub/get_custom`

**描述**: 获取并执行自定义字段内容（使用RestrictedPython沙箱）

**安全特性**:
- ✅ 强制Token鉴权
- ✅ **RestrictedPython 8.1 专业沙箱环境**
- ✅ 记录所有执行日志和错误
- ✅ 自动编译时安全检查
- ⚠️ 禁止访问文件系统、网络和危险操作

**请求参数**:
```json
{
  "token": "your_api_token",
  "key": "custom_field_name",
  "param1": "value1", // 自定义参数
  "param2": "value2"
}
```

**响应示例**:
```json
{
  "data": "执行结果输出",
  "status": true
}
```

**沙箱环境说明**:

使用 [RestrictedPython](https://pypi.org/project/RestrictedPython/) 提供沙箱：

- **limited_builtins**: 受限的内置函数集
- **utility_builtins**: 实用工具函数（safe_iter, safe_range等）
- **safe_globals**: 安全的全局变量集
- **额外提供**: `json` 模块、`print` 函数

**安全限制**:
- ❌ 不允许 `open`, `eval`, `exec`, `compile`, `__import__`
- ❌ 不允许访问 `__` 开头的特殊属性
- ❌ 不允许导入任意模块
- ✅ 仅允许安全的数据操作和运算

**示例代码**:
```python
# ✅ 允许的操作
result = sum([1, 2, 3, 4, 5])
data = {"name": param1, "value": int(param2)}
print(json.dumps(data))

# ❌ 被禁止的操作
import os  # 编译错误
open('/etc/passwd')  # 名称不存在
__import__('subprocess')  # 编译错误
```

---

### 21. 编辑自定义字段 🔒

**端点**: `POST /pub/set_custom`

**描述**: 编辑或创建自定义字段

**请求参数**:
```json
{
  "token": "your_api_token",
  "name": "my_custom_field",
  "content": "print('Hello World')"
}
```

**响应示例**:
```json
{
  "msg": "保存成功!",
  "status": true
}
```

---

### 22. 删除自定义字段 🔒

**端点**: `POST /pub/del_custom`

**描述**: 删除指定自定义字段

**请求参数**:
```json
{
  "token": "your_api_token",
  "name": "my_custom_field"
}
```

**响应示例**:
```json
{
  "msg": "删除成功!",
  "status": true
}
```

---

### 23. 新建自定义字段 🔒

**端点**: `POST /pub/new_custom`

**描述**: 新建自定义字段（功能同 `set_custom`）

**请求参数**: 同 `set_custom`

**响应示例**: 同 `set_custom`

---

## 📊 通知与统计 API

### 24. 获取通知列表 🔒

**端点**: `GET /pub/get_notifications`

**描述**: 获取所有系统通知

**请求参数**:
```json
{
  "token": "your_api_token"
}
```

**响应示例**:
```json
{
  "data": [
    {
      "label": "友链申请 张三的博客",
      "content": "站点名: 张三的博客<br>链接: https://zhangsan.com<br>...",
      "time": "1704599400"
    }
  ],
  "status": true
}
```

---

### 25. 获取博客状态 🌐

**端点**: `GET /pub/status`

**描述**: 获取博客基本信息（无需鉴权）

**请求参数**: 无

**响应示例**:
```json
{
  "data": {
    "posts": "42",
    "last": "2026-01-07 10:30:00"
  },
  "status": true
}
```

**⚠️ 向后兼容**: 此接口保持原有响应格式

---

### 26. 页面访问统计 🌐

**端点**: `GET /pub/statistic`

**描述**: 记录并返回页面访问统计（需域名白名单）

**请求要求**:
- 必须从配置的允许域名发起请求
- 通过 `HTTP_REFERER` 头识别来源

**响应示例**:
```json
{
  "site_pv": 1250,
  "page_pv": 45,
  "site_uv": 320,
  "status": true
}
```

**配置要求**:
1. 在Qexo设置中启用统计功能
2. 配置允许的域名列表

**⚠️ 向后兼容**: 此接口保持原有响应格式

---

### 27. 创建自定义通知 🔒

**端点**: `POST /pub/notifications`

**描述**: 创建自定义通知消息

**请求参数（JSON Body）**:
```json
{
  "title": "系统维护通知",
  "content": "系统将于今晚22:00进行维护，预计持续1小时。"
}
```

**请求头**:
```
Content-Type: application/json
```

**响应示例**:
```json
{
  "msg": "添加成功！",
  "status": true
}
```

**curl示例**:
```bash
curl -X POST https://your-domain.com/pub/notifications \
  -H "Content-Type: application/json" \
  -d '{"title":"测试通知","content":"这是一条测试通知"}' \
  -d "token=your_token"
```

---

## 📋 错误处理

### 标准错误响应

所有API在出错时返回统一格式：

```json
{
  "msg": "错误描述信息",
  "status": false
}
```

### 常见错误码

| HTTP状态码 | 说明 |
|-----------|------|
| 200 | 成功（检查响应中的`status`字段） |
| 403 | 鉴权失败或权限不足 |
| 500 | 服务器内部错误 |

### 常见错误信息

| 错误信息 | 原因 | 解决方案 |
|---------|------|---------|
| "鉴权错误！" | Token无效或未提供 | 检查Token是否正确 |
| "人机验证失败！" | reCAPTCHA验证失败 | 重新获取验证token |
| "域名未验证" | 统计API域名不在白名单 | 在设置中添加域名 |
| "平台不支持" | Provider不支持该操作 | 检查Provider配置 |

---

## 🔄 迁移指南（v1.x → v2.0）

### 重大变更

1. **所有需鉴权的接口都需要显式传递token**
   - ❌ 旧版：部分接口可能不需要token
   - ✅ 新版：统一使用`@api_auth_required`装饰器

2. **响应消息国际化**
   - ❌ 旧版：硬编码中文消息
   - ✅ 新版：支持多语言，根据系统语言设置返回

3. **错误响应格式统一**
   - 所有错误响应都包含`status: false`字段

4. **get_custom 安全大幅增强**
   - ❌ 旧版：无鉴权，可执行任意代码，极度危险
   - ✅ 新版：强制Token鉴权 + RestrictedPython 8.1 专业沙箱
   - ✅ 新增：编译时安全检查，运行时隔离环境
   - ⚠️ **重要**：需要安装 `RestrictedPython==8.1` 依赖

### 环境要求

**新增依赖**:
```bash
pip install RestrictedPython==8.1
```

或更新 `requirements.txt` / `Pipfile` 后重新安装。

### 保持兼容的接口

以下接口**完全保持原有响应格式**，无需修改调用代码：

- `GET /pub/friends`
- `GET /pub/get_friends`
- `POST /pub/ask_friend`
- `GET /pub/talks`
- `POST /pub/like_talk`
- `GET /pub/status`
- `GET /pub/statistic`

### 需要调整的接口

#### 示例：save接口

**旧版调用**:
```python
# 可能没有显式检查status字段
response = requests.post("/pub/save", data={"file": "...", "content": "..."})
```

**新版调用**:
```python
# 必须传递token，建议检查status
response = requests.post("/pub/save", data={
    "token": "your_token",
    "file": "...",
    "content": "..."
})
result = response.json()
if result.get("status"):
    print(result.get("msg"))  # 多语言消息
```

---

## 📝 最佳实践

### 1. Token安全

```python
# ✅ 推荐：使用环境变量存储Token
import os
TOKEN = os.environ.get("QEXO_API_TOKEN")

# ❌ 不推荐：硬编码Token
TOKEN = "my_secret_token_123"
```

### 2. 错误处理

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
            raise Exception(f"API错误: {result.get('msg')}")
            
        return result
    except requests.exceptions.RequestException as e:
        print(f"请求失败: {e}")
        return None
```

### 3. 批量操作

```python
# 批量获取数据时使用搜索功能减少请求次数
posts = []
for keyword in ["Python", "Django", "API"]:
    response = requests.get(
        f"https://your-domain.com/pub/get_posts",
        params={"token": TOKEN, "s": keyword}
    )
    posts.extend(response.json().get("posts", []))
```

---

## 🚀 快速开始示例

### Python示例

```python
import requests
import json

# 配置
BASE_URL = "https://your-qexo-domain.com/pub"
TOKEN = "your_api_token"

# 1. 获取文章列表
def get_posts():
    response = requests.get(f"{BASE_URL}/get_posts", params={"token": TOKEN})
    return response.json()

# 2. 创建说说
def create_talk(content, tags):
    data = {
        "token": TOKEN,
        "content": content,
        "tags": json.dumps(tags),
        "values": "{}"
    }
    response = requests.post(f"{BASE_URL}/save_talk", data=data)
    return response.json()

# 3. 申请友链（公开接口）
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

# 使用示例
if __name__ == "__main__":
    # 获取文章
    posts = get_posts()
    print(f"共有 {len(posts.get('posts', []))} 篇文章")
    
    # 创建说说
    result = create_talk("今天学习了Qexo API！", ["技术", "学习"])
    if result.get("status"):
        print(f"说说创建成功，ID: {result.get('id')}")
```

### JavaScript示例

```javascript
const BASE_URL = 'https://your-qexo-domain.com/pub';
const TOKEN = 'your_api_token';

// 1. 获取友链
async function getFriends() {
  const response = await fetch(`${BASE_URL}/friends`);
  const data = await response.json();
  return data.data;
}

// 2. 点赞说说
async function likeTalk(talkId) {
  const formData = new FormData();
  formData.append('id', talkId);
  
  const response = await fetch(`${BASE_URL}/like_talk`, {
    method: 'POST',
    body: formData
  });
  
  return await response.json();
}

// 3. 保存文件（需要Token）
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

// 使用示例
getFriends().then(friends => {
  console.log(`共有 ${friends.length} 个友链`);
  friends.forEach(friend => {
    console.log(`- ${friend.name}: ${friend.url}`);
  });
});
```

---

## 🔗 相关链接

- [Qexo 官方文档](https://github.com/am-abudu/Qexo)
- [Qexo 更新日志](https://github.com/am-abudu/Qexo/releases)
- [问题反馈](https://github.com/am-abudu/Qexo/issues)
