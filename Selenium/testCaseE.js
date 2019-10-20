/**
 * This script will login to a valid test account and attempt to perform actions on one of its respective folder's documents.
 * It is assumed that there are (test) folders and documents available that can be safely modified whether or not they belong to, or a shared with, the
 * testing account.
 * 
 * The test will involve an attempt to create a document under the test account's name, and delete it shortly afterwards by responding to a
 * deletion confirmation alert.
 * 
 * This is simply a automatable extract of the full test case for E. Logs containing information with respect to the remaining aspects 
 * to the test case can be found in the testing logs within the testing documentation.
 */

const { Builder, By, until, Key, util } = require("selenium-webdriver"); // Pulls out functions from the selenium-webdriver module

const websiteHomeDomain = 'http://localhost:3000';                  // Url address of the website's home-page
const websiteLoginDomain = 'http://localhost:3000/signin-signup';   // Url address of the website's login-page
const websiteFolderDomain = 'http://localhost:3000/folders';        // Url address of the website's folders page

const testEmail = 'tester@test.com';                  // VALID Testing account email
const testPassword = 'tester';                        // VALID Testing account password
const testDocumentName = 'testCaseE';                 // Example name to be given to created/deleted document (for testing)
const testDocumentDesc = 'This is a test desciption'; // Example description to be given to created/deleted document (for testing)
const substringStart = 51;  // Number value representing the start point of the url (string) to be taken from the testCaseE test document's diagram page

/**
 * The id associated with the test folder to be opened for document manipulation. Note that the id is necessary for checking
 * if the documents page is accessed. This id is based on the test folder (aptly named 'test') in the tester@test.com account.
 */
const testFolderAccessId = '-LrSUX4c1P8o5I1Erxn_';

