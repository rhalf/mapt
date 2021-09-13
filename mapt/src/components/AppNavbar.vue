<template>
  <v-app-bar
    absolute
    dark
    class="primary"
    shrink-on-scroll
    prominent
    src="../assets/construction/blur/2.jpg"
    fade-img-on-scroll
    scroll-target="#scrolling-techniques-5"
    scroll-threshold="500"
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(230,0,0,.7), rgba(230,0,0,.7)"
      ></v-img>
    </template>

    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-app-bar-title  >{{ app.profile.name }}</v-app-bar-title>

    <v-spacer></v-spacer>
    <!-- <v-app-bar-nav-icon
      @click="toggleDrawer"
      v-show="user.state"
    ></v-app-bar-nav-icon> -->
    <!-- <v-btn icon @click="gotoHome()">
      <v-img max-width="32" max-height="32" :src="app.profile.logo"></v-img>
    </v-btn> -->
    <!-- <v-btn dark text class="hidden-sm-and-down" @click="gotoHome()"
      >Services</v-btn
    > -->

    <template v-slot:extension>
      <v-tabs align-with-title>
        <v-tab router-link :to="{ name: 'Home', hash: '#app' }">Home</v-tab>
        <v-tab router-link :to="{ name: 'Services', hash: '#app' }"
          >Services</v-tab
        >
        <v-tab router-link :to="{ name: 'Clients', hash: '#app' }"
          >Clients</v-tab
        >
        <v-tab router-link :to="{ name: 'Projects', hash: '#app' }"
          >Projects</v-tab
        >
        <v-tab router-link :to="{ name: 'Mining', hash: '#app' }">Mining</v-tab>
        <v-tab router-link :to="{ name: 'Personnels', hash: '#app' }"
          >Personnels</v-tab
        >
        <v-tab router-link :to="{ name: 'Vehicles', hash: '#app' }"
          >Vehicles</v-tab
        >
        <v-tab router-link :to="{ name: 'Documents', hash: '#app' }">Documents</v-tab>
        <v-tab router-link :to="{ name: 'About', hash: '#app' }">About</v-tab>
        <v-tab router-link :to="{ name: 'Contact', hash: '#app' }"
          >Contact</v-tab
        >
      </v-tabs>
    </template>

    <v-btn icon @click="gotoHome()">
      <v-icon>mdi-home</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import notify from "../mixins/notify";
export default {
  components: {},
  mixins: [notify],
  created() {},
  mounted() {},
  data() {
    return {
      app: this.$store.state.app,
      user: this.$store.state.user,
    };
  },
  methods: {
    gotoHome() {
      // console.log(this.$store.state.search);
      this.$router.push({ name: "Home", hash: "#app" }).catch(() => {});
    },
    toggleDrawer() {
      //this.$store.dispatch("setDrawerLeft", !this.$store.state.drawer.left);
      // console.log( this.$store.state.drawer.left);
    },
  },
  computed: {},
};
</script>
