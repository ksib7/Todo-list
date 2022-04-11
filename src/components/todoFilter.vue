<template>
  <div class="container">
    <div class="filter filter--addition">
      <div>
        <span>{{ todoCount }} item left</span>
      </div>
      <div class="filter__list">
        <div class="filter__list__hover" @click="setFilterAll()">All</div>
        <div class="filter__list__hover" @click="setFilterActive()">Active</div>
        <div class="filter__list__hover" @click="setFilterCompleted()">
          Completed
        </div>
      </div>
      <div>
        <p @click="removeTodo" class="filter__list__hover">Clear completed</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    todoCount() {
      return this.$store.getters.todoCount;
    },
  },

  methods: {
    setFilterAll() {
      this.$store.commit("setFilterAll");
    },

    setFilterCompleted() {
      this.$store.commit("setFilterCompleted");
    },

    setFilterActive() {
      this.$store.commit("setFilterActive");
    },

    removeTodo() {
      this.$store.commit("removeTodo");
    },
  },
};
</script>

<style lang="scss" scoped>
.filter--addition {
  font-size: 16px;
  color: darkgrey;
  border: 2px solid #ccc;
  border-top: none;
}

.filter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  width: 100%;
  min-height: 50px;
  font-size: 20px;
}

.filter__list {
  display: flex;
  gap: 20px;
}

.filter__list__hover {
  border: 1px solid white;
  padding: 5px;
  border-radius: 5px;
}

.filter__list__hover:hover {
  cursor: pointer;
  opacity: 0.7;
  border: 1px solid #ccc;
  padding: 5px;
}

.filter__list__hover:active {
  opacity: 0;
}
</style>
