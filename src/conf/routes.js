import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../components/pages/HomePage.vue';

//import CarAddPage from '../components/pages/cars/CarAddPage.vue';
const CarAddPage = () => import('../components/pages/cars/CarAddPage.vue');
//import CarListPage from '../components/pages/cars/CarListPage.vue';
const CarListPage = () => import('../components/pages/cars/CarListPage.vue');

const routes = [
    { path: '/', component: HomePage },
    { path: '/cars/add', component: CarAddPage },
    { path: '/cars/list', component: CarListPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;