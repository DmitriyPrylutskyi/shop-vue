import Vue from 'vue'
import Vuex from 'vuex'
import products from "@/store/modules/products"
import orders from "@/store/modules/orders"
import user from "@/store/modules/user"
import common from "@/store/modules/common"

Vue.use(Vuex)

export default new Vuex.Store ({
  modules: {
    products,
    user,
    orders,
    common
  }
})
