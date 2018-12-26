/*
 * @Author: wuhaiwei 
 * @Date: 2018-11-07 19:22:54 
 * @Last Modified by: wuhaiwei
 * @Last Modified time: 2018-11-26 10:08:44
 */

export default  {
  sysTypeId: 1,
  name: '模板',
  code: 'deviceSym',
  menus: [
    {
      level: '1',
      menuName: '模板1',
      icon:'ios-home',
      url:'',
      child:[
        {
          level: '1-1',
          menuName: '模板1-1',
          icon:'',
          url:'pointTypeHome',
        },
        {
          level: '1-2',
          menuName: '模板1-2',
          icon:'',
          url:'pointFieldHome',
        }
      ]
    },
    {
      level: '2',
      menuName: '模板2',
      icon:'ios-cube',
      url:'',
      child:[
        {
          level: '2-1',
          menuName: '模板2-1',
          icon:'',
          url:'',
        },
        {
          level: '2-2',
          menuName: '模板2-2',
          icon:'',
          url:'',
        },
        {
          level: '2-3',
          menuName: '模板2-3',
          icon:'',
          url:'',
        }
      ]
    }]
};