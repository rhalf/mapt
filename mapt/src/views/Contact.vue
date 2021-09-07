<template>
  <v-container>
    <v-sheet max-width="1080" class="mx-auto">
      <v-container>
        <v-row>
          <v-col>
            <h2 v-scrollSlideRight class="primary--text py-2">Address</h2>
            <p v-scrollSlideLeft class="black--text">
              {{ app.profile.address }}
            </p>
            <v-hover v-slot="{ hover }">
              <v-card class="rounded-xl">
                <v-img
                v-scrollSlideDown
                  max-width="1080"
                  max-height="300"
                  :lazy-src="app.profile.map_img"
                  :src="app.profile.map_img"
                  class="rounded-xl"
                ></v-img>
                <a  :href="app.profile.map" text>
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="
                        d-flex
                        transition-fast-in-fast-out
                        primary
                        lighten-1
                        v-card--reveal
                        text-h5
                        text-sm-h3
                        white--text
                        rounded-xl
                      "
                      style="height: 100%"
                    >
                      Click to open GoogleMap.
                    </div>
                  </v-expand-transition>
                </a>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h2 v-scrollSlideRight class="primary--text py-2">Contact Us</h2>
            <h3 v-scrollSlideLeft class="py-2">
              {{ app.profile.name }} {{ app.profile.motto }}
            </h3>

            <p v-scrollSlideLeft class="py-2">
              {{ app.profile.address }}
            </p>

            <v-row class="primary--text">
              <v-col>
                <v-row v-scrollSlideLeft>
                  <v-col cols="auto">
                    <v-btn outlined fab color="primary"
                      ><v-icon>mdi-email</v-icon></v-btn
                    >
                  </v-col>
                  <v-col
                    ><label class="font-weight-bold"> Email </label>
                    <br />
                    <label class="text-body-2 text-sm-body-1">
                      {{ app.profile.email }}
                    </label>
                  </v-col>
                </v-row>

                <v-row v-scrollSlideLeft>
                  <v-col cols="auto">
                    <v-btn outlined fab color="primary"
                      ><v-icon>mdi-phone-classic</v-icon></v-btn
                    >
                  </v-col>
                  <v-col>
                    <label class="font-weight-bold"> Phone </label>
                    <br />
                    <label class="text-body-2 text-sm-body-1">
                      {{ app.profile.phone1 }}
                    </label>
                  </v-col>
                </v-row>

                <v-row v-scrollSlideLeft>
                  <v-col cols="auto">
                    <v-btn outlined fab color="primary"
                      ><v-icon>mdi-cellphone</v-icon></v-btn
                    >
                  </v-col>
                  <v-col>
                    <label class="font-weight-bold"> Mobile1 </label>
                    <br />
                    <label class="text-body-2 text-sm-body-1">
                      {{ app.profile.mobile1 }}
                    </label>
                  </v-col>
                </v-row>

                <v-row v-scrollSlideLeft>
                  <v-col cols="auto">
                    <v-btn outlined fab color="primary"
                      ><v-icon>mdi-cellphone</v-icon></v-btn
                    >
                  </v-col>
                  <v-col
                    ><label class="font-weight-bold"> Mobile2 </label>
                    <br />
                    <label class="text-body-2 text-sm-body-1">
                      {{ app.profile.mobile2 }}
                    </label>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: "Contact",
  created() {},
  data() {
    return {
      app: this.$store.state.app,
      hover: false,
    };
  },
};
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>