<template>
  <div
    v-if="dialogVisible"
    class="
      dialog_window_bg
      d-flex
      flex-column
      justify-content-center
      align-items-center
    "
  >
    <div class="post-shadow px-3 py-3">
      <h2 class="mb-3">Ваши данные</h2>
      <div v-for="(line, f) in user" :key="line">
        <span v-if="line != null && line != []">{{ f }}: {{ line }}</span>
      </div>
      <div class="text-center mt-5">
        <button @click="closeWindow" class="btn btn-danger me-3">Close</button>
        <button @click="acceptDialog" class="btn btn-success">Acept</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myDialog",
  props: {
    dialogVisible: { type: Boolean, default: false },
    user: { type: Object },
  },
  data() {
    return {};
  },
  methods: {
    closeWindow() {
      console.log("closeRegDialog");
      this.$emit("closeRegDialog");
    },
    acceptDialog() {
      console.log("acceptRegDialog");
      this.$emit("acceptRegDialog");
    },
  },
};
</script>

<style>
.dialog_window_bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 200;
  padding: 10px;
}
</style>