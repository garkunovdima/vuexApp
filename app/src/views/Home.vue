<template>
  <div>
    <login-dialog :loginDialogVisible="loginDialogVisible" @closeLogin="closeWindow"></login-dialog>
    <feed :rule="feed_rule"></feed>
  </div>
</template>

<script>
import feed from "@/components/feed.vue";
import loginDialog from "../components/ui/loginDialog.vue";

export default {
  name: "Home",
  components: {
    feed,
    loginDialog,
  },
  data() {
    return {
      feed_rule: true,
      loginDialogVisible: true,

    };
  },
  methods:{
    closeWindow() {
      this.loginDialogVisible = false;
    },
  }
};
</script>
