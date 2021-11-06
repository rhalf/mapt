<template>
  <v-sheet max-width="1080" class="mx-auto mt-4">
    <v-container>
      <v-row>
        <v-col>
          <h2 v-scrollSlideRight class="primary--text py-2"></h2>

          <v-sheet v-if="app.personnels">
            <p
              class="black--text"
              v-for="personnel in owner"
              v-bind:key="personnel.id.toString() + '0'"
            >
              <v-sheet>
                <v-container>
                  <v-row>
                    <v-col cols="auto" sm="6" align="right">
                      <v-hover v-slot="{ hover }">
                        <v-sheet
                          :elevation="hover ? 16 : 4"
                          width="175px"
                          v-scrollSlideLeft
                          :class="{ 'on-hover': hover }"
                        >
                          <photoZoom
                            :src="app.data.employee"
                            orientation="portrait"
                          ></photoZoom>
                        </v-sheet>
                      </v-hover>
                    </v-col>
                    <v-col sm="6" v-scrollSlideLeft class="">
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
              v-for="personnel in general"
              v-bind:key="personnel.id.toString() + '1'"
            >
              <v-sheet>
                <v-container>
                  <v-row>
                    <v-col cols="auto" sm="6" align="right">
                      <v-hover v-slot="{ hover }">
                        <v-sheet
                          :elevation="hover ? 16 : 4"
                          width="175px"
                          v-scrollSlideLeft
                          :class="{ 'on-hover': hover }"
                        >
                          <photoZoom
                            :src="app.data.employee"
                            orientation="portrait"
                          ></photoZoom>
                        </v-sheet>
                      </v-hover>
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

            <v-sheet>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    v-for="personnel in managers"
                    v-bind:key="personnel.id.toString() + '2'"
                  >
                    <v-row>
                      <v-col cols="auto" sm="6" align="right">
                        <v-hover v-slot="{ hover }">
                          <v-sheet
                            :elevation="hover ? 16 : 4"
                            width="175px"
                            v-scrollSlideLeft
                            :class="{ 'on-hover': hover }"
                          >
                            <photoZoom
                              :src="app.data.employee"
                              orientation="portrait"
                            ></photoZoom>
                          </v-sheet>
                        </v-hover>
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
                              <v-icon>mdi-cellphone</v-icon
                              >{{ personnel.phone }}
                            </p>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </v-sheet>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import photoZoom from "../dialog/photoZoom";
export default {
  name: "Personnels",
  components: { photoZoom },

  created() {},
  data() {
    return {
      app: this.$store.state.app,
    };
  },

  computed: {
    owner() {
      const searchQuery = true;
      return this.app.personnels.filter((item) => {
        if (item.owner == searchQuery) return item;
      });
    },
    general() {
      const searchQuery = 1;
      return this.app.personnels.filter((item) => {
        if (item.level == searchQuery) return item;
      });
    },
    managers() {
      const searchQuery = 2;
      return this.app.personnels.filter((item) => {
        if (item.level == searchQuery) return item;
      });
    },
  },
};
</script>
