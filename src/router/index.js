import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home //Lazy Loading not required for default page
    }, {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue') //Lazy Loading component on demand
    }, {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/views/Contact.vue') //Lazy Loading component on demand
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;