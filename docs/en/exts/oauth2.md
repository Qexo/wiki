# OAuth2/OIDC Login

This tutorial will help you integrate OAuth2/OIDC login functionality into Qexo in minutes.

## Important Notes

1. OAuth2/OIDC functionality requires Qexo >= 4.0.0 and a modern browser.

2. Before using this tutorial, you need to prepare the identity provider integration information.

## Adding an Identity Provider

Please copy the following configuration template to your local text editor and configure it according to the specific
provider type.

```json

{
  "oidc_provider": {
    "type": "oidc",
    "info": {
      "server_metadata_url": "https://example.com/.well-known/openid-configuration",
      "client_id": "YOUR_CLIENT_ID",
      "client_secret": "YOUR_CLIENT_SECRET",
      "client_kwargs": {
        "scope": "openid profile"
      }
    },
    "friendly_name": "Display Name",
    "icon": "https://example.com/icon.png"
  },
  "github": {
    "type": "github",
    "info": {
      "client_id": "YOUR_CLIENT_ID",
      "client_secret": "YOUR_CLIENT_SECRET",
      "client_kwargs": {
        "scope": ""
      }
    },
    "friendly_name": "GitHub",
    "icon": "https://example.com/github-icon.png"
  }
}
```

This template provides two different types of provider examples

### Providers that support the OIDC specification, such as Google, Authentik

1. Rename `oidc_provider` to your own provider name. This name will not be displayed on the page; it should be a short
   English word.

<h4>Note that in the configuration file, the provider name (i.e., the content at the `oidc_provider` location) must be
unique.</h4>

2. Based on your provider configuration, modify `server_metadata_url`, `client_id`, and `client_secret`.

3. Modify `friendly_name` and `icon`, which will determine how the provider is displayed on the front end.

4. If you don't need them, remove the unnecessary `github` field from the configuration file.

5. On your provider's end, set the callback URL to
   `https://<your Qexo address>/api/oauth/callback/<the provider name you set in step 1>`.

<h4>About OpenID Scopes:</h4>

Qexo only requires two scopes: openid and profile. You can add other scopes, but they won't work by default.

### Providers that do not support the OIDC specification, such as GitHub

<h4>For providers that do not support the OIDC specification, Qexo currently only supports GitHub. You can modify the
code yourself if needed.</h4>

1. Obtain `client_id` and `client_secret` from GitHub and fill them into the configuration file.

2. Configure the icon to point to the GitHub logo. URL

3. Set the callback URL for the GitHub OAuth App to `https://<your Qexo address>/api/oauth/callback/github`

4. If you don't need it, remove the `oidc_provider` field from the configuration file.

## Apply your configuration file

In the environment variable editor, create a new environment variable named `OAUTH_PROVIDERS`, and set the entire
configuration file as its value.

### Optional: Enable SSO Only Login

<h4>Note: Enabling this feature will disable Qexo's default username+password login passkey login, allowing only
third-party logins.</h4>

For security reasons, SSO Only Login has the following limitations:

1. SSO Only Login will not work if no identity provider is configured.

2. SSO Only Login will not work if a provider is configured but not linked to your local Qexo user in the settings.

3. When SSO Only Login is enabled, users are not allowed to unbind their last third-party identity.

If you are sure you want to use SSO-only login, please set the environment variable `SSO_ONLY=1`.

You can safely enable this feature during initial deployment; Qexo will not disable password/passkey login if an identity is
not bound.

## Linking Your Third-Party Account

1. Log in to Qexo as usual.

2. Click the settings button in the upper right corner.

3. Click the Manage Third-Party Account Bindings button.

4. Bind your third-party identity here.

This completes the configuration of Qexo's OAuth/OIDC login functionality.

------

### Contributions and Extensions

If you need to integrate other non-standard OAuth2 providers besides GitHub, you can refer to the implementations of
`hexoweb.libs.oauth.OAuthProvider` and its subclasses.