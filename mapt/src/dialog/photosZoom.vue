<template>
  <v-dialog v-model="open" max-width="1080px" transition="fade-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-hover v-slot="{ hover }">
        <v-sheet
          :elevation="4"
          class="rounded-lg"
        >
          <v-img
            v-bind="attrs"
            v-on="on"
            v-ripple
            :aspect-ratio="orientation == 'landscape' ? 16 / 9 : 9 / 16"
            :lazy-src="item.photos[0].src"
            :src="item.photos[0].src"
            class="rounded-lg"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="
                      d-flex
                      transition-fast-in-fast-out
                      primary
                      lighten-1
                      v-card--reveal
                      text-h5 text-sm-h3
                      white--text
                      rounded-lg
                    "
                style="height: 100%"
              >
                Click to open.
              </div>
            </v-expand-transition>
          </v-img>
        </v-sheet>
      </v-hover>
    </template>

    <v-card width="1080px">
      <v-container>
        <v-row>
          <v-col>
            <v-img :src="photo.src" class="rounded-lg"></v-img>
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
                    ></v-img>
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
