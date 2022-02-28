import { getAccessorType, mutationTree, actionTree } from 'typed-vuex'
import { Context } from '@nuxt/types'

export const state = () => ({
	order: {
		shippingPrice: null as number | null,
		discountCode: null as number | null,
	}
})

type RootState = ReturnType<typeof state>

export const getters = {
	shippingPrice: (state: RootState) => state.order.shippingPrice,
	discountCode: (state: RootState) => state.order.discountCode,
}

export const mutations = mutationTree(state, {

	setShippingPrice(state: RootState, payload: number) {
		state.order.shippingPrice = payload
	},
	setDiscountCode(state: RootState, payload: number) {
		state.order.discountCode = payload
	},

})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async setShippingPrice({ commit }, newToken) {
      	commit('setShippingPrice', newToken)
    },
    async setDiscountCode({ commit }, newToken) {
      	commit('setDiscountCode', newToken)
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