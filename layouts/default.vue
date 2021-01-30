<template>
    <div>
        <Nav />
        <Nuxt />
    </div>
</template>

<script>
import Nav from '@/components/Header/Nav';

export default {
    name: "DefaultLayout",
    components: {
        Nav
    }    
}
</script>
<style lang="scss" scoped>

</style>