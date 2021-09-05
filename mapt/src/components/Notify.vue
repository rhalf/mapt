<template>
  <v-snackbar v-model="$store.state.notify.visible" :color="$store.state.notify.status"
    >{{ $store.state.notify.message }}
    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="close">Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    close() {
      this.$store.dispatch("notifyClose");
    },
  }
};
</script>