import Vue from "vue";
import Router from "vue-router";
import InfoIndex from "./components/info/InfoIndex.vue";
import GameIndex from "./components/game/GameIndex.vue";

Vue.use(Router);

export default new Router({
   mode: "history",
   base: process.env.BASE_URL,
   routes: [
      {
         path: "/",
         name: "info",
         component: InfoIndex
      },
      {
         path: "/play",
         name: "play",
         component: GameIndex
      }
   ]
});
