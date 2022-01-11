import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/scss/main.scss";
import "@/assets/scss/norm.scss";

import * as moment from "moment";
import "moment/locale/ru";
createApp.prototype.$moment = moment;

createApp.config.productinTip = false;

createApp(App)
    .use(store)
    .use(router)
    .mount("#app");
