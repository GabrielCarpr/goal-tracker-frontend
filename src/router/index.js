import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "Dashboard",
            component: () => import("@/views/Dashboard")
        },
        {
            path: "/goals",
            name: "goals"
        },
        {
            path: "/visions",
            name: "visions"
        },
        {
            path: "/affirmations",
            name: "affirmations"
        },
        {
            name: "Login",
            path: "/login",
            component: () => import("@/views/Login")
        }
    ]
})