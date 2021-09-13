<template>
  <v-dialog v-model="open" max-width="1024px">
    <template v-slot:activator="{ on, attrs }">
      <v-img
        v-bind="attrs"
        v-on="on"
        v-ripple
        v-if="orientation == 'portrait'"
        :aspect-ratio="3 / 4"
        :lazy-src="src"
        :src="src"
      ></v-img>
      <v-img
        v-bind="attrs"
        v-on="on"
        v-ripple
        v-if="orientation == 'landscape'"
        :aspect-ratio="4 / 3"
        :lazy-src="src"
        :src="src"
      ></v-img>
    </template>

    <v-card>
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
