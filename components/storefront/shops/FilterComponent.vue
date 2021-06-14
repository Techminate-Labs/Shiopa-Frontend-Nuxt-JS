<template>
  <div class="bg-gray-100 px-0 py-4">
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
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
            </svg>
          <a :to="{ name: 'Essentials' }" class="text-gray-900 text-xl font-medium hover:text-yellow-600" @click="open = !open">Filter</a>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
        <!-- Breadcrumbs -->

            <a :to="{ name: 'Interior' }" class="text-gray-900 px-2 text-xl font-medium hover:text-yellow-600"><span>Order by:Default</span>
            </a>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </section>
      <!---filter--->
      <div class="px-16 py-4">
         <div v-if="open" class="container px-25 py-10 inline-block border-2 border-gray-200 absoulate w-full mt-5 bg-gray-100 border-t mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div class="lg:w-1/6 md:w-1/2 w-full flex-shrink-0 md:mx-0 text-center md:text-left md:mt-0 mt-10">
              <h2 class="text-xl font-medium text-black ml-3 tracking-widest mb-3">PRICE</h2>
              <div class="px-0 pt-4 pb-2">
                  <span class="block rounded-full cursor-pointer text-gray-800 hover:text-black px-2 text-xl font-medium mr-2 mb-4">All</span>
                  <span class="block rounded-full cursor-pointer text-gray-800 hover:text-black text-gray-900 px-2 text-lg font-medium mr-2 mb-4">£0.00 - £20.00</span>
                  <span class="block rounded-full cursor-pointer text-gray-800 hover:text-black text-gray-900 px-2 text-lg font-medium mr-2 mb-4">£20.00 - £40.00</span>
                  <span class="block rounded-full cursor-pointer text-gray-800 hover:text-black text-gray-900 px-2 text-lg font-medium mr-2 mb-4">£40.00 - £60.00</span>
              </div>
         </div>
        <div class="flex-grow flex flex-wrap md:pr-10 -mb-2 md:text-left text-center ">
          <div class="lg:w-1/6 md:w-1/2 w-full">
            <h2 class="text-xl font-medium text-black tracking-widest ml-3 mb-3">COLOR</h2>
              <nav class="list-none px-0 pt-4 pb-2">
                  <li class="p-1">
                    <a class=" px-2 text-lg m mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Black<span class="px-2">(2)</span></a>
                  </li>
                  <li class="p-1">
                    <a class=" px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Blue<span class="px-2">(2)</span></a>
                  </li>
                  <li class="p-1">
                    <a class="px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Green<span class="px-2">(2)</span></a>
                  </li>
              </nav>
          </div>
          <div class="lg:w-1/6 md:w-1/2 w-full px-2">
            <h2 class="text-xl font-medium text-black tracking-widest ml-1 mb-3">SIZE</h2>
              <nav class="list-none mb-1 pt-4">
                  <li class="p-1">
                    <a class="px-1 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Large<span class="px-2">(2)</span></a>
                  </li>
                  <li class="p-1">
                    <a class="px-1 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Medium<span class="px-2">(2)</span></a>
                  </li>
                  <li class="p-1">
                    <a class="px-1 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Small<span class="px-2">(2)</span></a>
                  </li>
              </nav>
          </div>
          <div class="lg:w-2/6 md:w-1/2 w-full">
            <h2 class="text-xl font-medium text-black ml-3 tracking-widest mb-3">BRANDS</h2>
              <nav class="list-none mb-5 pt-4">
                  <li class="p-1">
                    <a class="block px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Banshu Hamono<span class="px-2">(2)</span></a>
                  </li>
                  <li class="p-1">
                    <a class="px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Bower<span class="px-2">(2)</span></a>
                  </li>
                  <li class="p-1">
                    <a class="px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Braun<span class="px-2">(2)</span></a>
                  </li>
                  <li class="p-1">
                    <a class="px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Elevenplus<span class="px-2">(2)</span></a>
                  </li>
                  <li class="p-1">
                    <a class="px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Field<span class="px-2">(2)</span></a>
                  </li>
                  <li class="p-1">
                    <a class="px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Henry Wilson<span class="px-2">(2)</span></a>
                  </li>
              </nav>
          </div>
          <div class="lg:w-2/6 md:w-1/2 w-full px-2">
              <h2 class="text-xl font-medium text-black ml-0 tracking-widest mb-1">SORT BY</h2>
              <nav class="list-none mb-5">
                  <li class="p-1">
                     <a class="text-black block px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Default</a>
                  </li>
                  <li class="p-1">
                     <a class="block px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Popularity</a>
                  </li>
                  <li class="p-1">
                     <a class="block px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Average rating</a>
                  </li>
                  <li class="p-1">
                     <a class="block px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Newness</a>
                  </li>
                  <li class="p-1">
                     <a class="block px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Price: Low to High</a>
                  </li>
                  <li class="p-1">
                     <a class="block px-2 text-lg mt-2 font-medium cursor-pointer text-gray-800 hover:text-black">Price: High to Low</a>
                  </li>
              </nav>
          </div>
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