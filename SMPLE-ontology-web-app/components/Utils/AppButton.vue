<template>
  <button
    :class="btnStyle"
    v-bind="$attrs"
    class="button"
    v-on="$listeners"><slot /></button>
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
