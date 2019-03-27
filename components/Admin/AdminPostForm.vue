
<template>
  <div class="block">
    <v-layout row>
      <v-flex xs12 sm10 offset-sm1 class="card">
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

          <v-card-title primary-title class="blocktext">
            <div style="display: inline-flex">
              <div class="headline">ID {{editedPost.id}}</div>
            </div>
          </v-card-title>

          <form @submit.prevent="onSave">
            <v-flex xs12 sm6 md10 class="input">
              <v-text-field v-model="editedPost.title" label="Regular" placeholder="Placeholder"></v-text-field>
            </v-flex>

            <v-flex xs12 sm6 md10 class="input">
              <v-checkbox
                v-model="editedPost.completed"
                :label="`completed: ${editedPost.completed.toString()}`"
              ></v-checkbox>
            </v-flex>
            <br>

            <v-btn block color="#cc4949" type="submit">
              <h3 style="color: #fff">
                <b>Save</b>
              </h3>
            </v-btn>
            <v-btn block color="#000" @click="onCancel">
              <h3 style="color: #fff">
                <b>Cancel</b>
              </h3>
            </v-btn>
          </form>
          <br>
          <br>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedPost: this.todo
        ? { ...this.todo }
        : {
            title: "",
            completed: false
          }
    };
  },
  methods: {
    onSave() {
      // Save the post
      this.$emit("submit", this.editedPost);
    },
    onCancel() {
      // Navigate back
      this.$router.push("/");
    }
  }
};
</script>
<style scoped>
.block {
  margin: 0;
  position: absolute;
  width: 60%;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.blocktext {
  margin-left: auto;
  margin-right: auto;
  width: 7em;
}
@media screen and (max-width: 900px) {
  .block {
    width: 80%;
  }
}
.input {
  margin-left: auto;
  margin-right: auto;
}
</style>