import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [],
    todosReserve: [],
  },

  getters: {
    getTodos(state) {
      return state.todos;
    },

    validateForm(state) {
      return state.todos.filter((item) => {
        return item.todo;
      });
    },

    todoCount(state, getters) {
      return getters.validateForm.length;
    },
  },

  mutations: {
    addTodo(state, newTodo) {
      state.todos.push(newTodo);
      state.todosReserve = state.todos;
      window.localStorage.setItem("todo", JSON.stringify(state.todos));
    },
    removeTodo(state) {
      let removeItem = state.todos.filter((item) => item.isCompleted == false);
      state.todos = removeItem;
      state.todosReserve = removeItem;
      window.localStorage.setItem("todo", JSON.stringify(state.todos));
    },

    saveData(state) {
      state.todos = JSON.parse(window.localStorage.getItem("todo")) || [];
      state.todosReserve = state.todos;
    },

    /*Отметка о завершении */
    completedClick(state, id) {
      for (const active of state.todos) {
        if (active.id == id) {
          if (active.isCompleted == false) {
            active.isCompleted = true;
          } else {
            active.isCompleted = false;
          }
        }
      }

      window.localStorage.setItem("todo", JSON.stringify(state.todos));
    },

    setFilterAll(state) {
      state.todos = state.todosReserve;
      window.localStorage.setItem("todo", JSON.stringify(state.todos));
    },

    setFilterActive(state) {
      state.todos = state.todosReserve;
      window.localStorage.setItem("todo", JSON.stringify(state.todos));
      let filteredActive = state.todos.filter(
        (item) => item.isCompleted == false
      );
      state.todos = filteredActive;
    },

    setFilterCompleted(state) {
      state.todos = state.todosReserve;
      window.localStorage.setItem("todo", JSON.stringify(state.todos));
      let filteredCompleted = state.todos.filter(
        (item) => item.isCompleted == true
      );
      state.todos = filteredCompleted;
    },
  },
});
