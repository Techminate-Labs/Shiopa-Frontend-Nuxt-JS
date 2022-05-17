<template>
    <div id="banner-middle">
        <div class="grid">
            <div v-for="(banner, i) in banners" :key="i" 
                class="relative grid place-self-center">
                <div class="absolute place-self-start self-center z-10">
                    <h6 class="text-xl text-yellow-600 mb-3">Up To 30% Off</h6>
                    <h1 class="text-4xl font-extrabold mb-3 text-black tracking-wider">{{ banner.title }}</h1>
                    <p class="py-2">{{ banner.description }}</p>
                    <button class="btnclass pt-3">Shop now</button>
                </div>
                <div class="z-0 place-self-end">
                    <img class="w-full" :src="banner.image"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'BannerMiddle',
    data() {
        return {
            banners: [] as any
        }
    },
    async fetch() {
        this.banners = await fetch('http://127.0.0.1:8000/api/bannerMiddleImages')
            .then(res => res.json())
            .catch(err => console.log(err))
    }
})
</script>

