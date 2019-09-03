<template>
  <div 
    class="box"
    @click="$emit('createFolder')">
    <add />
  </div> 
</template>

<script>
import add from '@/components/Utils/SVG/add'

export default {
  name: `TheCreateFolder`,
  components: {
    add
  }
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
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}

.info {
  border-top: 0;
  padding: 7px 15px;
  width: 100%;
  align-self: flex-end;
}

.fullname {
  margin: 1.414em 0 0;
  padding-top: 10px;
  font-weight: bolder;
  line-height: 1.2;
  color: white;
  margin-top: 0;
  font-size: 2.441em;
  opacity: 1;
}

.jobtitle {
  font-size: 1.43em;
  font-weight: inherit;
  line-height: 1.2;
  color: white;
  opacity: 1;
}

.image {
  display: block;
  width: 100%;
  height: auto;
  transition-timing-function: ease-in-out;
  z-index: 0;
  position: relative;
}

.box {
  cursor: pointer;
}

.box .overbox {
  position: absolute;
  color: #fff;
  z-index: 1;
  transition: all 300ms ease-out;
  opacity: 0;
  width: 100%;
  height: auto;
  margin-top: -90px;
}

.box:hover .overbox {
  opacity: 1;
}

.box .overtext {
  transition: all 300ms ease-out;
  transform: translateY(40px);
}

.box .title {
  font-size: 1.43em;
  text-transform: uppercase;
  opacity: 0;
  transition-delay: 0.1s;
  transition-duration: 0.2s;
  padding-left: 10px;
}

.box:hover .title,
.box:focus .title {
  opacity: 1;
  transform: translateY(0px);
}

.box .tagline {
  font-size: 0.8em;
  opacity: 0;
  transition-delay: 0.2s;
  transition-duration: 0.2s;
  padding-left: 10px;
}

.box:hover .tagline,
.box:focus .tagline {
  opacity: 1;
  transform: translateX(0px);
}

.box:hover .image {
  filter: sepia(50%) saturate(200%) brightness(70%) hue-rotate(180deg);
}
</style>
