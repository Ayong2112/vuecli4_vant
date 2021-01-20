import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: 'home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/home.vue')
    }, {
        path: '/timeZone',
        name: 'timeZone',
        component: () => import('../views/timeZone/timeZone.vue')
    }, {
        path: '/daydream',
        name: 'daydream',
        component: () => import('../views/daydream/daydream.vue')
    }, {
        path: '/me',
        name: 'me',
        component: () => import('../views/me/me.vue')
    }, {
        path: '/test',
        name: 'test',
        component: () => import('../views/test/test.vue')
    }, {
        path: '/safeCode',
        name: 'safeCode',
        component: () => import('../views/safeCode/safeCode.vue')
    },
]

const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    if (true) {
        if (true || store.state.userId) {
            next()
        } else {
            next({path: '/'})
        }
    } else {
        next()
    }
})

export default router
