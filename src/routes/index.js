import Vue from 'vue';
import VueRouter from 'vue-router';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import NewsView from '../views/NewsView.vue'
// import createListView from '../views/CreateListView.js'
import bus from '../utils/bus.js'
import { store } from '../store/index.js'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      //path: url에 대한 정보
      path: '/news',
      //path: url 주소로 갔을 때 표시될 컴포넌트
      component: NewsView,
      // component: createListView('NewsView'),
      name: 'news',
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() =>
            next()
          ).then(() => bus.$emit("end:spinner"))
          .catch(error => {
            console.log(error);
          });
        next();
      },
    },
    {
      path: '/ask',
      component: AskView,
      // component: createListView('AskView'),
      name: 'ask',
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() =>
            next()
          ).then(() => bus.$emit("end:spinner"))
          .catch(error => {
            console.log(error);
          });
        next();
      },
    },
    {
      path: '/jobs',
      component: JobsView,
      // component: createListView('JobsView'),
      name: 'jobs',
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() =>
            next()
          ).then(() => bus.$emit("end:spinner"))
          .catch(error => {
            console.log(error);
          });
        next();
      },
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
    {
      path: '/user/:id',
      component: UserView,
    }
  ]
});