async function testEFirefox() {
  console.log("---------------------------------------------");
  console.log("Commencing automatic testing");
  console.log("---------------------------------------------");
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

  // Asks the driver what the url is to check if it's been redirected to the folders page.
  await driver.getCurrentUrl()
    .then(url => { // If successful...
      console.log('> Url is: ' + url);
      console.log('> Folders page url should be: ' + websiteFolderDomain);
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

  console.log('Set up complete!')
  console.log('---------------------------------------------')

  //---------------------------------------------------------------------------------------------------------------------------------------

  /**
   * This is a simple test to ensure that clicking the link on the website header called 'Folders' properly redirects the program back to
   * the folders page of the testing account.
   */

  console.log("---------------------------------------------");
  console.log("Testing capabilties of 'Folders' button");
  console.log("---------------------------------------------");

  // Tells the driver to find the home-page link
  let homePageLink = await driver.findElement(By.linkText('Home'))
    .catch(error => {
      console.log('Failed to find home page link!');
      console.log(error);
      driver.close();
      console.log('Program has stopped working...');
      process.exit();
    });
  console.log('Found home page link!');

  await homePageLink.click()
    .catch(error => {
      console.log('Failed to click home-page link!');
      console.log(error);
      driver.close();
      console.log('Program has stopped working...');
      process.exit();
    });
  console.log('Redirecting to home page...');

  let folderPageLink = await driver.findElement(By.linkText('Folders'))
    .catch(error => {
      console.log('Failed to find folders page link!');
      console.log(error);
      driver.close();
      console.log('Test E has failed');
      process.exit();
    });
  console.log('Found website home page!');

  await folderPageLink.click()
    .catch(error => {
      console.log('Failed to click on folders link!');
      console.log(error);
      driver.close();
      console.log('Test E has failed');
      process.exit();
    });
  console.log('Clicked on folders link...');

  await driver.getCurrentUrl()
    .then(url => { // If successful...
      if (url === websiteFolderDomain) console.log('> Reached folders page successfully!');
      else { // If unsuccessful...
        console.log('> Failed to reach folders page!');
        console.log(error);
        driver.close();
        console.log('Test E has failed');
        process.exit();
      }
    })
    .catch(error => {
      console.log('Failed to get page url!');
      console.log(error);
      driver.close();
      console.log('Program has stopped working...');
      process.exit();
    });

  console.log('Folder link is functional!');
  console.log('---------------------------------------------');


  //---------------------------------------------------------------------------------------------------------------------------------------

  /**
   * The next two test are complex tests which attempt to create a new document and delete it shortly afterwards. In this test it looks for 
   * the document creation form elements to input document details, then it gets the url from the new document page to extract that document's
   * unique ID, as well as confirm the existence of the document's diagram page.
   * 
   * Note: this can tricky to do in Selenium due to the dynamic nature of the data and folder elements. If a failure occurs during the
   * creation and deletion tests for the testCaseD folder, it is highly recommended that a manual check of the folder's existence be
   * done to ensure it is non-existent before the next test.
   */

  console.log("---------------------------------------------");
  console.log("Testing document creation capabilities");
  console.log("---------------------------------------------");

  // Tells the driver to find the test folder for the document test
  let testFolderElement = await driver.findElement(By.name(testFolderAccessId))
    .catch(error => {
      console.log('Failed to find the test folder!');
      console.log(error);
      driver.close();
      console.log('Test E has failed');
      process.exit();
    });
  console.log('Found the test folder!');

  // Tells the driver to go into the documents page of our test folder
  await testFolderElement.click()
    .catch(error => {
      console.log('Failed to click on test folder!');
      console.log(error);
      driver.close();
      console.log('Test E has failed');
      process.exit();
    });
  console.log('Accessing test folder documents...');

  // Tells the driver to check if the page is the test folder's documents page
  await driver.getCurrentUrl()
    .then(url => { // If successful...
      console.log('Attempting to access: ' + websiteFolderDomain + '/' + testFolderAccessId);
      console.log('Accessed: ' + url);
      if (url === websiteFolderDomain + '/' + testFolderAccessId) console.log('> Reached documents page successfully!');
      else { // If unsuccessful...
        console.log('> Failed to reach documents page!');
        console.log(error);
        driver.close();
        console.log('Test E has failed');
        process.exit();
      }
    })
    .catch(error => {
      console.log('Failed to get url!');
      console.log(error);
      driver.close();
      console.log('The program has stopped working...');
      process.exit();
    });

  // Tells driver to find the document creation button
  let documentCreateElement = await driver.findElement(By.name('create_new_document'))
    .catch(error => {
      console.log('Failed to find document creation button!');
      console.log(error);
      driver.close();
      console.log('Test E has failed');
      process.exit();
    });
  console.log('Found the document creation button!');

  // Tells driver to click the document creation button
  await documentCreateElement.click()
    .catch(error => {
      console.log('Failed to click on document creation button!');
      console.log(error);
      driver.close();
      console.log('Test E has failed');
      process.exit();
    });
  console.log('Document creation button clicked');

  // Tells driver to look for a document creation form
  await driver.findElement(By.name('create_new_document_form'))
    .catch(error => {
      console.log('Failed to find the document creation form!');
      console.log(error);
      driver.close();
      console.log('Test E has failed');
      process.exit();
    });
  console.log('Found the document creation form!');

  // Tells driver to find the document creation form's document name input field
  let documentNameInput = await driver.findElement(By.name('create_new_document_form_name_input'))
    .catch(error => {
      console.log('Failed to find document name input field!');
      console.log(error);
      driver.close();
      console.log('Test E has failed');
      process.exit();
    });
  console.log('Found document name input field!');

  // Tells driver to find the document creation form's document description input field
  let documentDescInput = await driver.findElement(By.name('create_new_document_form_description_input'))
    .catch(error => {
      console.log('Failed to find document description input field!');
      console.log(error);
      driver.close();
      console.log('Test E has failed');
      process.exit();
    });
  console.log('Found document description input field!');

  // Tells driver to find the create submission button
  let documentCreateSubmit = await driver.findElement(By.name('create_new_document_form_submit'))
    .catch(error => {
      console.log('Failed to find document creation form submission button');
      console.log(error);
      driver.close();
      console.log('Test E has failed');
      process.exit();
    });
  console.log('Found create form submission button!');

  // Tells driver to input a document name into the form name field (provided by const 'testDocumentName')
  await documentNameInput.sendKeys(testDocumentName)
    .catch(error => {
      console.log('Failed to input document name!');
      console.log(error);
      driver.close();
      console.log('Test E has failed');
      process.exit();
    });
  console.log('Inputting document name: ' + testDocumentName);

  // Tells driver to input a folder description into the form description field (provided by const 'testFolderDesc')
  await documentDescInput.sendKeys(testDocumentDesc)
    .catch(error => {
      console.log('Failed to input document description!');
      console.log(error);
      driver.close();
      console.log('Test E has failed');
      process.exit();
    });
  console.log('Inputting description: ' + testDocumentDesc);

  // Tells driver to click create submission button
  await documentCreateSubmit.click()
    .catch(error => {
      console.log('Failed to click on the create submission button!');
      console.log(error);
      driver.close();
      console.log('Test E has failed');
      process.exit();
    });
  console.log('Now beginning process of checking if document exists...');

  // Tell the driver to wait until the page url has changed, inferring the documents has loaded
  await driver.wait(until.urlContains(websiteFolderDomain + '/' + testFolderAccessId + '/'))
    .catch(error => {
      console.log('> Failed to load new page!');
      console.log(error);
      driver.close();
      console.log('Test E has failed');
      process.exit();
    });
  console.log('> New page was loaded...');


  // Tells the driver to find the url of the new diagram page which will be used for finding the test document element on the document page...
  let testDocumentUrl;
  await driver.getCurrentUrl()
    .then(url => { // If successful...
      testDocumentUrl = url;
      console.log('> Retrieved new document url successfully: ' + testDocumentUrl);
    })
    .catch(error => { // If unsuccessful
      console.log('> Failed to retrieve URL');
      console.log(error);
      driver.close();
      console.log('Program has stopped working...');
      process.exit();
    });

  // Tells the driver to go back to the test folder's documents page
  await driver.get(websiteFolderDomain + '/' + testFolderAccessId)
    .catch(error => {
      console.log('> Failed to redirect to test folder documents page!');
      console.log(error);
      driver.close();
      console.log('Program has stopped working...');
      process.exit();
    });
  console.log('> Found test folder documents page...');

  // Tells driver to check for any elements with a name equivalent to the id extracted from the diagram page of the test case document
  testDocumentId = testDocumentUrl.substr(substringStart); // Takes the url from earlier and extracts the unique document id...
  console.log('Looking for elements with name of document id: ' + testDocumentId);
  await driver.findElement(By.name(testDocumentId))
    .catch(error => {
      console.log('Failed to find new document element');
      console.log(error);
      driver.close();
      console.log('Test E has failed');
      console.log('***Document may still exist. Please check manually for its existence and delete it if it does exist...')
      process.exit();
    });

  console.log('New document was created - success!')
  console.log('---------------------------------------------')

  //---------------------------------------------------------------------------------------------------------------------------------------

  /**
  * In this test the web driver looks for the document deletion button using the ID extracted earlier. The web driver can then respond
  * to the delete confirmation alert, where it will then attempt to find the document on the documents page, being successful if 
  * it no longer exists (which is inferred from the inability for the webdriver to find said document).
  */

  console.log("---------------------------------------------");
  console.log("Testing document deletion capabilities");
  console.log("---------------------------------------------");

  let testDocumentDelete = await driver.findElement(By.name('delete_' + testDocumentId))
    .catch(error => {
      console.log('Failed to find document delete button/element');
      console.log(error);
      driver.close();
      console.log('Test E has failed');
      console.log('***Document may still exist. Please check manually for its existence and delete it if it does exist...')
      process.exit();
    });
    console.log('Found document deletion button')

  await testDocumentDelete.click()
    .catch(error => {
      console.log('Failed to click on document delete button/element');
      console.log(error);
      driver.close();
      console.log('Test E has failed');
      console.log('***Document may still exist. Please check manually for its existence and delete it if it does exist...')
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

  // If there was an alert, then we can accept it to delete the document
  if (isAlert) {
    await deleteAlert.accept();
    console.log('> alert accepted...');
  }
  else {  // If there isn't an alert, then the program fails to delete the document
    console.log('Cannot delete document!');
    await driver.close();
    console.log('Test E has failed');
    process.exit();
  }

  /**
   * Note - on deletion of a document, there is often a delay before the website recognizes and refreshes the page to reflect
   * the document having been deleted. If the document element continues being found by the driver (after its supposed deletion)
   * then consider increasing the delay in the driver's actions below.
   */
  await driver.sleep(2000);

  // Tells the driver to try to find the document element again. If it fails, we can infer the document no longer exists
  await driver.findElement(By.name(testDocumentId))
    .then(() => {
      console.log('Program was able to find document again. Deletion failed!');
      driver.close();
      console.log('Test E has failed');
      console.log('***Document may still exist. Please check manually for its existence and delete it if it does exist...')
      process.exit();
    })
    .catch(() => {
      console.log('No document element exists');
    });

  console.log('Document successfully deleted - success!')
  console.log('---------------------------------------------')

  //---------------------------------------------------------------------------------------------------------------------------------------

  // If the test was successful, then it is logged and the driver is closed.
  console.log('Test E successful!');
  await driver.close();

  //---------------------------------------------------------------------------------------------------------------------------------------
}

testEFirefox();