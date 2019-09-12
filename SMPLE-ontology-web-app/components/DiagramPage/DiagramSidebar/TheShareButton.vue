<template>
  <button
    id="contact-submit"
    class="button">	
	<div class="btn-text">
		SHARE
	</div>
	<div class="image">
		<share />
	</div>
	</button>
</template>

<script>
import share from '@/components/Utils/SVG/share'
export default {
  name: 'AppButton',
  components: {
	  share
  },
  props: {
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

 .button {
  cursor: pointer;
  width: 115px;
  border: none;
  background: #1171ba;
  color: #fff;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
  text-align: center;
}

button:hover {
  background: #1171bae0;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

button:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}
</style>
