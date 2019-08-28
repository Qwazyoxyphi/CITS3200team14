<template>
  <section class="folder-list">
    <FolderTile
      v-for="folder in folders"
      :key="folder.id"
      :folder-name="folder.folderName"
      :folder-desc="folder.folderDesc"/>
  </section>
</template>

<script>
import FolderTile from '@/components/FolderPage/FolderTile'

export default {
  components: {
    FolderTile
  },
  props: {
    folders: {
      type: Object,
      required: true
    }
  }
}
</script>

<!--to change-->
<style scoped>
.folder-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
