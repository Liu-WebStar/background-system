module.exports={
  publicPath:'./',
  devServer:{
    port:8080,
    host:'localhost',
    https:false,
    open:true,
    proxy:{
      [process.env.VUE_APP_BASE_API]:{
        target:process.env.VUE_APP_SERVICE_URL,
        changeOrigin:true,  // 开启代理服务器
        pathRewrite:{ ["^"+process.env.VUE_APP_BASE_API]:'' }    // 当请求/dev-api/db.json时会转为http://locaohost:8090/db.json 
      }
    }
  },
  lintOnSave:false,
  outputDir:'dist',
  assetsDir:"assets",
  productionSourceMap:false,
  filenameHashing:false
}