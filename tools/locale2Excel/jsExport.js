/**
 * 把国际化的Excel文件读取为分类的js文件
 * 读取的Excel文件放在根目录下，文件命默认为locale.xlsx
 * 如果需要修改，请修改excelName为对应的文件名
 */
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

/**
 * 导入Excel文件名称，默认为locale.xlsx
 */
const excelName = 'locale.xlsx';


const excelPath = path.join(__dirname, excelName);
const workbook = XLSX.readFile(excelPath);
// 获取 Excel 中所有表名
const sheetNames = workbook.SheetNames; // 返回 ['sheet1', 'sheet2']
// 根据表名获取对应某张表
const worksheet = workbook.Sheets[sheetNames[0]];


const excelData = getExcelData(worksheet);
const localesObj = formatToJs(excelData);
let langs = localesObj.lang;
let localeData = localesObj.locale;
exportFile(langs, localeData)

/**
 * 导出语言的js文件
 * @param {语言数组} langs 
 * @param {数据} localeData 
 */

function exportFile(langs, localeData) {
  for (const lang of langs) {
    let langName = `/locale/${lang}.js`;
    let localeStr = `export default ${JSON.stringify(localeData[lang])}`
    let w_data = new Buffer(localeStr);

    fs.open(path.join(__dirname, langName), 'w', function(err, id) {
      fs.write(id, w_data, null, 'utf8', function() {
        fs.close(id, function() {
          console.log(`导出${lang}.js文件`);
        });
      });
    });

  }
}

/**
 * 获取Excel数据
 * @param {worksheet} worksheet 
 */
function getExcelData(worksheet) {
  let headers = {};
  let excelData = [];
  let lang = [];
  let keys = Object.keys(worksheet);
  keys
    // 过滤以 ! 开头的 key
    .filter(k => k[0] !== '!')
    // 遍历所有单元格
    .forEach(k => {
      // 如 A11 中的 A
      let col = k.substring(0, 1);
      // 如 A11 中的 11
      let row = parseInt(k.substring(1));
      // 当前单元格的值
      let value = worksheet[k].v;
      // 保存字段名
      if (row === 1) {
        headers[col] = value;
        lang.push(value);
        return;
      }
      // 解析成 JSON
      if (!excelData[row]) {
        excelData[row] = {};
      }
      excelData[row][headers[col]] = value;
    });
  return {
    lang: lang,
    excelData: excelData
  };
};

/**
 * 格式化成JS的数据格式
 * @param {*} data 
 */
function formatToJs(data) {
  let langs = data.lang;
  let excelData = data.excelData;
  let locale = {};
  //第一个值是数据的key   其他是语言文件
  let dataKey = langs[0];
  for (const lang of langs.slice(1)) {
    if (!locale[lang]) {
      locale[lang] = {};
    }
  }
  /**
   * Excel 
   * 
   * 数据示例
   * [{ key: 'common.device.lumi.acpartner',
   * 'zh-CN': 6686,
   * 'es-US': '空调伴侣' },
   *  { key: 'common.device.lumi.camera',
   * 'zh-CN': 6687,
   * 'es-US': '空调伴侣' } ]
   */
  for (const data of excelData) {
    if (data) {
      const localeKey = data[dataKey];
      for (const key in data) {
        if (data.hasOwnProperty(key) && key != dataKey) {
          locale[key][localeKey] = data[key]
        }
      }
    }

  }
  return {
    lang: langs.slice(1),
    locale: locale
  }
}
