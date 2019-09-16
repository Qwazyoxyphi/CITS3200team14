<template>
  <div class="box" @click="$emit('openModal')">
    <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58">
      <nuxt-link :to="'/folders/' + id">
        <defs />
        <title>folder</title>
        <path
          class="cls-1"
          d="M48.06,60.41H3.3a1.57,1.57,0,0,1-1.51-2L12,30.57a1.55,1.55,0,0,1,1.51-1.16H58.23c1,0,1.51,1,1.51,2L49.57,59.25A1.55,1.55,0,0,1,48.06,60.41Z"
          transform="translate(-1.74 -2.41)"
        />
        <path
          class="cls-2"
          d="M12,30.57a1.55,1.55,0,0,1,1.51-1.16H47.74v-12l-15-15h-23V36.66Z"
          transform="translate(-1.74 -2.41)"
        />
        <path
          class="cls-3"
          d="M52,20.41H47.74v9h6V22.14A1.74,1.74,0,0,0,52,20.41Z"
          transform="translate(-1.74 -2.41)"
        />
        <path
          class="cls-3"
          d="M9.74,13.41H3.47a1.74,1.74,0,0,0-1.73,1.73V57.87h.2l7.8-21.26Z"
          transform="translate(-1.74 -2.41)"
        />
        <path
          class="cls-4"
          d="M26.74,18.41h-10a1,1,0,1,1,0-2h10a1,1,0,0,1,0,2Z"
          transform="translate(-1.74 -2.41)"
        />
        <path
          class="cls-4"
          d="M26.74,11.41h-10a1,1,0,1,1,0-2h10a1,1,0,0,1,0,2Z"
          transform="translate(-1.74 -2.41)"
        />
        <path
          class="cls-4"
          d="M40.74,25.41h-24a1,1,0,1,1,0-2h24a1,1,0,0,1,0,2Z"
          transform="translate(-1.74 -2.41)"
        />
        <polygon class="cls-5" points="31 15 46 15 31 0 31 15" />
      </nuxt-link>
      <!--<circle @click="more(id)" class="cls-6" cx="48.02" cy="4.47" r="1.88" />-->
    </svg>
    <div class>
      <div class="name">{{ folderName }}</div>
      <AppSelect @toggleDelete="more(id)" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import AppSelect from '@/components/FolderPage/More/AppSelect'

export default {
  name: `FolderTile`,
  components: {
    AppSelect
  },
  props: {
    id: {
      type: String,
      required: true
    },
    folderName: {
      type: String,
      required: true
    },
    folderDesc: {
      type: String,
      required: true
    },
    folderDocs: {
      type: Object,
      required: false
    }
  },
  methods: {
    async more(id) {
      var folderdel = confirm(' Delete Folder? ')
      if (folderdel == true) {
        this.$store.dispatch('deleteFolder', id) //delete folder
      }
    }
  }
}
</script>

<style scoped>
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
.name {
  float: right;
  text-align: center;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  font-size: 10pt;
  text-overflow: ellipsis;
}

.cls-1 {
  fill: #1487de;
}
.cls-2 {
  fill: #f4efdc;
}
.cls-3 {
  fill: #1171ba;
}
.cls-4 {
  fill: #cec9ae;
}
.cls-5 {
  fill: #d1bf86;
}
.cls-6 {
  fill: #7383bf;
}
.box:hover .name {
  font-weight: 350;
  color: #1171ba;
}
</style>
