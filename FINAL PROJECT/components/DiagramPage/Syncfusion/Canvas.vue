<template>
    <ejs-diagram id="diagram" ref="diagramObj" :width="width" :height="height" :nodes="nodes"></ejs-diagram>
</template>
<script>
import Vue from 'vue'
import {
  DiagramPlugin,
  Diagram,
  NodeModel,
  UndoRedo,
  ConnectorModel,
  Node,
  Connector,
  SymbolPalette,
  SymbolPalettePlugin,
  SymbolInfo,
  ShapeModel
} from '@syncfusion/ej2-vue-diagrams'
import { ExpandMode } from '@syncfusion/ej2-vue-navigations'

Vue.use(DiagramPlugin)
Vue.use(SymbolPalettePlugin)

export default {
  name: 'app',
  data() {
    return {
      width: '100%',
      height: '550px',
      nodes: []
    }
  }
}
</script>

<style lang="css" scoped>
#diagram {
  width: 550px !important;
}
</style>
