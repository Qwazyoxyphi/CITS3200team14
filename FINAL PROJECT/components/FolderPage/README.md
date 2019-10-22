# FOLDER PAGE COMPONENTS


> Web app for creating ontology diagrams

### FolderList

This is component is a list of folders from a database, with the capability to add new documents and update the database, as well as delete. There is also the ability to share folders with other users.

#### Properties

| Name    | Required | Type  | Default | Description              |
| ------- | -------- | ----- | ------- | ------------------------ |
| folders | `true`   | Array | `[]`    | Pass in array of folders |

#### Usage

```html
<template>
  <div>
    <FolderList :folders="getUserFolders" />
  </div>
</template>

<script>
import FolderList from '@/components/FolderPage/FolderList'
import AppSection from '@/components/Utils/AppSection'
import axios from 'axios'

export default {
  middleware: ['check-auth', 'auth'],

  components: {
    FolderList
  },
  data() {
    return {
      folderFlag: false
    }
  },
  computed: {
    getUserId() {//unused?
      return this.$store.getters.getUserId
    },
    getUserFolders() {//display user's folders
      this.$store.dispatch('folders/setUserFolders')
      return this.$store.getters['folders/userFolders']
    }
  },
  methods: {
    toggleCreateFolder() {
      this.folderFlag = !this.folderFlag
    }
  }
}
</script>
```
### FolderSlider

This is component is a slider that shows the most recent documents added to the database. 

#### Properties

| Name    | Required | Type  | Default | Description              |
| ------- | -------- | ----- | ------- | ------------------------ |
| documents | `true`   | Array | `[]`    | Pass in array of documents |

#### Usage
```html
<template>
  <div>
    <FolderSlider :documents="getAllDocuments" class="slider" />
  </div>
</template>

<script>
import FolderSlider from '@/components/FolderPage/FolderSlider'

import axios from 'axios'

export default {
  middleware: ['check-auth', 'auth'],

  components: {
    FolderSlider
  },
  data() {
    return {
      folderFlag: false
    }
  },
  computed: {
    getAllDocuments() {//display all Documents
      return this.$store.getters['documents/allDocuments']
    }
  }
}
</script>
```
