import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home, //Lazy Loading not required for default page
        alias: '/home'
    }, {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue'), //Lazy Loading component on demand
        sensitive: true
    }, {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/views/Contact.vue'), //Lazy Loading component on demand
        sensitive: true
    }, {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue')
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    strict: true, // applies to all routes
    scrollBehavior(to, from, savedPosition) {
        // `savedPosition` is used when navigating back/forward
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 }; // always scroll to top
        }
    }
});

export default router;