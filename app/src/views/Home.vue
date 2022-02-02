<template>
  <div>
    <router-link to="/reg"><button>Registration</button></router-link>
    <button @click="loginDialogVisible = true">Auth</button>
    <button @click="AuthStateChanged">AuthStateChanged</button>
    <login-dialog
      :loginDialogVisible="loginDialogVisible"
      @closeLogin="closeWindow"
    ></login-dialog>
    <feed></feed>
  </div>
</template>

<script>
import feed from "@/components/feed.vue";
import loginDialog from "../components/ui/loginDialog.vue";

export default {
  name: "Home",
  components: {
    feed,
    loginDialog,
  },
  data() {
    return {
      text: "",
      loginDialogVisible: false,
    };
  },
  computed: {},
  methods: {
    closeWindow() {
      this.loginDialogVisible = false;
    },
    AuthStateChanged(){
      this.$store.dispatch('AuthStateChanged');
    }
  },
};
</script>
