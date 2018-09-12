const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:3000/praise');
    await driver.findElement(By.className('praise')).click();
  } finally {
    await driver.quit();
  }
})();

