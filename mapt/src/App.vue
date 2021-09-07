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
          <v-sheet height="200" width="auto"></v-sheet>

          <Transition name="fade-transition" mode="out-in">
            <router-view></router-view>
          </Transition>
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
  transform: translateX(-100px);
  transition: all 0.5s ease-out;
}
.scroll-slide-right-after {
  opacity: 1;
  transform: translateX(0px);
}
/* slide-left */
.scroll-slide-left-before {
  opacity: 0;
  transform: translateX(100px);
  transition: all 0.5s ease-out;
}
.scroll-slide-left-after {
  opacity: 1;
  transform: translateX(0px);
}
/* slide-up */
.scroll-slide-up-before {
  opacity: 0;
  transform: translateY(100px);
  transition: all 0.5s ease-out;
}
.scroll-slide-up-after {
  opacity: 1;
  transform: translateY(0px);
}
/* slide-down */
.scroll-slide-down-before {
  opacity: 0;
  transform: translateY(-100px);
  transition: all 0.5s ease-out;
}
.scroll-slide-down-after {
  opacity: 1;
  transform: translateY(0px);
}
/* fade-in */
.scroll-fade-in-before {
  opacity: 0;
  transition: all 0.5s ease-out;
}

.scroll-fade-in-after {
  opacity: 1;
}
</style>
