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

      <div class="w-4/6 ml-36">
        <div class="grid grid-cols-2 gap-2 mt-16">
          <img
            class="w-64 h-64 ml-48"
            src="../assets/images/home-image.png"
            alt="About Me Image"
          />
          <div class="about-content">
            <h2 class="text-turquoise-blue font-outfitmedium mb-4">
              A Little About Me
            </h2>
            <p class="font-outfit text-cloudy-gray text-lg mb-3.5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
              mattis nunc aliquam tincidunt est non. Viverra nec eu, in
              ridiculus egestas mi.
            </p>
            <p class="font-outfit text-cloudy-gray text-lg mb-3.5">
              Vulputate tristique porttitor enim aliquam ullamcorper. Velit dui
              laoreet in et mus.
            </p>
            <button
              class="bg-black font-outfit text-white rounded-full py-2 px-6"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div class="w-4/6 mt-24 ml-36 mb-20">
        <h2
          class="text-cloudy-gray font-outfitmedium flex flex-row justify-center ml-36 mb-10"
        >
          My Services
        </h2>
        <div v-for="service in servicesList" :key="service.id" class="mb-5">
          <Services :title="service.title" :content="service.content" />
        </div>
      </div>
      <div class="hr-divider" />
      <div class="w-5/6 mt-16 ml-24">
        <h2
          class="text-cloudy-gray font-outfitmedium flex flex-row justify-center mb-10"
        >
          My Work
        </h2>
        <p class="text-cloudy-gray font-outfit text-lg w-5/6 ml-28 mb-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis
          viverra mollis nisl dole dolorili tincidunt. Integer eget vitae id
          tortor.
        </p>
        <div
          v-for="portfolio in portfolioList"
          :key="portfolio.id"
          class="mb-7"
        >
          <PortfolioList
            :title="portfolio.title"
            :first-paragraph="portfolio.firstParagraph"
            :second-paragraph="portfolio.secondParagraph"
            :link="portfolio.link"
          />
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      servicesList: [
        {
          id: 1,
          title: 'UI/UX Design',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis viverra mollis nisl dole dolorili tincidunt. Integer eget vitae id tortor.'
        },
        {
          id: 2,
          title: 'Web Development',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis viverra mollis nisl dole dolorili tincidunt. Integer eget vitae id tortor.'
        },
        {
          id: 3,
          title: 'Product Strategy',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis viverra mollis nisl dole dolorili tincidunt. Integer eget vitae id tortor.'
        }
      ],
      portfolioList: [
        {
          id: 1,
          title: 'Todo List Web App',
          firstParagraph:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis nunc aliquam tincidunt est non dolor sit consectuetur do.',
          secondParagraph:
            'Egestas dui id ornare arcu odio. Ornare lectus sit amet est placerat in egestas erat imperdiet.',
          link: 'Read More...'
        },
        {
          id: 2,
          title: 'Dashboard Web App',
          firstParagraph:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis nunc aliquam tincidunt est non dolor sit consectuetur do.',
          secondParagraph:
            'Egestas dui id ornare arcu odio. Ornare lectus sit amet est placerat in egestas erat imperdiet.',
          link: 'Read More...'
        },
        {
          id: 3,
          title: 'Task Manager App',
          firstParagraph:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis nunc aliquam tincidunt est non dolor sit consectuetur do.',
          secondParagraph:
            'Egestas dui id ornare arcu odio. Ornare lectus sit amet est placerat in egestas erat imperdiet.',
          link: 'Read More...'
        }
      ]
    }
  }
}
</script>

<style type="scss" scoped>
.hr-divider {
  border: solid 3px black;
  width: 40%;
  transform: rotate(3deg);
  margin: auto;
}
</style>
