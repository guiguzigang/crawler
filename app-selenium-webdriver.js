require('chromedriver')
const {Builder, By, Key, until, Button} = require('selenium-webdriver')
const fs = require('fs')
const rp = require('request-promise')
const cheerio = require('cheerio')
const urlList = Array.from({length: 821}, (item, index) => `https://www.ysts8.com/play_4065_50_1_${index + 1}.html`)
async function getDownloadUrl(url) {
  try {
    const driver = new Builder().forBrowser('chrome').build()
    await driver.get(url)
    await driver.switchTo().frame(driver.findElement(By.id("play")))
    console.log(driver)
    const audio = await driver.findElement(By.id('jp_audio_0'))
    console.log(audio)
    console.log(audio.getAttribute('src'))
    broswer.quit()  // 表示关闭浏览器   
    //drive.close()表示关闭当前窗口
  } catch(e) {
    console.error(e)
  }
}
getDownloadUrl('https://www.ysts8.com/play_4065_50_1_1.html')
