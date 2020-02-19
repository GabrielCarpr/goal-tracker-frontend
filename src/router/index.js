import Vue from "vue";
import Router from "vue-router";
import store from "../store";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "Dashboard",
            component: () => import("@/views/Dashboard"),
            meta: {
                authReq: true
            }
        },
        {
            path: "/goals",
            name: "Goals",
            component: () => import("@/views/Goals"),
            meta: {
                authReq: true
            }
        },
        {
            path: "/visions",
            name: "Vision board",
            component: () => import("@/views/Visions"),
            meta: {
                authReq: true
            }
        },
        {
            path: "/affirmations",
            name: "Affirmations",
            component: () => import("@/views/Affirmations"),
            meta: {
                authReq: true
            }
        },
        {
            name: "Login",
            path: "/login",
            component: () => import("@/views/Login")
        },
        {
            name: "Register",
            path: "/register",
            component: () => import("@/views/Register")
        },
        {
            name: "New goal",
            path: "/goals/new",
            component: () => import("@/views/NewGoal"),
            meta: {
                authReq: true
            }
        },
        {
            name: "SingleGoal",
            path: "/goals/:goal_id",
            component: () => import("@/views/SingleGoal"),
            meta: {
                authReq: true
            },
            beforeEnter: (to, from, next) => {
                let goal_id = to.params.goal_id;
                if (!store.state.goals.some(e => e.id == goal_id)) {
                    next({name: "Goals"})
                } else {
                    next()
                }
            }
        }
    ],
    scrollBehavior() {
        return {x: 0, y: 0}
    }
})


// Protect authed routes
router.beforeEach((to, from, next) => {
    console.log("BEFORE")
    console.log(store.state.user.authenticated)
    console.log(to.meta.authReq)

    // After auth -- all initial API requests and turn off loading screen
    if ((from.name === "Login" || from.name === "Register") 
            && store.state.user.authenticated && to.meta.authReq) {
        return next();
    }

    // Coming to app already authenticated -- initial load
    else if (from.name == null && store.dispatch("checkAuth")) {
        store.dispatch("getAllGoals");
        return next();
    }

    // Currently authenticated and trying to access auth views -- redirects
    else if ((to.name === "Login" || to.name === "Register")
            && store.state.user.authenticated) {
                return next({name: "Dashboard"})
    }

    // Check auth on each page view
    else if (!["Login", "Register"].includes(to.name)) {
        return Promise.all([store.dispatch("checkAuth")]).then(next)
    } else {
        console.log("4")
        console.log(to.name)
        return next();
    }
});

export default router;
