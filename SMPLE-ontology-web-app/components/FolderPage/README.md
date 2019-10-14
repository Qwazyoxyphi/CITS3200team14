# DOCUMENT PAGE COMPONENTS


> Web app for creating ontology diagrams

### DocList

This is component is a list of documents from a database, with the capability to add new documents and update the database. 

#### Properties

| Name      | Required | Type  | Default | Description                |
| --------- | -------- | ----- | ------- | -------------------------- |
| documents | `true`   | Array | `[]`    | Pass in array of documents |

#### Usage

```html
<template>
  <div>
		<DocList :documents="getUserDocs" 
              @onClick="clicm()"/> 
  </div>
</template>

<script>
import DocList from '@/components/DocumentsPage/DocList'
import axios from 'axios'

export default {
  middleware: ['check-auth', 'auth'],
  components: {
    DocList
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
```