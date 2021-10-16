import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App)
.use(store)
.use(router)
.mount("#app");//Monter pr exporter avec Div app (SPA)
