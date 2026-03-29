import { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import RegisterTeam from "@/views/RegisterTeam.vue";
import Scoreboard from "@/views/Scoreboard.vue";

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { bodyClass: "home-page" },
  },
  {
    path: "/register-team",
    name: "Register Team",
    component: RegisterTeam,
    meta: { bodyClass: "register-team" },
  },
  {
    path: "/scoreboard",
    name: "Scoreboard",
    component: Scoreboard,
    meta: { bodyClass: "scoreboard" },
  },
];

export default routes;
