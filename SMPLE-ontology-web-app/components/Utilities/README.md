# COMPONENTS

[TOC]

## Utilities Components

### AppButton

#### Properties

| Name | Required | Type   | Default | Description |
| ---- | -------- | ------ | ------- | ----------- |
| text | true     | String | `''`    | The text    |

#### Usage

```html
<AppBlockQuote color="blue">
  Block quote text goes here! (note: no p tags)
</AppBlockQuote>
```

### AppModal

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

### AppScrollTo

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

### AppSection

#### Properties

To keep the section responsive it is always recommended to keep `width='100%'` and limit the width of the section using `maxWidth`

| Name     | Required | Type   | Default   | Description                           |
| -------- | -------- | ------ | --------- | ------------------------------------- |
| color    | `false`  | String | `'white'` | The colour of the sections top border |
|
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
