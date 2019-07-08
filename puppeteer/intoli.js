
const puppeteer = require('puppeteer');

(async () => {
  // Set up browser and page.
  const browser = await puppeteer.launch({
    executablePath: 'C:/Users/digital/AppData/Local/CentBrowser/Application/chrome.exe',
    headless: false,
    timeout:0
  });
  const page = await browser.newPage();
  page.setViewport({ width: 1280, height: 926 });

  // Navigate to this blog post and wait a bit.
  await page.goto('https://www.netcarshow.com/audi/2020-e-tron_us-version/1600x1200/wallpaper_01.htm');
  await page.waitForSelector('.photoHD');

  // Select the #svg img element and save the screenshot.
  const svgImage = await page.$('.photoHD');
  await svgImage.screenshot({
    path: 'car.png',
    omitBackground: true,
  });

  await browser.close();
})();