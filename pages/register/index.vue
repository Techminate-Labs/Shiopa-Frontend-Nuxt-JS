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
	}
}
</script>
