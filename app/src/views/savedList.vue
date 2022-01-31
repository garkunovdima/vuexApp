<template>
  <div>
    <h1 class="text-center">{{ link }}</h1>
    <feed :data="listPosts"></feed>
  </div>
</template>

<script>
import feed from "@/components/feed.vue";

export default {
  name: "Saved",
  props: {
    data: { type: Array },
  },
  components: {
    feed,
  },
  computed: {
    link() {
      return this.$route.params["listid"];
    },
    listPosts() {
      let lists = [];

      this.$store.state.users.forEach((user) => {
        if (user.link === this.$route.params["id"]) {
          user.lists.forEach((list) => {
            if (list.name === this.link) lists = list;
          });
        }
      });

      let posts = [];

      this.$store.state.posts.forEach((post) => {
        lists.posts.forEach((pp) => {
          if (post.id === pp) posts.push(post);
        });
      });
      return posts;
    },
  },
};
</script>
