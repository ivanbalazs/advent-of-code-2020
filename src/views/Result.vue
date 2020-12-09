<template>
    <div>
        <h2>Day {{ day }}</h2>
        <div>Part one: {{ part1 }}</div>
        <div>Part two: {{ part2 }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            day: this.$route.params.day,
            part1: null,
            part2: null,
        }
    },
    async created() {
        if (!this.existingPages.includes(this.day)) {
            return this.$router.replace({ name: 'home' });
        }
        const results = await import(`@/days/${this.day}/index.js`);
        this.part1 = results.part1;
        this.part2 = results.part2;
    },
};
</script>
