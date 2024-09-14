module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:33590', // 替换为你的后端服务器地址
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  }
}
