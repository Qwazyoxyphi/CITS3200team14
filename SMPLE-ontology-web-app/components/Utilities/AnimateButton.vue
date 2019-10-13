<template>
  <div
    id="button"
    :style="_animate"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  name: "Animate",
  props: {
    animate: {
      type: String,
      required: true
    }
  },
  computed: {
    _animate: function () {
      
      if (this.animate) {
          return ""
      }
      // else
      return {
        '-webkit-animation': 'none',
        '-moz-animation': 'none',
        'animation': 'none'
      }
    }
  }
}
</script>

<style scoped>

/* Button Styling */

 #button {
    margin: 0 20px;
    padding: 10px 20px 10px 20px;
    font-size: 14px;
    /*text-transform: uppercase;*/
    color: #1171ba;
    cursor: pointer;
    background-color: white;
    border: solid 1px #1171ba;
    border-radius: 30px;
    transition: background-color 0.2s ease;
    text-align: center;
  }

#button:hover {
    background-color: #1171ba;
    border: solid 1px #1171ba;
    color: white;
  }

  a:link {
  text-decoration: none;
}

a {
  color: #1171ba;
  font-weight: bold;
}

#button:hover a {
  color: white;
}

</style>
