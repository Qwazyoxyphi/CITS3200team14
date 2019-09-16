<template>
  <div>
    <h1>This is the Documents default Index Page</h1>
    <!--{{ $route.params.documents }}-->
    <!--<DocSlider :documents="loadDocuments" />-->
    <DocList :documents="loadDocuments" />
  </div>
</template>

<script>
import AppModal from '@/components/Utils/AppModal'
import DocSlider from '@/components/DocumentsPage/DocSlider'
import DocList from '@/components/DocumentsPage/DocList'
import axios from 'axios'

export default {
  middleware: ['check-auth', 'auth'],
  asyncData(context) {
    return axios
      .get(
        'https://team-14-ontologies.firebaseio.com/folders/' +
          context.params.documents +
          '/folderDocs.json'
      )
      .then(res => {
        const docArray = []
        for (const key in res.data) {
          docArray.push({ ...res.data[key], id: key })
        }
        return { loadDocuments: docArray }
      })
      .catch(e => context.error(e))
  },
  components: {
    AppModal,
    DocSlider,
    DocList
  },
  data() {
    return {
      documentFlag: false
    }
  },
  computed: {
    getUserId() {
      return this.$store.getters.getUserId
    }
  },
  methods: {
    toggleCreateDocument() {
      this.documentFlag = !this.documentFlag
    }
  }
}
</script>
