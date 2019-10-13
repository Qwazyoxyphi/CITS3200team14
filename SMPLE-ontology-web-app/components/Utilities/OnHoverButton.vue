<template>
  <div id="container">
    <div class="preview">some text here</div>
    <div class="text-container">
      <div class="text">{{ hovertext }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnHoverButton",
  props: {
    hovertext: {
      type: String,
      required: true
    }
  }
    
}
</script>

<style scoped>

#container {
  display: flex;
  align-content: center;
  display: inline-block;
  text-align: center;
}

.preview {
  display: inline-block;
}

#hovertext {
  display: none;
}

#container:hover {
  cursor: pointer;
}

#container:hover .text {
  display: inline-block;
}
.text-container {
  font-size: 11px;
  margin-top: 10px;
}

.text {
  display: none;
  background-color: rgba(0,0,0,0.5);
  padding: 5px;
  color: white;
  border-radius: 2px;
  position: absolute;
}
</style>


