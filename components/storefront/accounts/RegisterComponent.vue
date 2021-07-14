<template>
  <div>
      <div class="flex min-h-screen bg-white flex-wrap">
        <div class="w-1/2 bg-cover md:block hidden" style="background-image:  url(https://bsmedia.business-standard.com/_media/bs/img/article/2020-09/18/full/1600370225-9124.jpg)"></div>
        <!-- Login Section -->
            <div class="w-full md:w-1/2 flex flex-col ">
              <h2 class="text-base font-thin text-gray-600 text-center mt-10"><nuxt-link to="/"><span class="px-2 hover:text-gray-900">Home</span></nuxt-link>/<span class="px-2">acocount</span></h2>
              <p class="text-2xl font-bold text-gray-800 text-center mt-3">ACCOUNT</p>
               <div class="w-full md:w-2/2 flex flex-col items-center text-center justify-center">
                 <div class="w-12 h-1 bg-black rounded mt-2 mb-4"></div>
                   <p class="text-center text-3xl">Register</p>
                        <form class="flex flex-col pt-3 md:pt-4" onsubmit="event.preventDefault();">
                            <div class="flex -mx-3">
                                <div class="w-1/2 px-3 mb-5">
                                    <label for="" class="text-xs font-semibold px-1">First name</label>
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                        <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-400 outline-none focus:border-gray-800" placeholder="John">
                                    </div>
                                </div>
                                <div class="w-1/2 px-3 mb-5">
                                    <label for="" class="text-xs font-semibold px-1">Last name</label>
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                        <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-400 outline-none focus:border-gray-800" placeholder="Smith">
                                    </div>
                                </div>
                            </div>
                            <div class="flex -mx-3">
                                <div class="w-full px-3 mb-5">
                                    <label for="" class="text-xs font-semibold px-1">Email</label>
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <input type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-400 outline-none focus:border-gray-800" placeholder="johnsmith@example.com">
                                    </div>
                                </div>
                            </div>
                            <div class="flex -mx-3">
                                <div class="w-full px-3 mb-12">
                                    <label for="" class="text-xs font-semibold px-1">Password</label>
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                        <input type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-400 outline-none focus:border-gray-800" placeholder="************">
                                    </div>
                                </div>
                                <div class="w-full px-3 mb-12">
                                    <label for="" class="text-xs font-semibold px-1">Re-type Password</label>
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                        <input type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-400 outline-none focus:border-gray-800" placeholder="************">
                                    </div>
                                </div>
                            </div>
                            <input type="submit" value="Log In" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8">
                        </form>
                        <div class="text-center pt-8 pb-12">
                            <p>Are you have already account? <nuxt-link to="/account" class="underline font-semibold">Login here.</nuxt-link></p>
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