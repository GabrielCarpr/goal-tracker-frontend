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
            component: () => import("@/views/Dashboard")
        },
        {
            path: "/goals",
            name: "Goals",
            component: () => import("@/views/Goals"),
        },
        {
            path: "/visions",
            name: "Vision board",
            component: () => import("@/views/Visions")
        },
        {
            path: "/affirmations",
            name: "Affirmations",
            component: () => import("@/views/Affirmations")
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
            component: () => import("@/views/NewGoal")
        },
        {
            name: "SingleGoal",
            path: "/goals/:goal_id",
            component: () => import("@/views/SingleGoal"),
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
    scrollBehaviour() {
        return {x: 0, y: 0}
    }
})


// Protect authed routes
router.beforeResolve((to, from, next) => {
    if (!["Login", "Register"].includes(to.name)) {
        Promise.all([store.dispatch("checkAuth")]).then(next)
    } else {
        next();
    }
});

export default router;