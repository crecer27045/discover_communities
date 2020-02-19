import API from "@/utils/api";
import {
  SESSION_REQUEST,
  SESSION_ERROR,
  SESSION_SUCCESS,
  SESSION_LOGOUT
} from "../actions/session";
// import notify from "@/utils/Notification"
// import { LOGIN_TOKEN_ERR } from "../actions/login";
// import i18n from "@/i18n"

const state = {
  Status: "",
  Id: null,
  Name: null,
  Email: null
};

const getters = {
  IS_SESSION_READY: state => !!state.Id && !!state.Email && !!state.Name
};

const actions = {
  [SESSION_REQUEST]: ({ commit }) => {
    return new Promise((resolve, reject) => {
      commit(SESSION_REQUEST);
      API({
        url: "profile",
        method: "GET"
      })
        .then(response => {
          resolve(response);
          if (response && response.Email) {
            commit(SESSION_SUCCESS, response);
          } //else notify("is-danger", i18n.t("Message.Backend.NoData"));
        })
        .catch(error => {
          reject(error);
          commit(SESSION_ERROR, error);
          // alert("login error 2")
          //   dispatch(LOGIN_TOKEN_ERR);
        });
    });
  }
};

const mutations = {
  [SESSION_REQUEST]: state => {
    state.Status = "loading";
  },
  [SESSION_SUCCESS]: (state, payload) => {
    state.Status = "success";
    state.Id = payload.Id;
    state.Name = payload.Name;
    state.Email = payload.Email;
  },
  [SESSION_ERROR]: state => {
    state.Status = "error";
    // if (
    //   payload &&
    //   payload.response &&
    //   payload.response.data &&
    //   payload.response.data.error
    // )
    //   notify("is-danger", payload.response.data.error);
    // else notify("is-danger", i18n.t("Message.Backend.Default"));
  },
  [SESSION_LOGOUT]: state => {
    state.Status = "";
    state.Id = null;
    state.Name = null;
    state.Email = null;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
