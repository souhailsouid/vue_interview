<template>
  <div>
    <section class="intro"></section>
    <PostList :todos="visibleTodos"/>
    <div class="text-xs-center">
      <pagination
        :todos="loadedTodos"
        v-on:page:update="updatePage"
        :currentPage="currentPage"
        :pageSize="pageSize"
      ></pagination>
    </div>
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";
import Pagination from "@/components/Posts/Pagination.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      currentPage: 0,
      pageSize: 30,
      visibleTodos: []
    };
  },
  components: {
    PostList,
    Pagination
  },

  computed: {
    ...mapGetters(["loadedTodos"])
  },
  beforeMount: function() {
    this.updateVisibleTodos();
  },
  methods: {
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.updateVisibleTodos();
    },
    updateVisibleTodos() {
      this.visibleTodos = this.loadedTodos.slice(
        this.currentPage * this.pageSize,
        this.currentPage * this.pageSize + this.pageSize
      );

      // if we have 0 visible todos, go back a page
      if (this.visibleTodos.length == 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage - 1);
      }
    }
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
