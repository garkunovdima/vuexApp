<template>
  <div>
    <feed
    :rule="feed_rule"
    >
      
    </feed>
  </div>
</template>

<script>

import feed from "@/components/feed.vue";

export default {
  name: "Saved",
  components: {
    // Header,
    feed,
    // Footer,
  },
  data (){
    return {
      feed_rule: "true",
    }
  }
  
};
</script>
