<template>
  <div>
    <div v-for="post in posts" :key="post">
      <post
        v-if="rule"
        :post="post"
        :class="{ red: post.my_post }"
        @editPostId="editPostId"
        @removePostId="removePostId"
      ></post>
    </div>
  </div>
</template>

<script>
import post from "@/components/post.vue";
import { posts } from "@/App.vue";

export default {
  name: "feed",
  components: {
    post,
  },
  props: ["rule"],
  data() {
    return {
      posts,
    };
  },
  methods: {
    editPostId(id) {
      console.log("editPostId feed", id);
      this.$emit("editPostId", id);
    },
    removePostId(id) {
      console.log("removePostId feed", id);
      this.$emit("removePostId", id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
