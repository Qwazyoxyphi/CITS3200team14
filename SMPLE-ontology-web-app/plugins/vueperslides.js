import Vue from 'vue'

import { VueperSlides, VueperSlide } from 'vueperslides'
if (process.client) {
  require('vueperslides/dist/vueperslides.css')
}

Vue.component('VueperSlides', VueperSlides)
Vue.component('VueperSlide', VueperSlide)
