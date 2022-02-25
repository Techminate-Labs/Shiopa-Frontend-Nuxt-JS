import { getAccessorType, mutationTree, actionTree } from 'typed-vuex'
import { Context } from '@nuxt/types'

export const state = () => ({
	menu: {
		isUserMenuOpen: false as Boolean,
	}
})

type RootState = ReturnType<typeof state>

export const getters = {
	isUserMenuOpen: (state: RootState) => state.menu.isUserMenuOpen,
}

export const mutations = mutationTree(state, {

	setUserMenu(state: RootState, payload: boolean) {
		state.menu.isUserMenuOpen = payload
	},

})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async setUserMenu({ commit }, newToken) {
      	commit('setUserMenu', newToken)
    },

    async nuxtServerInit(_vuexContext, nuxtContext: Context) {
		console.log('Nuxt server init...')
		console.log(nuxtContext.req)
	},
  }
)

export const accessorType = getAccessorType({
  actions,
  getters,
  mutations,
  state,
})