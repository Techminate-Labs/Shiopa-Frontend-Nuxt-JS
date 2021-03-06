import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'vuex',
    paths: ['cart', 'session', 'menu', 'order'],
  })(store)
}