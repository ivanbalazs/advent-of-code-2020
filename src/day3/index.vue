<template>
    <div>
        Task one: {{ task1 }}
    </div>
</template>

<script>
export default {
    computed: {
        task1() {
            return 1;
        },
    },
};
</script>
