/**
 * This script will login to a valid test account and attempt to perform actions on its respective folders and documents. It will attempt to
 * interact with other people's documents as well (via the document slider on the folders page) and try to modify them, with failure expected.
 * It is assumed that there are (test) folders and documents available that can be safely modified whether or not they belong to, or a shared with, the
 * testing account.
 * 
 * The test will involve attempting to create folders with valid and invalid names. It will also involve attempts to access public documents and
 * modify them (hopefully) unsuccessfully. If a prompt appears allowing the test account to delete a document/folder without proper permission,
 * it will dismiss the alert for deletion (it will not accept the prompt to delete the file) and end the test.
 * 
 * The test also looks into the effectiveness of the slider component's arrows, and then check to see if it is able to access the documents page
 * of a specific folder.
 */

const { Builder, By, until, Key, util } = require("selenium-webdriver"); // Pulls out functions from the selenium-websdriver module

const websiteLoginDomain = 'http://localhost:3000/signin-signup';   // Url address of the website's login-page
const websiteFolderDomain = 'http://localhost:3000/folders';       // Url address of the website's folders page
const substringStart = 30;  // Number value representing the start of the url (string) to be taken from the testCaseD folder's documents page

const testEmail = 'tester@test.com';                // VALID Testing account email
const testPassword = 'tester';                      // VALID Testing account password
const testFolderName = 'testCaseD';                 // Example name to be given to created/deleted folder (for testing)
const testFolderDesc = 'This is a test desciption'; // Example description to be given to created/deleted folder (for testing)

/**
 * The id associated with the test file to be opened to check for documents access. Note that the id is necessary for checking
 * if the documents page is accessed. This id is based on the 'test' folder in the tester@test.com account, not to be confused
 * with the 'testCaseD' testing folder, which should be deleted after creation in a successful test.
 */
const testFolderAccessId = '-LrSUX4c1P8o5I1Erxn_';

