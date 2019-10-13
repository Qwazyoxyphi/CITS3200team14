<template>
  <div class="fullscreen-banner">
    <div 
      v-scroll-to="'#start'"
      class="bar"
    >
      <div class="click_me">Click to scroll.</div>
    </div>
  </div>
</template>

<style scoped>
  /* Bar */
.bar {
  width: 100%;
  height: 5px;
  border-radius: 5px;
  max-width: 200px;
  margin-bottom: 50px;
  
  background-color: rgb(54, 54, 54);
  align-self: flex-end;
}

.bar:hover {
  background-color: rgb(37, 37, 37);
  cursor: pointer;
}

.click_me {
  margin-top: -30px;
  text-align: center;
  color: rgb(54, 54, 54);
}

.fullscreen-banner {
position: relative;
z-index: 2;
background-color: #86cd82;
height: 100vh;
width: 100%;

display: flex;
justify-content: center;
}
</style>

