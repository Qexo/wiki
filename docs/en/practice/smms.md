# Using SMMS Image Hosting

As an example of a remote API image hosting, this article will show you how to quickly integrate SMMS image hosting with Qexo for one-click uploads.

## API Address

Refer to the [documentation](https://doc.sm.ms/#api-Image-Upload). The API endpoint for SM.MS is:
```
https://sm.ms/api/v2/upload
```

## POST Parameters

Refer to the `Parameters` section to view the parameters in the request body.

| Field   | Type  | Description                                  |
| ------- | ----- | -------------------------------------------- |
| smfile  | file  | Default value: `multipart/form-data`         |
| format  | String | Return Type: `json` or `xml`, the default value is `json` |

The type `file` indicates that the image file stream should be under the `smfile` field:
```
smfile
```

## JSON Path

Refer to the documentation’s `Success-Response`.

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

It is clear that the image URL we need should be under `data` `url`:
```
data.url
```

## Custom Request Headers

The documentation describes the following:

| Field          | Type   | Description                |
| -------------- | ------ | -------------------------- |
| Content-Type   | String | Default value: `multipart/form-data` |
| Authorization  | String |                            |

The `Content-Type` has a default value and can be left empty, while `Authorization` is a required field for authentication. According to the [documentation](https://doc.sm.ms/#api-_), you need to include an authorization header in the request. Assuming my API key is `abcdefg123456`, it should be:
```
{"Authorization": "abcdefg123456"}
```

## Custom Request Body

Refer to the [POST Parameters](#post-parameters).

| Field   | Type  | Description                                  |
| ------- | ----- | -------------------------------------------- |
| smfile  | file  | Default value: `multipart/form-data`         |
| format  | String | Return Type: `json` or `xml`, the default value is `json` |

Since `smfile` has already been filled in and `format` defaults to `json`, this section can be left empty.

## Custom Prefix

The SM.MS image hosting used in this tutorial does not require this configuration and can be left empty.

Now, you have completed all configurations. In fact, remote API image hosting setups are quite similar, and you can use this tutorial to easily configure others.