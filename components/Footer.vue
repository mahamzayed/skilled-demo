<template>
  <div class="footer mt-16">
    <div class="flex flex-row mr-10">
      <h2 class="flex-1 mt-12 mb-14 ml-16 font-pacifico text-4xl">Jane Doe</h2>
      <div
        v-for="img in imgLinks"
        :key="img.id"
        class="flex flex-row mt-12 mb-14 mr-4"
      >
        <a href="#"><img class="w-14 h-14" :src="img.url" /></a>
      </div>
    </div>
    <div class="w-3/6 ml-16 mb-12">
      <p class="font-outfit text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis
        nunc aliquam tincidunt est nonore.
      </p>

      <p class="mt-8 font-outfit text-lg">
        Copyright © 2022. All Rights Reserved.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      imgLinks: [
        {
          id: 1,
          url: require('../assets/icons/fb_icon.svg')
        },
        {
          id: 2,
          url: require('../assets/icons/instagram_icon.svg')
        },
        {
          id: 3,
          url: require('../assets/icons/linkedin_icon.svg')
        },
        {
          id: 4,
          url: require('../assets/icons/twitter_icon.svg')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/_variables.scss';

.footer {
  border-top: solid 1px $medium-gray;
}
</style>
