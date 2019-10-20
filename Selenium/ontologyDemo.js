/**
 * This script will run a demo function that automatically logs into the ontology website (via firefox)
 * under the 'test@test.com' account. The "sign-out' demo functionality is still in progress...
 */

const { Builder, By, until,Key, util } = require("selenium-webdriver"); // Pulls out functions from the selenium-websdriver module

async function demoFirefox() {
  let driver = await new Builder().forBrowser('firefox').build(); // Sets up the firefox browser for automation
  driver.get('http://localhost:3000/');                           // Tells the browser what domain to visit (localHost for dev)

  let signInElement = await driver.findElement(By.linkText('Sign in / Sign up')); // Finds the sign-in/sign-up button
  await signInElement.click();                                                    // Clicks the button to get to sign-in page

  await driver.getTitle().then(function (title) { // Looks at page title
    console.log('Page title is: ' + title);       // Should return the title of the page
  });

  let emailElement = await driver.findElement(By.name('email'));            // Finds the email input
  await emailElement.sendKeys('tester@test.com');                           // Inputs the test account email
  let passwordElement = await driver.findElement(By.name('password'));      // Finds the password input
  await passwordElement.sendKeys('tester');                                 // Inputs the test account password
  let submitElement = await driver.findElement(By.id('contact-submit'));    // Finds the submission button
  await submitElement.click();                                              // Submits user details to login, with a click

  await driver.wait(until.elementLocated(By.id(`signOut`)));                // Waits until the page has loaded and the sign-out element exists
  //let navItems = await driver.findElements(By.className(`nav-item`));
  //console.log(navItems);

  let signOutElement = await driver.findElement(By.id('signOut'));  // Finds the signOut element (by looking for its identity value)
  await signOutElement.click();                                     // Signs out the test account
}

async function demoChrome() {
  let driver = await new Builder().forBrowser('chrome').build(); // Sets up the chrome browser for automation
  driver.get('http://localhost:3000/');                           // Tells the browser what domain to visit (localHost for dev)

  let signInElement = await driver.findElement(By.linkText('Sign in / Sign up')); // Finds the sign-in/sign-up button
  await signInElement.click();                                                    // Clicks the button to get to sign-in page

  await driver.getTitle().then(function (title) { // Looks at page title
    console.log('Page title is: ' + title);       // Should return the title of the page
  });

  await driver.wait(until.elementLocated(By.name("email")));                // Waits until the page has loaded and the email element exists
  let emailElement = await driver.findElement(By.name("email"));            // Finds the email input
  await emailElement.sendKeys('tester@test.com');                           // Inputs the test account email

  let passwordElement = await driver.findElement(By.name("password"));      // Finds the password input. We can assume it exists if the email element exists
  await passwordElement.sendKeys('tester');                                 // Inputs the test account password

  let submitElement = await driver.findElement(By.id("contact-submit"));    // Finds the submission button. We can assume it exists if the email element exists
  await submitElement.click();                                              // Submits user details to login, with a click

  await driver.wait(until.elementLocated(By.id("signOut")));                // Waits until the page has loaded and the sign-out element exists

  let signOutElement = await driver.findElement(By.id("signOut"));  // Finds the signOut element (by looking for its identity value)
  await signOutElement.click();                                     // Signs out the test account
}

demoFirefox();
demoChrome();