import Vue from 'vue';
import Router from 'vue-router';
import Pesquisa from '../components/Pesquisa.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/result',
      name: 'Pesquisa',
      component: Pesquisa,
    },
    {
      path: '/',
      name: 'Initial',
      component: Pesquisa,
    },
  ],
});
