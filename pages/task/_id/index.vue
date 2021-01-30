<template>
    <div class="task-single">
        {{ getIsExist }}

        {{ id }}

        <div v-if="getIsExist === false" class="flex items-center justify-center">
            <div class="error-box">
                <h2>Task Not Found!</h2>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    head() {
        return {
            title: `Task - ${this.id}`,
            meta: [
            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
            {
                hid: 'description',
                name: 'description',
                content: `Task description ${this.id}`
            }
            ]
        }
    },

    data() {
        return {
            id: this.$route.params.id
        }
    },

    computed: {
        ...mapGetters('task', ['getIsExist'])
    },

    mounted() {
        this.$store.dispatch('task/fetchTasks');
        this.$store.dispatch('task/checkTask', this.$route.params.id);
    }

}
</script>

<style scoped>
    .error-box {
        @apply bg-red-500 w-1/2 text-center text-white text-5xl;
    }
</style>