import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import * as firebase from 'firebase'
import BuyDialog from "@/components/BuyDialog"

Vue.config.productionTip = false
Vue.component('buy-dialog', BuyDialog)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    var firebaseConfig = {
      apiKey: "AIzaSyA1sAPdLxxmx0NWQGWS6S5Eq49VROj3sAg",
      authDomain: "onlinestore-3ca50.firebaseapp.com",
      databaseURL: "https://onlinestore-3ca50.firebaseio.com",
      projectId: "onlinestore-3ca50",
      storageBucket: "onlinestore-3ca50.appspot.com",
      messagingSenderId: "305455594311",
      appId: "1:305455594311:web:b676dc32ce0d029985aa62",
      measurementId: "G-P0BFFY7K64"
    };

    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user )
      }
    })

    this.$store.dispatch('fetchProducts')
  }
}).$mount('#app');
