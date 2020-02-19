import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import { SESSION_REQUEST } from "@/store/actions/session";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    meta: { guest: true },
    component: () => import("../views/Login.vue")
  },
  {
    path: "/",
    name: "Main",
    meta: { guest: false },
    component: () => import("../views/Main.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.guest)) {
    if (!store.getters.IS_AUTHENTICATED) {
      next();
      return;
    } else {
      if (store.getters.IS_SESSION_READY) {
        next({
          name: "Main"
        });
      } else {
        store.dispatch(SESSION_REQUEST).then(() => {
          next({
            name: "Main"
          });
        });
      }
    }
  } else if (to.matched.some(record => record.meta.guest === false)) {
    if (store.getters.IS_AUTHENTICATED) {
      if (store.getters.IS_SESSION_READY) {
        next();
        return;
      } else {
        store.dispatch(SESSION_REQUEST).then(() => {
          next();
          return;
        });
      }
    } else {
      next({
        name: "Login",
        params: { nextUrl: to.fullPath }
      });
    }
  } else {
    next();
    return;
  }
  // if (!store.getters.isAuthenticated) next("/login");
  // else next();
});

export default router;
