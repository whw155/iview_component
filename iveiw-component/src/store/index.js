import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isDev:process.env.NODE_ENV == 'development',
    pageSize:20,
    selectedMenuId:'2-1',
    breadcrumbList:[{
      url:'',
      name:'数据模板配置'
    },{
      url:'',
      name:'测点字段配置'
    }]
  },
  mutations: {
    updateMenuIdAndBreadcrumb: function (state, payload) {
      state.selectedMenuId = payload.menuId;
      state.breadcrumbList = payload.breadcrumbList;
    },
  },
  actions: {},
  modules: {}
});
