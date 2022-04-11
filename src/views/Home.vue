<template>
  <div>
    <todo-form />
    <todo-list />
    <todo-filter />
  </div>
</template>

<script>
import todoForm from "../components/todoForm.vue";
import todoList from "../components/todoList.vue";
import todoFilter from "../components/todoFilter.vue";
export default {
  components: {
    todoForm,
    todoList,
    todoFilter,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
}
</style>
