import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from "@/views/LandingPage.vue"
import About from "@/views/About.vue"
import Achievements from "@/views/Achievements.vue"
import Projects from "@/views/Projects.vue"
import Contact from "@/views/Contact.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/about',
        name: 'about',
        component: About
    }, {
        path: '/projects',
        name: 'projects',
        component: Projects
    },  {
        path: '/achievements',
        name: 'achievements',
        component: Achievements
    }, {
        path: '/contact',
        name: 'contact',
        component: Contact
    }, ]
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Fauzi Maulana';
    next();
  });

export default router;