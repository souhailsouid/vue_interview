<template>
  <div class="block">
    <v-layout>
      <v-flex xs12 sm10 offset-sm1 class="card">
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="1.75"></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0" style="color: #cc4949">{{ title }}</h3>
              <h4 class="headline mb-0" style="color: #607d8b">completed: {{ completed}}</h4>
              <h4 class="headline mb-0" style="color: #009688">ID: {{ id }}</h4>
            </div>
          </v-card-title>

          <v-card-actions>
            <nuxt-link :to="postLink" class="post-preview">
              <v-btn flat color="orange">Explore</v-btn>
            </nuxt-link>
            <nuxt-link :to="deleteLink" class="post-preview">
              <v-btn flat color="red">Delete</v-btn>
            </nuxt-link>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
 





<script>
export default {
  name: "PostPreview",
  props: {
    id: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    postLink() {
      return this.isAdmin ? "/admin/" + this.id : "/posts/" + this.id;
    },
    deleteLink() {
      return "/admin/deletePost/" + this.id;
    }
  }
};
</script>


<style scoped>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
  text-decoration: none;
}

.block {
  display: flex;
  width: 30%;
  flex: wrap;
  padding-bottom: 20px;
}
@media screen and (max-width: 900px) {
  .block {
    width: 100%;
  }
}
</style>
