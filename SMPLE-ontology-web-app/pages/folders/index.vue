<template>
  <div>
    <AppSection
      title="This is the folders route"
      color="blue"
    >
      <p>this is text</p> 
    </AppSection>
  </div>
</template>

<script>
import AppSection from '@/components/Utilities/AppSection'
import AppSubtitle from '@/components/Utilities/AppSubtitle'

export default {
  components: {
    AppSubtitle,
    AppSection
  },
  data() {
    return {}
  }
}
</script>
