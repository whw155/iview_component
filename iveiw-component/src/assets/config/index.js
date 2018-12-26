/*
 * @Author: wuhaiwei
 * @Date: 2018-10-19 11:48:50
 * @Last Modified by: wuhaiwei
 * @Last Modified time: 2018-12-24 19:39:33
 */
/**
 * 配置开发环境地址
 */
// 本地环境
const local = {
  serverUrl: '//192.168.3.198/saas/access',
  serverAllot: '//192.168.3.198/saas/access-center',
  serverUrlBas: '//192.168.3.198/saas/bas',
};
// 线上环境
const server = {
  serverUrl: `${window.location.protocol}/saas/access`,
  serverAllot: `${window.location.protocol}/saas/access-center`,
  serverUrlBas: `${window.location.protocol}/saas/bas`,
};
const isDev = process.env.NODE_ENV === 'development';
export const serverUrl = isDev ? local.serverUrl : server.serverUrl;
