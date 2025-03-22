import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/add',
            name: 'add',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/Add.vue'),
        },
        {
            path:'/edit/:id',
            name: 'edit',
            props: true,
            component: () => import('../views/Edit.vue'),
        },
    ],
})

export default router
