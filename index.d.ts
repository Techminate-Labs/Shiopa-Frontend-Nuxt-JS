import http from '@nuxt/http'
import { accessor } from '~/store'

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessor
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessor
  }
}
