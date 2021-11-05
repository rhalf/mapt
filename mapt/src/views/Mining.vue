<template>
  <v-sheet max-width="1080" class="mx-auto mt-4">
    <v-container
      v-for="mine in app.mining"
      v-bind:key="mine.id.toString()"
      class="pb-16"
    >
      <v-row>
        <v-col cols="12">
          <!-- <v-row v-if="index % 2 == 0">
            <v-col sm="1" class="hidden-xs-only"
              ><v-sheet
                width="5px"
                height="100%"
                class="primary mr-auto"
                outlined
              ></v-sheet
            ></v-col>
            <v-col cols="12" sm="5">
              <h2 class="primary--text text-left">
                {{ mine.name }}
              </h2>
              <p class="primary--text text-left">
                {{ mine.address }} ({{ mine.type }})
              </p>
              <p class="text-left">
                {{ mine.desc }}
              </p>
            </v-col>
            <v-col cols="12" sm="6">
              <v-carousel
                v-if="mine.photos.length > 0"
                cycle
                show-arrows-on-hover
                max-width="1024"
                height="300"
                hide-delimiter-background
                hide-delimiter
                color="primary"
                class="rounded-lg"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
                <v-carousel-item
                  v-for="(item, i) in mine.photos"
                  :key="i"
                  :src="item.src"
                  reverse-transition="slide-x-transition"
                  transition="slide-x-transition"
                ></v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row> -->
          <v-row>
            <v-col cols="12" sm="6">
              <photosZoom
                :item="mine"
                orientation="landscape"
                v-if="mine.photos.length"
              >
              </photosZoom>

              <!-- <v-carousel
                v-if="mine.photos.length > 0"
                v-scrollSlideRight
                cycle
                show-arrows-on-hover
                max-width="1024"
                height="300"
                hide-delimiter-background
                :interval="getRandom(3, 5) * 1000"
                color="primary"
                class="rounded-lg"
              >
                <v-carousel-item
                  v-for="(item, i) in mine.photos"
                  :key="i"
                  :src="item.src"
                  reverse-transition="slide-x-transition"
                  transition="slide-x-transition"
                ></v-carousel-item>
              </v-carousel> -->
            </v-col>
            <v-col cols="12" sm="5">
              <h2 class="primary--text ">
                {{ mine.name }}
              </h2>
              <p class="primary--text  ">
                {{ mine.address }} ({{ mine.type }})
              </p>
              <p class="">
                {{ mine.desc }}
              </p>
            </v-col>
            <!-- <v-col sm="1" class="hidden-xs-only">
              <v-sheet
                width="5px"
                height="100%"
                class="primary ml-auto"
                outlined
              ></v-sheet>
            </v-col> -->
          </v-row>
          <v-row>
            <v-col>
              <v-divider class="hidden-sm-and-up"></v-divider>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import photosZoom from "../dialog/photosZoom.vue";

export default {
  name: "Mining",
  components: { photosZoom },
  async mounted() {
    this.app = await this.$store.state.app;
  },
  data() {
    return {
      app: {},
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
