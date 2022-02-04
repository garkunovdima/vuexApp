<template>
  <div>
    <div v-for="list in lists" :key="list">
      <router-link
        :data="data"
        :to="{
          path: `${isAuth ? '/profile/' + profileInfo.profileLink : '/'}`,
        }"
        >{{ list.name }}</router-link
      >
    </div>
    <ul v-for="list in lists" :key="list">
      <li class="w-100" style="background: red; color: white">
        {{ list.name }}: {{ list.posts }}
      </li>
    </ul>
    <div v-if="false"><feed></feed></div>
  </div>
</template>

<script>
import feed from "@/components/feed.vue";

export default {
  name: "Saved",
  components: {
    feed,
  },
  data() {
    return { data: ["hello, vue"] };
  },
  computed: {
    profileInfo() {
      return this.$store.state.user;
    },
    isAuth() {
      return this.profileInfo.authState;
    },
    listLink() {
      return "/saved/" + this.profileInfo.profileLink + "/";
    },
    lists() {
      //let lists = [];
      // this.$store.state.users.forEach((element) => {
      //   if (element.id === this.$store.state.auth.id) {
      //     console.log("find it!", this.$store.state.auth.id);
      //     lists = element.lists;
      //   }
      // });
      return "lists";
    },
  },
};
</script>
