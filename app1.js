const fs = require('fs')
const rp = require('request-promise')
const cheerio = require('cheerio')
const urlList = Array.from({length: 821}, (item, index) => `https://www.ysts8.com/play_4065_50_1_${index + 1}.html`)
async function getDownloadUrl(url) {
  try {
    const $ = await rp({
      uri: url,
      transform: res => cheerio.load(res)
    })
    console.log($)
    const playUrl = $('#play').attr('src')
    console.log(playUrl)
    const $play = await rp(playUrl)
    console.log($play)
  } catch(e) {
    console.error(e)
  }
}
getDownloadUrl('https://www.ysts8.com/play_4065_50_1_1.html')
