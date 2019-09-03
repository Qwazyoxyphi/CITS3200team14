<template>
  <section class="document-list">
    <DocsTile
      v-for="document in documents"
      :key="document.id"
      :document-name="document.documentName"
      :document-desc="document.documentDesc"/>
  </section>
</template>

<script>
import DocsTile from '@/components/DocumentsPage/DocsTile'

export default {
  components: {
    DocsTile
  },
  props: {
    documents: {
      type: Object,
      required: true
    }
  }
}
</script>

<!--to change-->
<style scoped>
.document-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
