<template>
  <v-sheet max-width="1080" class="mx-auto mt-4">
    <v-container>
      <v-row>
        <v-col>
          <h2 v-scrollSlideRight class="primary--text" v-show="build">
            Build your dreams...
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-carousel
            cycle
            show-arrows-on-hover
            max-width="1024"
            height="320"
            hide-delimiter-background
            hide-delimiter
            interval="3000"
            color="primary"
            class="rounded-lg"
          >
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-row v-scrollSlideUp>
            <v-col class="text-center">
              <p class="font-weight-bold primary--text ">
                Services
              </p>
              <v-btn color="primary" outlined large
                ><v-icon left>mdi-cog</v-icon>
                {{ app.services.length }}
              </v-btn>
            </v-col>

            <v-col class="text-center">
              <p class="font-weight-bold primary--text ">
                Clients
              </p>
              <v-btn color="primary" outlined large
                ><v-icon left>mdi-account-group</v-icon>
                {{ app.clients.length }}
              </v-btn>
            </v-col>

            <v-col class="text-center">
              <p class="font-weight-bold primary--text ">
                Projects
              </p>
              <v-btn color="primary" outlined large
                ><v-icon left>mdi-file-table-box-multiple</v-icon>
                {{ app.projects.length }}
              </v-btn>
            </v-col>

            <v-col class="text-center">
              <p class="font-weight-bold primary--text ">
                Mining
              </p>
              <v-btn color="primary" outlined large
                ><v-icon left>mdi-bulldozer</v-icon>
                {{ app.mining.length }}
              </v-btn>
            </v-col>

            <v-col class="text-center">
              <p class="font-weight-bold primary--text ">
                Personnels
              </p>
              <v-btn color="primary" outlined large
                ><v-icon left>mdi-account-supervisor</v-icon>
                {{ app.personnels.length }}
              </v-btn>
            </v-col>

            <v-col class="text-center">
              <p class="font-weight-bold primary--text ">
                Vehicles
              </p>
              <v-btn color="primary" outlined large
                ><v-icon left>mdi-dump-truck</v-icon>
                {{ app.vehicles.length }}
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-container >
            <p>
              Our company was formed and established with the primary purpose of
              providing integrated engineering services such as maintenance,
              trading and construction.
            </p>
            <p>
              The increase numbers of client and allied consultants attest to
              the core value, vision of the company. Any interest or
              clarification, our office is very available in your convenience
              time.
            </p>
            <p>
              We hope that our company's integrated engineering experience will
              satisfy your attention. We are looking forward for a mutual and
              harmonious business relation in future.
            </p>

            <p>
              Thank You and God Bless.
            </p>

            <p></p>
          </v-container>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-img
            class="mx-auto"
            width="192"
            height="192"
            :lazy-src="app.data.logo"
            :src="app.data.logo"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      build: true,
      app: this.$store.state.app,

      items: [
        {
          src: require("../assets/construction/random/1.jpg"),
        },
        {
          src: require("../assets/construction/random/2.jpg"),
        },
        {
          src: require("../assets/construction/random/3.jpg"),
        },
        {
          src: require("../assets/construction/random/4.jpg"),
        },
        {
          src: require("../assets/construction/random/5.jpg"),
        },
        {
          src: require("../assets/construction/random/6.jpg"),
        },
        {
          src: require("../assets/construction/random/7.jpg"),
        },
      ],
    };
  },
  methods: {
    show() {
      this.intersected = true;
    },
  },
};
</script>
