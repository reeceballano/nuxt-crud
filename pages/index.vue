<template>
    <div class="container md:py-24">
        <div class="md:flex">
            <div class="w-full my-10 md:my-0 md:w-3/12 md:pr-10 md:border-r md:border-gray-200">
                <div class="md:fixed flex flex-col">
                    <input v-model="search" type="text" class="mb-10 border-2 py-3 px-5 rounded-full focus:outline-none focus:border-blue-600 transition-colors delay-150 focus:text-blue-600"  placeholder="Search Task" />
                    <button @click.prevent="addTask()" class="bg-green-500 text-white py-4 font-bold px-5 rounded-full uppercase hover:bg-green-600 focus:outline-none">Add Task</button>
                </div>
            </div>

            <div class="w-full mb-10 md:flex-auto md:pl-10">
                <Tasks :tasks="filteredTasks" />
            </div>
        </div>
    </div>
</template>

<script>
import Tasks from '@/components/Tasks/Tasks';
import { mapGetters } from 'vuex';

export default {
    components: {
        Tasks
    },

    data() {
        return {
            search: '',
        }
    },

    computed: {
        ...mapGetters('task', ['getTasks']),

        filteredTasks() {
            const tasks = this.getTasks;

            const filtered = tasks.filter(task => task.name.toLowerCase().includes(this.search.toLowerCase() ) );

            if(this.search.length === 0) {
                return tasks;
            } else {
                return filtered;
            }
        }
    },

    mounted() {
        this.$store.dispatch('task/fetchTasks');
    },

    methods: {
        addTask() {
            const task = {
                name: 'Task test'
            }

            this.$store.dispatch('task/addTask', task);
        },
    }
}
</script>
