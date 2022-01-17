import Vuex from 'vuex'
import CartModule from '~/store/cart'
import SessionModule from '~/store/session'

const store = new Vuex.Store({
	modules: {
	  cartModule: CartModule,
	  sessionModule: SessionModule,
	}
})