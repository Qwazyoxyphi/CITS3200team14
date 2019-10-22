<template>
  <div class="icon">
    <div class="title"><h3>{{ title }}</h3></div>
    <slot />
    <div class="message">{{ message }}</div>
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
        required: true
      }
    }
}
</script>

<style scoped>
  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .icon:hover {
    color: #1171ba;
    cursor: pointer;
  }

  .title {
    font-weight: bolder;
    text-align: center;
  }

  .message {
    max-width: 200px;
    text-align: center;
  }

  img {
    margin: 10px;
    width: 200px;
    height: auto;
  }

</style>


