<template>
  <div class="container-wrap flexbox">
    <div class="but-wrapper item">
      <div @click="$emit('createFolder')" class="button ">
        <plus class="left" />
        <div class="right">New Folder</div>
      </div>
    </div>
    <!-- <div class="but-wrapper item">
      <div @click="$emit('createDoc')" class="button ">
        <plus class="left" />
        <div class="right">New Document</div>
      </div> -->
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/Utils/AppButton'
import plus from '@/components/Utils/SVG/plus'

export default {
  components: {
    AppButton,
    plus
  }
}
</script>

<style lang="Css" scoped>
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
