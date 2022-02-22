<template>
  <div class="bg-footerclr">
    <div class="container  text-md text-white flex flex-col md:flex-row justify-between">
      <div class="md:mx-10 flex-grow w-full md:w-auto md:flex-grow-0">
        <h5 class="mt-3 text-xl">SHIOPA</h5>
        <ul class="mt-3 text-sm">
          <li>
            <a>
              Github
            </a>
          </li>
          <li>
            <a>
              Reddit
            </a>
          </li>
          <li>
            <a>
              Twitter
            </a>
          </li>
          <li>
            <a>
              Discord
            </a>
          </li>
        </ul>
      </div>
        <div class="md:mx-10 flex-grow w-full md:w-auto md:flex-grow-0">
        <h5 class="mt-3 text-xl">Information</h5>
        <ul class="mt-3 text-sm">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Delivery Information</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms &amp; Conditions</a></li>
          <li><a href="#">Customer Service</a></li>  
        </ul>
      </div>
        <div class="md:mx-10 flex-grow w-full md:w-auto md:flex-grow-0">
        <h5 class="mt-3 text-xl">My Accound</h5>
        <ul class="mt-3 text-sm">
          <li><a href="#">My Account</a></li>
          <li><a href="#">Order History</a></li>
          <li><a href="#">Wish List</a></li>
          <li><a href="#">Newsletter</a></li>
          <li><a href="#">Order History</a></li>
        </ul>
      </div>
      <div class="md:mx-10 flex-grow w-full md:w-auto md:flex-grow-0">
        <h5 class="mt-3 text-xl">Get in touch</h5>
        <ul class="mt-3 text-sm">
          <li><nuxt-link to="/team">Address: Your address goes here</nuxt-link></li>
          <li><nuxt-link to="/team">Telephone Enquiry: (012) 345 6789</nuxt-link></li>
          <li><nuxt-link to="/team">Email: techminate@gmail.com</nuxt-link></li>
          <li class="mt-2"><nuxt-link to="/donate">Open : 8:00 AM - Close : 18:00 PM</nuxt-link></li>
          <li><nuxt-link to="/donate">Saturday - Sunday : Close</nuxt-link></li>
        </ul>
      </div>
    </div>
    <div class="container px-6 pb-1 bg-footerclr2 lg:px-32 text-md text-white flex flex-col md:flex-row justify-between shadow-inner">
      <div class="md:mx-10 flex-grow w-full md:w-auto md:flex-grow-0">
        <span class="text-xs">Developed By : Techminate</span>
      </div>
      <div class="md:mx-10 flex-grow w-full md:w-auto md:flex-grow-0">
        <span class="text-xs">Copyright ©2021 All rights reserved | Made with Techminate</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Prop, Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Footer extends Vue {
  @Prop({ required: true }) readonly categories!: object[]

}
</script>
