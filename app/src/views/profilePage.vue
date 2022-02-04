<template>
  <div>
    <div class="profile row">
      <div class="profile_info text-center col-4 post-shadow pb-5">
        <div class="mt-5">
          <div class="profile_username h2">
            <div>
              {{
                profileInfo.name ? profileInfo.name : profileInfo.profileLink
              }}
            </div>
          </div>
          <div class="profile_photo">
            <img :src="avasrc(profileInfo)" alt="profile_photo" />
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
      return this.$store.state.user;
    },
    myPosts() {
      //   //this.$store.state.posts;
      //   return this.posts.filter(
      //     (item) => item.authorLink == this.profileInfo.link
      //   );
      // },
      // posts() {
      //   if (this.$store.state.posts) return this.$store.state.posts;
      //   else return "";
      // },
      // users() {
      //   if (this.$store.state.posts) return this.$store.state.users;
      // else
      return [];
    },
  },
  methods: {
    avasrc(user) {
      console.log("ava src", user.name);
      if (user.ava) return require("@/assets/" + user.ava + ".jpg");
      else return require("@/assets/ava.jpg");
    },
  },
};
</script>
