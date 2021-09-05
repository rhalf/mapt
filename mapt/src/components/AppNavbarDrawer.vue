<template>
  <v-container>
    
  </v-container>
</template>
<script>
import notify from "@/mixins/notify";
// import menu from "@/mixins/menu";


export default {
  mixins: [notify],
  created() {},
  mounted() {},
  data() {
    return {
      user: this.$store.state.user,
      drawer: this.$store.state.drawer,
    };
  },
  computed: {},
  methods: {},
};
</script>