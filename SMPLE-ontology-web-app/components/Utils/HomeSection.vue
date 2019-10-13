<template>
  <section
    class="section"
  >
    <div class="flex">
      <div class="title"><h1 class="title">{{ title }}</h1></div>
      <div class="text"><p class="description">{{ text }}</p></div>
    </div>
    <slot/>
  </section>
</template>

<script>
export default {
  name: 'AppSection',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    text: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style scoped>

.section {
  padding: 0px 100px 0px 100px;
  background-color: white;
  width: 100%;
}

.flex {
  display:flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
}

.description {
  color: #4F4F4F;
}

.text {
  height: auto;
  max-width: 500px;
}

.title {
  padding: 10px;
}

</style>
