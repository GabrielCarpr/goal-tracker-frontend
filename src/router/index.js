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
            path: "/goals/",
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
            name: "Goals",
            path: "",
            component: () => import("@/views/Goals")
        },
        {
            name: "SingleGoal",
            path: "/goals/:goal_id",
            component: () => import("@/views/SingleGoal")
        }
    ]
})