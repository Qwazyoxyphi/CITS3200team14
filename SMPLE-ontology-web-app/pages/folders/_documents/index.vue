<template>
  <div>

    <h1>This is the Documents default Index Page {{ $route.params.documents }} </h1> 
    <DocList :documents="loadDocuments" />
  
  </div>
</template>

<!-- eslint-disable --> 
<script>
import AppModal from '@/components/Utils/AppModal'
import DocList from '@/components/DocumentsPage/DocList'
import axios from 'axios'

export default {
  asyncData(context) {
    return axios
        .get(
        'https://team-14-ontologies.firebaseio.com/folders/' +
          context.params.documents + '/folderDocs' +
          '.json'
    ).then(res => {
     return {
       loadDocuments: res.data
     }
    })

   //garbage code, attempt as RDB
   /*let axproms = []
    let parseDocs = []
    let docidarr = []
    return axios.get(
        'https://team-14-ontologies.firebaseio.com/folders/' +
          context.params.documents + '/' + 'documents' +
          '.json'
      )
      .then(res => {
        for (var doc in res.data) {//create promises to run all at once
            axproms.push(axios.get('https://team-14-ontologies.firebaseio.com/Documents/' +
            doc + '.json'))
            docidarr.push(doc)
        }  
         axios.all(axproms)
          .then(       
            axios.spread((...args) => {
              for (let i = 0; i < args.length; i++) {
                parseDocs[docidarr[i]] = args[i].data
              }              
              return{ loadDocuments: parseDocs}
            }               
          )              
          )
      }) */ 
  }, 
  components: {
    AppModal,
    DocList
  },
}
</script>
