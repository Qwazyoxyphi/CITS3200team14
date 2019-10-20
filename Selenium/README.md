# Selenium Automatic Testing

[TOC]

## What is Selenium?

- An open-source tool that can automate almost any web browser.

- It can be used to test applications.

- Fast and easy to use.
  - Works well with large sets of data.
  - Guaranteed accuracy.
  
- Directly runs scripts for any web browser to automate the web application and test it.

  

## Why Use Selenium?

- Is an automated testing tool; saves on resources typically associated with manual testing.
- It’s Open Source; free.
  
  - Also has community support.
- Works well with any operating system.
  
  - Windows, Linux, Mac.
- Performs tests on any web browser.
- Supports multiple programming languages.
  - Java, C#, Ruby, Python, Perl, PHP, JavaScript (Node.js).
  
    
  

## Versions and Suite of Tools:

The suite is comprised of four components:
- Selenium IDE

- Selenium Grid

- Selenium RC

- Selenium WebDriver

  

Selenium RC was merged with WebDriver.
- Selenium WebDriver now has better functionality.
  
  

## How to Set Up Selenium

### Software Prerequisites

There are three software prerequisites to begin using the Selenium test case scripts:
- Node.js needs to be installed.
- A suitable programming environment.
- Selenium web drivers (Chrome, Firefox, etc.) need to be downloaded and set to PATH variables.

It is assumed that both Node.js and an IDE of choice are already installed to run website development.




### Installing the Selenium Web Drivers

To install the Selenium web drivers, do the following:
1. Go to the *npm* website: https://www.npmjs.com/package/selenium-webdriver
2. Scroll down until you find the list of web drivers.
3. Download the Chrome and Firefox web drivers (more information below).
4. Extract the .exe files for the drivers into a single folder. This will be our web drivers’ path folder.
5. Make sure the file containing the web drivers is specified in the system's 'path' environment variables (see below).



Now we can setup our Selenium scripts via npm.

1. Go to (or create) the folder you intend to store your Selenium scripts in.

2. Using Command Prompt (or other terminal depending on your system), type:
	> npm init

	*(Make sure you execute the command while in your script folder directory in VSCode)*
	
3. Another way to quickly set up the package.json file is to type:

  > npm init -y

  *(This will set up the package with all of the default values)*

4. You’ll be asked a series of questions to set up you Selenium folder’s package.json file:

   1. For ‘package name’, just leave it blank and continue.
   2. For ‘version’, just leave it blank and continue.
   3. For ‘description’, feel free to give it a description if you so choose.
   4. For ‘entry point’, just leave it blank and continue.
   5. Also leave ‘test command’, ‘git repository’ and ‘keywords’ blank.
   6. For ‘author’, feel free to write your name if you want.
   7. For ‘license’, we’ll be using MIT.
      *(If you used 'npm init -y', these values should be the default)*

5. In the Selenium folder, create a file called ‘index.js’. Once created, type in the terminal:
   > npm install selenium-webdriver

   A new ‘node-modules’ folder should appear in the Selenium folder.



For more details on the selenium-webdriver module, check out the Documentation on the SeleniumHQ website: https://www.seleniumhq.org/docs/



#### GeckoDriver (Firefox)

Firefox web driver uses GeckoDriver v0.26.0 which can be downloaded from https://github.com/mozilla/geckodriver/releases/
- Driver used for Selenium script development extracted from "geckodriver-v0.26.0-win64.zip".
  
  

#### ChromeDriver (Google chrome)

Google Chrome web driver uses ChromeDriver v77.0.3865.40 which can be downloaded from https://chromedriver.chromium.org/
- Driver used for Selenium script development extracted from "chromedriver_win32.zip".
  
  

### Setting Up Path to Web Drivers (Windows 10)

1. On Windows 10, in the search bar type ‘Edit the system environment variables’ and click on it.

2. At the bottom of the new window, click on the button that says ‘Environment Variables’.

3. On the new ‘Environment Variables’ window, click on ‘Path’ which is in the list of ‘User Variables’ and then click on the ‘edit’ button just below the list.

4. Click on the ‘new’ button and input the directory to the web drivers folder you created earlier. 

5. Click ok on all the windows once done to finish.

   


## Selenium Test Cases

The test cases are used to test the functional capabilities of the website, logging information based on the state of the driver as it accesses the different elements of the website and interacts with them.

Each test case runs using asynchronous functions that allow the programs to wait for the driver to load and interact with the website. Additionally, the programs will log their progress in the terminal so that testers can see where an error occurs if one does occur.



Each test case is written to work primarily with the Firefox browser. Further development is needed in order to automate testing in other browsers, although it's indeed the case that the script will often work cross-browser with little (if any) change to the original code. 

For an example, try running **example.js** via:

> node example.js

You should see both the GeckoDriver and the ChromeDriver working to automatically look up Selenium via google search. On inspection of the code, you should find both driver functions to be essentially identical.



**NOTE:** the test cases are specifically developed with development mode, testing accounts, folders and documents in mind. Values including the website's domain, test account details (etc.) will need to be changed in order to suit testing of the website after deployment.



### The Test Cases

#### Test Case A

Run using the following in the terminal:
> node testCaseA

This program will attempt to access the website domain (the URL), then attempt to click on the login button. 
- If successful, it will attempt to switch the form to the 'sign-up' form, finally logging its success. 

