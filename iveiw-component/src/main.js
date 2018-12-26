import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
// import i18n from './locale/index';
import './plugins/iview';

import interceptors from './assets/interceptors/index';
import api from './assets/api/index';
import * as validation from './assets/js/validation';
import utils from './assets/js/utils';
import './assets/css/common.less';

Vue.config.productionTip = false;
Vue.config.lang = 'zh-CN';
/**
 * 挂载api方法
 */
Vue.prototype.$api = api;
/**
 * 挂载validation,utils方法
 */
Vue.prototype.$validation = validation;
Vue.prototype.$utils = utils;

/**
 *路由跟http请求拦截控制
 */
interceptors(router,store);

new Vue({
  // i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
