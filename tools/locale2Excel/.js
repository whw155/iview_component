/**
 * 把国际化JS文件导出为Excel
 * 导出后的文件放在Excel文件下
 */
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

/**
 * 导出的文件名称，可以修改
 */
const outputExcelName = 'output.xlsx'

const langPath = path.join(__dirname, 'locale');
const localeData = getAllFiles(langPath);
const excelData = formatData(localeData);

outputExcel(excelData.headers, excelData.data)

/**
 * 导出Excel文件
 * @param {excel的Header} excelHeaders 
 * @param {excel的数据} excelData 
 */
function outputExcel(excelHeaders, excelData) {
  const outputPath = path.join(__dirname, 'excel', outputExcelName);
  var headers = excelHeaders
    // 为 _headers 添加对应的单元格位置
    // [ { v: 'key', position: 'A1' },
    //   { v: 'zh-CN', position: 'B1' },
    //   { v: 'es-US', position: 'C1' }]
    .map((v, i) => Object.assign({}, { v: v, position: String.fromCharCode(65 + i) + 1 }))
    // 转换成 worksheet 需要的结构
    // [ { v: 'key', position: 'A1' },
    //   { v: 'zh-CN', position: 'B1' },
    //   { v: 'es-US', position: 'C1' }]
    .reduce((prev, next) => Object.assign({}, prev, {
      [next.position]: { v: next.v }
    }), {});

  var data = excelData
    // 匹配 headers 的位置，生成对应的单元格数据
    // [ [ { v: 'common.device.lumi.acpartner', position: 'A2' },
    //     { v: '空调伴侣', position: 'B2' },
    //     { v: 'acpartner', position: 'C2' }],
    //   [ { v: 'common.device.lumi.camera', position: 'A3' },
    //     { v: '摄像头', position: 'B3' },
    //     { v: 'camera', position: 'C3' }]
    .map((v, i) => excelHeaders.map((k, j) => Object.assign({}, { v: v[k], position: String.fromCharCode(65 + j) + (i + 2) })))
    // 对刚才的结果进行降维处理（二维数组变成一维数组）
    // [ { v: 'common.device.lumi.acpartner', position: 'A2' },
    //   { v: '空调伴侣', position: 'B2' },
    //   { v: 'acpartner', position: 'C2' },
    .reduce((prev, next) => prev.concat(next))
    // 转换成 worksheet 需要的结构
    //   { A2: { v: 'common.device.lumi.acpartner' },
    //     B2: { v: '空调伴侣' },
    //     C2: { v: 'acpartner' },
    .reduce((prev, next) => Object.assign({}, prev, {
      [next.position]: { v: next.v }
    }), {});
  // 合并 headers 和 data
  var output = Object.assign({}, headers, data);
  // 获取所有单元格的位置
  var outputPos = Object.keys(output);
  // 计算出范围
  var ref = outputPos[0] + ':' + outputPos[outputPos.length - 1];
  // 构建 workbook 对象
  var wb = {
    SheetNames: ['mySheet'],
    Sheets: {
      'mySheet': Object.assign({}, output, { '!ref': ref })
    }
  };
  // 导出 Excel
  XLSX.writeFile(wb, outputPath);
  console.log('导出Excel成功');
}


/**
 * 格式化语言文件数据
 * @param {语言文件数据} localeData 
 * 数据示例
 * [{ key: 'common.device.lumi.acpartner',
 * 'zh-CN': 6686,
 * 'es-US': '空调伴侣' },
 *  { key: 'common.device.lumi.camera',
 * 'zh-CN': 6687,
 * 'es-US': '空调伴侣' } ]
 */
function formatData(localeData) {
  let headers = ['key']
  let data = [];
  const langs = localeData.lang;
  const cacheLocale = localeData.cacheLocale;
  for (const lang of langs) {
    headers.push(lang);
  }

  let lang0 = langs[0];
  let langData0 = cacheLocale[lang0];
  for (const key in langData0) {
    if (langData0.hasOwnProperty(key)) {
      const item = {};
      for (const iterator of headers) {
        if (iterator == 'key') {
          item[iterator] = key;
        } else {
          item[iterator] = cacheLocale[iterator][key]
        }
      }
      data.push(item);
    }
  }
  return {
    headers: headers,
    data: data
  }
}

/**
 * 获取JS文件
 * @param {js文件位置} root 
 */
function getAllFiles(root) {
  let lang = [];
  let cacheLocale = {};
  let files = fs.readdirSync(root)
  files.forEach(function(file) {
    let pathname = root + "/" + file;
    let stat = fs.lstatSync(pathname)
    if (stat === undefined) return
    // 不是文件夹就是文件
    if (!stat.isDirectory()) {
      let fileName = file.substring(0, file.lastIndexOf('.'));
      let fileData = fs.readFileSync(pathname, "utf-8");
      let fileDataJsonStr = fileData.substring(fileData.indexOf('{'));
      if (!cacheLocale[fileName]) {
        cacheLocale[fileName] = JSON.parse(fileDataJsonStr);
      }
      lang.push(fileName);
      // 递归自身
    } else {
      lang = lang.concat(getAllFiles(pathname))
    }
  });
  return {
    lang: lang,
    cacheLocale: cacheLocale
  }
}
