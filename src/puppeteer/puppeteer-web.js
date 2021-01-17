/*
 * @Date: 2021-01-13 18:14:48
 * @LastEditTime: 2021-01-17 11:57:12
 * @Author: zhengweibin
 */
const puppeteer = require('puppeteer-core');
const initPuppeteer = require('./init-puppeteer');

const loadTemperatureUpload = async (browser) => {
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/main/upload-temperature');

  const textArea = await page.$('.upload-text-area');
  const uploadButton = await page.$('#temperature-upload');

  page.on('console', msg => {
    const args = msg.args();
    const {
      length
    } = args;
    for (let i = 0; i < length; ++i) {
      const data = args[i];
      // 译者注：这句话的效果是打印到你的代码的控制台
      if (typeof data === 'string' || typeof data === 'number' || typeof data === 'undefined') {
        console.log(` --- ${i} --- ${data} `);
      } else if (typeof data === 'object') {
        console.log(` --- ${i} --- ${(data)} `);
      } else if (typeof data === 'function') {
        console.log(` --- ${i} --- function `);
      }
    }
  });
  await textArea.focus();
  await textArea.type(`{ hello: 900 }`, {
    delay: 500
  });
  await uploadButton.click();

  await browser.close();
};

const main = async () => {
  let browser;
  try {
    await initPuppeteer();
    browser = await puppeteer.launch();
    await loadTemperatureUpload(browser);

  } catch (err) {
    console.log('load error', err);
    if (browser) {
      browser.close()
    }
  }
};

main();