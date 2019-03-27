
<template>
  <v-toolbar dark color="#1867c0!important">
    <nuxt-link to="/" class="white--text">
      <h1>Clementine's interview</h1>
    </nuxt-link>

    <v-spacer></v-spacer>

    <v-spacer></v-spacer>
    <nuxt-link :to="buttonLink" class="post-preview"></nuxt-link>
    <nuxt-link to="/admin/new-post" class="white--text">
      <v-toolbar-title class="white--text">Create a todo</v-toolbar-title>
    </nuxt-link>
    <form @submit.prevent="submit">
      <v-text-field
        placeholder="Find Todo by ID"
        type="Number"
        v-model="id"
        autofocus
        class="mx-3"
        flat
        label="Search"
        prepend-inner-icon="search"
        solo-inverted
      ></v-text-field>
    </form>
    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ToolBar",
  components: {},

  methods: {
    submit(event) {
      this.$router.push(`/posts/${this.id}`);
    }
  },

  computed: {
    ...mapGetters(["loadedTodos"]),
    buttonLink() {
      return this.isAdmin ? "/create/" + this.id : "/admin/" + this.id;
    }
  }
};
</script>
<style>
.white--text {
  text-decoration: none;
}
</style>
