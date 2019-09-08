<template>
  <div>
    <TheSignin-Signup />
  </div>
</template>

<script>
import TheSigninSignup from '@/components/signin-signup/TheSigninSignup'

export default {
  middleware: ['check-auth','auth'],
  components: {
    TheSigninSignup
  }
}
</script>
