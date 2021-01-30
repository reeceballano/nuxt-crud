<template>
    <div class="tasks container">
        <div class="grid grid-cols-2 gap-5">
            <Task v-for="task in tasks" :key="task.id" :task="task">
            </Task>
        </div>
    </div>
</template>

<script>
import Task from '@/components/Tasks/Task';

export default {
    name: "Tasks",
    props: {
        tasks: {
            type: Array,
            default: () => []
        }
    },
    components: {
        Task
    },

}
</script>

<style>

</style>