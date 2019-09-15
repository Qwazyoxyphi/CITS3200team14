<template>
  <div>
    <DiagramSidebar>
      <!-- STANDARD OPTIONS -->
      <div class="separator">
        <div>standard</div>
      </div>
      <div class="container-wrap flexbox">
        <div class="but-wrapper item">
          <textureButton @textureSelect="makeAlert()" />
        </div>
        <div class="but-wrapper item">
          <arrowButton @arrowSelect="makeAlert()" />
        </div>
        <div class="but-wrapper item">
          <grabBox @bubbleSelect="makeAlert()" />
        </div>
      </div>
      <!-- EXPORT OPTIONS -->
      <div class="separator">
        <div>export options</div>
      </div>
      <div class="container-wrap flexbox">
        <div class="but-wrapper item">
          <svgFile @exportSVG="makeAlert()" />
        </div>
        <div class="but-wrapper item">
          <pdfFile @exportPDF="makeAlert()" />
        </div>
      </div>
    </DiagramSidebar>
  </div>
</template>

<script>
import DiagramTitle from '@/components/DiagramPage/DiagramTitle'
import DiagramSidebar from '@/components/DiagramPage/DiagramSidebar/DiagramSidebar'

import arrowButton from '@/components/Utils/SVG/arrowButton'
import textureButton from '@/components/Utils/SVG/textureButton'
import grabBox from '@/components/Utils/SVG/grabBox'
import svgFile from '@/components/Utils/SVG/svgFile'
import pdfFile from '@/components/Utils/SVG/pdfFile' 

export default {
  components: {
    DiagramTitle,
    DiagramSidebar,
    arrowButton,
    textureButton,
    grabBox,
    svgFile,
    pdfFile
  },
  methods: {
    makeAlert() {
      alert('button clicked')
    }
  }
}
</script>

<style scoped>
.save {
  width: 100% !important;
}
.but-wrapper {
    padding: 5px;
    width: 100%;
}
.item {
  max-width: 80px;
  flex: 1 1 80px;
}
.container-wrap {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.separator {
  height: 50px;
  background-color: #efefef;
  display: flex;
  align-items: center;
}

.separator div {
  padding: 15px;
  font-size: 16pt;
  font-weight: 700;
  text-transform: uppercase;
  color: #19222a;
}

</style>