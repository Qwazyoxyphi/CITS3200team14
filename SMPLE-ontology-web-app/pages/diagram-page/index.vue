<template>
<div class="control-section">
<div>
    <ejs-toolbar id='toolbar' style="width:100%;height: 10%;margin-top: 10px;"
                :clicked='toolbarclicked'
                :items='toolbaritems'>
    </ejs-toolbar>
</div>
<div class="control-section">
    <div style="width:100%;height: 80%">
        <div id="palette-space" class="sb-mobile-palette">
            <ejs-symbolpalette id="symbolpalette" :expandMode='paletteexpandMode'
                              :palettes='palettes'
                              :getNodeDefaults='palettegetNodeDefaults'
                              :symbolMargin='palettesymbolMargin'
                              :getSymbolInfo='palettegetSymbolInfo'
                              :width='palettewidth'
                              :height='paletteheight'
                              :symbolHeight='palettesymbolHeight'
                              :symbolWidth='palettesymbolWidth'/>
        </div>

        <div id="diagram-space" class="sb-mobile-diagram">
            <ejs-diagram style='display:block' ref="diagramObj" id="diagram"       
            :width='width'
            :height='height'
            :nodes='nodes'
            :connectors='connectors'
            :snapSettings='snapSettings'
            :getConnectorDefaults='getConnectorDefaults'/>
        </div>
        <ejs-uploader id="fileupload" name="UploadFiles"       
                      :asyncSettings='fileuploadasyncSettings'
                      :success='fileuploadsuccess'/>
        
    </div>
</div>
</div>
</template>

<script>
import Vue from "vue";

import DiagramPlugin from '~/plugins/diagram-tool.js'
import ToolbarPlugin from '~/plugins/diagram-tool.js'
import UploaderPlugin from '~/plugins/diagram-tool.js'
import UndoRedo from '~/plugins/diagram-tool.js'

let diagramInstance;

//Initializes the nodes for the diagram
let nodes = [
  {
    id: "Start",
    height: 50,
    width: 100,
    offsetX: 50,
    offsetY: 60,
    shape: { type: "Flow", shape: "Terminator" },
    annotations: [
      {
        content: "Start"
      }
    ],
    style: { fill: "#d0f0f1", strokeColor: "#797979" }
  },
  {
    id: "Alarm",
    height: 50,
    width: 100,
    offsetX: 50,
    offsetY: 160,
    shape: { type: "Flow", shape: "Process" },
    annotations: [
      {
        content: "Alarm Rings"
      }
    ],
    style: { fill: "#fbfdc5", strokeColor: "#797979" }
  },
  {
    id: "Ready",
    height: 80,
    width: 100,
    offsetX: 50,
    offsetY: 260,
    shape: { type: "Flow", shape: "Decision" },
    annotations: [
      {
        content: "Ready to Get Up?",
        margin: { top: 25, left: 10, right: 10, bottom: 10 }
      }
    ],
    style: { fill: "#c5efaf", strokeColor: "#797979" }
  },
  {
    id: "Climb",
    height: 50,
    width: 100,
    offsetX: 50,
    offsetY: 370,
    shape: { type: "Flow", shape: "Process" },
    annotations: [
      {
        content: "Climb Out of Bed"
      }
    ],
    style: { fill: "#fbfdc5", strokeColor: "#797979" }
  },
  {
    id: "End",
    height: 50,
    width: 100,
    offsetX: 50,
    offsetY: 460,
    shape: { type: "Flow", shape: "Terminator" },
    annotations: [
      {
        content: "End"
      }
    ],
    style: { fill: "#d0f0f1", strokeColor: "#797979" }
  },
  {
    id: "Relay",
    height: 50,
    width: 100,
    offsetX: 250,
    offsetY: 160,
    shape: { type: "Flow", shape: "Delay" },
    annotations: [
      {
        content: "Relay"
      }
    ],
    style: { fill: "#f8eee5", strokeColor: "#797979" }
  },
  {
    id: "Hit",
    height: 50,
    width: 100,
    offsetX: 250,
    offsetY: 260,
    shape: { type: "Flow", shape: "Process" },
    annotations: [
      {
        content: "Hit Snooze Button",
        margin: { top: 10, left: 10, right: 10, bottom: 10 }
      }
    ],
    style: { fill: "#fbfdc5", strokeColor: "#797979" }
  }
];
//Initializes the connector for the diagram
let connectors = [
  {
    id: "connector1",
    sourceID: "Start",
    targetID: "Alarm"
  },
  { id: "connector2", sourceID: "Alarm", targetID: "Ready" },
  {
    id: "connector3",
    sourceID: "Ready",
    targetID: "Climb",
    annotations: [{ content: "Yes", style: { fill: "white" } }]
  },
  { id: "connector4", sourceID: "Climb", targetID: "End" },
  {
    id: "connector5",
    sourceID: "Ready",
    targetID: "Hit",
    annotations: [{ content: "No", style: { fill: "white" } }]
  },
  { id: "connector6", sourceID: "Hit", targetID: "Relay" },
  { id: "connector7", sourceID: "Relay", targetID: "Alarm" }
];
let interval;
interval = [
  1,
  9,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75
];
let gridlines = {
  lineColor: "#e0e0e0",
  lineIntervals: interval
};

