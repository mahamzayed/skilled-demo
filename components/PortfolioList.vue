<template>
  <div class="grid grid-cols-2 gap-2">
    <img
      class="w-64 h-48 ml-40"
      src="../assets/images/portfolio_img.png"
      alt="Portfolio Image"
    />
    <div class="portfolio-list-content">
      <h2 class="text-turquoise-blue font-outfitmedium">{{ title }}</h2>
      <p class="text-cloudy-gray font-outfit text-lg mb-5">
        {{ firstParagraph }}
      </p>
      <p class="text-cloudy-gray font-outfit text-lg mb-5">{{ secondParagraph }}</p>
      <a href="#">{{ link }}</a>
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
