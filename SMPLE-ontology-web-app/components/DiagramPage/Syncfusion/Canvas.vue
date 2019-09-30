<template>
  <div id="app">
    <ejs-diagram id="diagram" :width="width" :height="height" :nodes="nodes"></ejs-diagram>
  </div>
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
