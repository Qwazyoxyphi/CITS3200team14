<template>
 <!-- <nuxt-link :to="'/folders/' + id">-->
    <div 
      class="box"
      @click="$emit('openModal')"> 

      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 884 655.11"
      >    
      <nuxt-link :to="'/folders/' + id">
        <defs>
          <style>
            .cls-1 {
            fill: #217e93;
            }
            .cls-2,
            .cls-5 {
            fill: #fff;
            }
            .cls-3 {
            fill: #2caaca;
            }
            .cls-4 {
            fill: #23859b;
            }
            .cls-5 {
            font-size: 97.46px;
            font-family: MyriadPro-Regular, Myriad Pro;
            }
            .cls-6 {
            letter-spacing: -0.04em;
            }
            .cls-7 {
            letter-spacing: -0.03em;
            }
            .cls-8 {
            letter-spacing: 0em;
            }
            .cls-9 {
            letter-spacing: 0em;
            }
            .cls-10 {
            letter-spacing: -0.01em;
            }
            .cls-11 {
            fill: #2898b2;
            cursor:pointer;
            }
            .cls-12 {
            fill: #175968;
            cursor:pointer;
            }
            .cls-2 {
            cursor:pointer;
            }
          </style>
        </defs>
        <title>{{ folderName }}</title>
        <rect 
          class="cls-1" 
          y="22.11" 
          width="305" 
          height="143" 
          rx="42.62" />
        <!--<rect
          class="cls-2"
          x="559.45"
          y="295.69"
          width="150.33"
          height="34.67"
          rx="1.19"
          transform="translate(131.54 -619.03) rotate(49.96)"
        />-->
        <rect 
          class="cls-3" 
          y="88.11" 
          width="884" 
          height="567" 
          rx="54.31" />
        <path
          class="cls-4"
          d="M0,526.11H884a0,0,0,0,1,0,0v80.47a48.53,48.53,0,0,1-48.53,48.53H48.53A48.53,48.53,0,0,1,0,606.59V526.11A0,0,0,0,1,0,526.11Z"
        />
        <text 
          class="cls-5" 
          transform="translate(77.34 625.95)">
          {{ folderName }}
        </text>
        </nuxt-link>
        <g @click="more(id)">
          <path
            class="cls-2"
            d="M1132.34,411.35a1.17,1.17,0,1,0,1.17,1.17A1.17,1.17,0,0,0,1132.34,411.35Z"
            transform="translate(-329 -260.89)"
          />
          <path
            class="cls-2"
            d="M1132.34,406.69a5.83,5.83,0,1,0,5.83,5.83A5.84,5.84,0,0,0,1132.34,406.69Zm0,8.16a2.33,2.33,0,1,1,2.33-2.33A2.33,2.33,0,0,1,1132.34,414.85Z"
            transform="translate(-329 -260.89)"
          />
          <path
            class="cls-2"
            d="M1132.34,410.19a2.33,2.33,0,1,0,2.33,2.33A2.33,2.33,0,0,0,1132.34,410.19Zm0,3.49a1.17,1.17,0,1,1,1.17-1.16A1.16,1.16,0,0,1,1132.34,413.68Z"
            transform="translate(-329 -260.89)"
          />
          <path
            class="cls-2"
            d="M1151,411.35a1.17,1.17,0,1,0,1.17,1.17A1.18,1.18,0,0,0,1151,411.35Z"
            transform="translate(-329 -260.89)"
          />
          <path
            class="cls-2"
            d="M1151,406.69a5.83,5.83,0,1,0,5.83,5.83A5.83,5.83,0,0,0,1151,406.69Zm0,8.16a2.33,2.33,0,1,1,2.33-2.33A2.33,2.33,0,0,1,1151,414.85Z"
            transform="translate(-329 -260.89)"
          />
          <path
            class="cls-2"
            d="M1151,410.19a2.33,2.33,0,1,0,2.33,2.33A2.33,2.33,0,0,0,1151,410.19Zm0,3.49a1.17,1.17,0,1,1,1.17-1.16A1.17,1.17,0,0,1,1151,413.68Z"
            transform="translate(-329 -260.89)"
          />
          <path
            class="cls-2"
            d="M1168.49,412.52a1.17,1.17,0,1,0,1.17-1.17A1.16,1.16,0,0,0,1168.49,412.52Z"
            transform="translate(-329 -260.89)"
          />
          <path
            class="cls-2"
            d="M1163.83,412.52a5.83,5.83,0,1,0,5.83-5.83A5.84,5.84,0,0,0,1163.83,412.52Zm8.16,0a2.33,2.33,0,1,1-2.33-2.33A2.33,2.33,0,0,1,1172,412.52Z"
            transform="translate(-329 -260.89)"
          />
          <path
            class="cls-2"
            d="M1167.33,412.52a2.33,2.33,0,1,0,2.33-2.33A2.33,2.33,0,0,0,1167.33,412.52Zm3.49,0a1.17,1.17,0,1,1-1.16-1.17A1.16,1.16,0,0,1,1170.82,412.52Z"
            transform="translate(-329 -260.89)"
          />
          <path
            class="cls-11"
            d="M1151,374v32.65a5.83,5.83,0,0,1,0,11.66V451a38.48,38.48,0,1,0,0-77Zm18.66,44.31a5.83,5.83,0,1,1,5.83-5.83A5.84,5.84,0,0,1,1169.66,418.35Z"
            transform="translate(-329 -260.89)"
          />
          <path
            class="cls-12"
            d="M1145.17,412.52a5.83,5.83,0,0,1,5.83-5.83V374a38.48,38.48,0,0,0,0,77V418.35A5.84,5.84,0,0,1,1145.17,412.52Zm-12.83,5.83a5.83,5.83,0,1,1,5.83-5.83A5.84,5.84,0,0,1,1132.34,418.35Z"
            transform="translate(-329 -260.89)"
          />
        </g>
      </svg>
    </div>
 <!-- </nuxt-link>-->
</template>

<script>
import axios from 'axios'
export default {
  name: `FolderTile`,
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
    }
  },
  methods: {
    more(id) {
      var folderdel = confirm(' Delete Folder? ')
      if (folderdel == true) {
        //delete folder
        axios
          .delete(
            'https://team-14-ontologies.firebaseio.com/folders/' + id + '.json'
          )
          .then(result => console.log(result))
          .catch(e => console.log(e))
      }
      alert('hello')
    }
  }
}
</script>

<style scoped>
.box {
  cursor: pointer;
  position: relative;
  padding: 10px;
  width: 200px;
}

.flexcontainer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
