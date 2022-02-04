<template>
  <div class="registration post-shadow">
    <div class="text-center py-1">
      <h1 class="m-4">Регистрация</h1>
      <div class="text-center">
        <div class="">
          <div class="my-3">
            <my-input
              placeholder="Адрес электронной почты"
              @returnInput="returnUserEmail"
            ></my-input>
          </div>
          <div class="my-3">
            <my-input
              :placeholder="passwordPlaceholder"
              :inputType="passwordInput"
              @returnInput="returnUserPassword"
            ></my-input>
          </div>
          <div class="">
            <p>О себе</p>
            <textarea cols="30" rows="6" v-model="reg.userAbout"></textarea>
          </div>
        </div>
        <div>
          <button class="btn btn-success my-3" @click="dialogVisible = true">
            Проверить данные и подтвердить регистрацию
          </button>
        </div>
      </div>
      <dialog-window :dialogVisible="dialogVisible">
        <template #def>
          <div
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
              <div v-for="(line, f) in reg" :key="line">
                <span v-if="line != null && line != []"
                  >{{ f }}: {{ line }}</span
                >
              </div>
              <div class="text-center mt-5">
                <button @click="closeWindow" class="btn btn-danger me-3">
                  Close
                </button>
                <button @click="doReg" class="btn btn-success">Acept</button>
              </div>
            </div>
          </div>
        </template>
      </dialog-window>
    </div>
  </div>
</template>

<script>
import myInput from "../components/ui/myInput.vue";
import DialogWindow from "@/components/ui/dialogWindow";

export default {
  name: "Registration",
  components: {
    myInput,
    DialogWindow,
  },
  data() {
    return {
      dialogVisible: false,

      selected: null,
      checked: false,
      picked: "",
      passwordInput: "password",
      passwordPlaceholder: "Пароль",
      reg: {
        userName: null,
        userEmail: null,
        userPassword: null,
        userPasswordRepeat: null,
        sexSelected: null,
        userAbout: null,
      },
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    closeWindow() {
      this.dialogVisible = false;
    },
    doReg() {
      let data = { email: this.reg.userEmail, password: this.reg.userPassword };
      this.$store.dispatch("user/signIn", data);
      this.closeWindow();
    },
    returnUserName(value) {
      this.reg.userName = value;
    },
    returnUserEmail(value) {
      this.reg.userEmail = value;
    },
    returnUserPassword(value) {
      this.reg.userPassword = value;
    },
    returnUserPasswordRepeat(value) {
      this.reg.userPasswordRepeat = value;
    },
  },
};
</script>
<style scoped>
textarea {
  resize: none;
}
</style>
