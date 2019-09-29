<template>
  <div class="box" @click="$emit('openModal')">
    <nuxt-link :to="'/diagram/'">
      <!--defaul redirect-->
      <div class="box" @click="$emit('openModal')">
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
      </div>
    </nuxt-link>
     <div class>
      <div class="name">{{ documentName }}</div>
      <AppSelect2 @toggleDelete="moree(id)" 
        @toggleInvite ="toggleInviteFlag()"/>
   
    <AppModal v-if="inviteFlag" @exitModal="toggleInviteFlag()">
        <TheInviteForm @submit="onSubmitted" @exitModal="toggleInviteFlag()" />
      </AppModal>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import AppSelect2 from '@/components/DocumentsPage/AppSelect2'
import AppModal from '@/components/Utils/AppModal'
import TheInviteForm from '@/components/DocumentsPage/TheInviteForm'

export default {
  name: `DocsTile`,
  components: {
    AppSelect2,
    TheInviteForm,
    AppModal
  },
  data(){
    return{
      inviteFlag: false
    }
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
  },
  methods: {
      toggleInviteFlag() {
        this.inviteFlag=!this.inviteFlag;
      },
      
      moree(id) {
        //need to sync to button
        var documentdel = confirm(' Delete Document? ')
        if (documentdel == true) {
          axios
            .delete(//todo test
              'https://team-14-ontologies.firebaseio.com/Folders/' +
                this.$route.path + '/folderDocs/' + id +
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
      
    },
    onSubmitted(data){
        /*console.log(this.id)
        console.log(data.email)*/
      
        data.id=this.id
        //console.log(data.id) 

        this.$store.dispatch('inviteUser', data)
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
