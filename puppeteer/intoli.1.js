
const puppeteer = require('puppeteer');

(async () => {
  // Set up browser and page.
  const browser = await puppeteer.launch({
    executablePath: 'C:/Users/digital/AppData/Local/CentBrowser/Application/chrome.exe',
    headless: false,
    timeout:70000
  });
  const page = await browser.newPage();
  page.setViewport({ width: 1280, height: 926 });

  // Navigate to this blog post and wait a bit.
  await page.goto('https://www.netcarshow.com/audi/2020-e-tron_us-version/1600x1200/wallpaper_01.htm');
  try {
    const tree = await page._client.send('Page.getResourceTree');
    for (const resource of tree.frameTree.resources) {
      console.log(resource);
    }
  } catch (e) {
    console.log(e);
  }


  await browser.close();
})();