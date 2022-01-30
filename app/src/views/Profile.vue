<template>
  <div class="profile row">
    <div class="profile_info text-center col-4 post-shadow pb-5">
      <div class="mt-5">
        <div class="profile_username h2">
          <div>{{ profile_name }}</div>
        </div>
        <div class="profile_photo">
          <img src="@/assets/logo.png" alt="profile_photo" />
        </div>
      </div>
      <div class="profile_description">{{ profile_description }}</div>
    </div>
    <div class="profile_users_posts col-8">
      <dialog-window>
        <template #fff> asd</template>
      </dialog-window>
      <feed :data="myPosts"></feed>
    </div>
  </div>
</template>

<script>
import feed from "@/components/feed";
import DialogWindow from "@/components/ui/dialogWindow";

export default {
  name: "Profile",
  components: {
    feed,
    DialogWindow,
  },
  data() {
    return {
      profile_name: "Harkunov Dmytro",
      profile_photo_path: "",
      profile_description: "Profile description",
      feed_rule: true,
      imageLink: "@/assets/logo.png",
    };
  },
  computed: {
    myPosts() {
      return this.posts.filter((item) => item.my_post);
    },
    posts() {
      return this.$store.state.posts;
    },
  },
  methods: {
    is_my_post: function (post) {
      if (this.profile_name === post.author) return true;
      else return false;
    },
  },
};
</script>

<style scoped>
.profile_info {
  align-self: flex-start;
}
</style>
