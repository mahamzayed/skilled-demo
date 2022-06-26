<template>
  <div class="grid grid-cols-2 gap-1">
    <img
      class="w-64 h-48 ml-64 mt-7"
      src="../assets/images/portfolio_img.png"
      alt="Portfolio Image"
    />
    <div class="mt-4 w-5/6">
      <h2 class="text-turquoise-blue font-outfitmedium mb-3">{{ title }}</h2>
      <p class="text-cloudy-gray font-outfit text-lg mb-3">
        {{ firstParagraph }}
      </p>
      <p class="text-cloudy-gray font-outfit text-lg mb-2">
        {{ secondParagraph }}
      </p>
      <a class="font-outfit text-lg" href="#">{{ link }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioList',
  props: {
    title: String,
    firstParagraph: String,
    secondParagraph: String,
    link: String,
    img: String
  }
}
</script>

<style lang="scss" scoped></style>
