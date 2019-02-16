const puppeteer = require('puppeteer')
const fs = require('fs')
const total = 821
const urlList = Array.from({length: total}, (item, index) => `https://www.ysts8.com/play_4065_50_1_${index + 1}.html`)
const fileName = 'yuqingnian'

async function getDownloadUrl(url) {
  //  启动浏览器实例
  const browser = await (puppeteer.launch({
    // 若是手动下载的chromium需要指定chromium地址, 默认引用地址为 /项目目录/node_modules/puppeteer/.local-chromium/
    // executablePath: '/Users/huqiyang/Documents/project/z/chromium/Chromium.app/Contents/MacOS/Chromium',
    //设置超时时间
    timeout: 15000,
    //如果是访问https页面 此属性会忽略https错误
    ignoreHTTPSErrors: true,
    // 打开开发者工具, 当此值为true时, headless总为false
    devtools: false,
    // 关闭headless模式, 不会打开浏览器
    headless: true
  }))
  // 创建一个新页面
  const page = await browser.newPage()
  await page.goto(url)
  // const playUrl = await page.$eval('#play', el => el.src)
  const iframe = await page.frames().find(f => f.name() === 'play')
  const mp3Url = await iframe.$eval('#jp_audio_0', el => el.src)
  
  // await page.screenshot({
  //   path: 'test.png',
  //   type: 'png',
  //   // quality: 100, 只对jpg有效
  //   fullPage: true,
  //   // 指定区域截图，clip和fullPage两者只能设置一个
  //   // clip: {
  //   //   x: 0,
  //   //   y: 0,
  //   //   width: 1000,
  //   //   height: 40
  //   // }
  // })
  browser.close()
  return mp3Url
}

async function getAllUrls() {
  let list = '',
    index = 1
  for (let url of urlList) {
    index++
    try {
      const _url = await getDownloadUrl(url)
      console.log(index, '   ==>   ', _url)
      list += `\n${_url}`
    } catch (e) {
      console.error(`第${index}出错`, e)
    }
  }
  fs.writeFileSync(`./result/${fileName}.txt`, list)
}

getAllUrls()



