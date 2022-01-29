<template>
  <div class="registration post-shadow">
    <div class="text-center py-1">
      <h1 class="m-4">Регистрация</h1>
      <div class="row">
        <div class="col-4">
          <my-input
            placeholder="Имя пользователя"
            @returnInput="returnUserName"
          ></my-input>
          <my-input
            placeholder="Адрес электронной почты"
            @returnInput="returnUserEmail"
          ></my-input>
          <my-input
            :placeholder="passwordPlaceholder"
            :inputType="passwordInput"
            @returnInput="returnUserPassword"
          ></my-input>
          <my-input
            :placeholder="passwordPlaceholder"
            :inputType="passwordInput"
            @returnInput="returnUserPasswordRepeat"
          ></my-input>
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
    <my-dialog
      class="text-start"
      :user="reg"
      :dialogVisible="dialogVisible"
      @closeRegDialog="closeWindow"
      @acceptRegDialog="doReg"
    ></my-dialog>
  </div>
</template>

<script>
import myInput from "../components/ui/myInput.vue";
import myDialog from "../components/ui/regDialog.vue";
import { users } from "../App.vue";

export default {
  name: "Registration",
  components: {
    myInput,
    myDialog,
  },
  props: {},
  data() {
    return {
      users,

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
  methods: {
    closeWindow() {
      this.dialogVisible = false;
    },
    doReg() {
      users.push({
        id: users.length,
        name: this.reg.userName,
        email: this.reg.userEmail,
        password: this.reg.userPassword,
      });
      console.log(users);
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
