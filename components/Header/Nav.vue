<template>
    <header>
        <div class="container">
            <nav hidden md:inline-block>
                <li><nuxt-link :to="{ path: `/` }">home</nuxt-link></li>
                <li><a href="#">about</a></li>
                <li><a href="#">todos</a></li>
                <li><a href="#">contact</a></li>
            </nav>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
    header {
        @apply py-4 bg-gray-900;
    }
    nav {
        @apply flex list-none;
    }

    nav li {
        @apply px-8 uppercase text-xs;
    }

    nav li a {
        @apply text-white;
    }

    nav li a:hover {
        @apply text-gray-500;
    }
</style>