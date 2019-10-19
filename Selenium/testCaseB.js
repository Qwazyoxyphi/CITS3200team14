/**
 * This script will attempt to access the website's login domain (the URL), then attempt to toggle the 
 * form to the sign-up form. Then, it will check to see if the home-page button (link) works successfully
 * from the sign-in/sign-up page. After navigating back to the sign-in/sign-up page, it will attempt to
 * login with three valid user accounts (made for testing purposes), logging in and out of those accounts
 * each once. The script will then attempt to login in without inputting any user credentials and log what
 * happens (success occurs when the login is invalidated). The script will then try to log in using invalid
 * user information.
 */

const { Builder, By, until, Key, util } = require("selenium-webdriver"); // Pulls out functions from the selenium-websdriver module

const websiteHomeDomain = 'http://localhost:3000/';                 // Url address of the website's homepage
const websiteLoginDomain = 'http://localhost:3000/signin-signup';   // Url address of the website's login-page

const userEmails = ['tester@test.com', 'test6@test.com', 'test4@test.com'];   // VALID Testing account emails
const userPasswords = ['tester', 'tester6', 'tester4'];                       // VALID Passwords associated with (valid) testing account emails

// INVALID Testing account emails
const invalidUserEmails = ['tester@test.com', 'test6@test.com', 'test4@test.com', 'tester2@test.com', '', 'testATtest.com', 'test@test.com.au'];
// INVALID Passwords associated with (invalid) testing account emails
const invalidUserPasswords = ['test', 'tester2', 'tester', '', 'tester2', 'tester', 'tester'];

