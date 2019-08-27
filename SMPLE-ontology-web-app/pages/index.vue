<template>
  <div>
    <AppSection
      title="hello"
      color="blue"
    >

      <AppModal :mini-player="true">
        <AppVideo
          video-id="204135196"
          color="green"
        />
      </AppModal>

    </AppSection>
  </div>
</template>

<script>
import AppSection from '@/components/Utilities/AppSection'
import AppSubtitle from '@/components/Utilities/AppSubtitle'
import AppModal from '@/components/Utilities/AppModal'
import AppVideo from '@/components/Utilities/AppVideo'
import AppImage from '@/components/Utilities/AppImage'
import AppBlockQuote from '@/components/Utilities/AppBlockQuote'

export default {
  components: {
    AppSubtitle,
    AppSection,
    AppModal,
    AppVideo,
    AppImage,
    AppBlockQuote
  },
  data() {
    return {
      flag: true,
      text: 'Angle Difference Identity'
    }
  },
  methods: {
    toggleButton() {
      this.flag = !this.flag
    }
  }
}
</script>
