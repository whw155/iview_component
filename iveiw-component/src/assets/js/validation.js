/*
 * @Author: wuhaiwei 
 * @Date: 2018-10-18 14:57:59 
 * @Last Modified by: wuhaiwei
 * @Last Modified time: 2018-10-24 18:27:22
 */
/*
 * validation 主要是用于做各种基础判断跟转换
 */
/**
 * 去掉首尾的空格
 * @param {*} str
 */
export function trimStr(str) {
  return str.replace(/(^\s*)|(\s*$)/g, '');
}

/**
 * 判断某字符串是否包含指定的子串
 * @param {*} str
 * @param {*} substr
 */
export function isContains(str, substr) {
  return new RegExp(substr).test(str);
}

/**
 * 判断是否为手机号码
 * @param {*} value
 */
export function isCellPhone(value) {
  return /(^1[3|4|5|8|7][0-9]{9}$)/.test(value);
}

/**
 * 判断是否为固定电话
 * @param {*} value
 */
export function isTelephone(value) {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(value);
}

/**
 * 判断是否为固定邮箱
 * @param {*} value
 */
export function isEmail(value) {
  return /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(value);
}

/**
 * 判断是否为对象
 * @param {*} obj
 */
export function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

/**
 * 判断对象是否为空
 * @param {*} obj 
 */
export function isEmptyObj(obj) {
  if (JSON.stringify(obj) == '{}') {
    return true;
  } else {
    return false;
  }
}


/**
 * 字符串转换
 * @param {*} value
 */
export function toString(value) {
  return value === null ? '' : value.toString;
}

/**
 * 数字转换
 * @param {*} value
 */
export function toNumber(value) {
  if (typeof value !== 'string') {
    return value;
  } else {
    let parsed = Number(value);
    return isNaN(parsed) ? value : parsed;
  }
}
/**
 * 布尔值转换
 * @param {*} value
 */
export function toBoolean(value) {
  return value === 'true' ? true : value === 'false' ? false : true;
}

/**
 * 数字转16进制
 * @param {Number} value
 */
export function toHexNumber(value) {
  value = toNumber(value);
  return value.toString(16);
}

/**
 * 保留几位有效数字
 * @param {输入的数字} value
 * @param {保留的位数，默认2位} digits
 */
export function toFixed(value, digits = 2) {
  return value.toFixed(digits);
}
