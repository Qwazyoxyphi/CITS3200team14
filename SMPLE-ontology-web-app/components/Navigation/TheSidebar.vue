
<template>
  <div class="sidebar">
    <div class="subjects">
      <div class="title">
        <h5>This is Title</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheSidebar'
}
</script>

<style scoped>
.sidebar {
  flex: 1 1 250px;
  min-width: 250px;
  max-width: 250px;
  border-right: 1px solid #e5e5e5;
  background-color: white;
  height: 100%;
  overflow: scroll;
}

.title {
  padding: 10px;
  background-color: rgba(8, 20, 36, 0.84);
  color: white;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-bottom: 0px;
}

.title h5 {
  flex: 1 1 auto;
  text-align: center;
}

.sub_nav {
  display: flex;
  flex-flow: row nowrap;
  padding: 6px 10px;
  align-items: center;
}

.sub_nav h5 {
  padding-left: 10px;
}

.sub_nav:hover {
  background-color: #f4f5f7;
  cursor: pointer;
}

.topic {
  border-left: 5px solid #2caaca;
  border-bottom: 1px solid #e5e5e5;
}
.topic-green {
  border-left: 5px solid #27c9b8;
  border-bottom: 1px solid #e5e5e5;
}
.topic-red {
  border-left: 5px solid #ec6d5f;
  border-bottom: 1px solid #e5e5e5;
}

.arrow_icon {
  width: 8px;
}

.back_arrow_icon {
  width: 15px;
}

.back_arrow_icon:hover {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: black;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
</style>
