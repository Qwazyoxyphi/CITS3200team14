<template>
  <div @click="$emit('bubbleSelect')" class="box">
    <svg
      id="Capa_1"
      data-name="Capa 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 31.49 31.49"
    >
      <defs>
        <style>
  .cls-1 {
    fill: #efefef;
  }
  .cls-2 {
    stroke: #000;
    stroke-miterlimit: 10;
  }
        </style>
      </defs>
      <title>grabb</title>
      <rect class="cls-1" width="31.49" height="31.49" rx="5" />
      <path
        class="cls-2"
        d="M24.71,12.88a.56.56,0,0,0-.56.56V23.86a1.67,1.67,0,0,1-1.67,1.67H7.64A1.67,1.67,0,0,1,6,23.86V9A1.68,1.68,0,0,1,7.64,7.35H18.06a.56.56,0,1,0,0-1.12H7.64A2.81,2.81,0,0,0,4.85,9V23.86a2.79,2.79,0,0,0,2.79,2.78H22.48a2.77,2.77,0,0,0,2.79-2.75v0h0V13.44A.56.56,0,0,0,24.71,12.88Z"
      />
      <circle cx="24.13" cy="7.81" r="2.02" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'File'
}
</script>

<style scoped>
path {
  fill: #19222a;
  stroke: #19222a;
}

circle {
  fill: #19222a;
  stroke: #19222a;
}

.box {
  width: 60px;
  cursor: pointer;
}
svg {
  color: white;
}
.box:hover circle {
  fill: #1171ba !important;
  stroke: #1171ba;
  cursor: pointer;
}
.box:hover path {
  fill: #1171ba !important;
  stroke: #1171ba;
  cursor: pointer;
}
</style>

