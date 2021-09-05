<template>
  <v-container>
    <v-sheet max-width="1080" class="mx-auto">
      <v-container>
        <v-row>
          <v-col>
            <h2 class="primary--text py-2">Address</h2>
            <p class="black--text">{{ app.profile.address }}</p>
            <v-sheet outlined class="rounded-xl">
              <a :href="app.profile.map" text>
                <v-img
                  max-width="1080"
                  max-height="300"
                  :src="app.profile.map_img"
                  class="rounded-xl"
                ></v-img>
              </a>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h2 class="primary--text py-2">Contact Us</h2>
            <h3 class=" py-2">
              {{ app.profile.name }} {{ app.profile.motto }}
            </h3>

            <p class=" py-2">
              {{ app.profile.address }}
            </p>

            <v-row class="primary--text">
              <v-col>
                <v-row>
                  <v-col cols="auto">
                    <v-btn outlined fab color="primary"
                      ><v-icon>mdi-email</v-icon></v-btn
                    >
                  </v-col>
                  <v-col
                    ><label class="font-weight-bold"> Email </label>
                    <br />
                    <label class="">
                      {{ app.profile.email }}
                    </label>
                  </v-col>
                </v-row>

                <v-row>
                   <v-col cols="auto">
                    <v-btn outlined fab color="primary"
                      ><v-icon>mdi-phone-classic</v-icon></v-btn
                    >
                  </v-col>
                  <v-col>
                    <label class="font-weight-bold"> Phone </label>
                    <br />
                    <label>
                      {{ app.profile.phone1 }}
                    </label>
                  </v-col>
                </v-row>

                <v-row>
                   <v-col cols="auto">
                    <v-btn outlined fab color="primary"
                      ><v-icon>mdi-cellphone</v-icon></v-btn
                    >
                  </v-col>
                  <v-col>
                    <label class="font-weight-bold "> Mobile1 </label>
                    <br />
                    <label>
                      {{ app.profile.mobile1 }}
                    </label>
                  </v-col>
                </v-row>

                <v-row>
                   <v-col cols="auto">
                    <v-btn outlined fab color="primary"
                      ><v-icon>mdi-cellphone</v-icon></v-btn
                    >
                  </v-col>
                  <v-col
                    ><label class="font-weight-bold"> Mobile2 </label>
                    <br />
                    <label>
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
    };
  },
};
</script>
