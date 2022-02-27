import { getAccessorType, mutationTree, actionTree } from 'typed-vuex'
import { Context } from '@nuxt/types'

export const state = () => ({
	session: {
			bearerToken: null as String | null,
			email: null as String | null,
			user: null as Object | null
	}
})

type RootState = ReturnType<typeof state>

export const getters = {
	email: (state: RootState) => state.session.email,
	fullEmail: (state: RootState) => state.session.email,
	getToken: (state: RootState) => state.session.bearerToken,
	getUser: (state: RootState) => state.session.user
}

export const mutations = mutationTree(state, {

	setBearerToken(state: RootState, payload: string) {
		state.session.bearerToken = payload
	},

	setEmail(state: RootState, payload: string) {
		state.session.email = payload
	},

	setUser(state: RootState, payload: string) {
		state.session.user = payload
	},

})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async setBearerToken({ commit }, newToken) {
      	commit('setBearerToken', newToken)
    },

    async setEmail({ commit }, newEmail) {
    	commit('setEmail', newEmail)
    },

    async setUser({ commit }, newUser) {
    	commit('setUser', newUser)
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