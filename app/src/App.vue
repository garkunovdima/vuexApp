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
        <router-link to="/profile">My Profile</router-link>
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
export const posts = {
  post0: {
    id: 0,
    author: "Alex Parker",
    date: "November 23, 2016",
    header:
      "How to make your company website based on bootstram framework on localhost?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero ante, varius in nisl at, convallis sollicitudin nibh. Nunc in leo eget purus cursus accumsan. Aenean laoreet ultricies enim, sit amet suscipit ipsum dignissim quis. Nulla vehicula urna vitae mauris euismod commodo. Duis iaculis, velit in iaculis fringilla, mauris risus cursus leo, ut tincidunt lectus eros non ex. Aliquam erat volutpat. Suspendisse lacinia, orci quis feugiat finibus, velit ante varius eros, at congue justo ipsum at orci. Praesent condimentum tellus non lorem maximus feugiat.",
    my_post: false,
    liked: false,
    saved: false,
  },
  post1: {
    id: 1,
    author: "Alex",
    header:
      "How to make your company website based on bootstram framework on localhost?",
    date: "24-01-2022",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero ante, varius in nisl at, convallis sollicitudin nibh. Nunc in leo eget purus cursus accumsan. Aenean laoreet ultricies enim, sit amet suscipit ipsum dignissim quis. Nulla vehicula urna vitae mauris euismod commodo. Duis iaculis, velit in iaculis fringilla, mauris risus cursus leo, ut tincidunt lectus eros non ex. Aliquam erat volutpat. Suspendisse lacinia, orci quis feugiat finibus, velit ante varius eros, at congue justo ipsum at orci. Praesent condimentum tellus non lorem maximus feugiat.",
    my_post: false,
    liked: true,
    saved: true,
  },
  post2: {
    id: 2,
    author: "Bert",
    header:
      "How to make your company website based on bootstram framework on localhost?",
    date: "24-01-2022",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero ante, varius in nisl at, convallis sollicitudin nibh. Nunc in leo eget purus cursus accumsan. Aenean laoreet ultricies enim, sit amet suscipit ipsum dignissim quis. Nulla vehicula urna vitae mauris euismod commodo. Duis iaculis, velit in iaculis fringilla, mauris risus cursus leo, ut tincidunt lectus eros non ex. Aliquam erat volutpat. Suspendisse lacinia, orci quis feugiat finibus, velit ante varius eros, at congue justo ipsum at orci. Praesent condimentum tellus non lorem maximus feugiat.",
    my_post: true,
    liked: true,
    saved: true,
  },
  post3: {
    id: 3,
    author: "Hush",
    header:
      "How to make your company website based on bootstram framework on localhost?",
    date: "24-01-2022",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero ante, varius in nisl at, convallis sollicitudin nibh. Nunc in leo eget purus cursus accumsan. Aenean laoreet ultricies enim, sit amet suscipit ipsum dignissim quis. Nulla vehicula urna vitae mauris euismod commodo. Duis iaculis, velit in iaculis fringilla, mauris risus cursus leo, ut tincidunt lectus eros non ex. Aliquam erat volutpat. Suspendisse lacinia, orci quis feugiat finibus, velit ante varius eros, at congue justo ipsum at orci. Praesent condimentum tellus non lorem maximus feugiat.",
    my_post: false,
    liked: false,
    saved: false,
  },
};
export const users = [
  {
    id: 0,
    name: "Vlad",
    email: "vlad@gmail.com",
    password: "0000",
    sex: "male",
  },
  {
    id: 1,
    name: "Lena",
    email: "lena@gmail.com",
    password: "0000",
    sex: "female",
  },
  {
    id: 2,
    name: "Grisha",
    email: "grisha@gmail.com",
    password: "0000",
    sex: "male",
  },
];

export default {
  name: "App",
  components: {},
  data() {
    return {
      posts,
    };
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
