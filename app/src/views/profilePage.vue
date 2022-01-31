<template>
  <div>
    <div class="profile row">
      <div class="profile_info text-center col-4 post-shadow pb-5">
        <div class="mt-5">
          <div class="profile_username h2">
            <div>{{ profileInfo.name }}</div>
          </div>
          <div class="profile_photo">
            <img src="@/assets/logo.png" alt="profile_photo" />
          </div>
        </div>
        <div class="profile_description">{{ profileInfo.email }}</div>
      </div>
      <div class="profile_users_posts col-8">
        <dialog-window>
          <template #fff> asd</template>
        </dialog-window>
        <feed :data="myPosts"></feed>
      </div>
    </div>
  </div>
</template>

<script>
import feed from "@/components/feed";
import DialogWindow from "@/components/ui/dialogWindow";
export default {
  name: "ProfilePage",
  components: {
    feed,
    DialogWindow,
  },
  data() {
    return {
      // myPosts:[],
    };
  },
  computed: {
    profileInfo() {
      let temp;
      this.users.forEach((user) => {
        if (user.link === this.$route.params["id"]) temp = user;
      });
      return temp;
    },
    myPosts() {
      return this.posts.filter(
        (item) => item.authorLink == this.profileInfo.link
      );
    },
    posts() {
      return this.$store.state.posts;
    },
    users() {
      return this.$store.state.users;
    },
  },
};
</script>
