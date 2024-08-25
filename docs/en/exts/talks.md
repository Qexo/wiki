# Integrating Qexo Talks

Starting from version 2.1.0, Qexo supports Qexo Talks (a social status update feature). This tutorial will guide you through integrating Qexo Talks into your blog.

![](https://s2.loli.net/2024/07/19/NoIL6QzSVj58HYD.png)

## Adding Qexo Talks

1. In the Qexo sidebar, find **Qexo Talks** and click to enter.
2. Click the **Add Qexo Talks** button in the upper right corner and input your information.
3. Click **Publish** or use the shortcut key to save your Qexo Talks data.

## Integrating with Your Blog

1. Open the command line in your root directory and create a new page:

    ```shell
    hexo new page talks
    ```

2. Open **source/talks/index.md** and modify the page configuration.
3. Add the following code to the page, replacing **${SITE}** with your Qexo link (e.g., `https://admin.mysite.com`):

    ```html
    <div id="qexot"></div>
    <script src="https://cdn.jsdelivr.net/npm/qexo-static@1.6.0/hexo/talks.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/qexo-static@1.6.0/hexo/talks.css">
    <script>showQexoTalks("qexot", "${SITE}", 5)</script>
    ```

    **Note:** The third parameter specifies the number of Qexo Talks per page; adjust it according to your needs.

4. Push your blog to your GitHub repository.

## (Optional) Customization

The default style is quite basic. You can enhance it by following these steps:

1. Download the [CSS file](https://cdn.jsdelivr.net/npm/qexo-static@1.6.0/hexo/talks.css).
2. Edit the styles and include the updated CSS in your blog.
3. If you need code highlighting, include the necessary CSS and JavaScript.

Alternatively, you can use existing beautification solutions:

1. (From DaoDao) [Link](https://uyoahz.cn/2022111530055/)
2. (Stellar theme) [GitHub Repository](https://github.com/MSCMDD/Qexo-Talks)

If you’d like your customization to be featured here, you can start a [Discussion](https://github.com/Qexo/Qexo/discussions) to let me know.