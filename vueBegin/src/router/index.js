import { createRouter,createWebHashHistory } from 'vue-router'

const HomeView = () => import('../views/Home.vue')
const AboutView = () => import('../views/About.vue')

const routes = [
    {   path: "/",
        component: HomeView
    },
    {
        path: "/about",
        component: AboutView
    }
    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router