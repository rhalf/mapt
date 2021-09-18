<template>
  <v-dialog v-model="open" max-width="400px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon :on="on" :attrs="attrs" @click="open = true" >
        <v-icon>mdi-qrcode-scan</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-img :src="require('../assets/qrcode/qrcode.png')" max-width="400px" aspect-ratio="1"></v-img>
    </v-card>
  </v-dialog>
</template>

<script>
import notify from "../mixins/notify";

export default {
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
