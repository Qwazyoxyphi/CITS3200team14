<!--

    Note that the offset can be changed in the plugins folder. 
    It is better to change it there as it will not add extra padding.

-->
<template>
  <div 
    :id="id" 
    :style="sectionStyle"
  />
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    offset: {
       type: String,
       required: false,
       default:'0px'
    }
  },
  computed: {
    sectionStyle() {
      var offset = this.offset

      return {
        'margin-top': offset,
      }
    }
  }
}
</script>

