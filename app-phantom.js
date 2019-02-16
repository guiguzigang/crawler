const fs = require('fs')
// const rp = require('request-promise')
// const cheerio = require('cheerio')
var urlList = []
var length = 821
for(var i = 0; i < length; i++) {
  urlList.push('https://www.ysts8.com/play_4065_50_1_'+ (i + 1) +'.html')
}
const page = require('webpage').create()

console.log('fs', fs, fs.writeFile, fs.writeFileSync)
// page.open('https://www.ysts8.com/play_4065_50_1_1.html', function(status) {
//   console.log(status)
//   if (status === 'succsss') {
//     const content = page.content
//     console.log(pc, 'pc')
//     page.evaluate(_ => {
//       const iframe = document.querySelector('#play')
//       console.log(ifram)
//     })
//   }
//   // page.switchToFrame('/play/flw.asp?url=%D0%FE%BB%C3%D0%A1%CB%B5%2F%C7%EC%D3%E0%C4%EA%2F%C7%EC%D3%E0%C4%EA818%2Emp3&jiidx=/play%5F4065%5F50%5F1%5F819%2Ehtml&jiids=/play%5F4065%5F50%5F1%5F817%2Ehtml&id=4065&ji=818&said=50');
//   // console.log(page.frameContent);
  
//   phantom.exit()
// })

const data = []

// fs.writeFileSync('yuqingnian.txt', data.join('\n'))

page.onError = function(msg, trace) {

  var msgStack = ['ERROR: ' + msg]

  if (trace && trace.length) {
    msgStack.push('TRACE:')
    trace.forEach(function(t) {
      msgStack.push(' -> ' + t.file + ': ' + t.line + (t.function ? ' (in function "' + t.function +'")' : ''))
    })
  }
  console.error(msgStack.join('\n'))

}
phantom.exit()