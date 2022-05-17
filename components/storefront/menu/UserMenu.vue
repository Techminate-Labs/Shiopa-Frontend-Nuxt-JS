<template>
	<div class="bg-white fixed z-20 mx-auto py-4 shadow-sm w-full hidden" :class="isUserMenuOpen ? 'md:block' : ''">
		<nav class="container flex flex-row justify-between">
			<ul class="ml-2 hidden md:block">
				<li v-show="$accessor.session.getUser === null" class="inline-block hover:text-yellow-600">
					<NuxtLink :to="{ name: 'login' }">Log in</NuxtLink>
				</li>
				<li v-show="$accessor.session.getUser === null" class="inline-block hover:text-yellow-600">
					<NuxtLink :to="{ name: 'register' }">Register</NuxtLink>
				</li>
				<li v-show="$accessor.session.getUser !== null" class="inline-block hover:text-yellow-600">
					<NuxtLink :to="{ name: 'account' }">My Account</NuxtLink>
				</li>
				<li v-show="$accessor.session.getUser !== null" class="inline-block hover:text-yellow-600">
					<button @click="logOut">Log out</button>
				</li>
			</ul>
			<button @click="closeUserMenu">
				<Delete class="hover:text-red-600" />
			</button>
		</nav>
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
	}
	
	get isUserMenuOpen(): boolean {
		return this.$accessor.menu.isUserMenuOpen
	}

	async logOut(): Promise<void> {
		const logout = await this.$axios.$post('http://localhost:8000/api/logout')
		
		if (!logout.error){
			this.$accessor.session.setUser(null)
		}
	
	}

}
</script>