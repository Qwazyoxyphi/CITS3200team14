/**
 * This script will attempt to access the website domain (the URL), then attempt to click on the login button. 
 * If successful, it will attempt to switch the form to the 'sign-up' form, finally logging its success. 
 * Any errors will end the program and log the failed attempt.
 */

const { Builder, By, until,Key, util } = require("selenium-webdriver"); // Pulls out functions from the selenium-websdriver module

async function demoFirefox() {
  // Sets up the firefox browser for automation
  let driver = await new Builder().forBrowser('firefox').build()
  .catch(error => {
    console.log('Driver failed to build!');
    console.log(error);
    driver.close();
    process.exit();
  });
  console.log('Firefox web driver built!');

  // Tells the driver what domain to visit (localHost for dev)
  driver.get('http://localhost:3000/')
  .catch(error => {
    console.log('Failed to find website domain!');
    console.log(error);
    driver.close();
    process.exit();
  });
  console.log('Found website domain!');

  // Tells the driver to find the login/sign-in element
  let signInElement = await driver.findElement(By.linkText('Sign in / Sign up'))
  .catch(error => {
    console.log('Failed to find login/sign-in button!');
    console.log(error);
    driver.close();
    console.log('Test A has failed');
    process.exit();
  });
  console.log('Login/Sign-in button found!');

  // When the element is found, it clicks on it
  await signInElement.click()
  .catch(error => {
    console.log('Failed to click on the login/sign-in button!');
    console.log(error);
    driver.close();
    console.log('Test A has failed');
    process.exit();
  });
  console.log('Clicked on login/sign-in button');

  // Tells the driver to check for the sign-in form
  await driver.findElement(By.name('sign_in_form'))
  .catch(error => {
    console.log('Failed to find the sign-in form!');
    console.log(error);
    driver.close();
    console.log('Test A has failed');
    process.exit();
  });
  console.log('Found the sign-in form!');

  // Tells the driver to find the sign-up (form-switch) button
  let signUpElement = await driver.findElement(By.name('sign_up_toggle'))
  .catch(error => {
    console.log('Failed to find the sign-up (form-switch) button!');
    console.log(error);
    driver.close();
    console.log('Test A has failed');
    process.exit();
  });
  console.log('Sign-up button (form-switch) found!');

  // Clicks on the sign-up button
  await signUpElement.click()
  .catch(error => {
    console.log('Failed to click on the sign-up button!');
    console.log(error);
    driver.close();
    console.log('Test A has failed');
    process.exit();
  });
  console.log('Clicked on sign-up button');

  // Tells the driver to find the sign-up submission form.
  await driver.findElement(By.name('sign_up_form'))
  .catch(error => {
    console.log('Failed to find sign-up form!');
    console.log(error);
    driver.close();
    console.log('Test A has failed');
    process.exit();
  });
  console.log('Found the sign-up form!');

  // If the test was successful, then it is logged and the driver is closed.
  console.log('Test A successful!');
  driver.close();
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
  await emailElement.sendKeys('test@test.com');                             // Inputs the test account email

  let passwordElement = await driver.findElement(By.name("password"));      // Finds the password input. We can assume it exists if the email element exists
  await passwordElement.sendKeys('tester');                                 // Inputs the test account password

  let submitElement = await driver.findElement(By.id("contact-submit"));    // Finds the submission button. We can assume it exists if the email element exists
  await submitElement.click();                                              // Submits user details to login, with a click

  await driver.wait(until.elementLocated(By.id("signOut")));                // Waits until the page has loaded and the sign-out element exists

  let signOutElement = await driver.findElement(By.id("signOut"));  // Finds the signOut element (by looking for its identity value)
  await signOutElement.click();                                     // Signs out the test account
}

demoFirefox();
//demoChrome();