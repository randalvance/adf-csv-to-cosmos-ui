import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import uploader from 'vue-simple-uploader';
import router from './router'

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(uploader);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
