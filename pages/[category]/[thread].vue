<script setup>
    await useAsyncData('thread', () => {
        const route = useRoute();
        const categorySlug = route.params.category;
        const threadSlug = route.params.thread;

        navigateTo(`/${categorySlug}/${threadSlug},1`)
    });
</script>

<template>
    <div>
        <h1>Thread: {{ category }}</h1>
        <p>Page: {{ page }}</p>
    </div>
</template>
