<template>
  <v-sheet max-width="1080" class="mx-auto mt-4">
    <v-container>
      <v-row>
        <v-col
          ><h2 v-scrollSlideRight class="primary--text">
            List of Major Clients
          </h2></v-col
        >
      </v-row>

      <v-row>
        <v-col
          cols="auto"
          v-for="client in app.clients"
          :key="client.id"
          class="mx-auto"
        >
          <v-hover v-slot="{ hover }" v-scrollFadeIn>
            <v-card
              width="330px"
              :elevation="hover ? 16 : 4"
              :class="{ 'on-hover': hover }"
            >
              <v-sheet :color="randomColors()" height="80px" class="py-3">
                <h3 class="white--text text-center ">
                  {{ client.name }}
                </h3></v-sheet
              >
              <v-sheet height="70px"
                ><h4 class="pa-3 text-center ">{{ client.desc }}</h4></v-sheet
              >
              <v-divider></v-divider>
              <v-card-text class="text-truncate">{{
                client.address
              }}</v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "Clients",
  components: {},
  data() {
    return {
      app: this.$store.state.app,
      colors: [
        "red",
        "blue",
        "green",
        "indigo",
        "purple",
        "teal",
        "orange",
        "brown",
        "deep-orange",
        "blue-grey",
        "cyan",
      ],
    };
  },
  methods: {
    randomColors() {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    },
  },
};
</script>
