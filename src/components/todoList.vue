<template>
  <div class="container">
    <div class="list" v-for="item of validateForm" :key="item.id">
      <label class="list__checkbox">
        <input class="input" type="checkbox" />
        <div
          class="list__checkbox__text"
          :class="{
            showCompleted: item.isCompleted,
          }"
          @click="completedClick(item.id)"
        >
          {{ item.todo }}
        </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getTodos() {
      return this.$store.getters.getTodos;
    },
    validateForm() {
      return this.$store.getters.validateForm;
    },
  },

  mounted() {
    this.$store.commit("saveData");
  },

  methods: {
    completedClick(id) {
      this.$store.commit("completedClick", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  min-height: 50px;
  border-bottom: 1px solid #ccc;
  border-left: 2px solid #ccc;
  border-right: 2px solid #ccc;
  border-top: none;
  padding-left: 10px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.list:last-child {
  border-bottom: 2px solid #ccc;
}

.list__checkbox {
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
}

.input:checked,
.input:not(:checked) {
  position: absolute;
  left: -9999px;
}

.input:checked ~ div,
.input:not(:checked) ~ div {
  display: inline-block;
  position: relative;
  padding-left: 40px;
  line-height: 20px;
  cursor: pointer;
}

.input:checked ~ div::before,
.input:not(:checked) ~ div::before {
  content: "";
  position: absolute;
  left: 0px;
  top: 0px;
  width: 20px;
  height: 20px;
  border: 1px solid #dddddd;
  background-color: #ffffff;
  border-radius: 10px;
}

.input:checked ~ div:after,
.input:not(:checked) ~ div:after {
  content: "";
  position: absolute;
  transition: all 0.2s ease;
  left: 5px;
  top: 6px;
  width: 11px;
  height: 4px;
  border-left: 2px solid green;
  border-bottom: 2px solid green;
  transform: rotate(-55deg);
}

.input:not(:checked) ~ div:after {
  opacity: 0;
}

.input:checked ~ div:after {
  opacity: 1;
}

.showCompleted {
  color: #ccc;
  text-decoration: line-through;
}

.list__checkbox__flex {
  color: darkgrey;
  font-size: 16px;
}

.list__checkbox__text {
  word-break: break-all;
  width: 100%;
}
</style>
