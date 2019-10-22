# COMPONENTS

[TOC]

> Web app for creating ontology diagrams

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## Theme Colours

| Color         | RGB              | Hex       |
| ------------- | ---------------- | --------- |
| **Red**       | `(236, 109, 95)` | `#ec6d5f` |
| **Green**     | `(39, 201, 184)` | `#27c9b8` |
| **Blue**      | `(44, 170, 202)` | `#2caaca` |
| **Dark Navy** | `(39, 50, 58)`   | `#27323a` |

## Rendering Katex

**Latex** can be rendered automatically on any page using the delimiters: `$$ ... $$` for **display math**, and `\( ... \)` for **inline math**.

In order to enable the auto rendering of latex on a page, you must add the following code in **`mounted ()`** of that page:

```javascript
mounted () {
  renderMathInElement(document.getElementById("content"))
}
```

## App Components

### AppBlockQuote

#### Properties

| Name  | Required | Type   | Default  | Description                                                  |
| ----- | -------- | ------ | -------- | ------------------------------------------------------------ |
| color | `false`  | String | `'#ccc'` | The colour of the Block Quotes border. This colour will also be used at 20% opacity for the background |

#### Usage

```html
<AppBlockQuote color="blue">
  Block quote text goes here! (note: no p tags)
</AppBlockQuote>
```

### AppColumns

This is a wrapper component for **AppColumn**, so always wrap columns with this component! For example:

```html
<AppColumns>
  <AppColumn>
    <!-- COLUMN 1 GOES HERE -->
  </AppColumn>
  <AppColumn>
    <!-- COLUMN 2 GOES HERE -->
  </AppColumn>
</AppColumns>
```

#### Properties

| Name  | Required | Type   | Default | Description                                |
| ----- | -------- | ------ | ------- | ------------------------------------------ |
| width | false    | String | '100%'  | Defines the width of the column container. |

#### Usage

```html
<AppColumns width="400px">
  <AppColumn>
    <!-- COLUMN 1 GOES HERE -->
  </AppColumn>
  <AppColumn>
    <!-- COLUMN 2 GOES HERE -->
  </AppColumn>
</AppColumns>
```

### AppColumn

This component should always be used wrapped inside the **AppColumns** component. If you want to add ***n*** amount of columns, simply add ***n*** amount of **AppColumn** components inside **AppColumns**.

#### Properties

| Name  | Required | Type   | Default  | Description                                                  |
| ----- | -------- | ------ | -------- | ------------------------------------------------------------ |
| align | false    | String | 'center' | This vertically aligns the column, there are **only** 3 options: **`start`**: aligns the column at the top, **`center`**: aligns the column in the centre and **`end`**: aligns the column at the bottom. |
| width | false    | String | '200px'  | The initial width of the column (flex-basis). This will also be the breakpoint (i.e. the column can never become smaller than this width, however can grow to become bigger in order to fit the container) |

#### Usage

```html
<AppColumns>
  <AppColumn
    align="start"
    width="300px"
  >
    <!-- COLUMN 1 GOES HERE -->
  </AppColumn>
  <AppColumn
    align="center"
    width="400px"
  >
    <!-- COLUMN 2 GOES HERE -->
  </AppColumn>
  <AppColumn
    align="end"
    width="250px"
  >
    <!-- COLUMN 3 GOES HERE -->
  </AppColumn>
</AppColumns>
```

### AppImage

App image is a wrapper component for images. It will always centre the image it wraps. For example:

```html
<AppImage>
  <img src='/path_to_image'>
</AppImage>
```

#### Properties

| Name  | Required | Type   | Default    | Description                                                  |
| ----- | -------- | ------ | ---------- | ------------------------------------------------------------ |
| width | `false`  | String | `'medium'` | The width of the image, more specifically it is the max-width of the image as by default the image will be responsive and shrink with the browser window. **Note:** `'small'`, `'medium'`, `'large'`  can be used to define width as well as normal width values. `'small'=240px`, `'medium'=360px` and `'large'=540px` |

#### Usage

```html
<AppImage width="medium">
  <img src='/path_to_image'>
</AppImage>
```

### AppSection

#### Properties

To keep the section responsive it is always recommended to keep `width='100%'` and limit the width of the section using `maxWidth`

| Name     | Required | Type   | Default   | Description                           |
| -------- | -------- | ------ | --------- | ------------------------------------- |
| color    | `false`  | String | `'white'` | The colour of the sections top border |
| title    | `false`  | String | `'Title'` | The title of the section              |
| width    | `false`  | String | `'100%'`  | The width of the section              |
| maxWidth | `false`  | String | `'900px'` | The maximum width the section can be  |

#### Usage

App section is a wrapper component, so use as follow:

```html
<AppSection
  title="Section Title"
  color="blue"
>
  <!-- SECTION CONTENT GOES HERE -->
</AppSection>
```

### AppInteractive

This is a component to embed interactive **JSX Graphs**. The javascript code for these interactive's must be stored in the appropriate path in the **static** directory to prevent Webpack from working on it. 

It is recommended to save each javascript file within the given directory as a letter in alphabetical order. For example:

```html
/scripts/interactives/mathMethodsUnit1/radianMeasure/
|- a.js
|- b.js
|- c.js
```

#### Properties

