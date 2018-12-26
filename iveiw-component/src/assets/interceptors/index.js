/*
 * @Author: wuhaiwei 
 * @Date: 2018-10-23 17:27:19 
 * @Last Modified by: wuhaiwei
 * @Last Modified time: 2018-12-26 22:49:31
 */
/**
 * 封装axios 请求的拦截配置
 */
import axios from 'axios';


function interceptors(router,store){
  /**
 * 路由拦截设置
 */
  router.beforeEach((to, from, next) => {
    const meta = to.meta;
    store.commit('updateMenuIdAndBreadcrumb', meta.menuIdAndBreadcrumb);
    next();
  });
  axios.defaults.headers.common['identification'] = '';
  axios.defaults.headers.common['Authorization'] = '';
  //http request 拦截器
  axios.interceptors.request.use(
    config => {
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  
  //http response 拦截器
  axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return Promise.reject(error);
    }
  );
}
export default interceptors;
