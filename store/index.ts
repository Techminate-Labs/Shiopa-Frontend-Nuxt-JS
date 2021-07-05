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
  initialiseStore(state: RootState) {
    console.log('initalized')
    if (localStorage.getItem('cart')) {
      state.cart = JSON.parse(localStorage.getItem('cart') as any)
    } else {
      localStorage.setItem('cart', JSON.stringify(state.cart) as string)
    }

  },

  setEmail(state, newValue: string) {
    state.email = newValue
  },

  addToCart(state: RootState, data: ProductItem[]) {
    state.cart.push(data as never)
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },

})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async resetEmail({ commit }) {
      commit('setEmail', 'a@a.com')
    },

    async nuxtServerInit(_vuexContext, nuxtContext: Context) { },
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
