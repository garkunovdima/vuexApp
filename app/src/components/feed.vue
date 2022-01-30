<template>
  <div>
    <div v-for="post in posts" :key="post">
      <post :post="post" :class="{ red: post.my_post }"></post>
    </div>
  </div>
</template>

<script>
import post from "@/components/post.vue";

export default {
  name: "feed",
  components: {
    post,
  },
  props: {data: { type: Array } },
  computed: {
    posts() {
      if (this.data) return this.data;
      else return this.$store.state.posts;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
