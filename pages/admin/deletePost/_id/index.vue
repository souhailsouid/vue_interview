<template>
  <div>
    <AdminDeleteForm :todo="loadedPost" @submit="onSubmitted"/>
  </div>
</template>

<script>
import AdminDeleteForm from "@/components/Admin/AdminDeleteForm";
import axios from "axios";

import { mapActions } from "vuex";
export default {
  layout: "admin",
  components: {
    AdminDeleteForm
  },
  asyncData(context) {
    return axios
      .get(
        `https://jsonplaceholder.typicode.com/todos/${context.params.id - -1}`
      )
      .then(res => {
        return {
          loadedPost: { ...res.data, id: context.params.id }
        };
      })
      .catch(e => context.error());
  },

  methods: {
    ...mapActions({ onSubmitted: "deleteTodo" })
  }
};
</script>

