<template>
  <div class="banner flexbox">
    <div class="flexbox box">
      <div style="color: white;font-size:32pt;font-weight:bolder;">{{ title }}</div>
      <div style="color: white;width:400px;text-align:center;"> 
        {{ description }}
      </div>
      <AppSpacer />
    </div>
    <i 
      v-scroll-to="'#bottom'"
      class="fa fa-arrow-circle-down"/>
  </div>
</template>

<script>
import AppSpacer from '@/components/Utilities/AppSpacer'
import AppScrollTo from '@/components/Utilities/AppScrollTo'


export default {
    name: "ImageBanner",
    components: {
      AppSpacer,
      AppScrollTo
    },
    props: {
      title: {
          type: String,
          required: true
      },
      description: {
          type: String,
          required: true
      },
    }
}
</script>


<style scoped>
.box {
  max-width: 600px;
  overflow: scroll;
  margin-top: 100px;
  height: 200px;
}

.flexbox {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

/* 
 * Responsive Full Background Image Using CSS
 * Tutorial URL: http://sixrevisions.com/css/responsive-background-image/
*/
.banner {
  /* Location of the image */
  background-image: url("../../assets/images/Banners/Page-5-Image-23.png");
  
  /* Image is centered vertically and horizontally at all times */
  background-position: center center;
  
  /* Image doesn't repeat */
  background-repeat: no-repeat;
  
  /* Makes the image fixed in the viewport so that it doesn't move when 
     the content height is greater than the image height */
  background-attachment: fixed;
  
  /* This is what makes the background image rescale based on its container's size */
  background-size: cover;
  
  /* Pick a solid background color that will be displayed while the background image is loading */
  background-color:#464646;

  height: 70vh;
  
  /* SHORTHAND CSS NOTATION
   * background: url(background-photo.jpg) center center cover no-repeat fixed;
   */
  
  margin-bottom: -160px;
  margin-top: -40px;
}

/* For mobile devices */
@media only screen and (max-width: 767px) {
  .banner {
    /* The file size of this background image is 93% smaller
     * to improve page load speed on mobile internet connections */
    background-image: url("https://d16w1lcoeot4ot.cloudfront.net/static/12112018000450/images/inline/doing_good.jpg");
  }
}

i {
  font-size: 30px;
  color: white;
  text-align: center;
  align-self: flex-end;
  width: 100vw;
  margin-bottom: 30px;
  cursor: pointer;
}

</style>

