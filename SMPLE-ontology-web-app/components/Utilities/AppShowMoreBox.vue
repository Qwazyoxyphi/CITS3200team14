<template>
  <div
    class="container"
  >
    <div 
      :style="equStyle" 
      class="content">
      <slot
        v-show="!isOpen"
        name="preview"
      />
    </div>
    <div v-show="isOpen">
      <div class="content">
        <slot name="content"/>
      </div>
    </div>
    <div class="text-container">
      <h5
        v-show="!isOpen"
        :style="textStyle"
        class="text"
        @click="toggle"
      >
        Show More
      </h5>
      <h5
        v-show="isOpen"
        :style="textStyle"
        class="text"
        @click="toggle"
      >
        Show Less
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppShowMoreBox",
  data () {
    return {
      isOpen: false,
      equStyle: '',
      textStyle: {
        'width': '100px'
      }
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        this.equStyle = {
          'display' : 'none'
        }
        this.textStyle = {
          'width': '85px'
        }
      }
      else {
        this.equStyle = ''
        this.textStyle = {
          'width': '100px'
        }
      }
    }
  }
}
</script>

<style scoped>

.container {
  overflow: scroll;
}
.text-container {
    display: flex;
    align-items: center;
    justify-content: center;
}
.text {
  padding: 5px;
  font-size: 12px;
  /*text-transform: uppercase;*/
  color: #929395;
  cursor: pointer;
  
  text-align: center;
  align-self: flex-end;
}

.content {
  padding: 15px 30px;
  background-color: white;
}

</style>
