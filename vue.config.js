const path = require('path')
module.exports = {
  lintOnSave: false,
  outputDir: 'dist', // 输出文件目录
  assetsDir: "assets",// 放置生成的静态资源 
  publicPath: process.env.NODE_ENV === 'production'? './': '/', // 部署应用包时的基本 URL
  productionSourceMap:false,
  devServer: {
     // 自动打开浏览器
     open: true,
     host: 'localhost',
     // 端口
     port: 8080,
     // https
     https: false,
     // 热更新
     hotOnly: false,
    // 代理转发配置，用于调试环境
     proxy: {
            '/api': {
              // 目标代理服务器地址
                target: '/',
                // 开启代理，本地创建一个虚拟服务器 允许跨域
                changeOrigin: true, 
            }
        } 
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
        // 为生产环境修改配置...
        config.mode = 'production'
    } else {
        // 为开发环境修改配置...
        config.mode = 'development'
    }
    config.optimization = {
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        maxSize: 1000000,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          common: {
            name: 'chunk-common', // 打包后的文件名
            chunks: 'initial', // 
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 1,
            reuseExistingChunk: true
          },
          vendors: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'initial',
            priority: 2,
            reuseExistingChunk: true,
            enforce: true
          }
          // ,
          // ivew: {
          //   name: 'chunk-ant-design-vue',
          //   test: /[\\/]node_modules[\\/]ivew[\\/]/,
          //   chunks: 'initial',
          //   priority: 3,
          //   reuseExistingChunk: true,
          //   enforce: true
          // }
        },
      },
    };
    Object.assign(config, {
        // 开发生产共同配置
        resolve: {
            // 别名配置
            alias: {
                '@': path.resolve(__dirname, './src'),
                '@c': path.resolve(__dirname, './src/components'),
                '@api': path.resolve(__dirname, './src/api')
            } 
        }
    })
},
}
