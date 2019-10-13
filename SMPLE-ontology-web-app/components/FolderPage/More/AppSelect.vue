<template>
  <div>
    <!-- App Select Box -->
    <div class="select-box">
      <div class="select-box__current icon" tabindex="1">
        <DownIcon class="select-box__icon" />
      </div>
      <ul class="select-box__list">
        <li @click="$emit('toggleInvite')">
          <label
            class="select-box__option"
            for="1"
            aria-hidden="aria-hidden"
          >Invite</label>
        </li>
        <li @click="$emit('toggleDelete')">
          <label
            class="select-box__option"
            for="2"
            aria-hidden="aria-hidden"
          >Delete</label>
        </li>
        <!--<li @click="$emit('toggleEvent')">
          <label
            class="select-box__option"
            for="3"
            aria-hidden="aria-hidden"
          >Add More</label>
        </li>-->
      </ul>
    </div>
    <!--  -->
  </div>
</template>

<script>
import DownIcon from '@/components/Utils/SVG/downIcon'

export default {
  name: 'AppSelect',
  components: {
    DownIcon
  },
  props: {
    object: {
      type: Array
    }
  }
}
</script>

<style lang="Css" scoped>
.icon {
  width: 40px;
  height: 40px;
}
.select-box {
  position: relative;
  display: block;
  width: 100%;
  margin: 0 auto;
  font-family: 'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri', 'Arial',
    sans-serif;
  font-size: 18px;
  color: #60666d;
}

.select-box__current {
  position: relative;
  box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  outline: none;
}
.select-box__current:focus + .select-box__list {
  opacity: 1;
  animation-name: none;
}
.select-box__current:focus + .select-box__list .select-box__option {
  cursor: pointer;
}
.select-box__current:focus .select-box__icon {
  transform: translateY(-50%) rotate(180deg);
}
.select-box__icon {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 20px;
  opacity: 0.3;
  transition: 0.2s ease;
}
.select-box__value {
  display: flex;
}
.select-box__input {
  display: none;
}
.select-box__input:checked + .select-box__input-text {
  display: block;
}
.select-box__input-text {
  display: none;
  width: 100%;
  margin: 0;
  padding: 15px;
  background-color: #e9e9e9;
}
.select-box__list {
  position: absolute;
  max-height: 300px;
  overflow: scroll;
  z-index: 1000;
  width: 100%;
  max-width: 100px;
  padding: 0;
  list-style: none;
  opacity: 0;
  animation-name: HideList;
  animation-duration: 0.5s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: step-start;
  box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
}
.select-box__option {
  display: block;
  padding: 5px;
  text-align: center;
  font-size: 12pt;
  font-weight: 300;
  color: #19222a;
  background-color: #efefef;
}
ul {
    border-radius: 5px;
}
.select-box__option:hover,
.select-box__option:focus {
  background-color: #f9f9f9;
}
@keyframes HideList {
  from {
    transform: scaleY(1);
  }
  to {
    transform: scaleY(0);
  }
}
</style>
