<template>
  <div class="footer">
    <div class="flex flex-row justify-between">
      <div class="mt-12 mb-14 ml-16 font-pacifico text-4xl">Jane Doe</div>
      <div class="footer-social-icons mt-12 mb-14 mr-16">Icons go here</div>
    </div>
    <div class="ml-16 mb-12">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis
      nunc aliquam tincidunt est nonore.
      <div class="mt-8">Copyright © 2022. All Rights Reserved.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style lang="scss" scoped>
@import '../assets/css/_variables.scss';

.footer {
  border-top: solid 1px $medium-gray;
}
</style>
