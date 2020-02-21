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
                authReq: true,
                title: "Dashboard"
            }
        },
        {
            path: "/goals",
            name: "Goals",
            component: () => import("@/views/Goals"),
            meta: {
                authReq: true,
                title: "Goals"
            }
        },
        {
            path: "/visions",
            name: "Vision board",
            component: () => import("@/views/Visions"),
            meta: {
                authReq: true,
                title: "Visions"
            }
        },
        {
            path: "/affirmations",
            name: "Affirmations",
            component: () => import("@/views/Affirmations"),
            meta: {
                authReq: true,
                title: "Affirmations"
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
                authReq: true,
                title: "Add new goal"
            }
        },
        {
            name: "SingleGoal",
            path: "/goals/:goal_id",
            component: () => import("@/views/SingleGoal"),
            meta: {
                authReq: true,
                title: null
            },
            beforeEnter: (to, from, next) => {
                let goal_id = to.params.goal_id;
                let goal = store.state.goals.find(item => item.id == goal_id);
                if (!goal) {
                    next({name: "Goals"})
                } else {
                    to.meta.title = goal.name;
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
    Promise.all([store.dispatch("validate")]).then(() => {
        const isAuthenticated = store.state.user.authenticated;
        const authRequired = to.meta.authReq;
        
        // Protect authenticated route
        if (authRequired && isAuthenticated) {
            return next();
        }

        // Protect auth screens from authenticated user
        if (!authRequired && isAuthenticated) {
            return next({name: "Dashboard"});
        }

        else if (to.meta.authReq != undefined) {
            return next({name: "Login"});
        } else {
            return next();
        }
    });
});

export default router;
