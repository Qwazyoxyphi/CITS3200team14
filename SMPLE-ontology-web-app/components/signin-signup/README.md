# COMPONENTS

[TOC]

## SignIn SignUp Components

### signIn Form

This component validates all entries for email and password made into the Sign In Form, returning flags or alerts notifying the user if invalid user credentials are entered.

#### Properties

| Name | Required | Type   | Default | Description                                                  |
| :--: | :------: | ------ | :-----: | ------------------------------------------------------------ |
| user | `false`  | Object | `null`  | The user credentials for an already existing user in the firebase console. |

#### Usage

```html
<signinForm>
  Block quote text goes here!
</signinForm>
```

### signUp Form

This component validates all entries for email, password, new password and reCAPTCHA made into the Sign Up Form, returning flags or alerts notifying the user if invalid or incomplete values are entered.

#### Properties

| Name | Required | Type   | Default | Description                                                |
| :--: | :------: | ------ | :-----: | ---------------------------------------------------------- |
| user | `false`  | Object | `null`  | The user credentials for proposed for a new to be created. |

#### Usage

```html
<signupForm>
  Block quote text goes here!
</signupForm>
```

### TheSigninSignup

This component should use the **signInForm** and **signUpForm** components as wrappers to toggle in between the two user options. On submit, the form entries are validated and relevant user details are loaded into the Firebase console.


#### Usage

```html
<div>
    <signinForm 
      @submit="onSubmitSignIn"
      @toggleRegistration="toggleRegister()" />
    <signupForm
      @submit="onSubmitSignUp"
      @toggleRegistration="toggleRegister()" />
</div>
```
