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

    <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>

    <v-app-bar-title>{{ app.profile.name }}</v-app-bar-title>

    <v-spacer></v-spacer>

    <!-- <v-btn icon @click="gotoHome()">
      <v-img max-width="32" max-height="32" :src="app.profile.logo"></v-img>
    </v-btn> -->
    <!-- <v-btn dark text class="hidden-sm-and-down" @click="gotoHome()"
      >Services</v-btn
    > -->

    <template v-slot:extension>
      <v-tabs align-with-title center-active>
        <v-tab
          router
          v-for="(menu, index) in ui.menu"
          :key="index"
          :to="{ path: menu.path, hash: menu.hash }"
          >{{ menu.text }}</v-tab
        >
      </v-tabs>
    </template>

    <!-- <v-btn icon @click="gotoHome()">
      <v-icon>mdi-home</v-icon>
    </v-btn> -->

    <qrCode></qrCode>
  </v-app-bar>
</template>

<script>
import notify from "../mixins/notify";
import menu from "../mixins/menu";
import qrCode from "../dialog/qrCode";
export default {
  components: { qrCode },
  mixins: [notify, menu],
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
      this.$store.dispatch("setDrawerLeft", !this.$store.state.drawer.left);
      console.log(this.$store.state.drawer.left);
    },
  },
  computed: {},
};
</script>
