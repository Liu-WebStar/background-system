import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import permission from "./permission.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.config.productionTip = process.env.NODE_ENV==='production';
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
