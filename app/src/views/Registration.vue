<template>
  <div class="registration post-shadow">
    <div class="text-center py-1">
      <h1 class="m-4">Регистрация</h1>
      <div class="row">
        <div class="col-4">
          <div class="my-3">
            <my-input
              placeholder="Имя пользователя"
              @returnInput="returnUserName"
            ></my-input>
          </div>
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
          <div class="my-3">
            <my-input
              :placeholder="passwordPlaceholder"
              :inputType="passwordInput"
              @returnInput="returnUserPasswordRepeat"
            ></my-input>
          </div>
        </div>
        <div class="col-4">
          <div>
            <label>
              <input type="checkbox" v-model="reg.checked" />
              местный, э?
            </label>

            <div>
              <input type="radio" id="one" value="Один" v-model="reg.picked" />
              <label for="one">Один</label>
              <br />
              <input type="radio" id="two" value="Два" v-model="reg.picked" />
              <label for="two">Два</label>
              <br />
              <span>
                <span v-show="reg.picked || reg.checked">
                  Выбрано: {{ reg.picked }}
                </span>
                <span v-show="reg.picked && reg.checked"> и </span>
                <span v-show="reg.checked"> отмечено </span>
              </span>
            </div>

            <div>
              <select v-model="reg.sexSelected">
                <option selected disabled value="null">Выберите пол</option>
                <option value="male">Мужской</option>
                <option value="female">Женский</option>
                <option value="not shure">Не определился</option>
              </select>
              <br /><span>Выбрано: {{ reg.sexSelected }}</span>
            </div>
            <div>
              <select v-model="reg.selected" multiple>
                <option>А</option>
                <option>Б</option>
                <option>В</option>
              </select>
              <div>selected: {{ reg.selected }}</div>
            </div>
          </div>
        </div>
        <div class="col-4">
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
              <span v-if="line != null && line != []">{{ f }}: {{ line }}</span>
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
      this.$store.commit("addUser", {
        id: this.users.length,
        name: this.reg.userName,
        link: this.reg.userName.toLowerCase().replace(/\s/g, ''),
        email: this.reg.userEmail,
        password: this.reg.userPassword,
        lists: [],
      });
      console.log(this.users);
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
