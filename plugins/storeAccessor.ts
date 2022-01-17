import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import CartModule from '~/store/cart'
import SessionModule from '~/store/session'

let cartStore: any
let sessionStore: any

function initialiseStores(store: Store<any>): void {
  cartStore = getModule(CartModule, store)
  sessionStore = getModule(SessionModule, store)
}

export { initialiseStores, cartStore, sessionStore }