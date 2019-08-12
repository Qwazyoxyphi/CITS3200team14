<template>
  <div class="container">
    <div
      v-if="styleId === 2"
      class="modal-background"
    />
    <div
      :style="modalStyle"
      :class="{ minimise: (styleId === 1), modal: (styleId === 2)}"
      class="parent">
      <div
        :style="[_container, scrollStyle]"
        class="video-container"
      >
        <slot class="video">
          Add modal content
        </slot>
      </div>
      <div
        v-if="miniPlayer || modal"
        :style="_strip"
        class="video-strip">
        <div
          v-if="styleId === 1 && miniPlayer"
          class="btn"
          @click="minimise"
        >
          <img src="@/assets/images/Icons/maximise.svg">
        </div>
        <div
          v-if="styleId !== 1 && miniPlayer"
          class="btn"
          @click="minimise"
        >
          <img src="@/assets/images/Icons/minimise.svg">
        </div>
        <div
          v-if="modal"
          class="btn"
          @click="_modal"
        >
          <img src="@/assets/images/Icons/modal.svg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppVideo',
  props: {
    miniPlayer: {
      type: Boolean,
      required: false,
      default: true
    },
    modal: {
      type: Boolean,
      required: false,
      default: true
    },
    overflow: {
      type: String,
      required: false,
      default: 'scroll'
    },
    width: {
      type: String,
      required: false,
      default: '100%'
    },
    maxWidth: {
      type: String,
      required: false,
      default: '100%'
    },
    miniPlayerWidth: {
      type: String,
      required: false,
      default: '100%'
    },
    miniPlayerMaxWidth: {
      type: String,
      required: false,
      default: '450px'
    },
    modalWidth: {
      type: String,
      required: false,
      default: '100%'
    },
    modalMaxWidth: {
      type: String,
      required: false,
      default: '900px'
    },
    center: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      styleId: 0,
      scrollStyle: {
        overflow: this.overflow
      }
    }
  },
  computed: {
    _container: function() {
      if (this.styleId !== 0)
        return {
          padding: '0'
        }
      else {
        return {
          'margin-bottom': '15px'
        }
      }
    },
    _strip: function() {
      if (this.styleId !== 0) {
        return {
          'padding-left': '10px',
          background: 'none',
          bottom: '0',
          'align-self': 'flex-start'
        }
      }
    },
    modalStyle: function() {
      let margin = '0'
      let maxWidth
      let width
      if (this.center) {
        margin = '0 auto'
      }
      if (this.styleId === 0) {
        width = this.width
        maxWidth = this.maxWidth
      } else if (this.styleId === 1) {
        width = this.miniPlayerWidth
        maxWidth = this.miniPlayerMaxWidth
      } else if (this.styleId === 2) {
        width = this.modalWidth
        maxWidth = this.modalMaxWidth
      }
      return {
        width: width,
        'max-width': maxWidth,
        margin: margin
      }
    }
  },
  methods: {
    minimise() {
      if (this.styleId === 1) {
        this.styleId = 0
      } else {
        this.styleId = 1
      }
    },
    _modal() {
      if (this.styleId === 2) {
        this.styleId = 0
      } else {
        this.styleId = 2
      }
    }
  }
}
</script>

<style scoped>
.parent {
  display: flex;
}

.video-container {
  flex: 1 1 auto;
  padding: 5px;
  background-color: #f4f5f7;
}

.modal-background {
  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
}

.minimise {
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0;
}

.modal {
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 60px;
  margin: 0 auto;
  padding: 0;
}

.video-strip {
  padding: 5px 5px 0 5px;
  flex: 0 0;
  height: 100%;
  margin-left: -5px;
  background-color: #f4f5f7;
}

.btn {
  width: 26px;
  margin-bottom: -3px;
}

.btn:hover {
  cursor: pointer;
}
</style>
