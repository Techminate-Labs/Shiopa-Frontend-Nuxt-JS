import { getAccessorType, mutationTree, actionTree } from 'typed-vuex'
import { Context } from '@nuxt/types'

import * as submodule from './submodule'

export const state = () => ({
  email: '',
  cart: {
    items: [],
  },
})

type RootState = ReturnType<typeof state>
interface ProductItem {
  product_id: number
  price: number
  name: number
  img: number
  quantity: number
}

export const getters = {
  email: (state: RootState) => state.email,
  fullEmail: (state: RootState) => state.email,
  cart: (state: RootState) => state.cart
}

export const mutations = mutationTree(state, {
  initialiseStore(state) {
    if (localStorage.getItem('cart')) {
      state.cart = JSON.parse(localStorage.getItem('cart') as string)
    } else if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify(state.cart) as string)
    }
  },
  
  setEmail(state, newValue: string) {
    state.email = newValue
  },
  
  addToCart(state: RootState, item: ProductItem) {
  state.cart.items.push(item as never)
  
  localStorage.setItem('cart', JSON.stringify(state.cart))
  },

})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async resetEmail({ commit }) {
      commit('setEmail', 'a@a.com')
    },

    async addToCart(context, payload) {
      context.commit('addToCart', payload)
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
