<template>
  <div class="footer mt-16">
    <div class="flex flex-row justify-between">
      <div class="mt-12 mb-14 ml-16 font-pacifico text-4xl">Jane Doe</div>
      <div class="footer-social-icons mt-12 mb-14 mr-16">
        <FacebookLogo />
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
import FacebookLogo from '~/assets/icons/fb_icon.svg'
export default {
  name: 'FooterComponent',
  components: {
    FacebookLogo
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/_variables.scss';

.footer {
  border-top: solid 1px $medium-gray;
}
</style>
