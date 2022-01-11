<template>
	<div class="mt-16 mb-20">
		<Register />
	</div>
</template>

<script lang="ts">
import Register from '@/components/storefront/accounts/Register.vue'
export default {
	data(){
		return{
			title: '',
		}
	},
	components:{
		Register,
	},

}
</script>
