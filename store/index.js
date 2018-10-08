import Vuex from "vuex";

import callback from "./modules/callback"; 
import categories from "./modules/categories"
import settings from "./modules/settings"

const createStore = () => {
  return new Vuex.Store({
    modules: {
      callback,
      categories,
      settings
    }
  });
};

export default createStore
