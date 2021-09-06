<template>
  <v-app>
    <AppNavbar></AppNavbar>
    <v-main style="background-color: #e0e0e0" class="pa-0 ma-0">
      
      <v-sheet
        id="scrolling-techniques-5"
        class="overflow-y-auto "
        max-height="100vh"
      >
        <v-container>
          <v-sheet height="200"></v-sheet>
          <router-view></router-view>
        </v-container>
          <AppFooter/>
      </v-sheet>
    </v-main>
    <Notify />
  </v-app>
</template>


<script>
import AppNavbar from "./components/AppNavbar";
import AppFooter from "./components/AppFooter";

import Notify from "./components/Notify";
import notify from "./mixins/notify";

import app from "./mixins/app";

export default {
  mixins: [notify, app],
  components: {
    AppNavbar,
    AppFooter,
    Notify,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style>
html {
  overflow-y: auto;
}

.scroll-slide-right-after {
  opacity: 0;
  transform: translateX(100px);
  transition: all 2s ease-out;
}

.scroll-slide-right-before {
  opacity: 1;
  transform: translateX(0px);
}

.scroll-slide-up-after {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}

.scroll-slide-up-before {
  opacity: 1;
  transform: translateY(0px);
}

.scroll-fade-in-before {
  opacity: 0;
  transition: all 2s ease-out;
}

.scroll-fade-in-after {
  opacity: 1;
}
</style>
