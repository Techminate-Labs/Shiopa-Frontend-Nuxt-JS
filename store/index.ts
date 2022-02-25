import { getAccessorType, mutationTree, actionTree } from 'typed-vuex'

// Import all your submodules
import * as cartModule from '~/store/cart'
import * as sessionModule from '~/store/session'
import * as menuModule from '~/store/menu'

// This compiles to nothing and only serves to return the correct type of the accessor
export const accessor = getAccessorType({
  modules: {
    // The key (submodule) needs to match the Nuxt namespace (e.g. ~/store/submodule.ts)
    cartModule,
	  sessionModule,
    menuModule
  },
})
