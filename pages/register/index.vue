<template>
	<RegisterClient />
</template>

<script lang="ts">
// components
import RegisterClient from '~/components/storefront/account/RegisterClient.vue'

export default {
	layout: 'portal',
	components: {
		RegisterClient,
	},
	data() {
		return {
			posts: [] as Array<any>
		}
	},
	async asyncData({ $http }: any) {
        // const posts = await $http.$get('https://api.nuxtjs.dev/posts')

        // return { posts }
	}
}
</script>