export default Vue.extend({
  data: function() {
    return {
      width: "100%",
      height: "700px",
      nodes: nodes,
      connectors: connectors,
      snapSettings: {
        horizontalGridlines: gridlines,
        verticalGridlines: gridlines
      },
      getConnectorDefaults: (args, diagram) => {
        if (args.targetDecorator) {
          args.targetDecorator.height = 5;
          args.targetDecorator.width = 5;
          args.targetDecorator.style = {
            fill: "#797979",
            strokeColor: "#797979"
          };
        }
        if (args.style) args.style.strokeColor = "#797979";
        return args;
      },
      paletteexpandMode: "Multiple",
      palettes: [
        {
          id: "flow",
          expanded: true,
          symbols: flowshapes,
          iconCss: "shapes",
          title: "Flow Shapes"
        },
        {
          id: "connectors",
          expanded: true,
          symbols: connectorSymbols,
          iconCss: "shapes",
          title: "Connectors"
        }
      ],
      //set default value for Node.
      palettegetNodeDefaults: (symbol) => {
        if (symbol.id === "Terminator" || symbol.id === "Process") {
          symbol.width = 80;
          symbol.height = 40;
        } else if (
          symbol.id === "Decision" ||
          symbol.id === "Document" ||
          symbol.id === "PreDefinedProcess" ||
          symbol.id === "PaperTap" ||
          symbol.id === "DirectData" ||
          symbol.id === "MultiDocument" ||
          symbol.id === "Data"
        ) {
          symbol.width = 50;
          symbol.height = 40;
        }
        if (symbol.style) symbol.style.strokeWidth = 2;
      },
      palettesymbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },
      palettegetSymbolInfo: (symbol) => {
        return { fit: true };
      },
      palettewidth: "100%",
      paletteheight: "700px",
      palettesymbolHeight: 60,
      palettesymbolWidth: 60,

      toolbarclicked: (args) => {
        if (args.item.text === "New") {
          diagramInstance.clear();
        } else if (args.item.text === "Load") {
          let element = document.getElementsByClassName(
            "e-file-select-wrap"
          );
          let htmlButtonElement = element[0].querySelector(
            "button"
          );
          htmlButtonElement.click();
        } else if (args.item.id === 'palette-icon') {
          openPalette();
        } else {
          download(diagramInstance.saveDiagram());
        }
      },
      toolbaritems: [
        {
          id: 'palette-icon',
          prefixIcon: 'e-ddb-icons2 e-toggle-palette'
        },
        { text: "New", tooltipText: "New", prefixIcon: "e-ddb-icons e-new" },
        {
          type: "Separator"
        },
        {
          text: "Save",
          tooltipText: "Save",
          prefixIcon: "e-ddb-icons e-save"
        },
        {
          type: "Separator"
        },
        {
          text: "Load",
          tooltipText: "Load",
          prefixIcon: "e-ddb-icons e-open"
        }
      ],
      fileuploadasyncSettings: {
        saveUrl: "https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save",
        removeUrl:
          "https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove"
      },
      fileuploadsuccess: onUploadSuccess
    };
  },
  provide: {
    diagram: [UndoRedo, DiagramContextMenu]
  },
  mounted: function() {
    diagramInstance = this.$refs.diagramObj.ej2Instances;
    diagramInstance.fitToPage();
  }
});

