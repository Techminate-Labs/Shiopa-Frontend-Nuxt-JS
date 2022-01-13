<template>
	<div class="mt-16 mb-20">
		<Login />
	</div>
</template>

<script lang="ts">
// components
import Login from '@/components/storefront/accounts/Login.vue'

export default {
	data(){
		return{
			title: '',
		}
	},
	components:{
		Login,
	},

}
</script>