| Name   | Required | Type    | Default   | Description                                                  |
| ------ | -------- | ------- | --------- | ------------------------------------------------------------ |
| name   | `true`   | String  |           | The name of your interactive. **This must be unique and must match the name of the javascript file containing the interactive!** |
| src    | `true`   | String  |           | The path to the interactive you are using                    |
| width  | `false`  | String  | `'700px'` | The width of the interactive                                 |
| height | `false`  | String  | `'300px'` | The height of the interactive                                |
| center | `false`  | Boolean | `true`    | Whether the interactive is to centred                        |

#### Usage

1. Make sure you have the javascript file named correctly and stored in the appropriate directory within `static/`. For example, for the first interactive within the Radian Measure playlist:

   ```html
   /scripts/interactives/mathMethodsUnit1/radianMeasure/a.js
   ```

2. Use the component as follows (**note:** **`name`** must match the name of the javascript file in **`src`**):

   ```html
   <AppInteractive
     :center="true"
     name="a"
     src="/scripts/interactives/mathMethodsUnit1/radianMeasure/a.js"
     width="700px"
     height="300px"
   />
   ```

3. In the javascript of the interactive, the name of the **JSX Graph Object** must be the same is as the name passed to the component as a property. For example, given the above code, our javascript would look like:

   ```javascript
   /* ===================
      JXG OPTIONS GO HERE
      =================== */
   
   // INIT JSX GRAPH BOARD
   a = JXG.JSXGraph.initBoard('boxa', { // NOTE: 'a' AND 'boxa' MATCH name FROM ABOVE
     grid: false,
     showCopyright: false,
     showNavigation: false,
     axis: false,
     boundingbox: [-1, 1, 1, 1]
   });
   
   /* ===========================
      METHODS ON OBJECT a GO HERE
      =========================== */
   ```

### AppModal

AppModal is used if a miniPlayer or modal element is required.

#### Properties

| Name               | Required | Type    | Default    | Description                                            |
| ------------------ | -------- | ------- | ---------- | ------------------------------------------------------ |
| miniPlayer         | `false`  | Boolean | `true`     | Whether or not the miniPlayer is to be enabled         |
| modal              | `false`  | Boolean | `true`     | Whether or not the modal is to be enabled              |
| overflow           | `false`  | String  | `'scroll'` | The overflow behaviour of the element                  |
| width              | `false`  | String  | `'100%'`   | The width of the element in ***normal*** mode          |
| maxWidth           | `false`  | String  | `'100%'`   | The max-width of the element in ***normal*** mode      |
| miniPlayerWidth    | `false`  | String  | `'100%'`   | The width of the element in ***mini player*** mode     |
| miniPlayerMaxWidth | `false`  | String  | `'450px'`  | The max-width of the element in ***mini player*** mode |
| modalWidth         | `false`  | String  | `'100%'`   | The width of the element in ***modal*** mode           |
| modalMaxWidth      | `false`  | String  | `'900px'`  | The max-width of the element in ***modal*** mode       |
| center             | `false`  | Boolean | `true`     | Whether or not the modal is to be centred              |

#### Usage

AppModal is a wrapper component, so use as follows:

```html 
<AppModal
  :mini-player="false"
  modal-max-width="500px"
>
  <!-- MODAL CONTENT GOES HERE -->
</AppModal>
```

### AppVideo

AppVideo is a component for embedding **Vimeo videos**.

#### Properties

| Name            | Required | Type    | Default     | Description                                                  |
| --------------- | -------- | ------- | ----------- | ------------------------------------------------------------ |
| videoId         | `true`   | String  |             | The **id** of the video you wish to embed. This is the number at the end of the video's **Vimeo URL**. |
| allowFullScreen | `false`  | Boolean | `true`      | Whether or not the fullscreen option is to be enabled        |
| color           | `false`  | String  | `'#ffffff'` | The video's theme colour. **This must be given as hexadecimal!** Except for the websites theme colours, `"red"`, `"green"`, `"blue"` |
| showTitle       | `false`  | Boolean | `false`     | Whether or not the video's title should be displayed         |
| showByLine      | `false`  | Boolean | `false`     | Whether or not the video's by-line should be displayed       |
| showPortrait    | `false`  | Boolean | `false`     | Whether or not the video's portrait should be displayed      |

#### Usage

```html
<AppVideo
  video-id="204135196"
  color="blue"
/>
```

### AppToggle

AppToggle is essentially a switch that can be used with `v-show` or `v-if` in order to show certain elements.

#### Properties

| Name  | Required | Type   | Default | Description                                                  |
| ----- | -------- | ------ | ------- | ------------------------------------------------------------ |
| color | `true`   | String |         | The toggle's theme colour. Write `"red"`, `"green"` or `"blue"`. If this prop is misspelt, `blue` will be used by default. **Note that the field is still required.** |

#### Event Handlers

There exists an event handler `@click="$emit('toggle')"` which can be used to change a flag in the parants data object (e.g. `active=!active` ). This is used to perhaps change the text in the `slot` when the button is toggled (this is shown in `usage` ).

#### Usage

```vue
<AppToggle 
  color="green"
  @toggle="toggleButton"
>
  <div v-show="flag">Code Block 1</div>
  <div v-show="!flag">Code Block 2</div>
</AppToggle>

<!-- you can also use it to show a whole section of code when toggled -->
<section v-show="flag">
   <!-- add code block 1 -->
</section>

<section v-show="!flag">
   <!-- add code block 1 -->
</section>

<!--  ...  -->

<script>
export default {
  data() {
    return {
      flag: true,
      text: ''
    }
  },
  methods: {
    toggleButton() {
      this.flag = !this.flag
    }
  }
}
</script>
    
```

