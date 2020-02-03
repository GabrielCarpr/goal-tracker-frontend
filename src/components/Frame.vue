<template>
    <div id="frame">
        <h1>{{ this.$route.name }}</h1>
        <div id="content">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
    #frame {
        width: CALC(100vw - 250px);
        margin: 0 0 0 auto;
    }

    h1 {
        margin-top: 46px;
        margin-bottom: 30px;
        margin-left: 102px;
        text-align: left;
    }

    #content {
        text-align: left;
        padding: 0 102px;
        width: CALC(100vw - 250px - 204px);
        height: auto;
        overflow-x: hidden;
    }
</style>

<script>
export default {
    name: "Frame",
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>