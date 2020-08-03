import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfYZpzVLxdvl-X2Kbk-qNDulw4lVUcTr8",
  authDomain: "my-address-pj-f65d4.firebaseapp.com",
  databaseURL: "https://my-address-pj-f65d4.firebaseio.com",
  projectId: "my-address-pj-f65d4",
  storageBucket: "my-address-pj-f65d4.appspot.com",
  messagingSenderId: "391271961423",
  appId: "1:391271961423:web:1d4e5f45715de70ec8ab3a",
  measurementId: "G-E8J6KC6P9B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
