<template>
  <v-dialog v-model="open" max-width="1024px" transition="fade-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-img
        v-bind="attrs"
        v-on="on"
        v-ripple
        v-if="orientation == 'portrait'"
        :aspect-ratio="3 / 4"
        :lazy-src="src"
        :src="src"
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
      </v-img>
      <v-img
        v-bind="attrs"
        v-on="on"
        v-ripple
        v-if="orientation == 'landscape'"
        :aspect-ratio="4 / 3"
        :lazy-src="src"
        :src="src"
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
      </v-img>
    </template>

     <v-card width="1080px">
      <v-img :src="src"></v-img>
    </v-card>
  </v-dialog>
</template>

<script>
import notify from "../mixins/notify";

export default {
  props: { src: String, orientation: String },
  components: {},
  mixins: [notify],
  created() {},
  computed: {},
  mounted() {},
  data() {
    return {
      open: false,
    };
  },
  methods: {
    submit() {},
    forgot: function() {},
  },
};
</script>
