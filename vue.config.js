const path = require('path')

module.exports = {
  pages: {
    index: {
      // entry for the pages
      entry: 'src/main.js'
    }
  },
  outputDir: path.resolve(__dirname, './docs'),
  publicPath: './',
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 生产环境相关配置
    } else {
      // 为开发环境修改配置...
    }
  },
  devServer: {
    proxy: {
      '/codekeep': {
        target: 'http://localhost:2048/codekeep',
        // changeOrigin: true,
        // ws: true,
        bypass: function (req, res, proxyOptions) {
          // console.dir(req)
          // console.dir(res)
          // console.dir(proxyOptions)
        },
        pathRewrite: {
          '^/codekeep': ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
}
