<template>
  <div id="login" class>
    <div class="login__wrap">
      <div class="login__title">Log In</div>

      <form class="login__form-wrap">
        <div class="login__form-input-wrap">
          <input v-model="Email" type="email" placeholder="Email" />
          <!-- <span class="placehold">Email</span> -->
        </div>
        <div class="login__form-input-wrap">
          <input v-model="Password" type="password" placeholder="Password" />
          <!-- <span class="placehold">Password</span> -->
        </div>
      </form>

      <div class="login__forgot-wrap">
        <span class="text">Forgot your password?</span>
        <a href="#" class="link">Reset by email</a>
      </div>

      <button class="login__form-submit" @click="LogIn">Log in</button>

      <div class="login__soc_login">
        <div class="text">Or Log In with</div>
        <div class="buttons-wrap">
          <a href="#" class="link facebook">
            <svg
              width="11"
              height="20"
              viewBox="0 0 11 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 0V4H8.5C7.81 4 7.5 4.81 7.5 5.5V8H10.5V12H7.5V20H3.5V12H0.5V8H3.5V4C3.5 2.93913 3.92143 1.92172 4.67157 1.17157C5.42172 0.421427 6.43914 0 7.5 0H10.5Z"
              />
            </svg>
            <span>Facebook</span>
          </a>
          <a href="#" class="link google">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.5 11V9H20.5V10C20.5 15.5228 16.0228 20 10.5 20C4.97715 20 0.5 15.5228 0.5 10C0.5 4.47715 4.97715 0 10.5 0C13.5799 0 16.4313 1.4025 18.3167 3.76259L16.7542 5.01093C15.2443 3.12095 12.9653 2 10.5 2C6.08172 2 2.5 5.58172 2.5 10C2.5 14.4183 6.08172 18 10.5 18C14.5796 18 17.946 14.9463 18.4381 11H11.5Z"
              />
            </svg>
            <span>Google</span>
          </a>
        </div>
      </div>

      <div class="login__create-wrap">
        <span class="text">Don’t have an account yet?</span>
        <a href="#" class="link">Sign Up</a>
      </div>
      <!-- <login /> -->
    </div>
  </div>
</template>

<script>
// import Login from "@/components/Login";

import { LOGIN_REQUEST } from "../store/actions/login";

export default {
  name: "LoginPage",
  components: {
    // login: Login
  },
  data() {
    return {
      Email: null,
      Password: null
    };
  },
  // watch: {
  //   Email: function(val) {
  //     this.EmailActive = val.length != 0 ? true : false;
  //   },
  //   Password: function(val) {
  //     this.PassActive = val.length != 0 ? true : false;
  //   }
  // },
  mounted() {},
  methods: {
    LogIn() {
      // this.$router.push("/");
      const { Email, Password } = this;
      this.$store.dispatch(LOGIN_REQUEST, { Email, Password }).then(() => {
        this.$router.push("/");
      });
    }
  }
  // metaInfo() {
  //   return {
  //     title: "Login",
  //   };
  // }
};
</script>
<style lang="scss">
.login__wrap {
  display: flex;
  max-width: 392px;
  margin: auto;
  text-align: center;
  flex-direction: column;
  padding: 0 20px;
}
.login__title {
  font-size: 30px;
  margin-bottom: 40px;
}
.login__form-input-wrap {
  position: relative;
  margin-bottom: 20px;
  input {
    padding: 23px 16px;
    font-size: 18px;
    width: 100%;
    box-shadow: 0px 3px 10px rgba(88, 19, 27, 0.1);
    border-radius: var(--border-radius);
    transition: 0.3s;
    &:hover {
      box-shadow: 0px 3px 13px rgba(88, 19, 27, 0.2);
    }
  }
  // input:focus + .placehold,
  // input:valid + .placehold,
  // input:not(:valid) + .placehold {
  //   font-size: 12px;
  //   transform: translateY(-170%);
  // }
  // input:valid + .placehold {
  //   font-size: 12px;
  //   transform: translateY(-170%);
  // }
  // input:not(:valid) + .placehold {
  //   font-size: 12px;
  //   transform: translateY(-170%);
  // }

  span {
    position: absolute;
    left: 16px;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-violet);
    transition: var(--transition);
  }
  a:hover {
    color: lighten(#e73348, 10%);
  }
}
.login__forgot-wrap {
  font-size: 18px;
  margin-bottom: 46px;
  span {
    margin-right: 10px;
  }
}
.login__form-submit {
  height: 70px;
  background: var(--color-red);
  border-radius: var(--border-radius);
  color: var(--color-white);
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 40px;
  transition: 0.3s;
  &:hover {
    background: darken(#e73348, 10%);
    box-shadow: 0px 3px 13px rgba(154, 13, 30, 0.2);
  }
}
.login__soc_login {
  .text {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .buttons-wrap {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    .link {
      font-size: 16px;
      text-decoration: none;
      font-weight: bold;
      max-width: 160px;
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--border-radius);
      transition: 0.3s;
      &:first-child {
        margin-right: 20px;
      }
    }
    svg {
      margin-right: 10px;
      transition: 0.3s;
    }
    .facebook {
      border: 1px solid #4968ad;
      span {
        color: #4968ad;
      }
      path {
        fill: #4968ad;
      }
      &:hover {
        background: #4968ad;
        span {
          color: var(--color-white);
        }
        path {
          fill: var(--color-white);
        }
      }
    }
    .google {
      border: 1px solid var(--color-red);
      span {
        color: var(--color-red);
      }
      path {
        fill: var(--color-red);
      }
      &:hover {
        background: var(--color-red);
        span {
          color: var(--color-white);
        }
        path {
          fill: var(--color-white);
        }
      }
    }
  }
}
.login__create-wrap {
  .text {
    margin-right: 7px;
    font-size: 18px;
  }
  .link {
    font-size: 18px;
  }
}
</style>
