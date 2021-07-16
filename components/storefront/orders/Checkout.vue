<template>
    <div>
        <div class="container mx-auto mt-5">
            <div class="w-full">
              <h2 class="text-xl font-thin italic text-gray-600 text-center mt-10"><nuxt-link to="/"><span class="px-2 hover:text-gray-900">Home</span></nuxt-link>/<span class="px-2 text-gray-900">Checkout</span></h2>
              <p class="text-4xl font-semibold text-gray-900 text-center mt-5">CHECKOUT</p>
               <div class="w-full md:w-2/2 flex flex-col items-center text-center justify-center">
              <div class="w-12 h-1 bg-black rounded mt-2 mb-4"></div>
               </div>
            </div>
            <!---Another login---->
            <div class="flex shadow-md my-4 ml-10 bg-gray-200 mr-10 h-10 pt-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-5 mb-2 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd" />
                </svg>
                <div>
                    <span>Returning customer?</span><span class="ml-1 cursor-pointer" @click="open = !open">Click here to login</span>
                </div>
            </div>
            <div class="container mx-auto mt-10 ml-10" v-if="open">
                <span class="ml-5 text-gray-600">If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing & Shipping section.</span>
                <div class="grid grid-cols-8 gap-6 ml-5">
                    <div class="col-span-4 sm:col-span-3">
                        <label for="first-name" class="block text-lg font-medium text-gray-800">Users name or Email<span class="">*</span></label>
                        <input type="text" name="first-name" id="first-name" placeholder="User name" autocomplete="given-name" class="w-full bg -gray-600 border-2 border-gray-200 p-2 rounded outline-none focus:border-gray-900">
                    </div>
                    <div class="col-span-4 sm:col-span-3">
                        <label for="password" class="block text-lg font-medium text-gray-800">Password</label>
                        <input type="text" name="password" id="password" autocomplete="password" placeholder="password" class="w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-gray-900">
                    </div>
                </div>
                <div class="container mx-auto mt-4">
                    <button class="py-2 px-4 bg-white hover:bg-black border hover:text-white border-gray-900 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-75 ml-5">
                        Log In
                    </button>
                    <label class="inline-flex items-center">
                        <input type="checkbox" class="form-checkbox">
                        <span class="ml-2">Remember me</span>
                    </label>
                    
                </div>
                <div class="container mx-auto mt-5">
                   <span class="ml-5 py-10"><nuxt-link to="/">Lost your Password?</nuxt-link></span>
                </div>
            </div>
            <!----login part--->
                <div class="container mx-auto mt-10">
                    <!---Another login---->
                    <div class="flex shadow-md my-4 h-10 pt-2 ml-10 bg-gray-200 mr-10">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-5 mb-2 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd" />
                        </svg>
                        <div>
                            <span>Have a coupon?</span><span @click="close = !close" class="ml-1 cursor-pointer hover:text-gray-800">Click here to enter your code</span>
                        </div>
                    </div>
                    <div v-if="close">
                        <div class="border border-gray-600 ml-10 mr-10">
                            <span class="mt-5 px-5 my-5 text-gray-600">If you have a coupon code, please apply it below.</span>
                            <section class="text-gray-600 body-font">
                                <div class="container px-0 py-5 mx-auto">
                                  <div class="grid grid-cols-8 gap-6 ml-5">
                                        <div class="col-span-4 sm:col-span-3">
                                            <input type="text" name="cupon code" id="cupon code" autocomplete="given-name" placeholder="Cupon code" class="w-full bg -gray-600 border-2 border-gray-200 p-2 rounded outline-none focus:border-gray-900">
                                        </div>
                                        <button class="bg-white hover:bg-black border border-gray-700 w-25 h-10 text-sm text-gray-800 hover:text-white  uppercase">Apply cupon</button>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <!----login part--->
                <!---End Another login---->
                <div class="flex my-0 bg-white">
                <!---billing details--->
                    <div class="w-3/5 px-10 py-10">
                        <form action="#" method="POST">
                            <div class="overflow-hidden sm:rounded-md">
                                <div class="px-2 py-2 sm:p-6">
                                    <div class="grid grid-cols-6 gap-6">
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="first-name" class="block text-lg font-medium text-gray-900">First name</label>
                                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" placeholder="First name here" class="w-full bg -gray-600 border-2 border-gray-200 p-2 rounded outline-none focus:border-gray-800">
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="last-name" class="block text-lg font-medium text-gray-900">Last name</label>
                                            <input type="text" name="last-name" id="last-name" autocomplete="family-name" placeholder="Last name here" class="w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-gray-800">
                                        </div>
                                        <div class="col-span-6 sm:col-span-6">
                                            <label for="company-name" class="block text-lg font-medium text-gray-900">Company Name (optional)</label>
                                            <input type="text" name="company-name" id="company-name" autocomplete="company-name" placeholder="Company name here" class="w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-gray-800">
                                        </div>
                                        <div class="col-span-6 sm:col-span-6">
                                            <label for="country" class="block text-lg font-medium text-gray-900">Country / Region</label>
                                            <select id="country" name="country" autocomplete="country" class="w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-gray-800">
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                            </select>
                                        </div>
                                        <div class="col-span-6">
                                            <label for="street-address" class="block text-lg font-medium text-gray-900">Street address</label>
                                            <input type="text" name="street-address" id="street-address" autocomplete="street-address" placeholder="House Number and street name" class="w-full border-2 border-gray-200 p-2 px-2 py-2 rounded outline-none focus:border-gray-800">
                                            <input type="text" name="street-address" id="street-address" autocomplete="street-address" placeholder="Apartment, suit, unit etc, (optional)." class="w-full border-2 border-gray-200 p-2 px-2 py-2 mt-3 rounded outline-none focus:border-gray-800">
                                        </div>
                                        <div class="col-span-6 sm:col-span-6 lg:col-span-3">
                                            <label for="city" class="block text-lg font-medium text-gray-900">Town / City</label>
                                            <input type="text" name="city" id="city" placeholder="Town or city name here" class="w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-gray-800">
                                        </div>
                                        <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                                            <label for="country" class="block text-lg font-medium text-gray-900">State / Province</label>
                                            <select id="country" name="country" autocomplete="country" class="w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-gray-800">
                                            <option>Al Aksha</option>
                                            <option>Al Amba</option>
                                            <option>California</option>
                                            </select>
                                        </div>
                                        <div class="col-span-6 sm:col-span-3 lg:col-span-6">
                                            <label for="postal-code" class="block text-lg font-medium text-gray-900">ZIP / Postal</label>
                                            <input type="text" name="postal-code" id="postal-code" placeholder="Zip or Postal" autocomplete="postal-code" class="w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-gray-800">
                                        </div>
                                        <div class="col-span-6 sm:col-span-6">
                                            <label for="email-address" class="block text-lg font-medium text-gray-900">Email address</label>
                                            <input type="text" name="email-address" id="email-address" autocomplete="email" placeholder="E-mail Address" class="w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-gray-800">
                                        </div>
                                        <div class="col-span-6 sm:col-span-6">
                                            <label for="email-address" class="block text-lg font-medium text-gray-900">Phone Number</label>
                                            <input type="text" name="phone-number" id="phone-number" autocomplete="phone-number" placeholder="Your phone number" class="w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-gray-800">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!---End billing details--->
                    <!---checkout---->
                    <div id="summary" class="w-2/6 px-10 py-10">
                        <h1 class="font-thin text-4xl border-b pb-8">Your order</h1>
                            <div class="flex justify-between mb-5">
                                <div class="w-15">
                                    <img class="h-20" src="http://demoapus-wp.com/maison/wp-content/uploads/2017/07/bookends-normal-600x600.jpg" alt="">
                                </div>
                                <div>
                                    <h4>Bookends</h4>
                                    <span class="font-semibold text-sm">400$</span>
                                </div>
                            </div>
                            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                                    <span>Sub Total</span>
                                    <span>$400</span>
                                </div>
                            <div>
                              <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                                <select class="block p-2 text-gray-600 w-full text-sm">
                                    <option>Free shipping</option>
                                    <option>Standard shipping - $10.00</option>
                                </select>
                            </div>
                            <div class="py-5 flex">
                                <div>
                                    <label for="cupon" class="font-semibold inline-block  mb-3 text-sm uppercase">Cupon</label>
                                    <input type="text" id="Cupon" placeholder="Cupon code" class="p-2 text-sm w-full border border-gray-600">
                                </div>
                                <button class="bg-black hover:bg-gray-800 px-5 py-2 h-10 mt-8 ml-3 text-sm text-white uppercase">Apply</button>
                            </div> 
                            <div class="border-t mt-8">
                                
                                <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                                    <span>Total cost</span>
                                    <span>$400</span>
                                </div>
                               <button class="bg-black font-semibold hover:bg-gray-800 py-3 text-sm text-white uppercase w-full">Checkout</button>
                            </div>
                    </div>
                <!---End checkout---->
                </div>
                <!---Create account--->
                  <div class="w-3/5 px-10 py-0">
                    <form action="#" method="POST">
                        <div class="overflow-hidden sm:rounded-md">
                            <div class="px-2 py-2 sm:p-6">
                                <label  @click="account = !account" class="inline-flex items-center">
                                    <input type="checkbox" class="form-checkbox">
                                    <span  @click="account = !account" class="ml-2 cursor-pointer text-gray-900">Create an Account?</span>
                                </label>
                                <div v-if="account" class="grid grid-cols-6 gap-6 mt-4">
                                    <div class="col-span-6 sm:col-span-6">
                                        <label for="password" class="block text-lg font-medium text-gray-800">Create account password</label>
                                        <input type="text" name="account-password" id="password" autocomplete="password" class="w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-gray-900">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    </div>
                  <!---End create account---->
                  <!---shipping address----->
                   <div class="w-3/5 px-10 py-0 ml-3">
                        <form action="#" method="POST">
                            <div class="overflow-hidden sm:rounded-md">
                                <div class="px-4 py-4 sm:p-2">
                                    <h1 class="uppercase text-2xl">Shipping address</h1>
                                    <label @click="ship= !ship" class="inline-flex items-center mt-5">
                                        <input type="checkbox" class="form-checkbox">
                                        <span @click="ship= !ship" class="ml-2 cursor-pointer hover:text-gray-800">Ship to a different address?</span>
                                    </label>
                                    <div v-if="ship" class="grid grid-cols-6 gap-6">
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="first-name" class="block text-lg font-medium text-gray-900">First name</label>
                                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" placeholder="First name here" class="w-full bg -gray-600 border-2 border-gray-200 p-2 rounded outline-none focus:border-gray-800">
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="last-name" class="block text-lg font-medium text-gray-900">Last name</label>
                                            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-gray-800">
                                        </div>
                                        <div class="col-span-6 sm:col-span-6">
                                            <label for="company-name" class="block text-lg font-medium text-gray-900">Company Name (optional)</label>
                                            <input type="text" name="company-name" id="company-name" autocomplete="company-name" class="w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-gray-800">
                                        </div>
                                        <div class="col-span-6 sm:col-span-6">
                                            <label for="country" class="block text-lg font-medium text-gray-900">Country / Region</label>
                                            <select id="country" name="country" autocomplete="country" class="w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-gray-800">
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                            </select>
                                        </div>
                                        <div class="col-span-6">
                                            <label for="street-address" class="block text-lg font-medium text-gray-900">Street address</label>
                                            <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="w-full border-2 border-gray-200 p-2 px-2 py-2 rounded outline-none focus:border-gray-800">
                                            <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="w-full border-2 border-gray-200 p-2 px-2 py-2 mt-3 rounded outline-none focus:border-gray-800">
                                        </div>
                                        <div class="col-span-6 sm:col-span-6 lg:col-span-3">
                                            <label for="city" class="block text-lg font-medium text-gray-900">Town / City</label>
                                            <input type="text" name="city" id="city" class="w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-gray-800">
                                        </div>
                                        <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                                            <label for="country" class="block text-lg font-medium text-gray-900">State / Province</label>
                                            <select id="country" name="country" autocomplete="country" class="w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-gray-800">
                                            <option>Al Aksha</option>
                                            <option>Al Amba</option>
                                            <option>California</option>
                                            </select>
                                        </div>
                                        <div class="col-span-6 sm:col-span-3 lg:col-span-6">
                                            <label for="postal-code" class="block text-lg font-medium text-gray-900">ZIP / Postal</label>
                                            <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="w-full border-2 border-gray-200 p-2 rounded outline-none focus:border-gray-800">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                <!---shipping address----->
                <!---text area--->
                 <label class="block px-2 py-2  ml-10">
                    <span class="text-black ml-2">Order notes (optional)</span>
                    <textarea class="form-textarea mt-2 ml-2 block border-1 border border-gray-900  w-1/2" rows="4" placeholder="Notes about your order.special notes for Delivery."></textarea>
                </label>
                <!---end text area---->
        </div>
    </div>
</template>

<script>
export default {
     data() {
    return {
      open: false,
      close: false,
      account:false,
      ship:false,
    }
  },
}
</script>

<style>

</style>