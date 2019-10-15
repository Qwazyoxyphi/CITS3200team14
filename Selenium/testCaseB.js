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

async function testBFirefox() {
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
  await driver.get('http://localhost:3000/signin-signup')
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

  let homeLink = await driver.findElement(By.linkText('Home'))
    .catch(error => {
      console.log('Failed to find the link to the homepage! (Home button)');
      console.log(error);
      driver.close();
      console.log('Test B has failed');
      process.exit();
    });
  console.log('Found the homepage link!');

  await homeLink.click()
    .catch(error => {
      console.log('Failed to click on the homepage link! (Home button)');
      console.log(error);
      driver.close();
      console.log('Test B has failed');
      process.exit();
    });
  console.log('Clicked on the homepage link!');

  await driver.getCurrentUrl()
    .then(url => {
      if (url === 'http://localhost:3000/') console.log('Reached homepage successfully!');
      else {
        console.log('Failed to reach homepage!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      }
    })
    .catch(error => {
      console.log('Failed to retrive URL');
      console.log(error);
      driver.close();
      console.log('Program has stopped working...');
      process.exit();
    });

  //---------------------------------------------------------------------------------------------------------------------------------------

  // Tells the driver to go back to the login page
  await driver.get('http://localhost:3000/signin-signup')
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

  /**
   * The following were valid testing accounts at the time of development. They
   * will likely need to be modified on deployment to fit testing accounts
   * that exist on the website's Firebase database.
  */
  let userEmails = ['tester@test.com', 'test2@test.com', 'tester3@test.com'];
  let userPasswords = ['tester', 'tester2', 'tester'];

  console.log("---------------------------------------------");
  console.log("Now testing valid account login information");
  console.log("---------------------------------------------");

  for (var i = 0; i < userEmails.length; i++) {
    let emailElement = await driver.findElement(By.name('email'))
      .catch(error => {
        console.log('Failed to find email input!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Found the email input!');

    let passwordElement = await driver.findElement(By.name('password'))
      .catch(error => {
        console.log('Failed to find password input!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Found the password input');

    let submitElement = await driver.findElement(By.id('contact-submit'))
      .catch(error => {
        console.log('Failed to find the login submission button!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Found the login submission button!');

    await emailElement.sendKeys(userEmails[i])
      .catch(error => {
        console.log('Failed to input email!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Inputting email: ' + userEmails[i]);

    await passwordElement.sendKeys(userPasswords[i])
      .catch(error => {
        console.log('Failed to input password!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Inputting password: ' + userPasswords[i]);

    await submitElement.click()
      .catch(error => {
        console.log('Failed to click on the login submission button!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Logging in...');

    await driver.sleep(2000);
    let isAlert = false;
    let loginAlert;

    // Switching to Alert        
    await driver.switchTo().alert()
      .then(alert => {
        console.log('Login failure alert detected! Login failed...');
        isAlert = true;
        loginAlert = alert;
      })
      .catch(() => {
        console.log('No alert detected...');
      });

    if (isAlert) {
      console.log(loginAlert.getText());
      await loginAlert.accept();
      await driver.close();
      console.log('Test B has failed');
      process.exit();
    }

    await driver.wait(until.elementLocated(By.id(`signOut`)))
      .catch(error => {
        console.log('Failed to load onto folder page! Login failed...');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Login successful!');

    let signOutElement = await driver.findElement(By.id('signOut'))
      .catch(error => {
        console.log('Failed to find sign-out button!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Signing out...');

    await signOutElement.click()
      .catch(error => {
        console.log('Failed to sign out! Could not click on sign-out button...');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });

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
   */
  console.log("---------------------------------------------");
  console.log("Now testing (invalid) *empty* login input");
  console.log("---------------------------------------------");

  let submitElement = await driver.findElement(By.id('contact-submit'))
    .catch(error => {
      console.log('Failed to find the login submission button!');
      console.log(error);
      driver.close();
      console.log('Test B has failed');
      process.exit();
    });
  console.log('Found the login submission button!');

  await submitElement.click()
    .catch(error => {
      console.log('Failed to click on the login submission button!');
      console.log(error);
      driver.close();
      console.log('Test B has failed');
      process.exit();
    });
  console.log('Logging in...');

  await driver.sleep(2000);
  let isAlert = false;
  let loginAlert;

  // Switching to Alert        
  await driver.switchTo().alert()
    .then(alert => {
      console.log('Login failure alert detected! Login failed...');
      isAlert = true;
      loginAlert = alert;
    })
    .catch(() => {
      console.log('No alert detected...');
    });

  if (isAlert) {
    console.log(loginAlert.getText());
    await loginAlert.accept();
    console.log('Empty input details rejected!');
  }
  else {
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
   */
  let invalidUserEmails =    ['tester@test.com', 'tester2@test.com', 'test3@test.com', 'tester2@test.com', '',       'testATtest.com', 'test@test.com.au'];
  let invalidUserPasswords = ['test',            'tester2',          'tester',         '',              'tester2', 'tester',         'tester'];

  console.log("---------------------------------------------");
  console.log("Now testing invalid account login information");
  console.log("---------------------------------------------");

  for (var i = 0; i < invalidUserEmails.length; i++) {
    let emailElement = await driver.findElement(By.name('email'))
      .catch(error => {
        console.log('Failed to find email input!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Found the email input!');

    let passwordElement = await driver.findElement(By.name('password'))
      .catch(error => {
        console.log('Failed to find password input!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Found the password input');

    let submitElement = await driver.findElement(By.id('contact-submit'))
      .catch(error => {
        console.log('Failed to find the login submission button!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Found the login submission button!');

    await emailElement.sendKeys(invalidUserEmails[i])
      .catch(error => {
        console.log('Failed to input email!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Inputting email: ' + invalidUserEmails[i]);

    await passwordElement.sendKeys(invalidUserPasswords[i])
      .catch(error => {
        console.log('Failed to input password!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Inputting password: ' + invalidUserPasswords[i]);

    await driver.sleep(1000);

    await submitElement.click()
      .catch(error => {
        console.log('Failed to click on the login submission button!');
        console.log(error);
        driver.close();
        console.log('Test B has failed');
        process.exit();
      });
    console.log('Logging in...');

    await driver.sleep(2000);
    isAlert = false;

    // Switching to Alert        
    await driver.switchTo().alert()
      .then(alert => {
        console.log('Login failure alert detected! Login failed...');
        isAlert = true;
        loginAlert = alert;
      })
      .catch(() => {
        console.log('No alert detected...');
      });

    if (isAlert) {
      console.log(loginAlert.getText());
      await loginAlert.accept();
      console.log('Input details rejected!');
    }
    else {
      console.log('Input details were not invalidated!');
      await driver.close();
      console.log('Test B has failed');
      process.exit();
    }

    await emailElement.clear()
      .catch(error => {
        console.log('Failed to clear email input!');
        console.log(error);
        driver.close();
        console.log('Program has stopped working...');
        process.exit();
      });
    console.log('Email input cleared...');

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

async function testBChrome() {
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

testBFirefox();
//testBChrome();