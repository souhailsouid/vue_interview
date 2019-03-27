<template>
  <div class="posts-page">
    <PostList :todos="loadedTodos"/>
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";
import { mapGetters } from "vuex";
export default {
  components: {
    PostList
  },

  computed: {
    ...mapGetters(["loadedTodos"])
  }
};
</script>


<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
