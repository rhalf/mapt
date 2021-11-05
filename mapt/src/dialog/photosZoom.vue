<template>
  <v-dialog
    v-model="open"
    max-width="1080px"
    transition="fade-transition"
    persistent
  >
    <template v-slot:activator="{ on, attrs }">
      <v-hover v-slot="{ hover }">
        <v-sheet :elevation="4" class="rounded-lg">
          <v-img
            v-bind="attrs"
            v-on="on"
            v-ripple
            :aspect-ratio="orientation == 'landscape' ? 16 / 9 : 9 / 16"
            :lazy-src="item.photos[0].src"
            :src="item.photos[0].src"
            class="rounded-lg"
            transition="fade-transition"
          >
            <v-expand-transition>
              <v-sheet
                v-if="hover"
                class="
                      d-flex
                      transition-fast-in-fast-out
                      primary
                      darken-1
                      v-card--reveal
                      text-h5 text-sm-h3
                      white--text
                      rounded-lg
                    "
                height="100%"
              >
                Click to open.
              </v-sheet>
            </v-expand-transition>
          </v-img>
        </v-sheet>
      </v-hover>
    </template>

    <v-card width="1080px">
      <v-toolbar color="primary" dark>
        <v-spacer></v-spacer>
        <v-btn color="white" outlined @click="open = false"
          ><v-icon>mdi-close</v-icon></v-btn
        >
      </v-toolbar>
      <v-container>
        <v-row no-gutters>
          <v-col>
            <v-img :src="photo.src" class="rounded"></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-row>
              <v-col
                v-for="(photo, index) in item.photos"
                :key="index"
                cols="auto"
              >
                <v-hover v-slot="{ hover }">
                  <v-sheet
                    :elevation="hover ? 16 : 4"
                    :class="{ 'on-hover': hover }"
                    @click="change(photo.src)"
                  >
                    <v-img
                      width="64px"
                      height="64px"
                      :src="photo.src"
                      :aspect-ratio="1"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="primary"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                      ></v-img
                    >
                  </v-sheet>
                </v-hover>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import notify from "../mixins/notify";

export default {
  props: { item: Object, orientation: String },
  components: {},
  mixins: [notify],
  created() {},
  computed: {},
  mounted() {
    if (this.item.photos.length > 0) this.photo.src = this.item.photos[0].src;
  },
  data() {
    return {
      open: false,
      hover: false,
      photo: {
        src: "",
      },
    };
  },
  methods: {
    change(src) {
      this.photo.src = src;
    },
    forgot: function() {},
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
