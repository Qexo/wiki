# How to Update
In general, it is recommended to use Qexo's one-click update feature.

## One-Click Update
### Vercel Deployment
- Ensure your current Qexo version is 1.5.0 or above, or from the Dev branch.
- Open settings, click "One-Click Update," and select the update channel (dev -> Development version, master -> Stable version).

### Local Deployment
- Ensure your current Qexo version is 2.0.0 or above, or from the Dev branch.
- Open settings, click "One-Click Update," and select the update channel (dev -> Development version, master -> Stable version).
- You may need to wait ten seconds for the program to automatically restart.

Tips: The one-click update for local deployment will not delete the `db/` directory and `configs.py`.

## Manual Update
### Vercel Deployment
- Create a Pull Request and pull the Qexo main branch source code.

### Local Deployment
- Refer to [Local Deployment](/en/start/build.html#local-deployment).