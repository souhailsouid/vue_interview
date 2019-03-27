<template>
  <div>
    <AdminPostForm @submit="onSubmitted"/>
  </div>
</template>

<script>
import axios from "axios";
import AdminPostForm from "@/components/Admin/AdminPostForm";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  layout: "admin",
  components: {
    AdminPostForm
  },

  methods: {
    ...mapActions({ onSubmitted: "addPost" })
  }
};
</script>

