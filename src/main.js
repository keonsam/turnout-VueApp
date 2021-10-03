import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { firebaseApp } from "./firebaseApp";
import { getAuth, onAuthStateChanged } from "firebase/auth";

Vue.config.productionTip = false;

const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch("signIn", user);
    router.push("/dashboard");
  } else {
    router.replace("/signin");
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
