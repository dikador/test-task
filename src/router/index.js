import { createRouter, createWebHistory } from "vue-router";
import Forms from "../views/Forms.vue";
import Preview from "../views/Preview.vue";

const routes = [
   {
      path: "/",
      name: "Forms",
      component: Forms,
   },
   {
      path: "/preview",
      name: "Preview",
      component: Preview,
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
