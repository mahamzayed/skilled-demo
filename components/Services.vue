<template>
  <div class="bg-light-gray w-2/5 rounded-xl p-8">
    <h2 class="text-turquoise-blue flex justify-center font-outfitmedium mb-4">
      {{ title }}
    </h2>
    <p class="text-cloudy-gray text-lg font-outfit text-center">{{ content }}</p>
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
