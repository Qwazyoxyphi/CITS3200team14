<template>
  <div @click="$emit('save')" class="but-wrapper item">
      <div class="button ">
		<saveIcon class="left" />
        <div class="right">save</div>
      </div>
    </div>
</template>

<script>
import saveIcon from '@/components/Utils/SVG/saveIcon'

export default {
  components: {
    saveIcon
  }
}
</script>

<style scoped>
/*
    Form input styles
*/
.but-wrapper {
    padding: 5px;
    width: 100%;
}
.item {
  max-width: 200px;
  flex: 1 1 200px;
}
.left {
  float: left;
  padding-top: 3px;
}
.right {
  text-align: center;
  font-size: 14pt;
  font-weight: 500;
}
.container-wrap {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.button {
  cursor: pointer;
  border: none;
  background: #1171ba;
  color: #fff;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
}

.button:hover {
  background: #1171bae0;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

.button:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}
</style>