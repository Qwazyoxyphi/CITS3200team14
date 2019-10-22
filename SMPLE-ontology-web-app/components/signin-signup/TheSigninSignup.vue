<template>
  <div>
    <signinForm 
      v-if="flag" 
      @submit="onSubmit2"
      @toggleRegistration="toggleRegister()" />
    <signupForm 
      v-if="!flag" 
      @submit="onSubmit"
      @toggleRegistration="toggleRegister()" />
  </div>
</template>

<script>
import signinForm from '@/components/signin-signup/signinForm'
import signupForm from '@/components/signin-signup/signupForm'
import axios from 'axios'

export default {
  components: {
    signinForm,
    signupForm
  },
  data() {
    return {
      flag: true
    }
  },
  methods: {
    toggleRegister() {
      this.flag = !this.flag
    },
    onSubmit(userData) {
      this.$axios
        .$post(
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD-Eq5EYc7CTwsnIncTCbMkGhtala1izMg',
          userData
        )
        .then(result => {
          this.flag = !this.flag
        this.$axios
        .$post('users.json',{
          userId: result.localId,
          userEmail: result.email
        })
          console.log(result)
        })
        .catch(error => {
            console.log(error)
            alert('This email is already registered')
            commit('SET_ERROR', error)
          })
      
        
    },
     
    onSubmit2(userData) {
      this.$store.dispatch('authenticateUser', userData).then(() => {
        this.$router.push('/folders')
      })
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
