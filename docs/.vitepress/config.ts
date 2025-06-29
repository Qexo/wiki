import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "script",
      {},
      `var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?1bc2cefab19bfc10c993dca7e1513b82";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();`,
    ],
  ],
  base: "/qexo/",

  lastUpdated: true,
  markdown: {
    lineNumbers: true,
  },
  sitemap: {
    hostname: 'https://oplog.cn/qexo/'
  },

  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      link: "/",
      title: "Qexo 文档",
      description: "一个快速、强大、漂亮的在线 静态博客 管理器",
      themeConfig: {
        sidebar: [
          {
            text: "上手",
            items: [
              { text: "快速开始", link: "/start" },
              { text: "部署程序", link: "/start/build" },
              { text: "如何更新", link: "/start/update" },
              { text: "常见问题", link: "/start/questions" },
            ],
          },
          {
            text: "配置",
            items: [
              { text: "博客配置", link: "/configs/provider" },
              { text: "Vercel配置", link: "/configs/vercel" },
              { text: "图床配置", link: "/configs/upload" },
              { text: "统计配置", link: "/configs/statistic" },
              { text: "推送配置", link: "/configs/onepush" },
            ],
          },
          {
            text: "拓展",
            items: [
              { text: "接入友链", link: "/exts/flinks" },
              { text: "接入说说", link: "/exts/talks" },
              { text: "自定字段", link: "/exts/custom" },
              { text: "访客统计", link: "/exts/statistic" },
            ],
          },
          {
            text: "实践",
            items: [
              { text: "SM.MS图床", link: "/practice/smms" },
              { text: "使用短链接", link: "/practice/abbrlink" },
            ],
          },
          {
            text: "开发",
            items: [
              { text: "API文档", link: "/dev/api" },
              { text: "鸣谢", link: "/dev/thanks" },
            ],
          },
        ],
        nav: [
          { text: "快速上手", link: "/start.html" },
          {
            text: "对外API",
            link: "/dev/api",
          },
          {
            text: "Github",
            link: "https://github.com/Qexo/Qexo",
            target: "_blank",
          },
        ],
      },
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
      title: "Qexo Docs",
      description: "A fast, powerful, and beautiful online blog manager",
      themeConfig: {
        sidebar: [
          {
            text: "Start",
            items: [
              { text: "Quick Start", link: "/en/start" },
              { text: "Build", link: "/en/start/build" },
              { text: "Update", link: "/en/start/update" },
              { text: "FAQ", link: "/en/start/questions" },
            ],
          },
          {
            text: "Configurations",
            items: [
              { text: "Blog", link: "/en/configs/provider" },
              { text: "Vercel", link: "/en/configs/vercel" },
              { text: "Image Upload", link: "/en/configs/upload" },
              { text: "Statistic", link: "/en/configs/statistic" },
              { text: "Onepush", link: "/en/configs/onepush" },
            ],
          },
          {
            text: "Extensions",
            items: [
              { text: "Friend Links", link: "/en/exts/flinks" },
              { text: "Qexo Talks", link: "/en/exts/talks" },
              { text: "Custom Fields", link: "/en/exts/custom" },
              { text: "PV Statistic", link: "/en/exts/statistic" },
            ],
          },
          {
            text: "Practice",
            items: [
              { text: "SM.MS", link: "/en/practice/smms" },
              { text: "Short Links", link: "/en/practice/abbrlink" },
            ],
          },
          {
            text: "Develop",
            items: [
              { text: "API Docs", link: "/en/dev/api" },
              { text: "Acknowledgements", link: "/en/dev/thanks" },
            ],
          },
        ],
        nav: [
          { text: "Quick Start", link: "/en/start.html" },
          {
            text: "Public API",
            link: "/en/dev/api",
          },
          {
            text: "Github",
            link: "https://github.com/Qexo/Qexo",
            target: "_blank",
          },
        ],
      },
    },
  },
  themeConfig: {
    socialLinks: [{ icon: "github", link: "https://github.com/Qexo/Qexo" }],
    editLink: {
      pattern: 'https://github.com/qexo/wiki/edit/master/docs/:path'
    },
    logo: { src: 'https://s2.loli.net/2024/08/25/hdaM2IVuRCoPw3L.png', width: 24, height: 24 },
    footer: {
      message: 'Released under the GPL3.0 License.',
      copyright: 'Copyright © 2021-present Abudu'
    },
    search: {
      provider: 'algolia',
      options: {
        appId: "ZZ7F5LB6VQ",
        apiKey: "a6fc529bd4d2614f9286fe47fa743d84",
        indexName: "oplog",
        locales: {
          root: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                }
              }
            }
          }
        }
      }
    }
  },
});
