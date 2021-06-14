<template>
  <div class="bg-gray-200 px-16 py-4">
      <!-- Breadcrumbs -->
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto flex items-center md:flex-row flex-col">
          <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
            <div class="container px-4 mx-auto">
                  <a href="/" class="hover:underline text-xl font-medium text-yellow-600">All</a>
                  <a  href="cart/Bags" class="text-gray-900 px-2 text-xl font-medium hover:text-yellow-600">Accessories<span class="px-1"><sup>2</sup></span></a>
                  <a href=" Decoration/Decoration" class="text-gray-900 px-2 text-xl font-medium hover:text-yellow-600">Dining<span class="px-1"><sup>6</sup></span></a>
                  <a href="Essential/Essentials" class="text-gray-900 px-2 text-xl font-medium hover:text-yellow-600">Furniture<span class="px-1"><sup>6</sup></span></a>
                  <a href="Interior/Interior" class="text-gray-900 px-2 text-xl font-medium hover:text-yellow-600">Lighting<span class="px-1"><sup>6</sup></span></a>
                  <a href="Interior/Interior" class="text-gray-900 px-2 text-xl font-medium hover:text-yellow-600">Living<span class="px-1"><sup>12</sup></span></a>
                  <a href="Interior/Interior" class="text-gray-900 px-2 text-xl font-medium hover:text-yellow-600">Posters<span class="px-1"><sup>5</sup></span></a>
                  <a href="Interior/Interior" class="text-gray-900 px-2 text-xl font-medium hover:text-yellow-600">Technics<span class="px-1"><sup>4</sup></span></a>
              </div>
          </div>
          <div class="relative flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
          <a :to="{ name: 'Essentials' }" class="text-gray-900 px-2 text-xl font-medium hover:text-yellow-600" @click="open = !open">Filter</a>
       <!-- Breadcrumbs -->
            <a :to="{ name: 'Interior' }" class="text-gray-900 px-2 text-xl font-medium hover:text-yellow-600"><span>/</span> Search
            </a>
          </div>
        </div>
      </section>
      <!---filter--->
         <div v-if="open" class="container px-12 py-10  border-2 border-indigo-600 absoulate w-full mt-5 bg-gray-100 border-t mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div class="lg:w-1/6 md:w-1/2 w-full px-4 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
              <h2 class="text-xl font-medium text-black ml-3 tracking-widest mb-3">PRICE</h2>
              <div class="px-0 pt-4 pb-2">
                  <span class="block rounded-full text-gray-900 px-2 text-xl font-medium mr-2 mb-4">All</span>
                  <span class="block rounded-full text-gray-900 px-2 text-xl font-medium mr-2 mb-4">£0.00 - £20.00</span>
                  <span class="block rounded-full text-gray-900 px-2 text-xl font-medium mr-2 mb-4">£20.00 - £40.00</span>
                  <span class="block rounded-full text-gray-900 px-2 text-xl font-medium mr-2 mb-4">£40.00 - £60.00</span>
              </div>
         </div>
        <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center ">
          <div class="lg:w-1/6 md:w-1/2 w-full px-2">
            <h2 class="text-xl font-medium text-black tracking-widest ml-3 mb-3">COLOR</h2>
              <nav class="list-none px-0 pt-4 pb-2">
                  <li class="p-1">
                    <a class="text-gray-900 px-2 text-xl mt-2 font-medium hover:text-gray-800">Black<span class="px-2">(2)</span></a>
                  </li>
                  <li class="p-1">
                    <a class="text-gray-900 px-2 text-xl mt-2 font-medium hover:text-gray-800">Blue<span class="px-2">(2)</span></a>
                  </li>
                  <li class="p-1">
                    <a class="text-gray-900 px-2 text-xl mt-2 font-medium hover:text-gray-800">Green<span class="px-2">(2)</span></a>
                  </li>
              </nav>
          </div>
          <div class="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 class="text-xl font-medium text-black tracking-widest ml-3 mb-3">SIZE</h2>
              <nav class="list-none mb-5 pt-4">
                  <li class="p-1">
                    <a class="text-gray-900 px-2 text-xl mt-2 font-medium hover:text-gray-800">Large<span class="px-2">(2)</span></a>
                  </li>
                  <li class="p-1">
                    <a class="text-gray-900 px-2 text-xl mt-2 font-medium hover:text-gray-800">Medium<span class="px-2">(2)</span></a>
                  </li>
                  <li class="p-1">
                    <a class="text-gray-900 px-2 text-xl mt-2 font-medium hover:text-gray-800">Small<span class="px-2">(2)</span></a>
                  </li>
              </nav>
          </div>
          <div class="lg:w-2/6 md:w-1/2 w-full px-4">
            <h2 class="text-xl font-medium text-black ml-3 tracking-widest mb-3">BRANDS</h2>
              <nav class="list-none mb-5 pt-4">
                  <li class="p-1">
                    <a class="text-gray-900 block px-2 text-xl mt-2 font-medium hover:text-gray-800">Banshu Hamono<span class="px-2">(2)</span></a>
                  </li>
                  <li class="p-1">
                    <a class="text-gray-900 px-2 text-xl mt-2 font-medium hover:text-gray-800">Bower<span class="px-2">(2)</span></a>
                  </li>
                  <li class="p-1">
                    <a class="text-gray-900 px-2 text-xl mt-2 font-medium hover:text-gray-800">Braun<span class="px-2">(2)</span></a>
                  </li>
                  <li class="p-1">
                    <a class="text-gray-900 px-2 text-xl mt-2 font-medium hover:text-gray-800">Elevenplus<span class="px-2">(2)</span></a>
                  </li>
                  <li class="p-1">
                    <a class="text-gray-900 px-2 text-xl mt-2 font-medium hover:text-gray-800">Field<span class="px-2">(2)</span></a>
                  </li>
                  <li class="p-1">
                    <a class="text-gray-900 px-2 text-xl mt-2 font-medium hover:text-gray-800">Henry Wilson<span class="px-2">(2)</span></a>
                  </li>
              </nav>
          </div>
          <div class="lg:w-2/6 md:w-1/2 w-full px-4">
              <h2 class="text-xl font-medium text-black ml-3 tracking-widest mb-3">SORT BY</h2>
              <nav class="list-none mb-5">
                  <li class="p-1">
                     <a class="text-black block px-2 text-xl mt-2 font-medium hover:text-gray-800">Default</a>
                  </li>
                  <li class="p-1">
                     <a class="text-gray-900 block px-2 text-xl mt-2 font-medium hover:text-gray-800">Popularity</a>
                  </li>
                  <li class="p-1">
                     <a class="text-gray-900 block px-2 text-xl mt-2 font-medium hover:text-gray-800">Average rating</a>
                  </li>
                  <li class="p-1">
                     <a class="text-gray-900 block px-2 text-xl mt-2 font-medium hover:text-gray-800">Newness</a>
                  </li>
                  <li class="p-1">
                     <a class="text-gray-900 block px-2 text-xl mt-2 font-medium hover:text-gray-800">Price: Low to High</a>
                  </li>
                  <li class="p-1">
                     <a class="text-gray-900 block px-2 text-xl mt-2 font-medium hover:text-gray-800">Price: High to Low</a>
                  </li>
              </nav>
          </div>
        </div>
      </div>
  <!---filter----> 
  </div>
</template>

<script>
export default {
   data() {
    return {
      open: false,
    }

  }
}
</script>

<style>

</style>