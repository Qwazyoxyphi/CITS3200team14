<template>
  <!-- <nuxt-link :to="'/folders/' + id">-->
  <div class="box" @click="$emit('openModal')">
	  <nuxt-link :to="'/diagram/'">
	<svg
      id="Capa_1"
      data-name="Capa 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 389.52 512"
    >
      <title>contract</title>
      <path
        class="cls-1"
        d="M374.52,90h-75V15a14.85,14.85,0,0,0-15-15H45A44.94,44.94,0,0,0,0,45V467a44.94,44.94,0,0,0,45,45H344.52a44.93,44.93,0,0,0,45-45V105A14.85,14.85,0,0,0,374.52,90Z"
      />
      <path
        class="cls-2"
        d="M389.52,105V467a44.93,44.93,0,0,1-45,45h-150V0h90a14.85,14.85,0,0,1,15,15V90h75A14.85,14.85,0,0,1,389.52,105Z"
      />
      <path
        class="cls-1"
        d="M389.52,120h-105a15,15,0,0,1-15-15V0h32.7a45,45,0,0,1,31.64,13.11l42.57,42.58A45.12,45.12,0,0,1,389.52,87.3Z"
      />
      <path
        class="cls-3"
        d="M284.52,180H75c-19.8,0-19.8-30,0-30H284.52C304.32,150,304.32,180,284.52,180Z"
      />
      <path
        class="cls-3"
        d="M224.52,240H75c-19.8,0-19.8-30,0-30H224.52C244.32,210,244.32,240,224.52,240Z"
      />
      <path
        class="cls-3"
        d="M224.52,300H75c-19.8,0-19.8-30,0-30H224.52C244.32,270,244.32,300,224.52,300Z"
      />
      <path
        class="cls-3"
        d="M224.52,360H75c-19.8,0-19.8-30,0-30H224.52C244.32,330,244.32,360,224.52,360Z"
      />
      <path
        class="cls-3"
        d="M284.52,452h-90c-19.79,0-19.79-30,0-30h90C304.32,422,304.32,452,284.52,452Z"
      />
      <path class="cls-4" d="M224.52,360h-30V330h30C244.32,330,244.32,360,224.52,360Z" />
      <path class="cls-4" d="M224.52,300h-30V270h30C244.32,270,244.32,300,224.52,300Z" />
      <path class="cls-4" d="M224.52,240h-30V210h30C244.32,210,244.32,240,224.52,240Z" />
      <path class="cls-4" d="M284.52,452h-90V422h90C304.32,422,304.32,452,284.52,452Z" />
      <path class="cls-4" d="M284.52,180h-90V150h90C304.32,150,304.32,180,284.52,180Z" />
    </svg>
	</nuxt-link>
    <div class>
      <div class="name">{{ docName }}</div>
      <AppSelect2 @toggleDelete="more(id, folderDocs)" 
              @toggleInvite = "inviteUser()"
      />
    </div>
  </div>
  <!-- </nuxt-link>-->
</template>

<script>
import axios from 'axios'
import AppSelect2 from '@/components/DocumentsPage/AppSelect2'

export default {
  name: FolderTile,
  components: {
    AppSelect2
  },
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
    fill: #cae8f9;
  }
  .cls-2 {
    fill: #b7e0f6;
  }
  .cls-3 {
    fill: #17ace8;
  }
  .cls-4 {
    fill: #1689fc;
  }
.box:hover .name {
  font-weight: 350;
  color: #1171ba;
}
</style>