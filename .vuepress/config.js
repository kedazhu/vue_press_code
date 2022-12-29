module.exports = {
  "title": "可达猪丶",
  "description": "一名小公司的IT软件实施人员，励志当一名前端开发！",
  "dest": "dist",
  'base': '/kedazhu_blog/',
  "head": [
    // [
    //   "link",
    //   {
    //     "rel": "icon",
    //     "href": "https://pan.zealsay.com/blog/favicon.ico"
    //
    //   }
    // ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    ['script', {}, `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?b0aae218897fa9d8a9f76e9a77e0b3c6";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `] //百度统计
  ],
  "locales": {
    "/": {
      "lang": 'zh-CN'
    }
  },
  // "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "关于",
        "link": "/about/",
        "icon": "reco-account"
      }
    ],
    "type": "blog",
    "sidebar": false,
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "博客"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "sg",
        "desc": "一名安卓开发",
        "logo": ".vuepress/theme/images/sg.png",
        "link": "https://shug666.github.io/blog/"
      },
      {
        "title": "vue",
        "desc": "vue官网",
        "logo": "https://pan.zealsay.com/blog/logo.png",
        "link": "https://cn.vuejs.org/"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "vuepress-theme官网",
        "logo": "https://pic.zealsay.com/20190909225214850000000.jpg",
        "link": "https://vuepress-theme-reco.recoluan.com/categories/blog/"
      },
      {
        "title": "vuepress",
        "desc": "vuepress官网",
        "logo": "https://pic.zealsay.com/20190909225214850000000.jpg",
        "link": "http://caibaojian.com/vuepress/"
      },
      {
        "title": "element-ui",
        "desc": "饿了吗组件库",
        "logo": "https://pic.zealsay.com/20190909225214850000000.jpg",
        "link": "https://element.eleme.cn/#/zh-CN/guide/design"
      }

    ],
    "valineConfig": {
      "appId": "V4EE2W8mp3xqcfmID0TRB3ed-gzGzoHsz",// your appId
      "appKey": "hQ7kNYVfBDhJh5fGWITzn8RT", // your appKey
      "avatar": "", //
      "enableQQ": true, //启用昵称框自动获取QQ昵称和QQ头像
      // "requiredFields": ['nick', 'mail'], //设置必填项
    },
    "logo": "/logo.png",
    // "huawei": true, //首页出现华为文案
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "可达猪",
    "authorAvatar": "https://pan.zealsay.com/avatar/20200606105310570000000.jpg",
    "record": "你的备案号 ", //icp备案
    "startYear": "2022",
    "info": "一名小公司的IT软件实施人员，励志当一名前端开发",
    "socials":{
      "github" : "https://github.com/kedazhu", //github
      "gitlub" : false, //gitlub
      "gitee" : "https://gitee.com/reachable-pig", //gitee
      "jianshu" : false, //简书
      "zhihu" : false, //知乎
      "toutiao" : false, //知乎
      "juejin": false, //掘金
      "segmentfault" : false, //思否
      "csdn" : false, //CSDN
      "wechat" : false, //微信
      "qq" : false //QQ
    },
    "mottos": [
        {
          "zh": "愿你保持初心和善良,笑里尽是温暖与坦荡。",
          "en": "May you keep your original heart and kindness, and smile with warmth and magnanimity."
        },
        {
          "zh": "年轻就是无限的可能。",
          "en": "Youth means limitless possibilities."
        },
        {
          "zh": "真正的梦就是现实的彼岸。",
          "en": "Real dream is the other shore of reality."
        },
        {
          "zh": "不为模糊不清的未来担忧，只为清清楚楚的现在努力。",
          "en": "Don't worry about the vague future, just strive for the clear present."
        },
        {
          "zh": "与其装腔作势企图影响别人，不如咬牙切齿狠命修理自己。",
          "en": "Rather than pretending to influence others, it's better to grind your teeth and repair yourself."
        }, {
          "zh": "上天是公平的，只要努力就会有收获，否则就是你不够努力。",
          "en": "God is fair, as long as effort will include results, otherwise is you hard enough."
        },
        {
          "zh": "人生没有后悔，我们只能尽力去不让自己后悔。",
          "en": "Life without regret, we can only do our best to not to regret."
        }
    ],
    "covers": [
      // 'https://pan.zealsay.com/zealsay/cover/7.jpg',
      // 'https://pan.zealsay.com/zealsay/cover/1.jpg',
      // 'https://pan.zealsay.com/zealsay/cover/2.jpg',
      // 'https://pan.zealsay.com/zealsay/cover/3.jpg',
      // 'https://pan.zealsay.com/zealsay/cover/4.jpg',
      // 'https://pan.zealsay.com/zealsay/cover/5.jpg',
      // 'https://pan.zealsay.com/zealsay/cover/6.jpg'
    ],
    "codeTheme": "tomorrow"
  },
  "markdown": {
    "lineNumbers": false
  },
  plugins: [
              [
                '@vuepress-reco/vuepress-plugin-kan-ban-niang',{
                theme:{} [
                   'blackCat'
                ],
                clean: true,
                messages: {
                  welcome: '欢迎来到我的博客', home: '心里的花，我想要带你回家。', theme: '好吧，希望你能喜欢我的其他小伙伴。', close: '你不喜欢我了吗？痴痴地望着你。'
                },
                messageStyle: { right: '68px', bottom: '290px' },
                width: 200,
                height: 270
              },
              ],
              [
                "@vuepress-reco/vuepress-plugin-bgm-player",{
                audios: [
                  // 本地文件示例
                  // {
                  //   name: '장가갈 수 있을까',
                  //   artist: '咖啡少年',
                  //   url: '/bgm/1.mp3',
                  //   cover: '/bgm/1.jpg'
                  // },
                  // 网络文件示例
                  {
                    name: '其实',
                    artist: '薛之谦',
                    url: 'https://webfs.ali.kugou.com/202212290010/9eb406596ceb1ffc4b5a356df0f9d247/part/0/2313465/KGTX/CLTX001/clip_f9c6749a55938360c3b1653fcf876b34.mp3',
                    cover: 'https://imgessl.kugou.com/stdmusic/20150715/20150715184807521489.jpg'
                  },
                  {
                    name: '天外来物',
                    artist: '薛之谦',
                    url: 'https://webfs.ali.kugou.com/202212290011/6fbea1a7ee20ea6d577ec56ff5abccf7/KGTX/CLTX001/761c1eafbd1e22504b487f84d2152df5.mp3',
                    cover: 'https://imgessl.kugou.com/stdmusic/20201231/20201231105006379600.jpg'
                  },
                  {
                    name: '动物世界',
                    artist: '薛之谦',
                    url: 'https://webfs.ali.kugou.com/202212290014/79701d83b5e15fd42bcb7ca62dceaac1/KGTX/CLTX001/f0cc6db3e574ff08635cc43b16b8f359.mp3',
                    cover: 'https://imgessl.kugou.com/stdmusic/20171127/20171127205952806880.jpg'
                  },
                  {
                    name: '那是你离开了北京的生活',
                    artist: '薛之谦',
                    url: 'https://webfs.ali.kugou.com/202212290015/1adef4563d682700f777aabf31d3c59c/KGTX/CLTX001/045a49266170ec61b5eb77ca1e1f5836.mp3',
                    cover: 'https://imgessl.kugou.com/stdmusic/20210112/20210112160852948698.jpg'
                  },
                ]
              }
              ],
            ]

}