- Any errors will end the program and log the failed attempt.
  
  

#### Test Case B

Run using the following in the terminal:
> node testCaseB

This program will attempt to access the website's login domain (the URL) and attempt to toggle the form to the sign-up form.  

On a success, it will check to see if the home-page button (link) works successfully from the sign-in/sign-up page.  

If it manages to navigate back to the sign-in/sign-up page, it will then attempt to login with multiple sources of valid user information (made for testing purposes), logging in and out of those accounts each once while logging its successes. 

The program will then attempt to login in without inputting any user credentials and log what happens (success occurs when the login is invalidated). 

Finally, it will then try to log in using multiple sources of invalid user information, logging the results.


#### Test Case D

Run using the following in the terminal:
> node testCaseD

This program will login to a valid test account and attempt to perform actions on its respective folders. 

It is assumed that there are (test) folders and documents available that can be safely modified whether or not they belong to, or a shared with, the testing account.

The test will involve an attempt to create a folder under the test account's name, and delete it shortly afterwards by responding to a deletion confirmation alert.  

*This is simply a automatable extract of the full test case for D. Logs containing information with respect to the remaining aspects to the test case can be found in the testing logs within the testing documentation.*




#### Test Case E

Run using the following in the terminal:
> node testCaseE

This program will login to a valid test account and attempt to perform actions on one of its respective folder's documents.

It is assumed that there are (test) folders and documents available that can be safely modified whether or not they belong to, or a shared with, the testing account.

The test will involve an attempt to create a document under the test account's name, and delete it shortly afterwards by responding to a deletion confirmation alert.

*This is simply a automatable extract of the full test case for E. Logs containing information with respect to the remaining aspects to the test case can be found in the testing logs within the testing documentation.*




### Editing the Scripts

On deployment, the Selenium programs will stop working due to new database information, domain names (etc.).

Each script provides easy modification of such values as **const** variable. These include:
- **{ Builder, By, until, Key, util }**: the initialization constants used to pull out functions from the selenium-webdriver node module.
- **websiteHomeDomain**: The URL of the website's home page.
- **websiteLoginDomain**: The URL of the website's sign-in/sign-up page.
- **websiteFolderDomain**: The URL of the website's folders page.
- **userEmails** & **invalidUserEmails**: Email information used in test case B.
- **userPasswords** & **invalidUserPasswords**: The URL of the website's home page.
- **substringStart**: An number value used to extract folder and document ID from their documents page and diagram page URLs (respectively) via *substr()*.
  - Value is affected by the length of the domain.
  - It should be adjusted to take the folder ID from the URL of the test folder's documents page in test case D.
  - It should be adjusted to take the document ID from the URL of the test document's diagram page in test case E.
- **testEmail**: The email address of the testing account to be used.
- **testPassword**: The password of the testing account to be used.
- **testFolderName** & **testFolderDesc**: The example name and description to be given to the folder being created and deleted in test case D.
- **testDocumentName** & **testDocumentDesc**: The example name and description to be given to the document being created and deleted in test case E.
- **testFolderAccessId**: The ID of a testing folder pre-generated in the testing account which is used in test case E for document creation and deletion.
  



#### 'await'

'await' is an operator used in *async* functions to tell an expression to wait for a *promise*.

Due to websites often taking time to load and process information between the client (user) and the server (database, etc.), it is essential to use 'await' in order to tell the Selenium programs to wait for the website to finish each process.

**Note** that when using driver functions, an 'await' operator should always be declared before the function itself, unless the function occurs within a *then* or *catch* block of another driver function (which should already have an 'await' operator declared before it). 
- Often, editing or creating new Selenium programs will result in errors from null promises due to a driver function being called without an 'await' operator.
- Other issues may occur when attempting to use an 'await' operator on a driver function that is part of a *then* or *catch* block of another function using the 'await' operator.

Sometimes using 'await' isn't enough, and the driver needs to be forced into a delay to allow for the website to process.




#### driver.sleep()

'driver.sleep()' is a driver function that forces the driver in a program to stop for a given amount of time. It's very useful, albeit clunky, when managing Selenium programs and slow processes. It takes a number input in milliseconds, that is an input of *1000* is equivalent to *1 second*.

It is used to give the website time to update and return information to the user from the database, which can be quite slow on older computers or high-latency networks.

The test cases make use of this function for some of the processes, and can be adjusted for testing on slower computers. Keep in mind that the waiting times may vary depending on the web browser used during testing.




#### driver.findElements(By.method)

'driver.findElements(By.*method*)' is a commonly used driver function used to find and assign elements on the webpage to variables in the Selenium programs.

It works by searching through the website's HTML code, looking for elements of the code that correspond to the specified attributes given by the *method* used.




#### More Information

For more information, you can visit https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index.html




## Known Issues & Recommendations

Sometimes the Selenium scripts may run too quickly, even when using **await**. These issues can mostly be maintained by increasing any respective **driver.sleep()** times.
- Slow computers or high latency might cause a multitude of problems with the functionality of the test scripts when interacting with website elements.

A bug occurs when using Selenium to test valid and invalid account logins on the login page. 
- If an invalid test login uses a valid account email, and the next test account case uses that email's associated password, it will sometimes login to that account even if the email input is different.
- The same case occurs when a password associated with an email account is used with the wrong email, then the next case input is the email that uses that password (and is valid), even if the email comes with  a different password input.