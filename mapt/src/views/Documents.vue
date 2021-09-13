<template>
  <v-sheet max-width="1080" class="mx-auto mt-4">
    <v-container
      v-for="(doc, index) in app.documents"
      v-bind:key="doc.id.toString() + index"
      class="pb-16"
    >
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col cols="12" sm="5">
              <v-row>
                <v-col>
                  <h2 v-scrollSlideRight class="primary--text text-left">
                    {{ doc.name }}
                  </h2>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="2">
                  <p v-scrollSlideRight class="primary--text text-left">
                    Address:
                  </p>
                </v-col>
                <v-col>
                  <p v-scrollSlideRight class="text-left">
                    {{ doc.address }}
                  </p>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="2">
                  <p v-scrollSlideRight class="primary--text text-left">
                    Type:
                  </p>
                </v-col>
                <v-col>
                  <p v-scrollSlideRight class="text-left">
                    {{ doc.type }}
                  </p></v-col
                >
              </v-row>
              <v-row no-gutters>
                <v-col cols="2">
                  <p v-scrollSlideRight class="primary--text text-left">
                    Desc:
                  </p>
                </v-col>
                <v-col>
                  <p v-scrollSlideRight class="text-left">
                    {{ doc.desc }}
                  </p></v-col
                >
              </v-row>

              <v-row no-gutters>
                <v-col cols="2">
                  <p v-scrollSlideRight class="primary--text text-left">
                    Issuer:
                  </p>
                </v-col>
                <v-col>
                  <p v-scrollSlideRight class="text-left">
                    {{ doc.issuer }}
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" sm="6">
              <v-row>
                <v-col v-for="(item, i) in doc.photos" :key="i">
                  <v-hover v-slot="{ hover }">
                    <v-sheet
                      :elevation="hover ? 16 : 4"
                      width="200px"
                      v-scrollSlideLeft
                      :class="{ 'on-hover': hover }"
                    >
                      <photoZoom
                        :src="item.src"
                        :orientation="doc.orientation"
                      ></photoZoom>
                    </v-sheet>
                  </v-hover>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <!-- <v-row>
            <v-col>
              <v-divider class="hidden-sm-and-up"></v-divider>
            </v-col>
          </v-row> -->
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import photoZoom from "../dialog/photoZoom";
export default {
  name: "Documents",
  components: { photoZoom },
  data() {
    return {
      app: this.$store.state.app,
    };
  },
  methods: {
    getRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    },
  },
};
</script>
