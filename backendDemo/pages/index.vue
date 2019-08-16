<template>
  <div class="container">
    <form name="contact" action method="post">
      <label class="form-label" for="user">User:</label>
      <input class="form-field" name="user" id="user" />

      <label class="form-label" for="password">Password:</label>
      <textarea class="form-field" name="password" id="password"></textarea>
      <input class="form-button" type="submit" value="Send message" />
    </form>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {}
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
