<script setup>
    await useAsyncData('category', () => {
        const route = useRoute();
        const categorySlug = route.params.category;
    
        navigateTo(`/${categorySlug},1`);
    });
</script>
