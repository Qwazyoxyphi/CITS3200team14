<template>
  <div class="container">
    <form id="contact" class="login-form" method="post" novalidate @submit.prevent="onSave2">
      <div class="login-container">
        <h2>Sign in</h2>
        <AppControlInput name="email" v-model="userCredentials.email" placeholder="email">
          <b>Email</b>
        </AppControlInput>
        <AppControlInput
          name="password"
          controlType="password"
          v-model="userCredentials.password"
          placeholder="password"
        >
          <b>Password</b>
        </AppControlInput>
        <AppButton class="login-but" type="submit">Sign in</AppButton>
        <div class="button" @click="$emit('toggleRegistration')">Sign up</div>
      </div>
    </form>
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
            password: ''
          }
    }
  },
  methods: {
    onSave2() {
      this.$emit('submit', this.userCredentials)
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

.button:hover {
  color: #1171ba;
}

.button {
  cursor: pointer;
}
</style>
