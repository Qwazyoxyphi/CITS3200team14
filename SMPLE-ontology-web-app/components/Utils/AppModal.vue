
<template>
  <div>
    <div 
      class="modal-background flexcontainer" 
      @click="$emit('exitModal')"
    >
      <div 
        class="flexcontainer"
        @click.stop
      >
        <slot />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: `AppModal`
}
</script>


<style scoped>
.responsive {
  /*max-width: 100%;  so it doesnt scale up*/
  width: 100%;
  height: auto;
}

.flexcontainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 1;
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

.modal-container {
  background-color: white;
  width: 100%;
  max-width: 1000px;
  height: auto;
  margin: 40px;
  max-height: 90vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;
  z-index: 1000;
  position: relative;
}

.bigitem {
  flex-grow: 2;
  flex-shrink: 0;
  flex-basis: 0;
  min-width: 350px;
}
.smallitem {
  /*flex: 1 0 0;*/
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 0;
  /*background-image: url("https://placehold.it/400x450");*/
  min-width: 400px;
}

.bar {
  width: 100%;
  height: 1px;
  border-bottom: 2px solid #1171ba;
  padding-top: 20px;
}

.content-box {
  overflow-y: scroll;
  height: 310px;
  background-color: white;
}

.buffer {
  padding: 30px 70px 20px 70px;
}

.fullname {
  margin: 1.414em 0 0;
  padding-top: 10px;
  font-weight: bolder;
  line-height: 1.2;
  color: rgb(54, 54, 54);
  margin-top: 0;
  font-size: 2.441em;
}

.jobtitle {
  font-size: 1.43em;
  font-weight: inherit;
  line-height: 1.2;
  color: rgb(54, 54, 54);
}

.info {
  padding: 0px 70px 0px 70px;
  align-self: left;
  width: 100%;
}

.image-container {
  width: 100%;
  overflow: hidden;
}

.social-media {
  width: 100%;
  background-color: rgb(54, 54, 54);
  overflow: hidden;
}

.signature {
  font-family: 'Herr Von Muellerhoff', cursive;
  font-size: 22pt;
  font-weight: bold;
  text-align: center;
}
</style>
