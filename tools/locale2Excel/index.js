const inquirer = require('inquirer');
var child_process = require('child_process');
var exec = child_process.exec;
let questions = [{
  type: "checkbox",
  name: "out",
  message: "请选择要做操作？(只能选择一个)",
  choices: [{
      name: 'Excel导出为JS文件',
      value: 'js'
    },
    {
      name: 'JS导出为Excel文件',
      value: 'excel'
    }
  ],
  validate: function(answer) {
    if (answer.length == 1) {
      return true;
    }
    return '请选择一个操作';
  }
}];

inquirer.prompt(questions).then(function(answers) {
  let answer = answers.out;
  if (answer[0] == 'js') {
    inquirer.prompt([{
      type: 'confirm',
      name: 'js',
      message: '确认在根目录下有locale.xlsx?',
      default: true
    }]).then(function(answer) {
      if (answer.js) {
        exec('node jsExport.js', function(error, stdout, stderr) {
          if (error) {
            throw error;
          }
          console.log(stdout);
        })
      }
    })

  } else {

    inquirer.prompt([{
      type: 'confirm',
      name: 'excel',
      message: '确认在locale文件下有文件?',
      default: true
    }]).then(function(answer) {
      if (answer.excel) {
        exec('node excelExport.js', function(error, stdout, stderr) {
          if (error) {
            throw error;
          }
          console.log(stdout);
        })
      }
    })
  }
});
