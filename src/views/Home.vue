<template>
    <div id="nav">
        <p v-for="day in 24" :key="`page${day}`">
            <router-link v-if="hasDay(day)" :to="{ name: 'result', params: { day } }">Day {{ day }}</router-link>
            <span v-else>Day {{ day }}</span>
        </p>
    </div>
</template>

<script>
export default {
    methods: {
        hasDay(day) {
            return this.existingPages.includes(day);
        },
    },
}
</script>
