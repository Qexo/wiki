# Using Short Links

This tutorial will help you integrate unique links into your blog, making your blog links more concise.

## Integrating Short Links

Install the Hexo plugin:
```shell
npm install hexo-abbrlink --save
```

Modify the permalink in the `_config.yml` file:
```yaml
permalink: posts/:abbrlink/     # Change to the desired link format, e.g., archives/:abbrlink.html
```

Then add the following settings:
```yaml
# abbrlink configuration
abbrlink:
  alg: crc32      # Algorithm -- supports crc16 (default) and crc32
  rep: hex        # Base -- supports dec (default/decimal) and hex (hexadecimal)
  drafts: false   # (true) process drafts / (false) do not process drafts by default
```

## Using Qexo for Automatic Filling

First, modify the article template `scaffolds/post.md` to include the `abbrlink` field:
```yaml
---
title: {{ title }}
date: {{ date }}
updated: {{ date }}
abbrlink: {{ abbrlink }}
categories: 
tags: 
---
```

Next, adjust the `Short Link Configuration` in Qexo settings, aligning the algorithm and base with the above settings.

Now, try creating an article, and you’ll see that the `abbrlink` field is automatically filled in the article header.