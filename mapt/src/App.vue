<template>
  <v-app>
    <Base>
      <template slot="navbar">
        <Navbar />
      </template>
      <template slot="leftDrawer">
        <LeftDrawer />
      </template>

      <template slot="main">
        <v-main style="background-color: #c0c0c0">
          <v-sheet
            id="scrolling-techniques-5"
            class="overflow-y-auto overflow-x-hidden"
            height="100vh"
            min-height="100vh"
          >
            <v-slide-x-reverse-transition mode="out-in">
              <router-view></router-view>
            </v-slide-x-reverse-transition>
            <Footer />
          </v-sheet>
        </v-main>
        <Notify />
      </template>
    </Base>
  </v-app>
</template>

<script>
import Base from "./layouts/Base";
import Navbar from "./layouts/Navbar";
import LeftDrawer from "./layouts/LeftDrawer";
import Footer from "./layouts/Footer";

import Notify from "./components/Notify";
import notify from "./mixins/notify";

import app from "./mixins/app";

export default {
  mixins: [notify, app],
  components: {
    Base,
    Navbar,
    LeftDrawer,
    Footer,
    Notify,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
::-webkit-scrollbar {
  width: 0;
}

html {
  overflow: hidden;
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
