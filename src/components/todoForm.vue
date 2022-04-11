<template>
  <div class="container">
    <form action="#" @submit.prevent="addTodo">
      <input type="text" v-model="todo" placeholder="What needs to be done?" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: "",
      id: Date.now(),
      isCompleted: false,
    };
  },

  methods: {
    addTodo() {
      this.$store.commit("addTodo", {
        todo: this.todo,
        id: this.id++,
        isCompleted: this.isCompleted,
      });
      this.todo = "";
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  width: 100%;
}

input {
  width: 100%;
  min-height: 50px;
  border: 2px solid #ccc;
  padding-left: 40px;
  font-size: 24px;
  background-image: url("../assets/image/arrow.svg");
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: 10px;
}

input::placeholder {
  font-style: italic;
  color: #ccc;
}
</style>
