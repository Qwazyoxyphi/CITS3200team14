# Testing Logs

[TOC]

## Test Cases

### Test Case A - **Home Page**   (Selenium-tested)

| Action (Input Commands or Data)         | Outcome (Output Data or System Messages)              | Pass/Fail       |
| ------------- | ---------------- | --------- |
| Type the URL http://domainname.com.au.       | Navigation to the homepage is permitted. | Pass - Selenium testable! |
| Click on the Login button in the top right-hand corner.    | Navigation to the Login page is permitted. | Pass - Selenium testable! |
| Click on the Sign Up button in the top right-hand corner.    | Navigation to the Sign Up page is permitted. | Pass - Selenium testable! |



### Test Case B - **Login Page**   (Selenium-tested)

| Action (Input Commands or Data)         | Outcome (Output Data or System Messages)              | Pass/Fail       |
| ------------- | ---------------- | --------- |
| Type the URL http://domainname.com.au/login       | Navigation to the Login Page is permitted. | Pass - Selenium testable! |
| Click on the Sign Up button instead of Login.     | Navigation to the Sign Up page is permitted. | Pass - Selenium testable! |
| Click on the Home link.      | Navigation to the Home page is permitted. | Pass - Selenium testable! |
| Correct credentials are inputted by the user. Login is then clicked. | Navigation to the Folders Page for that particular user is permitted.   | Pass - Selenium testable! |
| No credentials are inputted. Login is then clicked. | Informative error handling message is displayed.   | Pass - Selenium testable! |
| Incorrect credentials are inputted. | Informative error handling message is displayed.   | Acceptable - see  |



### Test Case C - **Sign Up Page**  

| Action (Input Commands or Data)         | Outcome (Output Data or System Messages)              | Pass/Fail       |
| ------------- | ---------------- | --------- |
| Type the URL http://domainname.com.au/signup       | Navigation to the Sign Up Page is permitted. | Pass! |
| Click on the Home link.    | Navigation to the Home page is permitted. | Pass! |
| Click on the Login button.      | Navigation to the Login page is permitted. | Pass! |
| New username, password, and confirmed password is inputted. Sign Up is then clicked. | A confirmation message is displayed and navigation to the Folders Page for that particular user is permitted.   | Pass! |
| No credentials are inputted. Sign up is then clicked. | Informative error handling message is displayed. | Pass! |
| Credentials are only partially inputted. Sign up is then clicked. | Informative error handling message is displayed. | Pass! |
| Passwords entered do not match. | Informative error handling message is displayed. | Pass! |
| A username is inputted which exists in the database. | Informative error handling message is displayed. | Pass! |
| Credentials with invalid characters are inputted. | Informative error handling message is displayed. | Pass! |



### Test Case D - **Folders Page**  (Selenium-tested)

| Action (Input Commands or Data)         | Outcome (Output Data or System Messages)              | Pass/Fail       |
| ------------- | ---------------- | --------- |
| Click on the Create Folder button. A unique project name is inputted.     | Pop-up window asking for project name. A new folder is created both on the web-app and in firebase. | Pass - Selenium testable! |
| Click on the Create Folder button. A non-unique project name is inputted.     | ***Scrapped*** | - |
| Hover over an existing project owned by the user. Click the dropdown arrow and select 'delete'. | The project and its contents are deleted both on the web-app and in firebase. | Pass - Selenium testable! |
| Hover over an existing project **not** owned by the user. Click the dropdown arrow and select 'delete'. | ***Scrapped*** | - |
| Click on the left and right arrows in the top slider bar. | The bar is toggled and other documents are shown with enter and leave animations in the slide. | Pass! |
| An existing folder is clicked | Navigation to the Documents Page for that particular Folder for that particular User is permitted | Pass - Selenium testable! |



### Test Case E - **Documents Page**   (Selenium-tested)

| Action (Input Commands or Data)         | Outcome (Output Data or System Messages)              | Pass/Fail       |
| ------------- | ---------------- | --------- |
| Click on the My Folders button. | Navigation to the previous My Folders page is permitted. | Pass - Selenium testable! |
| Click on the Create Document button. A unique document name is inputted. | Pop-up window asking for project name. A new document is created both on the web-app and in firebase. | Pass - Selenium testable! |
| Click on the Create Document button. A non-unique document name is inputted.      | Pop-up window asking for Document name. Informative error handling message is displayed.  | Fail! Function was scrapped |
| Hover over an existing document that is owned by the user. Click the dropdown arrow and select 'delete'. | The document and its contents are deleted both on the web-app and in firebase.   | Pass - Selenium testable! |
| Hover over an existing document that is **not** owned by the user. Click the dropdown arrow and select 'delete'. | The document is not deleted and an informative error handling message is displayed.   | Fail! Function was scrapped |
| Click on the left and right arrows in the top bar. | ***Scrapped***   | - |
| An existing document is clicked. | Navigation to the Edit Document Page for that particular Document Page for that particular Folder for that particular User is permitted.   | Pass - Selenium testable! |



## Known Issues

Due to the nature of test case C, it is difficult to approach it using Selenium automated testing.
- The purpose of the ReCaptcha component is to block bots from submitting sign-up forms. This makes testing using automation impossible.
- A recommended approach to this test case is to test ReCaptcha's ability to stop an automated bot (Selenium program) from submitting a valid sign-up form.



## Bugs

### Diagram Page
- There is a bug where the outline of a diagram shape will trail along the drag path of the diagram. Attempts to replicate the 
  bug have failed and it has not occured since. Saving the diagram and refreshing the page fixes this issue (see image below for context).

    ![Shape Outline Drag Bug](images\dragBug.png)

  
  
- Another bug results in shapes on the diagram page persisting onto other pages (see image below). This was also unreplicatable during
  tests and has not occured since.

    ![Shapes Persisting Bug](images\shapePersist.png)





### Sign-in/Sign-up Page

- A bug occurs exclusively when using Selenium to test valid and invalid account logins. 
  - If an invalid test login uses a valid account email, and the next test account case uses that email's associated password, it will sometimes login to that account even if the email input is different.
  - The same case occurs when a password associated with an email account is used with the wrong email, then the next case input is the email using the same password, even if that same input has a different password.
  - This bug doesn't occur during manual testing.



### Folders Page

- A bug resulting from having less than 10 documents on the database causes the page to crash.
  - This is likely a result of the vueperslides component.
  - It takes the 10 most recent documents uploaded to the database and displays them publicly. When it doesn't find 10 or more documents, it crashes causing the page to also crash. 
  - A recommended fix for this is to look into a method of retrieving only the documents that exist when there are less than 10 of them, instead of trying to take 10 documents exactly.



## Recommendations