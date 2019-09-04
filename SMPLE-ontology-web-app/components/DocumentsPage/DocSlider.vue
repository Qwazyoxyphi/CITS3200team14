<template>
  <no-ssr>
    <vueper-slides 
      :visible-slides="3"  
      :slide-ratio="1/4" 
      :dragging-distance="200" 
      :breakpoints="{ 800: { visibleSlides: 2 } }"
      slide-multiple
    >
      <vueper-slide
        v-for="document in documents" 
        :key="document.id" 
        :title="document.documentName" 
        :content="document.documentDesc"
        link:=""
      />
    </vueper-slides>
  </no-ssr>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  components: {
    VueperSlides,
    VueperSlide
  },
  props: {
    documents: {
      type: Object,
      required: true
    }
  }
}
</script>