async function testBFirefox() {
  //---------------------------------------------------------------------------------------------------------------------------------------

  // Sets up the firefox browser for automation
  let driver = await new Builder().forBrowser('firefox').build()
    .catch(error => {
      console.log('Driver failed to build!');
      console.log(error);
      driver.close();
      console.log('Program has stopped working...');
      process.exit();
    });
  console.log('Firefox web driver built!');

  // Tells the driver to visit the website's login domain (localHost for dev)
  await driver.get(websiteLoginDomain)
    .catch(error => {
      console.log('Failed to find website login domain!');
      console.log(error);
      driver.close();
      console.log('Program has stopped working...');
      process.exit();
    });
  console.log('Found website login domain!');

  // Tells the driver to check for the sign-in form
  await driver.findElement(By.name('sign_in_form'))
    .catch(error => {
      console.log('Failed to find the sign-in form!');
      console.log(error);
      driver.close();
      console.log('Program has stopped working...');
      process.exit();
    });
  console.log('Found the sign-in form!');

  // Tells driver to find user email input
  let emailElement = await driver.findElement(By.name('email'))
    .catch(error => {
      console.log('Failed to find email input!');
      console.log(error);
      driver.close();
      console.log('Program has stopped working...');
      process.exit();
    });
  console.log('Found the email input!');

  // Tells driver to find user password input
  let passwordElement = await driver.findElement(By.name('password'))
    .catch(error => {
      console.log('Failed to find password input!');
      console.log(error);
      driver.close();
      console.log('Program has stopped working...');
      process.exit();
    });
  console.log('Found the password input');

  // Tells driver to find the account input submission button
  /**
   * NOTE: typically you would need to assign the variable with 'let' first. For some reason,
   * this particular value name is already initialized beforehand...
   */
  submitElement = await driver.findElement(By.id('contact-submit'))
    .catch(error => {
      console.log('Failed to find the login submission button!');
      console.log(error);
      driver.close();
      console.log('Program has stopped working...');
      process.exit();
    });
  console.log('Found the login submission button!');

  // Tells driver to input email provided from const array of VALID account emails
  await emailElement.sendKeys(testEmail)
    .catch(error => {
      console.log('Failed to input email!');
      console.log(error);
      driver.close();
      console.log('Program has stopped working...');
      process.exit();
    });
  console.log('Inputting email: ' + testEmail);

  // Tells driver to find input password provided from const array of VALID account passwords
  await passwordElement.sendKeys(testPassword)
    .catch(error => {
      console.log('Failed to input password!');
      console.log(error);
      driver.close();
      console.log('Program has stopped working...');
      process.exit();
    });
  console.log('Inputting password: ' + testPassword);

  // Tells driver to click submission button
  await submitElement.click()
    .catch(error => {
      console.log('Failed to click on the login submission button!');
      console.log(error);
      driver.close();
      console.log('Program has stopped working...');
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
    console.log('Program has stopped working...');
    process.exit();
  }

  /**
   * This will give the website enough time to load the test account's details and the folders page
   * for the account. It may need adjusting for slower computers.
   */
  await driver.sleep(1000);

  // Asks the driver what the url is after clicking the 'Home' link.
  await driver.getCurrentUrl()
    .then(url => { // If successful...
      console.log('Url is: ' + url);
      console.log('Folders page url should be: ' + websiteFolderDomain);
      if (url === websiteFolderDomain) console.log('Reached folders page successfully!');
      else { // If unsuccessful...
        console.log('Failed to reach folders page!');
        driver.close();
        console.log('Test D has failed');
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

  /**
   * This test is to check if we can create a new folder, then find it on the folders page successfully.
   * 
   * Note: this can tricky to do in Selenium due to the dynamic nature of the data and folder elements. If a failure occurs during the
   * creation and deletion tests for the testCaseD folder, it is highly recommended that a manual check of the folder's existence be
   * done to ensure it is non-existent before the next test.
   */

  console.log("---------------------------------------------");
  console.log("Now testing folder creation!");
  console.log("---------------------------------------------");

  // Tells driver to find the folder creation button
  let folderCreateElement = await driver.findElement(By.name('create_new_folder'))
    .catch(error => {
      console.log('Failed to find folder creation button!');
      console.log(error);
      driver.close();
      console.log('Test D has failed');
      process.exit();
    });
  console.log('Found the folder creation button!');

  // Tells driver to click the folder creation button
  await folderCreateElement.click()
    .catch(error => {
      console.log('Failed to click on folder creation button!');
      console.log(error);
      driver.close();
      console.log('Test D has failed');
      process.exit();
    });
  console.log('Folder creation button clicked');

  // Tells driver to look for a folder creation form
  await driver.findElement(By.name('create_new_folder_form'))
    .catch(error => {
      console.log('Failed to find the folder creation form!');
      console.log(error);
      driver.close();
      console.log('Test D has failed');
      process.exit();
    });
  console.log('Found the folder creation form!');

  // Tells driver to find the folder creation form's folder name input field
  let folderNameInput = await driver.findElement(By.name('create_new_folder_form_name_input'))
    .catch(error => {
      console.log('Failed to find folder name input field!');
      console.log(error);
      driver.close();
      console.log('Test D has failed');
      process.exit();
    });
  console.log('Found folder name input field!');

  // Tells driver to find the folder creation form's folder description input field
  let folderDescInput = await driver.findElement(By.name('create_new_folder_form_description_input'))
    .catch(error => {
      console.log('Failed to find folder description input field!');
      console.log(error);
      driver.close();
      console.log('Test D has failed');
      process.exit();
    });
  console.log('Found folder description input field!');

  // Tells driver to find the create submission button
  let folderCreateSubmit = await driver.findElement(By.name('create_new_folder_form_submit'))
    .catch(error => {
      console.log('Failed to find folder creation form submission button');
      console.log(error);
      driver.close();
      console.log('Test D has failed');
      process.exit();
    });
  console.log('Found create form submission button!');

  // Tells driver to input a folder name into the form name field (provided by const 'testFolderName')
  /**
   * NOTE - for some reason, unlike other input fields, the framing of the creation forms input fields requires
   * the Selenium driver to first click on the input frame before being allowed to send the input text.
   */
  await folderNameInput.click()
    .catch(error => {
      console.log('Failed to input folder name!');
      console.log(error);
      driver.close();
      console.log('Test D has failed');
      process.exit();
    });
  await folderNameInput.sendKeys(testFolderName)
    .catch(error => {
      console.log('Failed to input folder name!');
      console.log(error);
      driver.close();
      console.log('Test D has failed');
      process.exit();
    });
  console.log('Inputting folder name: ' + testFolderName);

  // Tells driver to input a folder description into the form description field (provided by const 'testFolderDesc')
  /**
   * NOTE - similarly to the name input field, Selenium first needs to click on the description input field before
   * it can send the input text.
   */
  await folderDescInput.click()
    .catch(error => {
      console.log('Failed to input folder description!');
      console.log(error);
      driver.close();
      console.log('Test D has failed');
      process.exit();
    });
  await folderDescInput.sendKeys(testFolderDesc)
    .catch(error => {
      console.log('Failed to input folder description!');
      console.log(error);
      driver.close();
      console.log('Test D has failed');
      process.exit();
    });
  console.log('Inputting description: ' + testFolderDesc);

  // Tells driver to click create submission button
  await folderCreateSubmit.click()
    .catch(error => {
      console.log('Failed to click on the create submission button!');
      console.log(error);
      driver.close();
      console.log('Test D has failed');
      process.exit();
    });
  console.log('Now beginning process of checking if folder exists...');

  // Tell the driver to wait until the page url has changed, inferring the documents has loaded
  await driver.wait(until.urlContains(websiteFolderDomain + '/'))
    .catch(error => {
      console.log('> Failed to load new page!');
      console.log(error);
      driver.close();
      console.log('Test D has failed');
      process.exit();
    });
  console.log('> New page was loaded...');


  // Tells the driver to find the url of the new folder's page which will be used for finding the folder element on the folders page...
  let testFolderUrl;
  await driver.getCurrentUrl()
    .then(url => { // If successful...
      testFolderUrl = url;
      console.log('> Retrieved new folder url successfully: ' + testFolderUrl);
    })
    .catch(error => { // If unsuccessful
      console.log('> Failed to retrieve URL');
      console.log(error);
      driver.close();
      console.log('Program has stopped working...');
      process.exit();
    });

  // Tells the driver to find 'Folders' link to go back to the folders page
  let folderPageLink = await driver.findElement(By.linkText('Folders'))
    .catch(error => {
      console.log('> Failed to find Folders page link!');
      console.log(error);
      driver.close();
      console.log('Test D has failed');
      process.exit();
    });
  console.log('> Found folders page link...');

  // Tells the driver to click on folders page link
  await folderPageLink.click()
    .catch(error => {
      console.log('> Failed to click on folders page link!');
      console.log(error);
      driver.close();
      console.log('Test D has failed');
      process.exit();
    });
  console.log('> Navigating back to folders page...');

  // Tells the driver to check the page url for the folders page domain
  await driver.getCurrentUrl()
    .then(url => { // If successful...
      if (url === websiteFolderDomain) console.log('> Reached folders page successfully!');
      else { // If unsuccessful...
        console.log('> Failed to reach folders page!');
        console.log(error);
        driver.close();
        console.log('Test D has failed');
        process.exit();
      }
    })
    .catch(error => {   // If another failure has occurred...
      console.log('> Failed to retrieve URL');
      console.log(error);
      driver.close();
      console.log('Program has stopped working...');
      process.exit();
    });

  // Tells driver to check for any elements with a name equivalent to the id extracted from the documents page of the test case folder
  testFolderId = testFolderUrl.substr(substringStart); // Takes the url from earlier and extracts the unique folder id...
  console.log('Looking for elements with name of folder id: ' + testFolderId);
  await driver.findElement(By.name(testFolderId))
    .catch(error => {
      console.log('Failed to find new folder element');
      console.log(error);
      driver.close();
      console.log('Test D has failed');
      console.log('***Folder may still exist. Please check manually for its existence and delete it if it does exist...')
      process.exit();
    });
  console.log('New folder found! Creation successful')
  console.log('---------------------------------------------')


  //---------------------------------------------------------------------------------------------------------------------------------------

  /**
   * This test is to check if we can delete the newly created folder, then find it has disappeared from the folders page.
   * 
   * Note: this can tricky to do in Selenium due to the dynamic nature of the data and folder elements. If a failure occurs during the
   * creation and deletion tests for the testCaseD folder, it is highly recommended that a manual check of the folder's existence be
   * done to ensure it is non-existent before the next test.
   */

  console.log("---------------------------------------------");
  console.log("Now testing folder deletion capability");
  console.log("---------------------------------------------");

  let testFolderDelete = await driver.findElement(By.name('delete_' + testFolderId))
    .catch(error => {
      console.log('Failed to find folder delete button/element');
      console.log(error);
      driver.close();
      console.log('Test D has failed');
      console.log('***Folder may still exist. Please check manually for its existence and delete it if it does exist...')
      process.exit();
    });

  await testFolderDelete.click()
  .catch(error => {
    console.log('Failed to click on folder delete button/element');
    console.log(error);
    driver.close();
    console.log('Test D has failed');
    console.log('***Folder may still exist. Please check manually for its existence and delete it if it does exist...')
    process.exit();
  });
  console.log('Clicked on the delete button');

  await driver.sleep(1000);

  isAlert = false;
  let deleteAlert;

  // Tells the driver to switch to the alert if it pops up       
  await driver.switchTo().alert()
    .then(alert => {  // If there is an alert...
      console.log('Delete confirmation alert detected!');
      console.log(alert.getText());
      isAlert = true;
      deleteAlert = alert;
    })
    .catch(() => {  // If there isn't an alert...
      console.log('No delete confirmation alert detected...');
    });

  // If there was an alert, then we can accept it to delete the folder
  if (isAlert) {
    await deleteAlert.accept();
    console.log('> alert accepted...');
  }
  else {  // If there isn't an alert, then the program fails to delete the folder
    console.log('Cannot delete folder!');
    await driver.close();
    console.log('Test B has failed');
    process.exit();
  }

  await driver.sleep(1000);

  // Tells the driver to try to find the folder element again. If it fails, we can assume the folder no longer exists
  await driver.findElement(By.name(testFolderId))
    .then(() => {
      console.log('Program was able to find folder again. Deletion failed!');
      driver.close();
      console.log('Test D has failed');
      console.log('***Folder may still exist. Please check manually for its existence and delete it if it does exist...')
      process.exit();
    })
    .catch(() => {
      console.log('No folder element exists. Deletion was a success!');
    });

  console.log('New folder deletion successful')
  console.log('---------------------------------------------')

  //---------------------------------------------------------------------------------------------------------------------------------------

  // If the test was successful, then it is logged and the driver is closed.
  console.log('Test D successful!');
  await driver.close();

  //---------------------------------------------------------------------------------------------------------------------------------------
}



testBFirefox();