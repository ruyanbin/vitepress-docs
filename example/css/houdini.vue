<template>
    <div class="box">

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
@property --card-angle {
    syntax: "<angle>";
    inherits: false;
    initial-value: 0deg;
}

.box {
    width: 200px;
    height: 300px;
    background: linear-gradient(var(--card-angle), #f9d423, #f83600);
    animation: spin 3s linear infinite;
}

@keyframes spin {
    to {
        /* background: linear-gradient(360deg, #f9d423, #f83600); */
        --card-angle: 360deg;
    }
}
</style>