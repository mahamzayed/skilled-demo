<template>
  <div class="bg-light-gray rounded-xl mr-7 h-56 p-5">
    <h2 class="text-turquoise-blue text-center font-outfitmedium mb-3">
      {{ title }}
    </h2>
    <p class="text-cloudy-gray text-lg font-outfit text-center">
      {{ content }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ServicesSection',
  props: {
    title: String,
    content: String
  }
}
</script>

<style lang="scss" scoped></style>
