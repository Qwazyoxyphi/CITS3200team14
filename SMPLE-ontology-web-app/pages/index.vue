<template>
  <div>
    <AppSection
      title="Cosines Angle Sum and Difference Identity"
      color="green"
    >

      <AppModal :mini-player="true">
        <AppVideo
          video-id="204135196"
          color="green"
        />
      </AppModal>

      <AppSubtitle>
        What is the Angle Sum and Difference Identity for Cosine?
      </AppSubtitle>

      <p>
        How do we expand \(\cos(45^\circ+45^\circ)\)? It may be assumed that the crab claw method can help in this situation. Lets find out if this is the case.
        <br><br>
        Firstly, the real result of \(\cos(45^\circ+45^\circ)\) is shown below.

        $$\begin{aligned}
        \cos(45^\circ+45^\circ) &= \cos(90^\circ)
        \\
        &= 0
        \end{aligned}$$

        We get the following result by using the crab claw method of expansion.

        $$\begin{aligned}
        \cos(45^\circ + 45^\circ) &= \cos(45^\circ) + \cos(45^\circ)
        \\
        &=  \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}
        \\
        &= \frac{2\sqrt{2}}{2}
        \\
        &= \sqrt{2}
        \end{aligned}$$

        Notice that there is a contradiction between the real result and the result obtained by using the crab claw method of expansion. This contradiction will also occur when subtracting two angles. This concludes that the crab claw method cannot be used for the expansion of cosine. So then how do we expand cosine of two angles?
        <br><br>
        The angle sum and difference identity for cosine is instead used for the expansion of cosine. These formulas and their derivations are shown below.
      </p>

      <AppSubtitle>
        Derivation of the Angle Sum and Difference Identity for Cosine
      </AppSubtitle>

      <p>For two angles \(A\) and \(B\), the angle sum and difference identity for cosine is shown below.</p>
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
  mounted() {
    renderMathInElement(document.getElementById('content'))
  },
  methods: {
    toggleButton() {
      this.flag = !this.flag
    }
  }
}
</script>
