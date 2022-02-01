<template>
  <div>
    <div>{{user}}</div>
    <router-link to="/reg"><button>Registration</button></router-link>
    <button @click="loginDialogVisible = true">Auth</button>
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
  computed:{
    user(){
      console.log(this.$store.state.Users.user);
      return this.$store.state.Users.user
    }
  },
  methods: {
    closeWindow() {
      this.loginDialogVisible = false;
    },
  },
};
</script>
