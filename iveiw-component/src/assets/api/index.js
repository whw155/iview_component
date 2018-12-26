/*
 * @Author: wuhaiwei
 * @Date: 2018-10-19 11:26:30
 * @Last Modified by: wuhaiwei
 * @Last Modified time: 2018-12-13 10:32:43
 */
import ajax from '@/plugins/ajax/index';
import { baseUrl } from './../config/index';

export default {
  dataTemp: {
    //各类测点的字段数量表查询
    pointCountList: () => {
      return ajax.get(`${baseUrl}/datacenter/point/count/list`);
    },
    //测点内容修改
    pointTypeUpdate: data => {
      return ajax.post(`${baseUrl}/datacenter/point/type/update`, data);
    },
    //查询测定类型列表
    pointTypeList: () => {
      return ajax.get(`${baseUrl}/datacenter/point/type/list`);
    },
    // 查询普通测点类型测点字段列表
    pointColList: data => {
      return ajax.post(`${baseUrl}/datacenter/point/col/list`,data);
    },
    //测点字段列修改
    pointColUpdate: data => {
      return ajax.post(`${baseUrl}/datacenter/point/col/update`,data);
    },
  }
};
