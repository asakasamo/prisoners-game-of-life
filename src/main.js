import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import PayoffMatrix from "./components/info/PayoffMatrix.vue";
import StrategyTable from "./components/info/StrategyTable.vue";
import SiteHeader from "./components/SiteHeader.vue";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.component("payoff-matrix", PayoffMatrix);
Vue.component("strategy-table", StrategyTable);
Vue.component("site-header", SiteHeader);

new Vue({
   router,
   store,
   render: (h) => h(App)
}).$mount("#app");
