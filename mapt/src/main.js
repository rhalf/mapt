import Vue from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify';
import filter from './plugins/filter';
import directive from './plugins/directive';

import router from './router'
import store from './store'

import scrollSlideUp from './directives/scrollSlideUp'
import scrollSlideDown from './directives/scrollSlideDown'
import scrollSlideRight from './directives/scrollSlideRight'
import scrollSlideLeft from './directives/scrollSlideLeft'
import scrollFadeIn from './directives/scrollFadeIn'

Vue.directive('scrollFadeIn', scrollFadeIn);
Vue.directive('scrollSlideUp', scrollSlideUp);
Vue.directive('scrollSlideDown', scrollSlideDown);
Vue.directive('scrollSlideRight', scrollSlideRight);
Vue.directive('scrollSlideLeft', scrollSlideLeft);

//##################################################leaflet
// import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
// import 'leaflet/dist/leaflet.css';

// Vue.component('l-map', LMap);
// Vue.component('l-tile-layer', LTileLayer);
// Vue.component('l-marker', LMarker);
//##################################################leaflet



//######################################################gooogle
// import * as VueGoogleMaps from 'vue2-google-maps'
// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyD1jJltPLLbkIj0EPi6jShHvw54-mwayx8',
//     libraries: 'places',
//   },
//   autobindAllEvents: true,
//   installComponents: true,
// })
//######################################################gooogle
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  filter,
  directive,
  store,
  render: h => h(App)
}).$mount('#app')

