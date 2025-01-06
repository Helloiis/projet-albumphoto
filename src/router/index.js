import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import ImportImage from '@/views/ImportImage.vue';
import SearchImage from '@/views/SearchImage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/import', component: ImportImage },
  { path: '/search', component: SearchImage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
