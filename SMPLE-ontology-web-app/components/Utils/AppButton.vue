<template>
<fieldset class="">
  <button
    id="contact-submit"
    :class="btnStyle"
    v-bind="$attrs"
    class="button"
    v-on="$listeners"><slot /></button>
</fieldset>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
 button {
  cursor: pointer;
  width: 100%;
  border: none;
  background: #1171ba;
  color: #fff;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
}

button:hover {
  background: #1171bae0;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

button:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}
</style>
