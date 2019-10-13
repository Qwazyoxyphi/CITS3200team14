<template>
  <div 
    :style="sectionStyle"
  />
</template>

<script>
export default {
  props: {
    offset: {
       type: String,
       required: false,
       default:'70px'
    }
  },
  computed: {
    sectionStyle() {
      var offset = this.offset

      return {
        'padding-top': offset
      }
    }
  }
}
</script>