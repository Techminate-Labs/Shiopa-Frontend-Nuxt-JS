<template>
 <div>
    <div class="container mx-auto mt-10">
         <!---Another login---->
         <div class="flex shadow-md my-4 ml-10 bg-gray-200 mr-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-5 mb-2 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd" />
            </svg>
            <div>
                <span>Returning customer?</span><nuxt-link to="/" class="ml-1">Click here to login</nuxt-link>
            </div>
         </div>

         <div class="container mx-auto mt-10 ml-10">
             <span class="ml-5">If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing & Shipping section.</span>
             <div class="grid grid-cols-8 gap-6 ml-5">
                <div class="col-span-4 sm:col-span-3">
                    <label for="first-name" class="block text-lg font-medium text-gray-700">Users name or Email<span class="">*</span></label>
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="w-full bg -gray-600 border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500">
                </div>
                <div class="col-span-4 sm:col-span-3">
                    <label for="last-name" class="block text-lg font-medium text-gray-700">Password</label>
                    <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500">
                </div>
             </div>
             <div class="container mx-auto mt-4">
                <button class="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 ml-5">
                    Log In
                </button>
                <label class="inline-flex items-center">
                    <input type="checkbox" class="form-checkbox">
                    <span class="ml-2">Remember me</span>
                </label>
             </div>
         </div>
          <!----login part--->
            <div class="container mx-auto mt-10">
                <!---Another login---->
                <div class="flex shadow-md my-4 ml-10 bg-gray-200 mr-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-5 mb-2 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd" />
                    </svg>
                    <div>
                        <span>Have a coupon?</span><nuxt-link to="/" class="ml-1">Click here to enter your code</nuxt-link>
                    </div>
                </div>
                <div>
                    <div class="border border-indigo-600 ml-10 mr-10">
                        <span class="mt-4 my-5">If you have a coupon code, please apply it below.</span>
                    </div>
                </div>
            </div>
            <!----login part--->
          <!---End Another login---->
        <div class="flex shadow-md my-2">
            <!---billing details--->
            <div class="w-3/4 bg-gray-100 px-10 py-10">
                <div class="mt-5 md:mt-0">
                    <form action="#" method="POST">
                        <div class="overflow-hidden sm:rounded-md">
                            <div class="px-2 py-2 sm:p-6">
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="first-name" class="block text-lg font-medium text-gray-700">First name</label>
                                        <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="w-full bg -gray-600 border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="last-name" class="block text-lg font-medium text-gray-700">Last name</label>
                                        <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500">
                                    </div>
                                    <div class="col-span-6 sm:col-span-6">
                                        <label for="email-address" class="block text-lg font-medium text-gray-700">Email address</label>
                                        <input type="text" name="email-address" id="email-address" autocomplete="email" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500">
                                    </div>
                                    <div class="col-span-6 sm:col-span-6">
                                        <label for="email-address" class="block text-lg font-medium text-gray-700">Phone Number</label>
                                        <input type="text" name="email-address" id="email-address" autocomplete="email" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500">
                                    </div>
                                     <div class="col-span-6 sm:col-span-6">
                                        <label for="email-address" class="block text-lg font-medium text-gray-700">Company Name</label>
                                        <input type="text" name="email-address" id="email-address" autocomplete="email" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500">
                                    </div>
                                    <div class="col-span-6 sm:col-span-6">
                                        <label for="country" class="block text-lg font-medium text-gray-700">Country / Region</label>
                                        <select id="country" name="country" autocomplete="country" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500">
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                        </select>
                                    </div>
                                    <div class="col-span-6">
                                        <label for="street-address" class="block text-lg font-medium text-gray-700">Street address</label>
                                        <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500">
                                    </div>
                                    <div class="col-span-6 sm:col-span-6 lg:col-span-3">
                                        <label for="city" class="block text-lg font-medium text-gray-700">City</label>
                                        <input type="text" name="city" id="city" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                                        <label for="country" class="block text-lg font-medium text-gray-700">State / Province</label>
                                        <select id="country" name="country" autocomplete="country" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500">
                                        <option>Al Aksha</option>
                                        <option>Al Amba</option>
                                        <option>California</option>
                                        </select>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-6">
                                        <label for="postal-code" class="block text-lg font-medium text-gray-700">ZIP / Postal</label>
                                        <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <!---End billing details--->
            <div id="summary" class="w-1/4 bg-gray px-10 py-10">
                <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                <div class="flex justify-between mt-10 mb-5">
                    <span class="font-semibold text-sm uppercase">Items</span>
                    <span class="font-semibold text-sm">400$</span>
                </div>
                <div>
                    <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                    <select class="block p-2 text-gray-600 w-full text-sm">
                        <option>Free shipping</option>
                        <option>Standard shipping - $10.00</option>
                    </select>
                </div>
                <div class="py-10">
                    <label for="cupon" class="font-semibold inline-block mb-3 text-sm uppercase">Cupon</label>
                    <input type="text" id="Cupon" placeholder="Cupon code" class="p-2 text-sm w-full">
                </div>
                <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                <div class="border-t mt-8">
                    <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                        <span>Total cost</span>
                        <span>$400</span>
                    </div>
                    <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                </div>
            </div>
         </div>
    </div>
 </div>
</template>

<script>
export default {

}
</script>

<style>

</style>