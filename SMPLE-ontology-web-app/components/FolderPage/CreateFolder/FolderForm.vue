<template>
  <div>
    <form 
      class="login-form" 
      method="post" 
      novalidate>
      <div class="login-container">
        <h2>Create Folder</h2>
        <b>Folder Name.</b>
        <input 
          type="text" 
          name="username" >
        <b>Description.</b>
        <input 
          type="text"
          name="username"
        >
        <textarea 
          rows="4" 
          cols="50">
          At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies. 
        </textarea>
        <button 
          class="login-but" 
          type="submit">Create</button>
        <button 
          class="login-but" 
          type="submit">Cancel</button>
      </div>
    </form>
  </div>
</template>

<style lang="Css" scoped>
#login-box {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form {
  border: 3px solid #f1f1f1;
  max-width: 400px;
  width: 100%;
  background-color: white;
}

.questions-wrap {
  margin: 20px;
}

.flexcontainer {
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
}

input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

input[type='text']:focus,
input[type='password']:focus {
  outline: none !important;
  border: 1px solid #2caaca;
  box-shadow: 0 0 3px rgba(44, 170, 202, 0.9);
}

button {
  background-color: #2caaca;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  width: 100%;
}

.button {
  cursor: pointer;
}

.button:hover {
  color: rgba(51, 51, 51, 0.7);
}

button:hover {
  opacity: 0.8;
  cursor: pointer;
}

.remember,
.psw {
  color: #2caaca;
}

.login-form h2 {
  font-weight: bold;
  color: #2caaca;
}

.login-container {
  padding: 16px;
}

.login-but {
  font-size: 1.3em;
}
</style>
