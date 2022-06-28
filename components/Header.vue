<template>
  <div class="flex flex-row justify-between">
    <div class="text-4xl ml-10 mt-11 font-pacifico">Jane Doe</div>
    <div class="mr-10 mt-11 font-outfit text-2xl">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/portfolio">Portfolio</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style lang="scss" scoped>
a {
  margin-right: 0.875rem;
}
</style>
