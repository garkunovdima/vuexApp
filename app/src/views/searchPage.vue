<template>
  <div class="post-shadow">
    <h1 class="text-center">Search</h1>
    <div class="text-center">
      <my-input placeholder="Let's find..." v-model="searchText"></my-input>
      <div>{{ searchText }}</div>
    </div>
    <div class="p-5">
      <h2>Search results:</h2>
      <div>
        <h3>Users:</h3>
        <div v-show="true" class="my-3">
          <div v-for="user in usersList" :key="user">
            <router-link :to="userLink(user)" class="post-shadow row">
              <div class="col-1 border">
                <img
                
                  :src="avasrc(user)"
                  :alt="avaAlt(user)"
                  class=""
                  width="70"
                  height="70"
                />
              </div>
              <div class="col-9 border">
                <div>{{ user.name }}</div>
                <div>{{ user.name }}</div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div>
        <h3>Posts</h3>
        <div v-show="true">
          <div v-for="post in postsList" :key="post">
            <post :post="post"></post>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myInput from "@/components/ui/myInput.vue";
import post from "@/components/post.vue";

export default {
  name: "searchPage",
  components: {
    myInput,
    post,
  },
  data() {
    return {
      searchText: "",
    };
  },
  computed: {
    usersList() {
      return this.users.filter((user) =>
        user.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
    users() {
      return this.$store.state.users;
    },
    postsList() {
      return this.posts.filter((post) =>
        post.header.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
    posts() {
      return this.$store.state.posts;
    },
  },
  methods: {
    avasrc(user) {
      if (user.ava) return require("@/assets/" + user.ava + ".jpg");
      else return require('@/assets/ava.jpg');
    },
    avaAlt(user) {
      return user.name + " avatar";
    },
    userLink(user) {
      return "/profile/" + user.link;
    },
  },
};
</script>
