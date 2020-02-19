import {
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_LOGOUT
} from "../actions/login";
import { SESSION_REQUEST } from "../actions/session";
import { SESSION_LOGOUT } from "../actions/session";
// import notify from "@/utils/Notification";
// import i18n from "@/i18n";
import API from "@/utils/api";

const state = {
  Status: "",
  Token: localStorage.getItem("AuthToken") || ""
  // user: window.$cookies.get("user") || ""
};

const getters = {
  IS_AUTHENTICATED: state => !!state.Token
  // authStatus: state => state.status
};

const actions = {
  [LOGIN_REQUEST]: ({ commit, dispatch }, user) => {
    return new Promise((resolve, reject) => {
      commit(LOGIN_REQUEST);
      API({
        url: "auth",
        data: user,
        method: "POST"
      })
        .then(response => {
          if (response && response.AuthToken) {
            console.log("asd");
            localStorage.setItem("AuthToken", response.AuthToken);
            dispatch(SESSION_REQUEST)
              .then(() => {
                resolve(response);
                commit(LOGIN_SUCCESS, response);
              })
              .catch(error => {
                reject(error);
                commit(LOGIN_ERROR, error);
              });
          } //else notify("is-danger", i18n.t("Message.Backend.NoData"));
        })
        .catch(error => {
          reject(error);

          commit(LOGIN_ERROR, error);
          //window.$cookies.remove("AuthToken");
          //delete HTTP.defaults.headers.common["Authorization"];
        });
    });
  },
  [LOGIN_LOGOUT]: ({ commit }) => {
    return new Promise(() => {
      commit(LOGIN_LOGOUT);
      commit(SESSION_LOGOUT);
      //window.$cookies.remove("AuthToken");
      //window.$cookies.remove("firstLoad");
      //document.cookie = `AuthToken="";domain=.bitcoinalley.com;max-age=0`;
    });
  }
  // [LOGIN_TOKEN_ERR]: ({ commit }) => {
  //   return new Promise(() => {
  //     commit(LOGIN_TOKEN_ERR);
  //     commit(SESSION_LOGOUT);
  //     window.$cookies.remove("AuthToken");
  //     window.$cookies.remove("firstLoad");
  //     document.cookie = `AuthToken="";domain=.bitcoinalley.com;max-age=0`;
  //   });
  // }
  //   [SSO_SET_LOGIN_INCOMING]: ({ commit }, payload) => {
  //     return new Promise((resolve, reject) => {
  //       if (payload && payload.startsWith("Bearer ")) {
  //         resolve(payload);
  //         commit(LOGIN_SET_TOKEN, payload);
  //       } else {
  //         reject(payload);
  //         commit(LOGIN_ERROR);
  //       }
  //     });
  //   }
};

const mutations = {
  [LOGIN_REQUEST]: state => {
    state.Status = "loading";
  },
  [LOGIN_SUCCESS]: (state, payload) => {
    state.Status = "success";
    state.Token = payload.AuthToken;
  },
  SETUSER: (state, payload) => {
    state.user = payload;
  },
  [LOGIN_ERROR]: state => {
    state.Status = "error";
    state.Token = "";
    localStorage.removeItem("AuthToken");
    // if (
    //   payload &&
    //   payload.response &&
    //   payload.response.data &&
    //   payload.response.data.error
    // )
    //   notify("is-danger", payload.response.data.error);
    // else notify("is-danger", i18n.t("Message.Backend.Default"));
  },
  [LOGIN_LOGOUT]: state => {
    state.Status = "";
    state.Token = "";
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
