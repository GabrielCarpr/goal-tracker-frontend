<template>
    <div class="history">
        <span class="history-overlay">Edit</span>
        <span class="history-date">{{ formattedDate }}</span>
        <span class="history-value">{{ history.value }}</span>
    </div>
</template>

<style scoped>
    .history {
        background: VAR(--mid-grey);
        margin-right: 20px;
        margin-bottom: 20px;
        border-radius: 5px;
        display: inline-flex;
        flex-direction: column;
        width: 215px;
        position: relative;
    }

    .history-date {
        margin-top: 10px;
        text-align: center;
        margin-bottom: 15px;
        font-size: 14px;
        color: #434343;
    }

    .history-value {
        font-size: 34px;
        color: #1f1f1f;
        margin-bottom: 13px;
        font-weight: 600;
        text-align: center;
    }

    .history-overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px 50px;  
        box-sizing: border-box;
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 5px;
        opacity: 0;
        backdrop-filter: blur(1px);
        transition: opacity 400ms ease-in-out, background-color 100ms ease-in-out;
        cursor: pointer;
        font-size: 20px;
        font-weight: 600;
        color: #1f1f1f;
    }

    .history-overlay:hover {
        opacity: 1;
        backdrop-filter: blur(5px);
    }

    .history-overlay:active {
        background-color: rgba(150, 150, 150, 0.3);
    }
</style>

<script>
export default {
    name: "HistoryItem",
    props: {
        history: {
            type: Object,
            required: true
        }
    },
    computed: {
        formattedDate() {
            return this.convertDate(this.history.date)
        }
    }
}
</script>