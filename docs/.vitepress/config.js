module.exports = {
    title: '前端公共文档',
    themeConfig: {
        nav: [
            {
                text: '组件',
                link: '/component/index.html'
            }
        ],
        sidebar: {
            '/component/index.html': ['demo']
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
            '@alias': 'docs'
            }
        }
    }
  }