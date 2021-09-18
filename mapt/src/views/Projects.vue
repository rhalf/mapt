<template>
  <v-sheet max-width="1080" class="mx-auto mt-4">
    <v-container>
      <v-row>
        <v-col
          ><h2 v-scrollSlideRight class="primary--text">
            Not yet done, Still working...
          </h2></v-col
        >
      </v-row>
      <v-row>
        <v-sheet height="1024px"></v-sheet>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "Projects",
  components: {},
  data() {
    return {
      app: this.$store.state.app,
    };
  },
  methods: {},
};
</script>
