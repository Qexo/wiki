# 使用 SMMS 图床
作为远程 API 图床的示例，本文将介绍如何快速为 Qexo 接入 SMMS 图床一键上传
## API 地址
参考 [文档](https://doc.sm.ms/#api-Image-Upload) SM.MS的API接口如下：
```
https://sm.ms/api/v2/upload
```
## POST 参数名
阅读`参数`一栏，查看请求主体的参数
| 字段 | 类型 | 描述 |
| --- | --- | --- |
| smfile | file | 默认值: `multipart/form-data` |
| format | String | Return Type: `json` or `xml`, the default value is `json` |

通过类型`file`可以确定图片文件流应该在`smfile`字段下
```
smfile
```
## JSON 路径
阅读文档`Success-Response`
```json
{
    "success": true,
    "code": "success",
    "message": "Upload success.",
    "data": {
        "file_id": 0,
        "width": 4677,
        "height": 3307,
        "filename": "luo.jpg",
        "storename": "D5VpWCKFElUsPcR.jpg",
        "size": 801933,
        "path": "/2019/12/16/D5VpWCKFElUsPcR.jpg",
        "hash": "Q6vLIbCGZojrMhO2e7BmgFuXRV",
        "url": "https://vip1.loli.net/2019/12/16/D5VpWCKFElUsPcR.jpg",
        "delete": "https://sm.ms/delete/Q6vLIbCGZojrMhO2e7BmgFuXRV",
        "page": "https://sm.ms/image/D5VpWCKFElUsPcR"
    },
    "RequestId": "8A84DDCA-96B3-4363-B5DF-524E95A5201A"
}
```
不难看出我们需要的图片 URL 应该在`data` `url`下
```
data.url
```
## 自定义请求头
文档描述如下：
| 字段 | 类型 | 描述 |
| --- | --- | --- |
| Content-Type | String | 默认值: `multipart/form-data` |
| Authorization | String |  |

发现`Content-Type`有默认值，可以留空，而`Authorization`为验证字段，查看 [文档上文](https://doc.sm.ms/#api-_) 需要在请求头进行验证，假设我的 APIKEY 为 `abcdefg123456` 则填写
```
{"Authorization": "abcdefg123456"}
```
## 自定义请求主体
参考前文 [POST 参数名](#post-%E5%8F%82%E6%95%B0%E5%90%8D) 
| 字段 | 类型 | 描述 |
| --- | --- | --- |
| smfile | file | 默认值: `multipart/form-data` |
| format | String | Return Type: `json` or `xml`, the default value is `json` |

发现其中`smfile`已经被我们填写，而`format`默认就是我们需要的`json`，故此栏可以留空
## 自定义前缀
本次教程所使用的 SM.MS 图床无需这项配置，可以留空


现在，你已经完成了所有的配置。实际上远程 API 图床配置大同小异，可以参考这篇教程进行简单的配置就可以使用