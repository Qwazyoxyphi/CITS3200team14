/**
 * This script will run a demo function that automatically logs into the ontology website (via firefox)
 * under the 'test@test.com' account. The "sign-out' demo functionality is still in progress...
 */

const { Builder, By, Key, util } = require("selenium-webdriver"); // Pulls out functions from the selenium-websdriver module

async function demoFirefox() {
  let driver = await new Builder().forBrowser('firefox').build();
  driver.get('http://localhost:3000/');

  let signInElement = await driver.findElement(By.linkText('Sign in / Sign up'));
  await signInElement.click();

  await driver.getTitle().then(function (title) {
    console.log('Page title is: ' + title);
  });

  let emailElement = await driver.findElement(By.name('email'));
  await emailElement.sendKeys('test@test.com');
  let passwordElement = await driver.findElement(By.name('password'));
  await passwordElement.sendKeys('tester');
  let submitElement = await driver.findElement(By.id('contact-submit'));
  await submitElement.click();

  //let signOutElement = element.findElement(findSignOutNav);   **IN PROGRESS**

  //function findSignOutNav(element) {
    //let navItems = element.findElements(By.className('nav-items'));
    //return promise.filter(navItems, function (signOutElement) {
      //return signOutElement.isDisplayed();
    //});
  //}
}

demoFirefox();