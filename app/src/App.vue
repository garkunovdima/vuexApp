<template>
  <div class="">
    <div
      class="post-shadow w-100"
      style="position: -webkit-sticky; position: sticky; top: 0; z-index: 100"
    >
      <div
        id="nav"
        class="
          container-lg
          d-flex
          align-items-center
          justify-content-between
          py-3
        "
      >
        <router-link to="/"
          ><img src="@/assets/logo.png" alt="" width="50" height="50"
        /></router-link>
        <router-link to="/">Home</router-link>
        <router-link to="/crud">CRUD</router-link>
        <router-link to="/search">Search</router-link>
        <router-link to="/saved">Saved posts</router-link>
        <router-link
          v-show="isAuth"
          :to="{
            path: `${'/profile/' + profileInfo.profileLink}`,
          }"
          >My Profile</router-link
        >
        <div class="userInfo">
          <div v-show="isAuth">
            <div>
              <span>Welcome, </span>
              <span
                ><b class="me-2">{{ profileInfo.email }} </b></span
              >
              <button @click="logout">logout</button>
            </div>
          </div>
          <div v-show="!isAuth">
            <router-link to="/reg"><button>Registration</button></router-link>
            <button @click="loginDialogVisible = true">Auth</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container-lg my-5">
      <router-view />
      <div>
        <login-dialog
          :loginDialogVisible="loginDialogVisible"
          @closeLogin="closeWindow"
        ></login-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import loginDialog from "@/components/ui/loginDialog.vue";

export default {
  name: "App",
  components: {
    loginDialog,
  },
  data() {
    return {
      loginDialogVisible: false,
    };
  },
  computed: {
    isAuth() {
      return this.$store.getters["user/isAuth"];
    },
    profileInfo() {
      return {
        name: this.$store.state.user.name,
        email: this.$store.state.user.email,
        uid: this.$store.state.user.uid,
        authState: this.$store.state.user.authState,
        profileLink: this.$store.state.user.profileLink,
      };
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("user/logOut");
    },
    closeWindow() {
      this.loginDialogVisible = false;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");

body {
  background: #e8e8e8;
}

* {
  font-family: "Noto Sans", sans-serif;
  color: #35495e;
}

#nav {
  box-sizing: border-box;
  font-family: "Source Sans Pro", sans-serif !important;
  font-size: 1.2em;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 5px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #41b983;
}

.red {
  color: red;
}
.post_icon svg {
  width: 30px;
  height: 30px;
}
.post-shadow {
  background: white;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>
