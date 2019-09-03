<template>
  <section
    class="section"
  >
    <h2>{{ folderTitle }} - {{ diagramTitle }}</h2>
    <slot/>
  </section>
</template>

<script>
export default {
  name: 'AppSection',
  props: {
    diagramTitle: {
      type: String,
      required: false,
      default: 'Diagram'
    },
    folderTitle: {
      type: String,
      required: false,
      default: 'Folder'
    },
    width: {
      type: String,
      required: false,
      default: '100%'
    },
    maxWidth: {
      type: String,
      required: false,
      default: '900px'
    }
  }
}
</script>

<style lang="css" scoped>

.section {
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 10px 40px;
  border-top: 1px solid;
  border-top-color: white;
  background-color: white;
}

</style>
