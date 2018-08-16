import Vue from 'vue';
import Router from 'vue-router';
import goods from '../components/goods/goods';
import rig from '../components/rig/rig';
import seller from '../components/seller/seller';
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/rig',
      name: 'rig',
      component: rig
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    }
  ]
});
