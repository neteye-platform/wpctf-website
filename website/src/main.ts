import Vue from "vue";
import App from "./App.vue";
import router from "./router";

/* eslint-disable */
import shell from "vue-shell";
Vue.use(shell);

import VueCookies from "vue-cookies"
Vue.use(VueCookies)

import LoadScript from 'vue-plugin-load-script';
import {TrackingService} from "@/core/Services/TrackingService/TrackingService";
// @ts-ignore
Vue.use(LoadScript);

router.beforeEach((to, from, next) => {
  document.body.classList.remove(from.meta?.bodyClass)
  document.body.classList.add(to.meta?.bodyClass)
  next();
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

TrackingService.init(router);
TrackingService.trackPage();
