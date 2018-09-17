import Vue from "vue";
import Router from "vue-router";
import InfoIndex from "./components/info/InfoIndex.vue";
import GameIndex from "./components/game/GameIndex.vue";
import Home from "./components/Home.vue";

Vue.use(Router);

export default new Router({
   // mode: "history",
   base: process.env.BASE_URL,
   routes: [
      {
         path: "/",
         name: "home",
         component: Home
      },
      {
         path: "/learn",
         name: "learn",
         component: InfoIndex
      },
      {
         path: "/play",
         name: "play",
         component: GameIndex
      }
   ],
   scrollBehavior() {
      return { x: 0, y: 0 };
   }
});
