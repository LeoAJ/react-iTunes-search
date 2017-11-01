import puppeteer from 'puppeteer';

describe('Functional Test', () => {
  const url = 'http://leoj.js.org/react-iTunes-search';
  const searchBox = '.search-input';
  const dropDown = '.dropdown-button';
  let browser;
  let page;
  let query = 'avenger';
  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
  });
  afterEach(() => {
    // browser.close();
  });
  test.skip('z', async () => {
    await page.goto(url);
    await page.waitFor(searchBox);
    await page.type(searchBox, query);
    await page.click(dropDown);
    await page.waitForSelector('.select');
    await page.click('#search-options li');
  });
  test("should be able to search", async () => {
    const searchBox = '.search-input';
    await page.goto(url);
    await page.waitFor(searchBox);
    await page.type(searchBox, query);
    await page.keyboard.down('Enter');
    await page.keyboard.up('Enter');
    // await page.waitForSelector('.card-wrapper');
    // const x = await page.$$eval('.card-wrapper', el => {
    //   console.log(el);
    //   return el;
    // });
    // console.log(x);
  });
});
