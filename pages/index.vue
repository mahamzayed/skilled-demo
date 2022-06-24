<template>
  <div class="flex flex-col h-screen">
    <Header />
    <div class="grow mt-20">
      <div>
        <h2
          class="flex flex-row justify-center mb-4 font-outfit text-cloudy-gray"
        >
          Hey there, I'm Jane
        </h2>
        <h1
          class="flex flex-row justify-center font-outfitbold text-turquoise-blue"
        >
          I love building and designing
        </h1>
        <h1
          class="flex flex-row justify-center font-outfitbold text-turquoise-blue mb-10"
        >
          things for the web.
        </h1>
      </div>
      <hr class="hr-divider" />

      <div class="about-section">
        <h4>A Little About Me</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis
          nunc aliquam tincidunt est non. Viverra nec eu, in ridiculus egestas
          mi.
        </p>
        <p>
          Vulputate tristique porttitor enim aliquam ullamcorper. Velit dui
          laoreet in et mus.
        </p>
        <button>Learn More</button>
      </div>
      <div class="services-section">
        <Services />
      </div>
      <div class="hr-divider" />
      <h3>My Work</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis
        viverra mollis nisl dole dolorili tincidunt. Integer eget vitae id
        tortor.
      </p>
      <PortfolioList />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style type="scss" scoped>
.hr-divider {
  border: solid 3px black;
  width: 30%;
  transform: rotate(3deg);
  margin: auto;
}
</style>
