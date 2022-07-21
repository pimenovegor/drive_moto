import { createStore } from 'vuex'
import products from './modules/products'
import auth from './modules/auth'
import basket from './modules/basket'

export default createStore({
  modules: {
    products,
    auth,
    basket
  }
})
