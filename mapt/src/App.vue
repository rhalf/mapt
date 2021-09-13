<template>
  <v-app>
    <AppNavbar></AppNavbar>
    <v-main style="background-color: #e0e0e0">
      <v-sheet
        id="scrolling-techniques-5"
        class="overflow-y-auto overflow-x-hidden"
        style="height: 100vh"
      >
        <v-container>
          <v-sheet height="200" width="auto"> </v-sheet>
          <v-fade-transition>
            <router-view></router-view>
          </v-fade-transition>
        </v-container>
        <AppFooter />
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
  methods: {},
};
</script>

<style>
html {
  overflow-y: auto;
}
/* slide-right */
.scroll-slide-right-before {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 500ms ease-out;
}
.scroll-slide-right-after {
  opacity: 1;
  transform: translateX(0px);

  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
}
/* slide-left */
.scroll-slide-left-before {
  opacity: 0;
  transform: translateX(50px);
  transition: all 500ms ease-out;
}
.scroll-slide-left-after {
  opacity: 1;
  transform: translateX(0px);

  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
}
/* slide-up */
.scroll-slide-up-before {
  opacity: 0;
  transform: translateY(50px);
  transition: all 500ms ease-out;
}
.scroll-slide-up-after {
  opacity: 1;
  transform: translateY(0px);

  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
}
/* slide-down */
.scroll-slide-down-before {
  opacity: 0;
  transform: translateY(-50px);
  transition: all 500ms ease-out;
}
.scroll-slide-down-after {
  opacity: 1;
  transform: translateY(0px);

  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
}
/* fade-in */
.scroll-fade-in-before {
  opacity: 0;
  transition: all 500ms ease-out;
}

.scroll-fade-in-after {
  opacity: 1;
}
</style>
