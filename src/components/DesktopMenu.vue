<template>
    <div id="side-menu" :class="{'menu-loading': this.$root.$data.isLoading}">
        <transition name="fade">
        <div class="loading" v-if="this.$root.$data.isLoading"><div class="spinner"></div></div>
        </transition>
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
                    <span class="new-goal" @click.stop="link('New goal')">&plus;</span>
                </span>
            <span class="menu-item-box" :class="{'menu-active': this.$route.name == 'Vision board'}" @click="link('Vision board')">
                <img src="vision_icon.svg"><span class="menu-item">Vision board</span>
            </span>
            <span class="menu-item-box" :class="{'menu-active': this.$route.name == 'Affirmations'}" @click="link('Affirmations')">
                <img src="affirmations_icon.svg"><span class="menu-item">Affirmations</span>
            </span>
            <div class="bottom-options">
                <span class="menu-item-box"><span class="menu-item">Log out</span></span>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .loading {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: VAR(--mid-grey);
        z-index: 100;
    }

    #side-menu {
        height: 100vh;
        width: 250px;
        position: fixed;
        left: 0;
        top: 0;
        background-color: VAR(--main-blue);
        z-index: 10;
    }

    .menu-loading {
        width: 100vw!important;
        position: absolute;
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
        box-sizing: border-box;
        height: 100%;
        padding-bottom: 20px;
    }

    .menu-item-box {
        margin: 5px 15px;
        border-radius: 5px;
        text-align: left;
        padding: 10px;
        transition: background-color ease 200ms;
        background-color: transparent;
        cursor: pointer;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .menu-item-box:hover {
        background-color: VAR(--dark-blue);
    }

    .menu-active {
        transition: background-color ease 300ms;
        background-color: VAR(--dark-blue);
    }

    .menu-item-box > img {
        width: 18px;
        height: 14px;
        color: VAR(--dark-blue);
        mix-blend-mode: multiply;
        margin-right: 15px;
    }

    .new-goal {
        margin-left: auto;
        margin-right: 0;
        text-align: center;
        vertical-align: center;
        color: VAR(--dark-blue);
        background-color: VAR(--main-blue-highlight);
        padding: 3px 7px;
        border-radius: 50%;
        width: 17px;
        transition: background, color ease 500ms;
    }

    .new-goal:hover {
        background-color: VAR(--main-blue);
        color: VAR(--main-blue-highlight);
        transition: background-color, color ease 500ms;
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

    .bottom-options {
        margin-top: auto;
        margin-bottom: 0;
        vertical-align: bottom;
        color: #5f62a5;
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
    },
    created() {
        setTimeout(() => {
            this.$root.$data.isLoading = false;
        }, 1000)
    }
}
</script>