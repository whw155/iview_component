import i18n from './index';
export default  (key) =>{
  return i18n.messages[i18n.locale][key];
};
