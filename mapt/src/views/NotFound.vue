<template>
  <v-sheet max-width="1080" class="mx-auto mt-4">
    <v-container>
      <v-row>
        <v-sheet height="200px"></v-sheet>
      </v-row>
      <v-row>
        <v-col
          ><h1 v-scrollSlideRight class="primary--text text-center">
            Page Not Found!
          </h1>
          <h1 v-scrollSlideRight class="primary--text text-center">
           Pls try again!
          </h1>
        </v-col>
      </v-row>
      <v-row>
        <v-sheet height="200px"></v-sheet>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "NotFound",
  components: {},
  data() {
    return {
      app: this.$store.state.app,
    };
  },
  methods: {},
};
</script>
