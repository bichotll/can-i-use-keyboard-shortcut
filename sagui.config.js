//var webpack = require('webpack');

/**
 * Sagui configuration object
 * see: http://sagui.js.org/
 */
module.exports = {
  pages: ['index'],
  style: {
    cssModules: false
  },
  karma: {
    browsers: ['Chrome']
  },
  webpack: {
    // plugins: [
    //   new webpack.DefinePlugin({
    //     ENV: require(path.join(__dirname, './config/', env))
    //   })
    // ]
  }
}
