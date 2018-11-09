import Vue from 'vue';
import Vuex from 'vuex';

import posts from './modules/posts';

Vue.use(Vuex);
//He hecho un intento de encapsularlo en un modulo pero no he conseguido que me funcione
export default new Vuex.Store({
  modules: {
    posts
  }
});
