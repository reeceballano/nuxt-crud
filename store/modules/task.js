// STATE
const state = {
    tasks: [],
    isExist: false,
}

// GETTERS
const getters = {
    getTasks: state => {
        return state.tasks;
    },

    getIsExist: state => {
        return state.isExist;
    }
}

// MUTATIONS
const mutations = {
    SET_TASKS(state, tasks) {
        state.tasks = tasks;
    },

    SET_IS_EXIST(state, isExist) {
        state.isExist = isExist;
    }
}

// ACTIONS
const actions = {
    fetchTasks({ commit }) {
        const data = [
            {
                id: 1,
                name: 'Task 1',
                status: false,
                description: 'Gathering land have saw may midst give green dominion called beast image give shall sixth. Blessed sixth, is all fish. Without shed him whales them evening may stars upon. Female.'
            },
            {
                id: 2,
                name: 'Task 2',
                status: true,
                description: 'Upon their every day give also from every face winged also waters so lesser dry lesser that third signs have him together. Meat fifth midst gathering you\'\re moveth brought blessed.'
            },
            {
                id: 3,
                name: 'Task 3',
                status: false,
                description: 'Herb sea firmament deep lesser. Saw two fish created don\'\t is the meat Beast it deep moving deep morning fruit signs days itself living days man may creepeth to evening.'
            },
        ]

        commit('SET_TASKS', data);
    },

    addTask({ commit, state }, payload) {
        const tasks = state.tasks;

        const task = {
            id: tasks.length + 1,
            name: `${payload.name} ${tasks.length + 1}`,
            status: false
        }

        tasks.push(task);

        commit('SET_TASKS', tasks);
    },

    removeTask({ commit, state }, payload) {
        const tasks = state.tasks;

        const newTasks = tasks.filter(task => task.id !== Number(payload));

        commit('SET_TASKS', newTasks);
    },

    checkTask({ state, commit }, payload) {
        console.log(payload);

        const task = state.tasks.find(task => task.id === Number(payload));

        console.log(task)

        if (task) {
            commit('SET_IS_EXIST', true);
        } else {
            commit('SET_IS_EXIST', false);
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}