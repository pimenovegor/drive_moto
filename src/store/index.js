import { createStore } from 'vuex'
import banners from './modules/banners'
import products from './modules/products'

export default createStore({
  modules: {
    banners,
    products
  }
})
