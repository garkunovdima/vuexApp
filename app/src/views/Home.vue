<template>
  <div>
    <button @click="this.$store.commit('increment', text)">Increment</button>
    <input type="text" v-model="text">
    <span>{{text}}</span>
    <login-dialog
      :loginDialogVisible="loginDialogVisible"
      @closeLogin="closeWindow"
    ></login-dialog>
    <feed></feed>
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
      text:'',
      loginDialogVisible: true,
    };
  },
  methods: {
    closeWindow() {
      this.loginDialogVisible = false;
    },
  },
};
</script>
