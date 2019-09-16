<template>
  <div
    :style="style"
    class="wrapper"
  >
    <h5
      v-show="!isOpen"
      :style="textStyle"
      class="text"
      @click="toggleProof"
    >
      {{ showText }}
    </h5>
    <h5
      v-show="isOpen"
      :style="textStyle"
      class="text"
      @click="toggleProof"
    >
      {{ hideText }}
    </h5>
    <div :style="equStyle">
      <slot
        v-show="!isOpen"
        name="less"
      />
    </div>
    <div v-show="isOpen">
      <div class="more-container">
        <slot name="more"/>
      </div>
      <h5 class="end-text">
        {{ endText }}
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppMathProof",
  props: {
      showText: {
          type: String,
          required: true
      },
      hideText: {
          type: String,
          required: true
      },
      endText: {
          type: String,
          required: false,
          default: ''
      }
  },
  data () {
    return {
      isOpen: false,
      style: '',
      equStyle: '',
      textStyle: {
        'width': '100px'
      }
    }
  },
  methods: {
    toggleProof () {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        this.style = {
          'background-color': '#f4f5f7',
          'border' : '1px solid #e5e5e5'
        }
        this.equStyle = {
          'display' : 'none'
        }
        this.textStyle = {
          'width': '85px'
        }
      }
      else {
        this.style = ''
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

.wrapper {
  overflow: scroll;
}

.text {
  padding: 5px;
  font-size: 12px;
  text-transform: uppercase;
  color: #929395;
  cursor: pointer;
}

.more-container {
  padding: 20px 50px;
}

.end-text {
  text-align: right;
  padding: 5px;
  font-size: 12px;
  text-transform:uppercase;
  color: #929395;
}

</style>
