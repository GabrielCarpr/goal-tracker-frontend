<template>
    <div class="goal-card">
        <div class="graph"></div>
        <div class="goal-info">
            <span class="goal-name">{{ goal }}</span>
            <div class="goal-display">
                <span class="progress">{{ progress }}</span>
                <span class="metric">{{ metric }}</span>
            </div>
            <span class="due-tag">Due {{ date.toLocaleString() }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "DashGoal",
    props: {
        goal: {
            type: String,
            required: true
        },
        progress: {
            type: String,
            required: true
        },
        metric: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        }
    }
}
</script>

<style scoped>
    .goal-card {
        background: VAR(--main-blue);
        box-shadow: 0px 7px 14px rgba(14, 16, 63, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        min-height: 240px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 80px;
        margin-top: 15px;
        cursor: pointer;
        top: 0;
        transition: top ease 600ms;
        position: relative;
        min-width: 400px;
        padding: 20px 40px;
    }

    .goal-card:hover {
        top: -6px;
    }

    .graph {
        background: VAR(--dark-blue);
        border-radius: 4px;
        align-self: stretch;
        width: 40%;
    }

    .goal-info {
        width: 60%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        padding-left: 40px;
    }

    .goal-name {
        font-size: 36px;
        font-weight: 600;
        color: VAR(--light-grey);
        margin-bottom: 50px;
    }

    .goal-display {
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
    }

    .progress {
        font-size: 64px;
        font-weight: 600;
        color: VAR(--light-grey);
        line-height: 60px;
    }

    .metric {
        font-size: 24px;
        font-weight: 300;
        color: VAR(--light-grey);
        margin-left: 10px;
    }

    .due-tag {
        justify-self: flex-end;
        align-self: flex-end;
        background: VAR(--dark-blue);
        border-radius: 4px;
        color: VAR(--mid-grey);
        padding: 5px;
        font-size: 20px;
        margin-top: auto;
    }
</style>