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
        <router-link to="/saved">Saved posts</router-link>
        <router-link :to="profileLink">My Profile</router-link>
        <router-link to="/reg">Registration</router-link>
        <router-link to="/tests">Tests</router-link>
      </div>
    </div>
    <div class="container-lg my-5">
      <router-view />
    </div>
  </div>
</template>

<script>


export default {
  name: "App",
  computed:{
    profileLink(){
      return '/profile/'+this.$store.state.auth.link;
    }
  }
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
