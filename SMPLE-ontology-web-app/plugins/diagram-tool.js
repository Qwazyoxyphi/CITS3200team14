import Vue from "vue";

import {
  DiagramPlugin,
  Diagram,
  NodeModel,
  UndoRedo,
  ConnectorModel,
  PointPortModel,
  Node,
  SymbolPalette,
  SymbolInfo,
  DiagramContextMenu,
  GridlinesModel
} from "@syncfusion/ej2-vue-diagrams";

import { Uploader, UploaderPlugin } from "@syncfusion/ej2-vue-inputs";
Diagram.Inject(UndoRedo, DiagramContextMenu);

import {
  ToolbarPlugin,
  Toolbar,
  ClickEventArgs
} from "@syncfusion/ej2-vue-navigations";

import { isNullOrUndefined } from "@syncfusion/ej2-base";

Vue.use(DiagramPlugin);
Vue.use(ToolbarPlugin);
Vue.use(UploaderPlugin);
Vue.use(UndoRedo);
Vue.use(DiagramContextMenu);