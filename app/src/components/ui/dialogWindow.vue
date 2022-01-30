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
    @click="closeWindow"
  >
    <div @click.stop.self="closeWindow" class="post-shadow px-3 py-3">
      <div class="">
        <div>
          <slot name="def"></slot>
        </div>
        <div class="d-flex justify-content-evenly">
          <button @click="closeDialog" class="btn btn-danger">
            Отмена
          </button>
          <button @click="closeDialog" class="btn btn-success">
            Подтвердить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dialog-window",
  props:{
    dialogVisible:{
      type: Boolean,
      default:false,
    }
  },
  methods:{
    closeDialog(){
      console.log("close");
    }
  }
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