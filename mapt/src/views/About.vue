<template>
  <v-container>
        <v-sheet max-width="1080" class="mx-auto">
          <v-container>
            <v-row>
              <v-col>
              </v-col>
            </v-row>
            <v-row>
              <v-spacer></v-spacer>
              <v-img
                v-scrollSlideUp
                max-width="192"
                max-height="192"
                :lazy-src="app.profile.logo"
                :src="app.profile.logo"
              ></v-img>
              <v-spacer></v-spacer>
            </v-row>

            <v-row>
              <v-col>
                <h2 v-scrollSlideRight class="primary--text py-2">Vision</h2>
                <p  v-scrollSlideLeft class="black--text">{{ app.vmgo.vision }}</p>
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
                <p v-scrollSlideLeft class="black--text">{{ app.vmgo.objective }}</p>
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
  </v-container>
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
