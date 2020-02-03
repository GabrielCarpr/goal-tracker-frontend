<template>
    <div id="side-menu">
        <div id="menu">
            <div id="profile">
                <img id="pic">
                <span>gabriel.carpreau@gmail.com</span>
            </div>
            <span class="menu-item-box" :class="{'menu-active': this.$route.name == 'Dashboard'}" @click="link('Dashboard')">
                <img src="dash_icon.svg"><span class="menu-item">Dashboard</span>
            </span>
            <span class="menu-item-box" :class="{'menu-active': this.$route.name == 'Goals'}" @click="link('Goals')">
                <img src="goals_icon.svg"><span class="menu-item">Goals</span>
                </span>
            <span class="menu-item-box" :class="{'menu-active': this.$route.name == 'Vision'}" @click="link('Vision')">
                <img src="vision_icon.svg"><span class="menu-item">Vision board</span>
            </span>
            <span class="menu-item-box" :class="{'menu-active': this.$route.name == 'Affirmations'}" @click="link('Affirmations')">
                <img src="affirmations_icon.svg"><span class="menu-item">Affirmations</span>
            </span>
        </div>
    </div>
</template>

<style scoped>
    #side-menu {
        height: 100vh;
        width: 250px;
        position: fixed;
        left: 0;
        top: 0;
        background-color: VAR(--main-blue);
    }

    #menu {
        display: flex;
        flex-direction: column;
        justify-items: stretch;
        align-content: center;
        color: VAR(--mid-grey);
        font-size: 20px;
        font-weight: 500;
        width: 100%;
    }

    .menu-item-box {
        margin: 5px 15px;
        border-radius: 5px;
        text-align: left;
        padding: 10px;
        transition: background-color ease 200ms;
        cursor: pointer;
    }

    .menu-item-box:hover {
        background-color: VAR(--dark-blue);
    }

    .menu-active {
        background-color: VAR(--dark-blue);
    }

    .menu-item-box > img {
        width: 18px;
        height: 14px;
        color: VAR(--dark-blue);
        mix-blend-mode: multiply;
        margin-right: 15px;
    }

    .menu-item {
        margin: auto auto;
    }

    #profile {
        height: 50px;
        width: 100%;
        border-bottom: 2px solid VAR(--main-blue-highlight);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
    }

    #profile > span {
        font-size: 14px;
        font-weight: 500;
        color: VAR(--mid-grey);
        margin-left: 10px;
    }

    #profile > img {
        max-width: 30px;
        border-radius: 50%;
    }
</style>

<script>
import router from "@/router/";


export default {
    name: "DesktopMenu",
    methods: {
        link: (loc) => {
            router.push({name: loc});
        }
    }
}
</script>