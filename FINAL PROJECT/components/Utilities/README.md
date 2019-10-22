# COMPONENTS

[TOC]

## Utilities Components

### AppButton

AppButton is a general component for buttons.

#### Properties

| Name       | Required | Type   |
| ---------- | -------- | ------ |
| text | `true` | String |

#### Usage

```html
<AppButton 
     type="submit">Send
</AppButton>
```

### AppModal

AppModal is a wrapper around components such as **The Document Form** or **The Invite Form** to create a modal window, or a graphical control element for forms.

#### Properties

| Name       | Required | Type   | Default |
| ---------- | -------- | ------ | ------- |
| miniPlayer | `false`| Boolean | `true`|
| modal | `false`| Boolean | `true`|
| overflow | `false`| String | `scroll`|
| width | `false`| String | `100%`|
| maxWidth | `false`| String | `100%`|
| miniPlayerWidth | `false`| String | `100%`|
| miniPlayerMaxWidth | `false`| String | `450px`|
| modalWidth | `false`| String | `100%`|
| modalMaxWidth | `false`| String | `900px`|
| center | `false`| Boolean | `true`|

#### Usage

```html
<AppModal v-if="documentFlag" @exitModal="toggleCreateDocument()">
      <TheDocumentForm @submit="onDocSubmitted"
      @exitModal="toggleCreateDocument()" />
</AppModal>
```

### AppSection

#### Properties

To keep the section responsive it is always recommended to keep `width='100%'` and limit the width of the section using `maxWidth`

| Name     | Required | Type   | Default   | Description |
| -------- | -------- | ------ | --------- | -------------------|
| color    | `false`  | String | `'white'` | The colour of the sections top border |
| width    | `false`  | String | `'100%'`  | The width of the section |
| maxWidth | `false`  | String | `'900px'` | The maximum width the section can be|

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

### AppVideo

AppVideo is a component for embedding **YouTube videos**.

#### Properties

| Name            | Required | Type  | Description                      |
| ----------------- | ----------- | ------------ | ------------------------------------------------------------ |
| videoId         | `true`   | String  | The **id** of the video you wish to embed. This is the number at the end of the video's **YouTube URL**. |

#### Usage

```html
<AppVideo
  video-id="jfUPLuPL3Ho"
  color="blue"
/>
```
