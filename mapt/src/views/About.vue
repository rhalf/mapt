<template>
  <v-sheet max-width="1080" class="mx-auto mt-4">
    <v-container>
      <v-row>
        <v-col>
          <v-img
            class="mx-auto"
            v-scrollFadeIn
            width="192"
            height="192"
            :lazy-src="app.data.logo"
            :src="app.data.logo"
          ></v-img>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <h2 v-scrollSlideRight class="primary--text py-2">Overview</h2>
          <p v-scrollSlideLeft class="black--text">{{ app.vmgo.overview }}</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <h2 v-scrollSlideRight class="primary--text py-2">History</h2>
          <p v-scrollSlideLeft class="black--text">{{ app.vmgo.history }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h1 v-scrollSlideUp class="primary--text py-2 text-center">VMGO</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h2 v-scrollSlideRight class="primary--text py-2">Vision</h2>
          <p v-scrollSlideLeft class="black--text">{{ app.vmgo.vision }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h2 v-scrollSlideRight class="primary--text py-2">Mission</h2>
          <p v-scrollSlideLeft class="black--text">{{ app.vmgo.mission }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h2 v-scrollSlideRight class="primary--text py-2">Objective</h2>
          <p v-scrollSlideLeft class="black--text">
            {{ app.vmgo.objective }}
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <h2 v-scrollSlideRight class="primary--text py-2">Goal</h2>
          <p v-scrollSlideLeft class="black--text">{{ app.vmgo.goal }}</p>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "About",
  components: {},
  data() {
    return {
      app: this.$store.state.app,
    };
  },
};
</script>
