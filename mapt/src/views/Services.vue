<template>
  <v-container>
    <v-sheet max-width="1080" class="mx-auto">
      <v-container>
        <v-row>
          <v-col>
            <h2 v-scrollSlideRight class="primary--text py-2">
              Specialization
            </h2>
            <v-sheet v-scrollSlideLeft>
              <p
                class="black--text"
                v-for="(specialty, index) in app.vmgo.specialize"
                v-bind:key="index"
              >
                {{ index + 1 }}. {{ specialty }}
              </p>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h2 v-scrollSlideRight class="primary--text py-2">
              Services Offered
            </h2>

            <v-sheet v-scrollSlideLeft>
              <p
                class="black--text"
                v-for="(service, index) in app.services"
                v-bind:key="index"
              >
                {{ index + 1 }}. {{ service.name }}
              </p>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: "Services",
  created() {},
  data() {
    return {
      app: this.$store.state.app,
    };
  },
};
</script>
