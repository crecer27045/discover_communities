<template>
  <div id="login" class="">
    <div class="login__wrap">
      <div class="login__title">
        Log In
      </div>

      <div class="login__form-wrap">
        <div class="login__form-input-wrap">
          <input v-model="Email" type="email" placeholder="Email" />
          <!-- <span class="placehold">Email</span> -->
        </div>
        <div class="login__form-input-wrap">
          <input v-model="Password" type="password" placeholder="Password" />
          <!-- <span class="placehold">Password</span> -->
        </div>
      </div>

      <div class="login__forgot-wrap">
        <span class="text">Forgot your password?</span>
        <a href="#" class="link">Reset by email</a>
      </div>

      <button class="login__form-submit" @click="LogIn">Log in</button>

      <div class="login__soc_login">
        <div class="text">Or Log In with</div>
        <div class="buttons-wrap">
          <a href="#" class="link facebook"
            ><img src="/img/svg/facebook.svg" alt="" /><span>Facebook</span></a
          >
          <a href="#" class="link google"
            ><img src="/img/svg/google.svg" alt="" /><span>Google</span></a
          >
        </div>
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
}
.login__soc_login {
  .text {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .buttons-wrap {
    display: flex;
    justify-content: space-between;
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
    }
    img {
      margin-right: 10px;
    }
    .facebook {
      border: 1px solid #4968ad;
      span {
        color: #4968ad;
      }
    }
    .google {
      border: 1px solid var(--color-red);
      span {
        color: var(--color-red);
      }
    }
  }
}
</style>
