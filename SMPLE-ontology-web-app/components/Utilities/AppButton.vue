<template>
  <div 
    class="button"
    @click="$emit('toggleButton')"
  >
    <h5>{{ text }}</h5>
  </div>
</template>

<script>
export default {
    name: "AppButton",
    props: {
      text: {
        type: String,
        required: true
      }
    }
}
</script>



<style scoped>
.button {
    margin: 0 20px;
    padding: 10px 10px;
    font-size: 14px;
    /*text-transform: uppercase;*/
    color: white;
    cursor: pointer;
    background-color: rgb(88, 139, 248);
    border-radius: 5px;
    transition: background-color 0.2s ease;
    text-align: center;
  }

.button:hover {
    background-color: rgba(88, 139, 248, 0.8);
  }
</style>
