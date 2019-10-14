# COMPONENTS

[TOC]

## Navigation Components

### TheHeader, TheSidebar, TheFooter

The **Header**, **Sidebar** and **Footer** components should always be used in the `default.vue` file in the layouts directory.

#### Usage

```html
<template>
  <div>
    <TheHeader/>
    <div class="main">
      <TheSidebar v-if="isLeftSidebar"/>
      <div
        id="content"
        class="content"
      >
        <nuxt/>
        <TheFooter />
      </div>
    </div>
  </div>
</template>
```