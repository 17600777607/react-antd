const path = require('path');
const { override, fixBabelImports, addWebpackAlias, overrideDevServer,addLessLoader } = require('customize-cra');
// const { override, fixBabelImports, addWebpackAlias, overrideDevServer, addPostcssPlugins } = require('customize-cra');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '.', dir);
}

const addCustomize = () => config => {
  if (process.env.NODE_ENV === 'production') {
    config.devtool = false; // 关闭sourceMap
    // 配置favicon公共文件打包目录
    config.output.publicPath = '/';
    // 添加js打包gzip配置
    config.plugins.push(
      new CompressionWebpackPlugin({
        test: /\.js$|\.css$/,
        threshold: 1024
      })
    );
  }
  return config;
};
//  本地代理
// const devServerConfig = () => config => {
//   return {
//     ...config,
//     proxy: {
//       '/api': {
//         target: 'xxx',
//         changeOrigin: true,
//         pathRewrite: {
//           '^/api': '/api',
//         },
//       }
//     }
//   }
// }

module.exports = {
  webpack: override(

    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        localIdentName: '[local]--[hash:base64:5]'
      }
    }),
    // 配置antd 的按需引入
    fixBabelImports('import', {
      libraryName: 'antd',
      style: 'css'
    }),
    // 配置路径访问快捷键 @/xxx
    addWebpackAlias({
      '@': resolve('src')
    }),
    // postCss 自动将px转为rem 需要配合 lib-flexible 使用
    // addPostcssPlugins([
    //   require('postcss-pxtorem')({ rootValue: 75, propList: ['*'], minPixelValue: 2, selectorBlackList: ['am-'] })
    // ]),
    // 压缩js、打包路径、名称等
    addCustomize()
  ),
  // 本地启动配置，可以设置代理
  devServer: overrideDevServer(
    // devServerConfig()
  )
};
