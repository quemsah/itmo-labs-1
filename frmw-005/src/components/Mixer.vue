<template>
    <div>
        R:
        <input type="number" v-model="RValue" min="0" max="255" @change="upd">
        <input type="range" v-model="RValue" min="0" max="255" step="1" @change="upd">
        <br> G:
        <input type="number" v-model="GValue" min="0" max="255" @change="upd">
        <input type="range" v-model="GValue" min="0" max="255" step="1" @change="upd">
        <br> B:
        <input type="number" v-model="BValue" min="0" max="255" @change="upd">
        <input type="range" v-model="BValue" min="0" max="255" step="1" @change="upd">
    </div>
</template>

<script>
export default {
    data() {
        return {
            RValue: 254,
            GValue: 184,
            BValue: 244
        };
    },
    mounted: function() {
        this.$nextTick(() => this.upd());
    },
    methods: {
        upd() {
            document.body.style.backgroundColor = "rgb(" + [this.RValue || 0, this.GValue || 0, this.BValue || 0].join(",") + ")";
        }
    }
};
</script>

<style>
</style>