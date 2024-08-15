module.exports = {
  theme: 'reco',
  // head: [['link', { rel: 'stylesheet', href: '/css/style.css' }]], //将标签插入html页面head标签中
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': ''
      }
    }
  },
  themeConfig: {
    type: 'blog',
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: 'https://www.recoluan.com'
      }
    ],
    //导航栏链接
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/categories/html/1/' },
      {
        text: 'Linux',
        items: [
          { text: 'CICD', link: '/categories/Linux/CICD/1/' },

          { text: 'linux基础命令', link: '/categories/Linux/CICD/1/' }
        ]
      },
      { text: '服务端', link: '/docs/html/dd' }
    ]
    // blogConfig: {
    //   category: {
    //     location: 2, // 在导航栏菜单中所占的位置，默认2
    //     text: 'Category' // 默认文案 “分类”
    //   },
    //   tag: {
    //     location: 3, // 在导航栏菜单中所占的位置，默认3
    //     text: 'Tag' // 默认文案 “标签”
    //   },
    //   socialLinks: [
    //     // 信息栏展示社交信息
    //     { icon: 'reco-github', link: 'https://github.com/recoluan' },
    //     { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
    //   ]
    // }
  },
  plugins: [
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        theme: [
          'miku',
          'whiteCat',
          'haru1',
          'haru2',
          'haruto',
          'koharu',
          'izumi',
          'shizuku',
          'wanko',
          'blackCat',
          'z16'
        ],
        clean: false,
        messages: {
          welcome: '欢迎来到我的博客',
          home: '心里的花，我想要带你回家。',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '你不喜欢我了吗？痴痴地望着你。'
        },
        messageStyle: { right: '68px', bottom: '290px' },
        width: 250,
        height: 320
      }
    ],
    [
      'sakura',
      {
        num: 60, // 默认数量
        show: true, //  是否显示
        zIndex: 4, // 层级
        img: {
          replace: false, // false 默认图 true 换图 需要填写httpUrl地址
          httpUrl: '...' // 绝对路径
        }
      }
    ],
    [
      'cursor-effects',
      {
        size: 2, // size of the particle, default: 2
        shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
        zIndex: 999999999 // z-index property of the canvas, default: 999999999
      }
    ],

    [
      '@vuepress-reco/vuepress-plugin-bgm-player',
      {
        audios: [
          {
            name: '水手',
            artist: '郑智化',
            url: 'http://124.223.41.220:3333/mp3/music_src_+-+20240731165453.mp3',
            cover: 'https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200'
          }
        ],
        // 是否默认缩小
        autoShrink: true,
        // 缩小时缩为哪种模式
        shrinkMode: 'float',
        // 悬浮窗样式
        floatStyle: { bottom: '10px', 'z-index': '999999' }
      }
    ],
    [
      'ribbon-animation',
      {
        size: 90, // 默认数据
        opacity: 0.3, //  透明度
        zIndex: -1, //  层级
        opt: {
          // 色带HSL饱和度
          colorSaturation: '80%',
          // 色带HSL亮度量
          colorBrightness: '60%',
          // 带状颜色不透明度
          colorAlpha: 0.65,
          // 在HSL颜色空间中循环显示颜色的速度有多快
          colorCycleSpeed: 6,
          // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
          verticalPosition: 'center',
          // 到达屏幕另一侧的速度有多快
          horizontalSpeed: 200,
          // 在任何给定时间，屏幕上会保留多少条带
          ribbonCount: 2,
          // 添加笔划以及色带填充颜色
          strokeSize: 0,
          // 通过页面滚动上的因子垂直移动色带
          parallaxAmount: -0.5,
          // 随着时间的推移，为每个功能区添加动画效果
          animateSections: true
        },
        ribbonShow: false, //  点击彩带  true显示  false为不显示
        ribbonAnimationShow: true // 滑动彩带
      }
    ],
    // [
    //   'ribbon',
    //   {
    //     size: 90, // width of the ribbon, default: 90
    //     opacity: 0.8, // opacity of the ribbon, default: 0.3
    //     zIndex: -1 // z-index property of the background, default: -1
    //   }
    // ],
    ['go-top'],
    ['@vuepress/nprogress'],
    // [
    //   //valine 评论插件
    //   //https://valine.js.org/avatar.html
    //   //https://console.leancloud.cn/ 评论后台
    //   'vuepress-plugin-comment',
    //   {
    //     choosen: 'valine',
    //     // options选项中的所有参数，会传给Valine的配置
    //     options: {
    //       el: '#valine-vuepress-comment',
    //       appId: 'skgC6QfFhgUpDQigSgfXkUbS-gzGzoHsz',
    //       appKey: 'AYgjsJ5sK0dhSDe3nMTcvCPr',
    //       visitor: true,
    //       enableQQ: true
    //     }
    //   }
    // ],
    [
      //https://vssue.js.org/zh/options/
      '@vssue/vuepress-plugin-vssue',
      {
        // 设置 `platform` 而不是 `api`
        platform: 'github',

        // 其他的 Vssue 配置
        owner: 'Miraitowa3',
        repo: 'vupress-reco-vssue',
        clientId: 'Ov23liR4lYpCrlQuL3m3',
        clientSecret: 'd8e218872eb11483269fc374a1ad0c616efa971a'
      }
    ]
  ]
};
