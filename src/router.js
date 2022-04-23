import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from './components/Dashboard';
import Home from './views/Home';
import Magazines from './views/Magazines';
import Students from './views/Students';
import Vote from './views/Vote';
import Schools from './views/Schools';
import About from './views/About';
import Contact from './views/Contact';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: Dashboard,
    children: [{
            path: '/',
            component: Home
        },
        {
            path: '/magazines',
            component: Magazines
        },
        {
            path: '/students',
            component: Students
        },
        {
            path: '/vote',
            component: Vote
        },
        {
            path: '/schools',
            component: Schools
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/contact',
            component: Contact
        }
    ]
}];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

// eslint-disable-next-line no-unused-vars

// router.beforeEach((to, __, next) => {
//     if (!localStorage.getItem('auth_token')) {
//         if (to.path !== '/auth/sign-in') {
//             next('/auth/sign-in');
//         }
//     }

//     next();
// });

export default router;