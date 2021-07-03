import { getAccessorType, mutationTree, actionTree } from 'typed-vuex'
import { Context } from '@nuxt/types'

import * as submodule from './submodule'

export const state = () => ({
  email: '',
  cart: [],
  item: {},
})

type RootState = ReturnType<typeof state>
interface ProductItem {
  id: number
  product_id: number
  quantity: number
}

export const getters = {
  email: (state: RootState) => state.email,
  fullEmail: (state: RootState) => state.email,
  cart: (state: RootState) => state.cart,
}

export const mutations = mutationTree(state, {
  setEmail(state, newValue: string) {
    state.email = newValue
  },

  // addToCart(state: RootState, data: object as ProductItem) {
  //   state.cart.push(data)
  // },

  initialiseStore() {
    console.log('initialised')
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async resetEmail({ commit }) {
      commit('setEmail', 'a@a.com')
    },

    async nuxtServerInit(_vuexContext, nuxtContext: Context) {
      console.log(nuxtContext.req)
    },
  }
)

export const accessorType = getAccessorType({
  actions,
  getters,
  mutations,
  state,
  modules: {
    submodule,
  },
})
