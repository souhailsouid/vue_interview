<template>
  <div>
    <section class="intro"></section>
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
.intro {
  height: 500px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/images/office2.jpg");
  background-position: bottom;
  background-size: cover;
}
</style>
