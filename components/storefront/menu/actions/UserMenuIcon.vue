<template>
	<li @click="openUserMenu" class="ml-8 relative cursor-pointer self-center">
		<UserIcon />
	</li>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

// components
import UserIcon from '@/assets/icons/UserIcon.vue'

@Component({ components: { UserIcon } })
export default class UserMenuIcon extends Vue {

	public openUserMenu(): void {
		this.$accessor.menu.setUserMenu(true)
	}

}
</script>