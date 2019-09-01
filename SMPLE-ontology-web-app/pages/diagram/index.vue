<template>
  <div>
    <DiagramTitle
      folder-title="Chemistry"
      diagram-title="My Ontology Diagram"
    />
    <div>
      <AppColumn/>
    </div>
  </div>
</template>

<script>
import DiagramTitle from '@/components/DiagramPage/DiagramTitle'
import AppColumn from '@/components/Utilities/AppColumn'
export default {
  components: {
    DiagramTitle,
    AppColumn
  }
}
</script>
