const {Builder, By, Key, util} = require("selenium-webdriver"); // Pulls out functions from the selenium-websdriver module

async function exampleFirefox() {  // example asynchronous function (for firefox)
  let driver = await new Builder().forBrowser("firefox").build(); // creates the web driver - Builder opens up the firefox browser
  await driver.get("http://google.com");  // specifies web driver to open up the google search page in firefox
  await driver.findElement(By.name("q")).sendKeys("Selenium",Key.RETURN); // find the google search input element named "q" and sends a search for "selenium", using the RETURN key
}

async function exampleChrome() {  // example asynchronous function (for chrome)
  let driver = await new Builder().forBrowser("chrome").build(); // creates the web driver - Builder opens up the chrome browser
  await driver.get("http://google.com");  // specifies web driver to open up the google search page in chrome
  await driver.findElement(By.name("q")).sendKeys("Selenium",Key.RETURN); // find the google search input element named "q" and sends a search for "selenium", using the RETURN key
}

exampleFirefox(); // this will automatically open up firefox and search for "Selenium" from the google search page
exampleChrome(); // this will automatically open up chrome and search for "Selenium" from the google search page

// Notice that there is very little difference between the example functions.