async function testBFirefox() {
  //---------------------------------------------------------------------------------------------------------------------------------------

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
  await driver.get(websiteLoginDomain)
    .catch(error => {
      console.log('Failed to find website login domain!');
      console.log(error);
      driver.close();
      process.exit();
    });
  console.log('Found website login domain!');

  //---------------------------------------------------------------------------------------------------------------------------------------

  // Tells the driver to check for the sign-in form
  await driver.findElement(By.name('sign_in_form'))
    .catch(error => {
      console.log('Failed to find the sign-in form!');
      console.log(error);
      driver.close();
      console.log('Test B has failed');
      process.exit();
    });
  console.log('Found the sign-in form!');

  // Tells the driver to find the sign-up (form-switch) button
  let signUpElement = await driver.findElement(By.name('sign_up_toggle'))
    .catch(error => {
      console.log('Failed to find the sign-up (form-switch) button!');
      console.log(error);
      driver.close();
      console.log('Test B has failed');
      process.exit();
    });
  console.log('Sign-up button (form-switch) found!');

  // Clicks on the sign-up button
  await signUpElement.click()
    .catch(error => {
      console.log('Failed to click on the sign-up button!');
      console.log(error);
      driver.close();
      console.log('Test B has failed');
      process.exit();
    });
  console.log('Clicked on sign-up button');

  // Tells the driver to find the sign-up submission form.
  await driver.findElement(By.name('sign_up_form'))
    .catch(error => {
      console.log('Failed to find sign-up form!');
      console.log(error);
      driver.close();
      console.log('Test B has failed');
      process.exit();
    });
  console.log('Found the sign-up form!');

  //---------------------------------------------------------------------------------------------------------------------------------------

  // Tells the driver to find the 'Home' link (via link text)
  let homeLink = await driver.findElement(By.linkText('Home'))
    .catch(error => {
      console.log('Failed to find the link to the homepage! (Home button)');
      console.log(error);
      driver.close();
      console.log('Test B has failed');
      process.exit();
    });
  console.log('Found the homepage link!');

  // Tells the driver to click on the 'Home' link
  await homeLink.click()
    .catch(error => {
      console.log('Failed to click on the homepage link! (Home button)');
      console.log(error);
      driver.close();
      console.log('Test B has failed');
      process.exit();
    });
  console.log('Clicked on the homepage link!');

  // Asks the driver what the url is after clicking the 'Home' link.
  await driver.getCurrentUrl()
    .then(url => {  // If successful...
      if (url === websiteHomeDomain) console.log('Reached homepage successfully!');
      else {        // If unsuccessful...
        console.log('Failed to reach homepage!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      }
    })
    .catch(error => {   // If another failure has occurred...
      console.log('Failed to retrieve URL');
      console.log(error);
      driver.close();
      console.log('Program has stopped working...');
      process.exit();
    });

  //---------------------------------------------------------------------------------------------------------------------------------------

  // Tells the driver to go back to the login page
  await driver.get(websiteLoginDomain)
    .catch(error => {
      console.log('Failed to go back to the website login page!');
      console.log(error);
      driver.close();
      console.log('Test B has failed');
      process.exit();
    });
  console.log('Back at the website login page');

  // Tells the driver to check for the sign-in form again
  await driver.sleep(2000);
  await driver.findElement(By.name('sign_in_form'))
    .catch(error => {
      console.log('Failed to find the sign-in form!');
      console.log('**Sometimes this is the result of a bug. Try running the program again to see if it works.');
      console.log('**If the problem persists, it might be because the script is running too quickly compared to the website loading time.');
      console.log(error);
      driver.close();
      console.log('Test B has failed');
      process.exit();
    });
  console.log('Found the sign-in form!');

  //---------------------------------------------------------------------------------------------------------------------------------------

  console.log("---------------------------------------------");
  console.log("Now testing VALID account login information");
  console.log("---------------------------------------------");

  for (var i = 0; i < userEmails.length; i++) {

    // Tells driver to find user email input
    let emailElement = await driver.findElement(By.name('email'))
      .catch(error => {
        console.log('Failed to find email input!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Found the email input!');

    // Tells driver to find user password input
    let passwordElement = await driver.findElement(By.name('password'))
      .catch(error => {
        console.log('Failed to find password input!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Found the password input');

    // Tells driver to find the account input submission button
    let submitElement = await driver.findElement(By.id('contact-submit'))
      .catch(error => {
        console.log('Failed to find the login submission button!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Found the login submission button!');

    // Tells driver to input email provided from const array of VALID account emails
    await emailElement.sendKeys(userEmails[i])
      .catch(error => {
        console.log('Failed to input email!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Inputting email: ' + userEmails[i]);

    // Tells driver to find input password provided from const array of VALID account passwords
    await passwordElement.sendKeys(userPasswords[i])
      .catch(error => {
        console.log('Failed to input password!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Inputting password: ' + userPasswords[i]);

    // Tells driver to click submission button
    await submitElement.click()
      .catch(error => {
        console.log('Failed to click on the login submission button!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Logging in...');

    /**
     * This tells the driver to wait for a moment. This gives any potential alert/notification time
     * to be rendered onto the page. Without it, the alert may go unnoticed and cause the program
     * to fail.
     */
    await driver.sleep(2000);

    let isAlert = false;  // Tells the program if an alert has appeared
    let loginAlert;       // Intializes value to hold an 'Alert' object (later on...)

    // Tells the driver to switch to the alert if it pops up        
    await driver.switchTo().alert()
      .then(alert => {  // If there is an alert...
        console.log('Login failure alert detected! Login failed...');
        isAlert = true;
        loginAlert = alert;   // Assign 'Alert' object value
      })
      .catch(() => {    // If there isn't an alert...log it and continue
        console.log('No alert detected...');
      });

    // If an alert has occurred, we end the test (shouldn't occur with valid emails)
    if (isAlert) {
      console.log(loginAlert.getText());
      await loginAlert.accept();
      await driver.close();
      console.log('Test B has failed');
      process.exit();
    }

    // Tells the driver to wait for a sign-out element to appear
    await driver.wait(until.elementLocated(By.id(`signOut`)))
      .catch(error => {
        console.log('Failed to load onto folder page! Login failed...');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Login successful!');

    // Tells the driver to find the sign-out element
    let signOutElement = await driver.findElement(By.id('signOut'))
      .catch(error => {
        console.log('Failed to find sign-out button!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Signing out...');

    // Tells the driver to click on the sign-out button to test the next account
    await signOutElement.click()
      .catch(error => {
        console.log('Failed to sign out! Could not click on sign-out button...');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });

    // Tells the driver to check if it's back at the sign-in form
    await driver.findElement(By.name('sign_in_form'))
      .catch(error => {
        console.log('Failed to sign out! Could not find sign-in form...');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Successfully signed out!');
    console.log('---------------------------------------------');
  }

  //---------------------------------------------------------------------------------------------------------------------------------------

  /**
   * The next test is to make sure that empty input fields do not lead to a successful
   * login. I.e. the login failure alert should appear, indicating a login prevention.
   * 
   * Here we can assume that the input fields are empty after the last logout from the
   * tests before.
   */
  console.log("---------------------------------------------");
  console.log("Now testing (invalid) *empty* login input");
  console.log("---------------------------------------------");

  // Tells the driver to find the submission button
  let submitElement = await driver.findElement(By.id('contact-submit'))
    .catch(error => {
      console.log('Failed to find the login submission button!');
      console.log(error);
      driver.close();
      console.log('Test B has failed');
      process.exit();
    });
  console.log('Found the login submission button!');

  // Tells the driver to click the submission button (input fields should be empty)
  await submitElement.click()
    .catch(error => {
      console.log('Failed to click on the login submission button!');
      console.log(error);
      driver.close();
      console.log('Test B has failed');
      process.exit();
    });
  console.log('Logging in...');

  /**
  * This tells the driver to wait for a moment. This gives any potential alert/notification time
  * to be rendered onto the page. Without it, the alert may go unnoticed and cause the program
  * to fail.
  */
  await driver.sleep(2000);
  let isAlert = false;
  let loginAlert;

  // Tells the driver to switch to the alert if it pops up       
  await driver.switchTo().alert()
    .then(alert => {  // If there is an alert...
      console.log('Login failure alert detected! Login failed...');
      isAlert = true;
      loginAlert = alert;
    })
    .catch(() => {  // If there isn't an alert...
      console.log('No alert detected...');
    });

  // If there was an alert, the empty input details were rejected
  if (isAlert) {
    console.log(loginAlert.getText());
    await loginAlert.accept();
    console.log('Empty input details rejected!');
  }
  else {  // If there isn't an alert, the details were probably accepted, failing the test
    console.log('Empty input details were not invalidated!');
    await driver.close();
    console.log('Test B has failed');
    process.exit();
  }

  console.log('Empty input invalidated - Success!');
  console.log('---------------------------------------------');

  //---------------------------------------------------------------------------------------------------------------------------------------

  /**
   * The last test is to make sure that invalid account details do not lead to a successful
   * login. I.e. the login failure alert should appear, indicating a login prevention.
   * 
   * Here we can assume that the input fields are initially empty from the last test.
   */
  console.log("---------------------------------------------");
  console.log("Now testing invalid account login information");
  console.log("---------------------------------------------");


  for (var i = 0; i < invalidUserEmails.length; i++) {

    // Tells the driver to find the email input field
    emailElement = await driver.findElement(By.name('email'))
      .catch(error => {
        console.log('Failed to find email input!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Found the email input!');

    // Tells the driver to find the password input field
    passwordElement = await driver.findElement(By.name('password'))
      .catch(error => {
        console.log('Failed to find password input!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Found the password input');

    // Tells the driver to find the submission button
    submitElement = await driver.findElement(By.id('contact-submit'))
      .catch(error => {
        console.log('Failed to find the login submission button!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Found the login submission button!');

    // Tells the driver to input the (invalid) account email
    await emailElement.sendKeys(invalidUserEmails[i])
      .catch(error => {
        console.log('Failed to input email!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Inputting email: ' + invalidUserEmails[i]);

    // Tells the driver to input the (invalid) account password
    await passwordElement.sendKeys(invalidUserPasswords[i])
      .catch(error => {
        console.log('Failed to input password!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Inputting password: ' + invalidUserPasswords[i]);

    // Tells the driver to click on the form submission button
    await submitElement.click()
      .catch(error => {
        console.log('Failed to click on the login submission button!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Logging in...');

    /**
    * This tells the driver to wait for a moment. This gives any potential alert/notification time
    * to be rendered onto the page. Without it, the alert may go unnoticed and cause the program
    * to fail.
    */
    await driver.sleep(2000);


    isAlert = false;

    // Tells the driver to switch to the alert if it occurrs    
    await driver.switchTo().alert()
      .then(alert => {  // If the alert occurs...
        console.log('Login failure alert detected! Login failed...');
        isAlert = true;
        loginAlert = alert;
      })
      .catch(() => {  // If no alert occurs...
        console.log('No alert detected...');
      });

    // If an alert occurs, the invalid account details have been rejected
    if (isAlert) {
      console.log(loginAlert.getText());
      await loginAlert.accept();
      console.log('Input details rejected!');
    }
    else {  // Otherwise the account was accepted and the test has failed
      console.log('Input details were not invalidated!');
      await driver.close();
      console.log('Test B has failed');
      process.exit();
    }

    // Tells the driver to clear the input field for emails
    await emailElement.clear()
      .catch(error => {
        console.log('Failed to clear email input!');
        console.log(error);
        driver.close();
        console.log('Program has stopped working...');
        process.exit();
      });
    console.log('Email input cleared...');

    // Tells the driver to clear the input field for passwords
    await passwordElement.clear()
      .catch(error => {
        console.log('Failed to clear password input!');
        console.log(error);
        driver.close();
        console.log('Program has stopped working...');
        process.exit();
      });
    console.log('Password input cleared...');

    console.log('Input invalidated - success!');
    console.log('Ready for next input...');
    console.log('---------------------------------------------');
  }

  //---------------------------------------------------------------------------------------------------------------------------------------

  // If the test was successful, then it is logged and the driver is closed.
  console.log('Test B successful!');
  await driver.close();

  //---------------------------------------------------------------------------------------------------------------------------------------
}

testBFirefox();