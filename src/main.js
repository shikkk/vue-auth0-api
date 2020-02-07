import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import { Auth0Plugin } from "./auth";
import HighlightJs from "./directives/highlight";
import Axios from '@/utils/axios.js'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink, faUser, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import authConfig from './auth/auth0Config'
import hAuth from './auth/src/Auth'

Vue.use(hAuth, {configuration : authConfig});
Vue.use(Axios);
Vue.config.productionTip = false;

// Vue.use(Auth0Plugin, {
//   domain,
//   clientId,
//   onRedirectCallback: appState => {
//     router.push(
//       appState && appState.targetUrl
//         ? appState.targetUrl
//         : window.location.pathname
//     );
//   }
// });

Vue.directive("highlightjs", HighlightJs);

library.add(faLink, faUser, faPowerOff);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>',

})