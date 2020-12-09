<template>
    <div id="app">
        <h1>Advent of code 2020</h1>
        <router-view/>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    methods: {
        hasDay(day) {
            return this.existingPages.includes(day);
        },
    },
};
</script>
