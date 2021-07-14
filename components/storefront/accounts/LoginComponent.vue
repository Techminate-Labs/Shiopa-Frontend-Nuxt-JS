<template>
  <div>
      <div class="flex min-h-screen bg-white flex-wrap">
        <div class="w-1/2 bg-cover md:block hidden" style="background-image:  url(https://bsmedia.business-standard.com/_media/bs/img/article/2020-09/18/full/1600370225-9124.jpg)"></div>
          <!-- Login Section -->
            <div class="w-full md:w-1/2 flex flex-col ">
              <h2 class="text-base font-thin text-gray-600 text-center mt-10"><nuxt-link to="/"><span class="px-2">Home</span></nuxt-link>/<span class="px-2">acocount</span></h2>
              <p class="text-2xl font-bold text-gray-800 text-center mt-3">ACCOUNT</p>
               <div class="w-full md:w-2/2 flex flex-col items-center text-center justify-center">
              <div class="w-12 h-1 bg-black rounded mt-2 mb-4"></div>
               </div>
                <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                    <p class="text-center text-3xl">Login</p>
                        <form class="flex flex-col pt-2 md:pt-4" onsubmit="event.preventDefault();">
                            <div class="flex flex-col pt-2">
                                <label for="email" class="text-lg">Email</label>
                                <input type="email" id="email" placeholder="your@email.com" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                            </div>
                            <div class="flex flex-col pt-4">
                                <label for="password" class="text-lg">Password</label>
                                <input type="password" id="password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                            </div>
                            <div class="flex justify-between"><label class="block text-gray-500 font-bold my-4"><input type="checkbox" class="leading-loose text-pink-600"> <span class="py-2 text-sm text-gray-600 leading-snug"> Remem Me </span></label> <label class="block text-gray-500 font-bold my-4"><a href="#"
                                class="cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400"><span>Forgot Password?</span></a></label>
                            </div> 
                            <input type="submit" value="Log In" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8">
                        </form>
                        <div class="text-center pt-12 pb-12">
                            <p>Don't have an account? <nuxt-link to="/account/register" class="underline font-semibold">Register here.</nuxt-link></p>
                       </div>
                </div>
           </div>
        <!-- End Login Section -->
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>