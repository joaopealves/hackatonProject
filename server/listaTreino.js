const puppeteer = require ('puppeteer');
 

(async() => {
    const browser = await puppeteer.launch({
        ignoreHTTPSErrors: true,
        headless: false,});
    const page = await browser.newPage();
    await page.goto('https://www.personality-database.com/subcategory/4704/music-genres-genres-generic-mbti-personality-type');
    await page.setViewport({
        width: 1920,
        height: 1080
      })

})