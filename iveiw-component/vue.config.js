/*
 * @Author: wuhaiwei 
 * @Date: 2018-10-23 14:36:27 
 * @Last Modified by: wuhaiwei
 * @Last Modified time: 2018-11-07 18:23:41
 */
/**
 * 用于配置vue-cli3 的webpack配置
 * 具体配置详见 https://cli.vuejs.org/zh/config/
 */
module.exports = {
  css: {
    
    // modules: true, //设置会影响iview主题
		// css预设器配置项
		loaderOptions: {
			less: {
        javascriptEnabled: true
      }
		}
	},
  devServer: {
    host: '0.0.0.0',
    port: '8089',
    open: true
  },
};
