import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import Landing from './pages/Landing.vue';
// import store from './store/index';

const UserRegistration = defineAsyncComponent(() =>
  import('./pages/users/UserRegistration.vue')
);
const UserAuth = defineAsyncComponent(() =>
  import('./pages/auth/UserAuth.vue')
);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Landing },
    { path: '/user/register', component: UserRegistration },
    { path: '/auth', component: UserAuth },
  ],
});

export default router;
