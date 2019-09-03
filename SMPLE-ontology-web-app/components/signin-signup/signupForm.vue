<template>
  <div>
    <header>
      <script 
        src = "https://www.google.com/recaptcha/api.js"/>
    </header>
    <div 
      id="login-box" 
      class="questions-wrap flexbox box-active">
      <form 
        class="login-form" 
        method="post" 
        novalidate
        @submit.prevent="onSave">
        <div class="login-container">
          <h2>Sign up</h2>
          <b>Email:</b>
          <input
            v-validate="'email'" 
            v-model="userCredentials.email"
            type="text" 
            name="email">
          <p 
            v-if="errors.has('email')">
            {{ errors.first('email') }}
          </p>
          <b>Password:</b>
          <input
            v-validate="'required|min:5|max:15' "
            ref="password"
            v-model="userCredentials.password" 
            type="password"
            name="password"
          >
          <p 
            v-if="errors.has('password')">
            {{ errors.first('password') }}
          </p>
          <b>Confirm password:</b>
          <input
            v-validate=" 'required|confirmed:password'" 
            type="password" 
            name="confirmed_password"
            data-vv-as="password"
          >
          <p 
            v-if="errors.has('confirmed_password')">
            {{ errors.first('confirmed_password') }}
          </p>
          <div 
            class="g-recaptcha" 
            data-sitekey="6LecTbYUAAAAABiiKGfi68gq_9qSi7P2dwt7_pB0"/>
          <button 
            class="login-but"
            type="submit">Sign Up</button>
          <div
            class="button"
            @click="$emit('toggleRegistration')" 
          >Sign in</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      default: null,
      type: Object,
      required: false
    }
  },
  data() {
    return {
      userCredentials: this.user
        ? { ...this.user }
        : {
            email: '',
            password: '',
            returnSecureToken: true
          }
    }
  },
  methods: {
    onSave() {
      this.$validator.validateAll()
      if (this.errors.any()) {
        alert('Make sure all fields are valid')
      } else if (grecaptcha.getResponse() == '') {
        alert('Please fill in the recaptcha')
      } else {
        this.$emit('submit', this.userCredentials)
      }
    }
  }
}
</script>

<style lang="Css" scoped>

#login-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

input[type=text]:focus, input[type=password]:focus {
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

.remember, .psw {
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
