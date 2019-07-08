const puppeteer = require('puppeteer');

(async () => {
      const browser = await puppeteer.launch({
        executablePath: 'C:/Users/digital/AppData/Local/CentBrowser/Application/chrome.exe',
        headless: true
      });
      const page = await browser.newPage();
      await page.goto('http://music.163.com/');
      await page.screenshot({path: 'music1.png'});
      browser.close();
})();