import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

// const scrollBehavior = (to, from, savedPosition) => {
//   console.log(to);
//   console.log(from);
//   console.log(savedPosition);
//   return { x: 0, y: 0 };
// };

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  next();
  // window.scrollTo(0,0)
  //   auth.onAuthStateChanged((user) => {
  //     let authenticated = to.matched.some(record => record.meta.authenticated)
  //     if (user && authenticated) next()
  //     else if (user && !authenticated) next("/Home")
  //     else if (!user && authenticated) next("/")
  //     else if (!user && !authenticated) next()
  //   });
});

export default router;
