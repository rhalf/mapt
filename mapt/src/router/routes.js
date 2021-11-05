const routes = [
  {
    path: "/",
    redirect: "/Home",
  },
  {
    path: "/Home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/Services",
    name: "Services",
    component: () => import("../views/Services.vue"),
  },
  {
    path: "/Clients",
    name: "Clients",
    component: () => import("../views/Clients.vue"),
  },
  {
    path: "/Projects",
    name: "Projects",
    component: () => import("../views/Projects.vue"),
  },
  {
    path: "/Project/:id",
    name: "Project",
    component: () => import("../views/Project.vue"),
  },
  {
    path: "/Mining",
    name: "Mining",
    component: () => import("../views/Mining.vue"),
  },

  {
    path: "/Personnels",
    name: "Personnels",
    component: () => import("../views/Personnels.vue"),
  },
  {
    path: "/Vehicles",
    name: "Vehicles",
    component: () => import("../views/Vehicles.vue"),
  },
  {
    path: "/About",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/Documents",
    name: "Documents",
    component: () => import("../views/Documents.vue"),
  },
  {
    path: "/Contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

export default routes;
