const state = {
  show: false,
};

const getters = {
  GET_CALLBACK_FORM: () => state.show,
};

const mutations = {
  SHOW_CALLBACK_FORM(state) {
    state.show = true;
  },
  HIDE_CALLBACK_FORM(state) {
    state.show = false;
  },
};

const actions = {
  SHOW_CALLBACK_FORM(context) {
    context.commit("SHOW_CALLBACK_FORM");
  },
  HIDE_CALLBACK_FORM(context) {
    context.commit("HIDE_CALLBACK_FORM");
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
