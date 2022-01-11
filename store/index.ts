import { getAccessorType, mutationTree, actionTree } from 'typed-vuex'
import { Context } from '@nuxt/types'

import { Cart, CartItem } from '@/types/cart/Cart'

// import * as submodule from './submodule'

export const state = () => ({
  email: '',
  cart: {} as Cart
})

type RootState = ReturnType<typeof state>

export const getters = {
  email: (state: RootState) => state.email,
  fullEmail: (state: RootState) => state.email,
  cart: (state: RootState) => state.cart,
  cartTotalLength(state: RootState): Number {
    let totalLength = 0
    if (state.cart.items){
      for (let i = 0; i < state.cart.items.length as Boolean; i++) {
        totalLength += parseInt(state.cart.items[i].quantity as any)
      }
      return totalLength
    } else {
      return totalLength
    }
  }
}

export const mutations = mutationTree(state, {
  initialiseStore(state: RootState) {
    if (localStorage.getItem('cart')) {
      state.cart = JSON.parse(localStorage.getItem('cart') as string)
    } else if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify(state.cart) as string)
    }
  },

  setEmail(state: RootState, newValue: string) {
    state.email = newValue
  },

  addToCart(state: RootState, item: CartItem) {
    const cart: any = state.cart
    const exists = cart.items.filter((i: { product_id: Number }) => i.product_id === item.product_id)
    if (exists.length) {
      exists[0].quantity = parseInt(exists[0].quantity) + parseInt(item.quantity as any)
    } else {
      cart.items.push(item)
    }

    localStorage.setItem('cart', JSON.stringify(state.cart))
  },

  removeFromCart(state: RootState, item: any) {
    const cart: Cart = state.cart
    cart.items = state.cart.items.filter((_item) => _item.product_id !== item.product_id)
    localStorage.setItem('cart', JSON.stringify(cart))
  },

  incQTY(state: RootState, item: CartItem) {
    const cart: Cart = state.cart
    const product: any = cart.items.filter((_item) => _item.product_id === item.product_id)
    product[0].quantity = product[0].quantity + 1;
    localStorage.setItem('cart', JSON.stringify(cart))
  },

  decQTY(state: RootState, item: CartItem) {
    const cart: Cart = state.cart
    const product: any = cart.items.filter((_item) => _item.product_id === item.product_id)
    if (product.length && product[0].quantity > 0) {
      product[0].quantity = product[0].quantity - 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart))
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

    async removeFromCart(context, payload) {
      context.commit('removeFromCart', payload)
    },

    async decQTY(context, payload) {
      context.commit('decQTY', payload)
    },

    async incQTY(context, payload) {
      context.commit('incQTY', payload)
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
    // submodule,
  },
})
