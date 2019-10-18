<template>
  <section class="document-slideshow">
    <vueper-slides
      v-if="documents.length >= 10"
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
        :id="documents[documents.length - 1 - i].id"
        :title="documents[documents.length - 1 - i].documentName"
        :content="documents[documents.length - 1 - i].documentDesc"
        :link="'http://localhost:3000/folders/' + documents[documents.length - 1 - i].docFolderId + '/' + documents[documents.length - 1 - i].id"
      />
    </vueper-slides>
    <vueper-slides
      v-if="documents.length < 10"
      class="no-shadow"
      :visible-slides="3"
      :slide-ratio="1/5"
      :dragging-distance="200"
      :breakpoints="{ 800: { visibleSlides: 2 } }"
      :infinite="true"
      slide-multiple
    >
      <vueper-slide
        v-for="i in documents.length"
        :key="i"
        :id="documents[documents.length - 1 - i].id"
        :title="documents[documents.length - 1 - i].documentName"
        :content="documents[documents.length - 1 - i].documentDesc"
        :link="'http://localhost:3000/folders/' + documents[documents.length - 1 - i].docFolderId + '/' + documents[documents.length - 1 - i].id"
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
  background-color: deepskyblue;
  /** (Below is meant to set the File.png image to slide background)
    background-image: url("/_nuxt/assets/images/File.jpg");
    background-repeat: no-repeat;
    background-size: contain;
    */
}
</style>
