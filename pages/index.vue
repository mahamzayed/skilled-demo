<template>
  <div class="flex flex-col h-screen">
    <div class="grow mt-20">
      <div>
        <h2>Hey there, I'm Jane</h2>
        <h1>I love building and designing</h1>
        <h1>things for the web.</h1>
      </div>
      <hr class="hr-divider" />

      <div>
        <div>
          <div class="about-content">
            <h2>A Little About Me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
              mattis nunc aliquam tincidunt est non. Viverra nec eu, in
              ridiculus egestas mi.
            </p>
            <p>
              Vulputate tristique porttitor enim aliquam ullamcorper. Velit dui
              laoreet in et mus.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <div>
        <h2>My Services</h2>
        <div>
          <div>My services section</div>
        </div>
      </div>
      <div class="hr-divider" />
      <div>
        <h2>My Work</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis
          viverra mollis nisl dole dolorili tincidunt. Integer eget vitae id
          tortor.
        </p>
        <div>My work section</div>
      </div>
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
/* .hr-divider {
  border: solid 3px black;
  width: 40%;
  transform: rotate(3deg);
  margin: auto;
} */
</style>
