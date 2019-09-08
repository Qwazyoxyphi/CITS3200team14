<template>
  <div>
    <header>
      <script src="https://www.google.com/recaptcha/api.js" />
    </header>
    <div class="container">
      <form id="contact" class="login-form" method="post" novalidate @submit.prevent="onSave">
        <div class="login-container">
          <h2>Sign up</h2>
          <AppControlInput
            v-validate="'email'"
            name="email"
            v-model="userCredentials.email"
            placeholder="email"
          >
            <b>Email</b>
          </AppControlInput>
          <p v-if="errors.has('email')">{{ errors.first('email') }}</p>
          <AppControlInput
            name="password"
            reff="password"
            v-validate="'required|min:5|max:15' "
            controlType="password"
            v-model="userCredentials.password"
            placeholder="password"
          >
            <b>Password</b>
          </AppControlInput>

          <p v-if="errors.has('password')">{{ errors.first('password') }}</p>
          <AppControlInput
            v-validate=" 'required|confirmed:password'"
            name="confirmed_password"
            controlType="password"
            data-vv-as="password"
            placeholder="confirm password"
          >
            <b>Password</b>
          </AppControlInput>
          <p v-if="errors.has('confirmed_password')">{{ errors.first('confirmed_password') }}</p>
          <div class="g-recaptcha" data-sitekey="6LecTbYUAAAAABiiKGfi68gq_9qSi7P2dwt7_pB0" />
          <AppButton class="login-but" type="submit">Sign up</AppButton>
          <div class="button" @click="$emit('toggleRegistration')">Sign in</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AppControlInput from '@/components/Utils/AppControlInput'
import AppButton from '@/components/Utils/AppButton'

export default {
  components: {
    AppControlInput,
    AppButton
  },
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
/*
    Form input styles
*/

.container {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  background-color: white;
}

#contact {
  background: #f9f9f9;
  padding: 25px;
  margin: 150px 0;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

#contact h3 {
  display: block;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 10px;
}

#contact h4 {
  margin: 5px 0 15px;
  display: block;
  font-size: 13px;
  font-weight: 400;
}

fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
}

.copyright {
  text-align: center;
}

.button {
  cursor: pointer;
}

.button:hover {
  color: #1171ba;
}

.g-recaptcha {
  padding-bottom: 10px;
}
</style>
