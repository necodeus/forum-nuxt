<script setup>
    await useAsyncData('thread', () => {
        const route = useRoute();
        const categorySlug = route.params.category;
        const threadSlug = route.params.thread;

        navigateTo(`/${categorySlug}/${threadSlug},1`)
    });
</script>
