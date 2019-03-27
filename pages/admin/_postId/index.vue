<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :todo="loadedPost" @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
import { mapActions } from "vuex";
import axios from "axios";

export default {
  layout: "admin",
  components: {
    AdminPostForm
  },
  asyncData(context) {
    return axios
      .get(
        `https://jsonplaceholder.typicode.com/todos/${context.params.postId -
          -1}`
      )
      .then(res => {
        return {
          loadedPost: { ...res.data, id: context.params.postId }
        };
      })
      .catch(e => context.error());
  },

  methods: {
    ...mapActions({ onSubmitted: "editTodo" })
  }
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
