# Frequently Asked Questions
## What is an API Key?
After completing the initialization, you can modify/create an API key in the settings interface. The API key is used for authentication in Webhooks. If left blank, the system will randomly generate an API key.

## Why isn’t my newly created article displayed? | How does Qexo ensure files are up-to-date?
Qexo has introduced a caching mechanism to speed up access. You can clear the cache in the settings or set up a Webhook to automatically clear the cache.

## What is a Webhook?
In Qexo, a Webhook refers to `/api/webhook` and is used for automated operations, currently available for automatically clearing the cache.

## Installation results in a 504 Timeout
1. Your database is either not configured correctly or has not allowed access from all IP addresses in the whitelist. You can modify this in the MongoDB console. **Be sure to redeploy after making changes.**
2. Delete and recreate the database, ensuring the region is **AWS / N. Virginia (us-east-1)**.

## Encountering a 5xx Error after Installation/Update
Each Qexo release undergoes testing in the Dev branch, so major issues are generally rare. If you encounter a 500 or similar error, try the following steps:
1. Check database configuration.
2. Clear browser cache / program cache.
3. On the `/settings.html` page, check the blog service provider configuration and click save.
4. On the `/advanced.html` page, click the "Repair" button.
5. If unable to log in, use the API: `/pub/fix?token=(Your API Key)`.
6. Retain the environment variables for database configuration and redeploy.
7. Redeploy the entire program.
8. Try the Dev branch.

## AssertionError("xxx object ... its id attribute is set to None.")
Check if you've ever used version 0.01 or 0.1. These versions have serious issues. Please recreate the database and redeploy.

## How to create an article in a subdirectory
In the article name field, fill in `dir/filename`. For example, if you want to create `source/_posts/about/me.md`, you need to enter `about/me`.

## KeyError: 'XXX'
This indicates that the "XXX" environment variable was not obtained. Please add it according to the table below and then Redeploy.

| Name | Meaning | Example |
| --- | --- | --- |
| DOMAINS | The allowed secure domain names for communication. Note the double quotes and English half-width characters. | [".vercel.app", "127.0.0.1", ".yoursite.com"] |
| MONGODB_HOST | MongoDB database connection address | mongodb+srv://cluster0.xxxx.mongodb.net |
| MONGODB_PORT | MongoDB database communication port, default is 27017 | 27017 |
| MONGODB_USER | MongoDB database username | abudu |
| MONGODB_DB | MongoDB database name | Cluster0 |
| MONGODB_PASS | MongoDB database password | JWo0xxxxxxxx |

## GitHub configuration validation errors
If you encounter problems in the configuration, you can visit the [HPP Validation Helper](https://hexoplusplus.cronfly.workers.dev/?step=start) to self-check the configuration. If confirmed correct, check if there are already published articles in the repository.

Note: The GitHub repository must be the one used for **automated deployment** of your blog source code.

## Vercel usage issues
Vercel's serverless function usage is sufficient for Qexo, but it can't stop malicious attacks. Therefore, it's important to protect your backend address. Fortunately, Vercel won't charge you without permission, so after resources are depleted, no fees will be incurred. If you're still concerned, you can consider deploying on your own server [#Server Deployment#](https://github.com/am-abudu/Qexo/wiki/%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%83%A8%E7%BD%B2).

## Online update failed
Check whether the VERCEL_TOKEN and PROJECT_ID in advanced settings are correctly set for the Qexo deployment project.

## My CDN is Down
If you are using a .top domain, please do not attempt to use CNPM as the CDN source, as this can cause critical problems. If the unfortunate event has already occurred, you can recover using the command:
```shell
python manage.py shell
```
Then run the following Python script:
```python
from hexoweb.functions import get_setting, save_setting
save_setting('CDN_PREV', "https://unpkg.com/qexo-static@{version}/qexo")
```
## Forgot Administrator Password
If you have unfortunately forgotten your administrator password, you can change it directly using the built-in command line:
```shell
python manage.py changepassword [user_name]
```
## Unable to log in (Network Error)
Please check the error messages in the browser console; this is usually caused by incorrect domain configuration.

The new version improves security. Make sure you correctly configure the `DOMAINS` environment variable, for example:
```yaml
DOMAINS: ["yourdomain.com","www.yourdomain.com"]
```
## Other Issues
If you have more questions, you can submit an [issue](https://github.com/am-abudu/Qexo/issues) or join the [HexoPlusPlus community group](https://jq.qq.com/?_wv=1027&k=rAcnhzqK) to ask.

If you are unable to join the QQ group through the link, please use the group number `467731779`.