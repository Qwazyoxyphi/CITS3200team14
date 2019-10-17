<template>
  <div>
	<AppSection color = "blue">
		<DocList :documents="getUserDocs" 
              @onClick="clicm()"/> 
	</AppSection>
  </div>
</template>

<script>
import AppModal from '@/components/Utilities/AppModal'
import AppSection from '@/components/Utilities/AppSection'
import DocList from '@/components/DocumentsPage/DocList'
import axios from 'axios'

export default {
  middleware: ['check-auth', 'auth'],
  components: {
    AppModal,
	AppSection,
    DocList
  },
  asyncData(context){
    if (context.payload){
      return {
        getUserDocs: context.payload.folderData
      }
    }
  },
  data() {
    return {
      documentFlag: false
    }
  },
  methods: {
    clicm(){
      axios.get('https://team-14-ontologies.firebaseio.com/folders/'+this.$route.params.documents+'/-Lq1P9l0cOuydz6RRfYa/diagramData/-LqPDHXGDPA_vi3WhpKy.json')
      this.$emit('loadDiagram',data)
    }
  },
  computed: {
    getUserId() {
      return this.$store.getters.getUserId
    },
    getUserDocs(){//Get the Documents Inside the Folder
      this.$store.dispatch('documents/setUserDocs', this.$route.params.documents)
      return this.$store.getters['documents/userDocs']
    }
  },
  methods: {
    toggleCreateDocument() {
      this.documentFlag = !this.documentFlag
    }
  }
}
</script>
