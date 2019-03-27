
<template>
  <v-container grid-list-md text-xs-center>
    <v-container>
      <v-layout>
        <v-flex xs12 sm10 offset-sm1 class="card">
          <v-card>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="1.75"></v-img>

            <v-card-title primary-title class="blocktext">
              <div>
                <h3 class="headline mb-3" style="color: #cc4949">{{ todo.title }}</h3>
                <h4 class="headline mb-3" style="color: #607d8b">completed: {{ todo.completed}}</h4>
                <h4 class="headline mb-3" style="color: #009688">ID: {{todo.id -1 }}</h4>
              </div>
            </v-card-title>

            <v-card-actions class="blocktext">
              <nuxt-link :to="`/admin/${todo.id- 1}`" class="white--text">
                <v-btn flat color="orange">Update</v-btn>
              </nuxt-link>
              <nuxt-link :to="`/admin/deletePost/${todo.id-1}`" class="white--text">
                <v-btn flat color="red">Delete</v-btn>
              </nuxt-link>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>
<script>
import axios from "axios";

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  asyncData(context) {
    return axios
      .get(
        `https://jsonplaceholder.typicode.com/todos/${context.params.id - -1}`
      )
      .then(res => {
        return {
          todo: res.data
        };
      })
      .catch(e => context.error(e));
  }
};
</script>


<style scoped>
.blocktext {
  margin-left: auto;
  margin-right: auto;
  width: 14em;
}
.h4 {
  text-decoration-color: aquamarine;
  background-color: antiquewhite;
}
.white--text {
  text-decoration: none;
}
</style>
