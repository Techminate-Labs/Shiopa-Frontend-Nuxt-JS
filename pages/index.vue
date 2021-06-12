<template>
  <div class="overflow-hidden">
    <Slider />
    <Categories />
    <Footer />
  </div>
</template>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.slider-arrow {
  @apply cursor-pointer absolute bottom-0 left-0 bg-white w-16 h-16 md:mb-16
}


</style>
