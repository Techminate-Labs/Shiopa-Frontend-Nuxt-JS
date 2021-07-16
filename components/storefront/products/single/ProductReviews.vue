<template>
  <div class="container md:max-w-2xl mx-auto text-center my-8 px-4">
    <ul v-if="reviews.length">
      <li v-for="(review, index) in reviews" :key="index">
        <div class="flex flex-col text-left my-6">
          <div class="relative">
            <span class="font-bold">{{review.username}}</span>
            <span>{{review.created_at}}</span>
            <span :class="'star-review-' + review.rating"></span>
          </div>
          <div class="min-w-full text-left mt-3">
            {{review.comment}}
          </div>
        </div>
      </li>  
    </ul>
    <div v-else class="my-6 px-4">
      <p class="text-xl font-bold">There are no reviews yet, be the first one !</p>
    </div>
    <hr>
    <div class="my-6 text-left px-4">
      <p class="font-bold text-2xl mb-6">Add a review</p>
      <form>
        <div class="flex flex-row flex-wrap justify-between">
          <div class="flex flex-col flex-grow mr-2 mb-4">
            <label for="author" class="text-xl mb-2">Name <sub>*</sub></label>
            <input
              class="px-3 py-2 border-2 border-gray-300 focus:border-gray-800 rounded"
              id="author" name="author" placeholder="Name"
              type="text" value="" aria-required="true">
          </div>
          <div class="flex flex-col flex-grow mb-4">
            <label for="email" class="text-xl mb-2">Email <sub>*</sub></label>
            <input
              class="px-3 py-2 border-2 border-gray-300 focus:border-gray-800 rounded"
              id="email" name="email" placeholder="Email"
              type="email" value="" aria-required="true">
          </div>
        </div>
        <div class="flex flex-col">
          <label for="message" class="text-xl mb-2">Your message <sub>*</sub></label>
          <textarea
            class="px-3 py-2 border-2 border-gray-300 focus:border-gray-800 rounded"
            id="message" name="message" placeholder="Your message"
            rows="8"
            type="text" value="" aria-required="true"></textarea>
        </div>
        <button class="py-2 px-4 text-xl text-white my-4 bg-gray-800 rounded">Submit review</button>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'

interface Review {
  comment: string
  created_at: string
  id: number
  product_id: number
  rating: number
  updated_at: string
  username: string
}

@Component
export default class ProductReviews extends Vue{

  @Prop({ required: true }) readonly product!: object
  reviews: Review[] = []

  async fetch() {
    const reviews = await fetch(
      'http://localhost:8000/product_review'
    )
    .then(res => res.json())
    .catch(err => console.log(err))
    this.reviews = this.reviews.concat(reviews).filter((review: Review) => review.product_id == this.$props.product.id)
  }
}
</script>
<style>
.star-review-0::before{
  content: '\2606\2606\2606\2606\2606';
  font-size: 1.55rem;
  position: absolute;
  top: -.5rem;
  right: 0;
}
.star-review-1::before{
  content: '\2605\2606\2606\2606\2606';
  font-size: 1.55rem;
  position: absolute;
  top: -.5rem;
  right: 0;
}
.star-review-2::before{
  content: '\2605\2605\2606\2606\2606';
  font-size: 1.55rem;
  position: absolute;
  top: -.5rem;
  right: 0;
}
.star-review-3::before{
  content: '\2605\2605\2605\2606\2606';
  font-size: 1.55rem;
  position: absolute;
  top: -.5rem;
  right: 0;
}
.star-review-4::before{
  content: '\2605\2605\2605\2605\2606';
  font-size: 1.55rem;
  position: absolute;
  top: -.5rem;
  right: 0;
}
.star-review-5::before{
  content: '\2605\2605\2605\2605\2605';
  font-size: 1.55rem;
  position: absolute;
  top: -.5rem;
  right: 0;
}
</style>