//save the diagram object in json data.
function download(data) {
  let dataStr =
    "data:text/json;charset=utf-8," + encodeURIComponent(data);
  let a = document.createElement("a");
  a.href = dataStr;
  a.download = "Diagram.json";
  document.body.appendChild(a);
  a.click();
}

function onUploadSuccess(args) {
  let file1  = args.file;
  let file= file1.rawFile;
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onloadend = loadDiagram;
}

//Load the diagraming object.
function loadDiagram(event) {
  diagramInstance.loadDiagram((event.target).result);
}

//Initialize the flowshapes for the symbol palatte
let flowshapes= [
  { id: "Terminator", shape: { type: "Flow", shape: "Terminator" } },
  { id: "Process", shape: { type: "Flow", shape: "Process" } },
  { id: "Decision", shape: { type: "Flow", shape: "Decision" } },
  { id: "Document", shape: { type: "Flow", shape: "Document" } },
  {
    id: "PreDefinedProcess",
    shape: { type: "Flow", shape: "PreDefinedProcess" }
  },
  { id: "PaperTap", shape: { type: "Flow", shape: "PaperTap" } },
  { id: "DirectData", shape: { type: "Flow", shape: "DirectData" } },
  { id: "SequentialData", shape: { type: "Flow", shape: "SequentialData" } },
  { id: "Sort", shape: { type: "Flow", shape: "Sort" } },
  { id: "MultiDocument", shape: { type: "Flow", shape: "MultiDocument" } },
  { id: "Collate", shape: { type: "Flow", shape: "Collate" } },
  { id: "SummingJunction", shape: { type: "Flow", shape: "SummingJunction" } },
  { id: "Or", shape: { type: "Flow", shape: "Or" } },
  { id: "InternalStorage", shape: { type: "Flow", shape: "InternalStorage" } },
  { id: "Extract", shape: { type: "Flow", shape: "Extract" } },
  { id: "ManualOperation", shape: { type: "Flow", shape: "ManualOperation" } },
  { id: "Merge", shape: { type: "Flow", shape: "Merge" } },
  {
    id: "OffPageReference",
    shape: { type: "Flow", shape: "OffPageReference" }
  },
  {
    id: "SequentialAccessStorage",
    shape: { type: "Flow", shape: "SequentialAccessStorage" }
  },
  { id: "Annotation", shape: { type: "Flow", shape: "Annotation" } },
  { id: "Annotation2", shape: { type: "Flow", shape: "Annotation2" } },
  { id: "data", shape: { type: "Flow", shape: "Data" } },
  { id: "Card", shape: { type: "Flow", shape: "Card" } },
  { id: "Delay", shape: { type: "Flow", shape: "Delay" } }
];
//Initializes connector symbols for the symbol palette
let connectorSymbols = [
  {
    id: "Link1",
    type: "Orthogonal",
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
    targetDecorator: { shape: "Arrow" },
    style: { strokeWidth: 2 }
  },
  {
    id: "link2",
    type: "Orthogonal",
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
    style: { strokeWidth: 2 },
    targetDecorator: { shape: "None" }
  },
  {
    id: "Link3",
    type: "Straight",
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
    targetDecorator: { shape: "Arrow" },
    style: { strokeWidth: 2 }
  },
  {
    id: "link4",
    type: "Straight",
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
    style: { strokeWidth: 2 },
    targetDecorator: { shape: "None" }
  },
  {
    id: "link5",
    type: "Bezier",
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
    style: { strokeWidth: 2 },
    targetDecorator: { shape: "None" }
  }
];

function openPalette() {
  let paletteSpace = document.getElementById('palette-space') ;
  let isMobile = window.matchMedia('(max-width:550px)').matches;
  if (isMobile) {
    if (!paletteSpace.classList.contains('sb-mobile-palette-open')) {
      paletteSpace.classList.add('sb-mobile-palette-open');
    } else {
      paletteSpace.classList.remove('sb-mobile-palette-open');
    }
  }
}
</script>

