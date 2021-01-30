import Vuex from 'vuex';
import task from './modules/task';

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      task
    }
  });
};

export default createStore