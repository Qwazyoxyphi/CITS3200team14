<template>
  <div @click="$emit('arrowSelect')" class="box">
    <svg
      id="Capa_1"
      data-name="Capa 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 31.49 31.49"
    >
      <title>arrow</title>
      <rect class="cls-1" width="31.49" height="31.49" rx="5" />
      <path
        d="M12,4.29a1.12,1.12,0,0,0,0,2.23H23.38L4.61,25.3a1.1,1.1,0,0,0,0,1.56h0a1.11,1.11,0,0,0,1.57,0h0L25,8.11V19.48a1.15,1.15,0,0,0,1.13,1.12,1.12,1.12,0,0,0,1.12-1.12h0V5.4a1.1,1.1,0,0,0-1.09-1.11H12Z"
      />
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
}

.box {
  width: 60px;
}
svg {
  color: white;
}
.box:hover rect {
  fill: #ecf0f3 !important;
  cursor: pointer;
}
.box:hover path {
  color: #1171ba !important;
  fill: #1171ba !important;
  cursor: pointer;
}
</style>
