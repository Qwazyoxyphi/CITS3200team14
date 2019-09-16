<template>
  <div class="box" @click="$emit('openModal')">
    <nuxt-link :to="'/diagram/'">
      <!--defaul redirect-->
      <div class="box" @click="$emit('openModal')">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 20"
        >
          <defs>
            <style>
  .cls-1 {
    fill-rule: evenodd;
  }
  .cls-2 {
    font-size: 2.76px;
    font-family: MyriadPro-Regular, Myriad Pro;
  }
            </style>
          </defs>
          <title>This Document</title>
          <path
            class="cls-1"
            d="M48.55,23.57h13v17h-24v-20h8Zm-10-2v18h22v-15H48.13l-3-3Z"
            transform="translate(-37.55 -20.57)"
          />
          <text x="-37.55" y="-20.57" />
          <text class="cls-2" transform="translate(2.19 17.76)">{{ documentName }}</text>
        </svg>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: `DocsTile`,
  props: {
    id: {
      type: String,
      required: true
    },
    documentName: {
      type: String,
      required: true
    },
    documentDesc: {
      type: String,
      required: true
    },
    methods: {
      more(id) {
        //need to sync to button
        var documentdel = confirm(' Delete Document? ')
        if (documentdel == true) {
          axios
            .delete(
              'https://team-14-ontologies.firebaseio.com/Folders/' +
                this.$route.path +
                '.json'
            )
            .then(result => {
              axios.delete(
                'https://team-14-ontologies.firebaseio.com/Documents/' +
                  id +
                  '.json'
              )
            })
            .catch(e => console.log(e))
        }
      }
    }
  }
}
</script>

<style scoped>
.responsive {
  /*max-width: 100%;  so it doesnt scale up*/
  width: 100%;
  height: auto;
}

.box {
  cursor: pointer;
  position: relative;
  padding: 10px;
  width: 150px;
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
