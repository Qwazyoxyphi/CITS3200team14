<template>
  <div class="icon">
    <div class="title"><h3>{{ title }}</h3></div>
    <slot />
  </div>
</template>

<script>
export default {
    name: "Icon",
    props: {
      title: {
        type: String,
        required: true
      },
      message: {
        type: String,
        required: false,
        default: ''
      }
    },
    computed: {
    _width: function () {
      return {
        'width': this.width
      }
    },
  },
}
</script>

<style scoped>
  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 700px;
    width: 100%;    
  }

  .title {
    font-weight: bolder;
    text-align: center;
  }

  .message {
    max-width: 110px;
    text-align: center;
    padding: 10px;
  }

  img {
    height: auto;
  }

  .icon:hover {
    color: #1171ba;
  }


</style>
