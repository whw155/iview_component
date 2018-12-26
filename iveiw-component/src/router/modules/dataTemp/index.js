const PointTypeHome = r => require.ensure([], () => r(require('@/views/dataTemp/PointTypeHome')), 'dataTemp');
const PointFieldHome = r => require.ensure([], () => r(require('@/views/dataTemp/PointFieldHome')), 'dataTemp');


export default [{
  path: '/',
  name: 'PointTypeHome',
  component: PointTypeHome,
  meta: {
    menuIdAndBreadcrumb: {
      menuId: '1-1',
      breadcrumbList: [{
        url: '',
        name: '模板1'
      }, {
        url: '/pointTypeHome',
        name: '模板1-1'
      }],
    }
  }
}, {
  path: '/pointTypeHome',
  name: 'PointTypeHome',
  component: PointTypeHome,
  meta: {
    menuIdAndBreadcrumb: {
      menuId: '1-1',
      breadcrumbList: [{
        url: '',
        name: '模板1'
      }, {
        url: '/pointTypeHome',
        name: '模板1-1'
      }],
    }
  }
},{
  path: '/pointFieldHome',
  name: 'PointFieldHome',
  component: PointFieldHome,
  meta: {
    menuIdAndBreadcrumb: {
      menuId: '1-2',
      breadcrumbList: [{
        url: '',
        name: '模板1'
      }, {
        url: '/pointFieldHome',
        name: '模板1-2'
      }],
    }
  }
}];
