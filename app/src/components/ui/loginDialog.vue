<template>
  <div
    v-if="loginDialogVisible"
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
      <form action="">
        <fieldset>
          <legend>Авторизация</legend>
          <div class="text-center my-2">
            <div class="mb-2">
              <div class="m-2">azWYU1lDNuW0J5OANjiJzUuWdvj1</div>
              <div class="m-2">t@mail.ru</div>
              <div class="m-2">000000</div>
              <my-input
                placeholder="Логин"
                type="email"
                @returnInput="getEmail"
              ></my-input>
            </div>
            <div>
              <my-input
                placeholder="Пароль"
                type="password"
                @returnInput="getPassword"
              ></my-input>
            </div>
          </div>
          <div class="d-flex justify-content-evenly">
            <button @click="closeWindow" class="btn btn-danger">Отмена</button>
            <button @click="acceptDialog" class="btn btn-success">
              Подтвердить
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import myInput from "@/components/ui/myInput.vue";

export default {
  name: "myDialog",
  props: {
    loginDialogVisible: { type: Boolean, default: false },
    user: { type: Object },
  },
  components: { myInput },
  data() {
    return { email: "", password: "" };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    getEmail(data) {
      console.log("email", data);
      return (this.email = data);
    },
    getPassword(data) {
      console.log("password", data);
      return (this.password = data);
    },
    closeWindow() {
      this.$emit("closeLogin");
    },
    acceptDialog() {
      console.log("sending user data: ", {
        email: this.email,
        password: this.password,
      });

      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });

      this.$emit("acceptLoginDialog");
      //this.closeWindow();
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