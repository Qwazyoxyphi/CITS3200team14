<template>
  <div>
    <h1>This is the Documents default Index Page  </h1> <!--{{ $route.params.documents }}-->
    <!--	<p>{{getUserId}} </p>-->
    <DocSlider :documents="loadDocuments" />
  </div>
</template>

<script>
import AppModal from '@/components/Utils/AppModal'
import DocSlider from '@/components/DocumentsPage/DocSlider'
import axios from 'axios'

export default {
  middleware: ['check-auth','auth'],
  asyncData(context) {
    return axios
      .get(
        'https://team-14-ontologies.firebaseio.com/folders/' +
          context.params.documents +
          '/folderDocs' +
          '.json'
      )
      .then(res => {
        return {
          loadDocuments: res.data
        }
      })
  },
  components: {
    AppModal,
    DocSlider
  },
  data(){
    return {
      documentFlag: false
    }
  },
  computed: {
  	getUserId(){
	    return this.$store.getters.getUserId
	  }
  },
  methods:{
    toggleCreateDocument(){
      this.documentFlag = !this.documentFlag
    }
  }
}
</script>
