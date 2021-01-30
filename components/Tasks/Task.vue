<template>
    <div class="task-item px-5 py-6 shadow-lg bg-gray-200 rounded hover:bg-gray-400 hover:-m-2 transition-all delay-100">
        <h3 class="font-semibold text-blue-700 text-xs border-b pb-2">
            <nuxt-link :to="{ path: `/task/${task.id}`, params: { id: task.id} }">{{ task.name }}</nuxt-link>
        </h3>

        <div class="task-description border-b pb-2">
            <p class="text-sm text-gray-700 my-3">
                {{ task.description }}
            </p>

            <div :class="[ (task.status) ? 'done' : 'not-done' ]" class="task-status ">
                {{ taskStatus }}
            </div>
        </div>

        <div class="action mt-3">
            <button class="delete-btn hover:bg-red-700 focus:outline-none bg-red-800 text-white rounded-full px-5 py-2 uppercase text-xs" @click.prevent="deleteTask(task.id)">Delete</button>
        </div>


    </div>
</template>

<script>
export default {
    name: "Task",

    props: {
        task: {
            type: Object,
            default: () => {}
        }
    },

    data() {
        return {
            isDone: false,
        }
    },

    methods: {
        deleteTask(id) {
            this.$store.dispatch('task/removeTask', id);
        }
    },

    computed: {
        taskStatus() {
            if(this.task.status) {
                return 'Done';
            }

            return 'Not Done'
        }
    }
}
</script>

<style scoped>
    .task-status {
        @apply border text-white text-xs px-3 py-1 rounded-full inline-block;
    }

    .not-done {
        @apply border-blue-600 text-blue-600;
    }

    .done {
        @apply border-green-600 text-green-600;
    }
</style>