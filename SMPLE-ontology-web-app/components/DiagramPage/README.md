# DIAGRAM PAGE COMPONENTS


> Web app for creating ontology diagrams

### Canvas

This is the canvas for the diagram itself. It allows items to be placed onto it from the Palette component.

#### Usage

```html
<div>
    <Palette/>
</div>
<div>
    <Canvas/>
</div>
```

### Palette

This component should always be included alongside a **Canvas** component. The palette allows shapes to be dragged from it onto a **Canvas** component.

#### Usage

To use **Palette** in its default state alongside a **Canvas** component:

```html
<div>
    <Palette/>
</div>
<div>
    <Canvas/>
</div>
```

Within the **Palette** component, the options for the palette, the shapes and connectors, are set within the `<script>` part of the Vue file. There are four different types of shapes available, being flowshapes, svgshapes, htmlshapes and basicshapes. The shapes and connectors are first defined within arrays, with a different array for each type of shape. The svgshapes and htmlshapes allow custom shapes to be made for the palette. For example:

```html
<script>
    ...
let flowshapes = [
  {
    id: 'process',
    shape: {
      type: 'Flow',
      shape: 'Process'
    }
  }
],
let svgshapes = [
  {
    id: 'node2',
    style: { fill: 'none' },
    annotations: [{ content: 'Start \n Text Editing' }],
    shape: {
      type: 'Native',
      content:'<SVG file contents go here>'
    }
  }
],    
let htmlshapes = [
  {
    id: 'HTML',
    borderColor: 'black',
    borderWidth: 1,
    shape: {
      type: 'HTML',
      content:
        '<div style="height:100%;width:100%;"><button type="button" style="width:100%;overflow:hidden">HTML</button></div>'
    }
  }
],
let basicShapes = [
  {
    id: 'Rectangle',
    shape: {
      type: 'Basic',
      shape: 'Rectangle'
    }
  }
],
let connectorSymbols = [
  {
    id: 'Link1',
    type: 'Orthogonal',
    sourcePoint: {
      x: 0,
      y: 0
    },
     targetPoint: {
      x: 40,
      y: 40
    },
    targetDecorator: {
      shape: 'Arrow'
    }
  }
]
    ...
</script>
```

After defining the shapes in these arrays, they need to be exported as data. For example:

```html
<script>
    ...
export default {
  name: 'app',
  data() {
    return {
      //Defines how many palettes can be at expanded mode at a time
      expandMode: 'Multiple',
      //Defines the palette collection
      palettes: [
        {
          //Sets the id of the palette
          id: 'flow',
          //Sets whether the palette expands/collapse its children
          expanded: true,
          //Adds the palette items to palette
          symbols: flowshapes,
          //Sets the header text of the palette
          title: 'Flow Shapes',
          iconCss: 'e-ddb-icons e-flow'
        },
        {
          id: 'basic',
          expanded: true,
          symbols: basicShapes,
          title: 'Basic Shapes',
          iconCss: 'e-ddb-icons e-basic'
        },
        {
          id: 'connectors',
          expanded: true,
          symbols: connectorSymbols,
          title: 'Connectors',
          iconCss: 'e-ddb-icons e-connector'
        }
      ],
      palettewidth: '100%',
      paletteheight: '700px',
      symbolHeight: 60,
      symbolWidth: 60
    }
  }
}
     ...
</script>
```

Further documentation for the **Palette** can be found here: https://ej2.syncfusion.com/vue/documentation/diagram/symbol-palette/?no-cache=1

A demo for the symbol palette can be found here: https://ej2.syncfusion.com/vue/demos/#/material/diagram/symbol-palette.html

### Demo

The **Demo** component provides a simple implementation of the **Canvas** and **Palette** components but without any save functionality. 

#### Usage

```html
<Demo/>
```

### TheSaveButton

This component is to be used in conjunction with the **Canvas** component. It is a button that emits 'save' when clicked.

#### Usage

App section is a wrapper component, so use as follow:

```html
<div>
    <TheSaveButton @save="methodName()"/>
</div>
<div>
    <Canvas/>
</div>
```
