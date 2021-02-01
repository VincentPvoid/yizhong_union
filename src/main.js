import Vue from 'vue'
import App from './App'

import uView from 'uview-ui';
import CusTabBar from './components/CusTabBar.vue';

Vue.use(uView);

Vue.config.productionTip = false
Vue.component('custabbar', CusTabBar);




App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
