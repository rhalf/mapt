<template>
  <v-sheet max-width="1080" class="mx-auto mt-4">
    <v-container>
      <v-row>
        <v-col>
          <h2 v-scrollSlideRight class="primary--text py-2"></h2>

          <v-sheet>
            <p
              class="black--text"
              v-for="personnel in app.personnels"
              v-bind:key="personnel.id.toString() + '0'"
            >
              <v-sheet v-if="personnel.owner == true">
                <v-container>
                  <v-row>
                    <v-col cols="auto" sm="5">
                      <v-img
                        v-scrollSlideRight
                        class="mx-auto"
                        width="124"
                        height="124"
                        :lazy-src="app.data.logo1"
                        :src="app.data.logo1"
                      ></v-img>
                    </v-col>
                    <v-col v-scrollSlideLeft>
                      <p class="text-body-1 text-sm-h6 my-0 font-weight-bold">
                        {{ personnel.name }}
                      </p>
                      <p class="text-body-2 text-sm-body-1 my-0">
                        {{ personnel.rank }}
                      </p>
                      <p class="text-caption text-sm-body-2 py-0">
                        {{ personnel.educ }}
                      </p>
                      <p class="text-caption text-sm-body-2 py-0">
                        {{ personnel.email }}
                      </p>
                      <p class="text-caption text-sm-body-2 py-0">
                        {{ personnel.phone }}
                      </p>
                      <v-row>
                        <v-col cols="auto">
                          <p class="text-caption text-sm-body-2 py-0">
                            <v-icon>mdi-email</v-icon>{{ personnel.email }}
                          </p>
                        </v-col>
                        <v-col cols="auto">
                          <p class="text-caption text-sm-body-2 py-0">
                            <v-icon>mdi-cellphone</v-icon>{{ personnel.phone }}
                          </p>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
              </v-sheet>
            </p>
            <v-divider> </v-divider>
            <p
              class="black--text"
              v-for="personnel in app.personnels"
              v-bind:key="personnel.id.toString() + '1'"
            >
              <v-sheet v-if="personnel.level == 1">
                <v-container>
                  <v-row>
                    <v-col cols="auto" sm="5">
                      <v-img
                        v-scrollSlideRight
                        class="mx-auto"
                        width="124"
                        height="124"
                        :lazy-src="app.data.logo1"
                        :src="app.data.logo1"
                      ></v-img>
                    </v-col>
                    <v-col v-scrollSlideLeft>
                      <p class="text-body-1 text-sm-h6 my-0 font-weight-bold">
                        {{ personnel.name }}
                      </p>
                      <p class="text-body-2 text-sm-body-1 my-0">
                        {{ personnel.pos }}
                      </p>
                      <p class="text-caption text-sm-body-2 py-0">
                        {{ personnel.educ }}
                      </p>
                      <p class="text-caption text-sm-body-2 py-0">
                        {{ personnel.email }}
                      </p>
                      <p class="text-caption text-sm-body-2 py-0">
                        {{ personnel.phone }}
                      </p>
                      <v-row>
                        <v-col cols="auto">
                          <p class="text-caption text-sm-body-2 py-0">
                            <v-icon>mdi-email</v-icon>{{ personnel.email }}
                          </p>
                        </v-col>
                        <v-col cols="auto">
                          <p class="text-caption text-sm-body-2 py-0">
                            <v-icon>mdi-cellphone</v-icon>{{ personnel.phone }}
                          </p>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
              </v-sheet>
            </p>
            <p
              class="black--text"
              v-for="personnel in app.personnels"
              v-bind:key="personnel.id.toString() + '2'"
            >
              <v-sheet v-if="personnel.level == 2">
                <v-container>
                  <v-row>
                    <v-col cols="auto" sm="5">
                      <v-img
                        v-scrollSlideRight
                        class="mx-auto"
                        width="124"
                        height="124"
                        :lazy-src="app.data.logo1"
                        :src="app.data.logo1"
                      ></v-img>
                    </v-col>
                    <v-col v-scrollSlideLeft>
                      <p class="text-body-1 text-sm-h6 my-0 font-weight-bold">
                        {{ personnel.name }}
                      </p>
                      <p class="text-body-2 text-sm-body-1 my-0">
                        {{ personnel.pos }}
                      </p>
                      <p class="text-caption text-sm-body-2 py-0">
                        {{ personnel.educ }}
                      </p>
                      <p class="text-caption text-sm-body-2 py-0">
                        {{ personnel.email }}
                      </p>
                      <p class="text-caption text-sm-body-2 py-0">
                        {{ personnel.phone }}
                      </p>
                      <v-row>
                        <v-col cols="auto">
                          <p class="text-caption text-sm-body-2 py-0">
                            <v-icon>mdi-email</v-icon>{{ personnel.email }}
                          </p>
                        </v-col>
                        <v-col cols="auto">
                          <p class="text-caption text-sm-body-2 py-0">
                            <v-icon>mdi-cellphone</v-icon>{{ personnel.phone }}
                          </p>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
              </v-sheet>
            </p>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "Personnels",
  created() {},
  data() {
    return {
      app: this.$store.state.app,
    };
  },
};
</script>
