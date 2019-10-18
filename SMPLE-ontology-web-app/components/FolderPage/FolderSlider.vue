<template>
  <section class="document-slideshow">
    <vueper-slides
      class="no-shadow"
      :visible-slides="3"
      :slide-ratio="1/5"
      :dragging-distance="200"
      :breakpoints="{ 800: { visibleSlides: 2 } }"
      :infinite="true"
      slide-multiple
    >
      <vueper-slide
      v-for="i in 10"
      :key="i"
      :id="documents[i].id"
      :title="documents[i].documentName"
      :content="documents[i].documentDesc"
      :link="'http://localhost:3000/folders/' + documents[i].docFolderId + '/' + documents[i].id"
      />
    </vueper-slides>
  </section>
</template>

<script>
export default {
  props: {
    documents: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.vueperslide.vueperslide--visible {
  background-color:deepskyblue;
    /** (Below is meant to set the File.png image to slide background)
    background-image: url("/_nuxt/assets/images/File.jpg");
    background-repeat: no-repeat;
    background-size: contain;
    */
}

</style>
