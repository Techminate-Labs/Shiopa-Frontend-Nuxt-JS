<template>
	<div class="container mx-auto py-4 flex flex-row justify-between" :class="isUserMenuOpen ? 'block' : 'hidden'">
		<ul v-if="$accessor.session.getUser === null" class="ml-2 hidden md:block">
			<li class="inline-block hover:text-yellow-600">
				<NuxtLink :to="{ name: 'login' }">Log in</NuxtLink>
			</li>
			<li class="inline-block hover:text-yellow-600">
				<NuxtLink :to="{ name: 'register' }">Register</NuxtLink>
			</li>
		</ul>
		<ul v-else class="ml-2 hidden md:block">
			<li class="inline-block hover:text-yellow-600">
				<NuxtLink :to="{ name: 'account' }">My Account</NuxtLink>
			</li>
			<li class="inline-block hover:text-yellow-600">
				<button @click="logOut">Log out</button>
			</li>
		</ul>
		<button @click="closeUserMenu">
			<Delete class="hover:text-red-600" />
		</button>
	</div>
</template>

<script lang="ts">
import { Vue, Component} from 'nuxt-property-decorator'
import Delete from '@/assets/icons/Delete.vue'

@Component({
	components: { Delete }
})
export default class UserMenu extends Vue {

	public closeUserMenu(): void {
		this.$accessor.menu.setUserMenu(false)
		console.log('click')
		console.log(this.$accessor.menu.isUserMenuOpen)
	}
	
	get isUserMenuOpen(): boolean {
		return this.$accessor.menu.isUserMenuOpen
	}

	async logOut(): Promise<void> {
		const logout = await this.$axios.$post('http://localhost:8000/api/logout')
		this.$axios.setHeader('Accept', 'application/json')
		
		if (!logout.error){
			this.$accessor.session.setUser(null)
		}
	
	}

}
</script>