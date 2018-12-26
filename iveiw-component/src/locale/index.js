/*
 * @Author: wuhaiwei 
 * @Date: 2018-10-19 14:13:52 
 * @Last Modified by: wuhaiwei
 * @Last Modified time: 2018-11-08 14:08:05
 */
/**
 * 项目国际化设置 自己语言设置跟iview保持一致
 */
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import languages from './languages';
Vue.use(VueI18n);

const mergeLang = languages => {
  const ret = {};
  languages.forEach(lang => {
    const iviewLocale = require('iview/dist/locale/' + lang.value).default; // 这里加载 iview 中的语言包
    const locale = require('./lang/' + lang.value).default; // 加载自己的语言包,自己语言设置跟iview保持一致
    ret[lang.value] = Object.assign(locale, iviewLocale); // 两个语言包合并
  });
  return ret;
};

const messages = mergeLang(languages);

export default new VueI18n({
  locale: 'zh-CN', // 语言标识, 通过切换locale的值来实现语言切换,this.$i18n.locale
  messages
});