<template>
  <div class="flexbox container">
    <div class="flexbox box">
    </div>
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  justify-content: center;
}
  /* Bar */
.bar {
  width: 100%;
  height: 5px;
  border-radius: 5px;
  max-width: 200px;
  margin-bottom: 50px;
  
  background-color: white;
  align-self: flex-end;
}

.bar:hover {
  background-color: white;
  cursor: pointer;
}

.click_me {
  margin-top: -30px;
  text-align: center;
  color: white;
}

.OVers {
  color: #696969;
  font-weight: bolder;
}

.fullscreen-banner {
position: relative;
z-index: 2;
height: 100vh;
width: 100%;
margin-top: -70px;

display: flex;
justify-content: center;
}


.box {
  max-width: 600px;
  margin-top: 100px;
  z-index: 1;
  text-align: center;
}

.flexbox {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.container {
  width: 100vw;
}

img {
  width: 400px;
}
</style>

