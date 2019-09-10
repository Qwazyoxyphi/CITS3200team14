<template>
  <section class="document-list">
    <no-ssr>
      <carousel
        :data="this.documentData"
        indicator-type="disc" 
        mouseDrag="true" 
        perPage="3" 
        touchDrag="true">
      </carousel>
    </no-ssr>
    <TheCreateDocument @createDocument="toggleCreateDocument()" />
    <AppModal v-if="documentFlag" @exitModal="toggleCreateDocument()">
      <TheDocumentForm @submit="addDocument" @exitModal="toggleCreateDocument()" />
    </AppModal>
  </section>
</template>

<script>
import axios from 'axios'
import AppModal from '@/components/Utils/AppModal'
import TheDocumentForm from '@/components/DocumentsPage/TheDocumentForm'
import TheCreateDocument from '@/components/DocumentsPage/CreateDocument/TheCreateDocument'

export default {
  components: {
    AppModal,
    TheDocumentForm,
    TheCreateDocument
  },
  props: {
    documents: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      documentFlag: false,
    }
  },
  computed: {
    documentData() {
      if(documents.length != null || documents != null) {
        var carouselFormat = [];
        for (let i = 0; i < this.documents.length; i++) {
          carouselFormat[i] = {
            id: documents[i].id,
            name: documents[i].documentName,
            desc: documents[i].documentDesc,
            content(createElement, content) {
              return createElement('a', {
                attrs: {
                  href: '#',
                },
                class: 'document-content',
                }, [
                  createElement('span', [`${content.name} ${content.desc}`]),
                  createElement('feather', {
                    props: {
                      size: 16,
                      type: 'chevron-right',
                    },
                  }),
                ]
              );
            }
          };
        }
        return carouselFormat;
      }
      else return null;
    }
  },
  methods: {
    addDocument(documentData) {
      //todo improve
      axios
        .post(
          'https://team-14-ontologies.firebaseio.com/' +
            this.$route.path +
            '/folderDocs.json',
          documentData
        )
        .then(() => {})
        .catch(e => console.log(e))
    },
    toggleCreateDocument() {
      this.documentFlag = !this.documentFlag
    }
  }
}
</script>
