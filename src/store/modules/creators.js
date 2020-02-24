import {
  CREATORS_REQUEST,
  CREATORS_ERROR,
  CREATORS_SUCCESS
} from "../actions/creators";

import API from "@/utils/api";

const state = {
  Status: "",
  Creators: ""
};

const getters = {
  IS_CREATORS_LOADED: state => !!state.Creators
};

const actions = {
  [CREATORS_REQUEST]: ({ commit }) => {
    return new Promise((resolve, reject) => {
      commit(CREATORS_REQUEST);
      API({
        url: "creators",
        method: "GET"
      })
        .then(response => {
          resolve(response);
          if (response) {
            commit(CREATORS_SUCCESS, response);
          } //else notify("is-danger", i18n.t("Message.Backend.NoData"));
        })
        .catch(error => {
          reject(error);

          commit(CREATORS_ERROR, error);
        });
    });
  }
};

const mutations = {
  [CREATORS_REQUEST]: state => {
    state.Status = "loading";
  },
  [CREATORS_SUCCESS]: (state, payload) => {
    state.Status = "success";
    state.Creators = payload;
  },
  [CREATORS_ERROR]: state => {
    state.Status = "error";
    state.Creators = "";
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
