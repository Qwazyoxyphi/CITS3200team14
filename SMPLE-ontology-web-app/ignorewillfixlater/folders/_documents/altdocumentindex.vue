<template>
  <div>
    <h1>This is the Documents default Index Page  </h1> <!--{{ $route.params.documents }}-->
	<p>{{getUserId}} </p>
	<DocList :documents="loadDocuments" />
  </div>
</template>

<script>
import AppModal from '@/components/Utils/AppModal'
import DocList from '@/components/DocumentsPage/DocList'
import axios from 'axios'

export default {
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
    DocList
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
