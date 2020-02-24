<template>
  <div id="nav">
    <a href="/" class="logo">
      <img src="/img/svg/logo.svg" alt />
    </a>
    <div class="profile" :class="{ active: profileActive }">
      <div class="profile__container">
        <img src="/img/profile/test_user.png" alt class="profile__img" />
        <div v-if="windowWidth >= 576" class="profile__info">
          <div class="hello">Hello</div>
          <div class="profile__name">Username</div>
        </div>
        <div
          v-if="windowWidth >= 576"
          class="profile__dropdown_button"
          @click="ProfileDropdown"
          :class="{ active: profileActive }"
        >
          <img src="/img/svg/arrow.svg" alt class="profile__dropdown_icon" />
        </div>
      </div>
      <div class="profile__dropdown" v-if="profileActive"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      profileActive: false,
      windowWidth: null
    };
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.getWindowWidth);

      //Init
      this.getWindowWidth();
    });
  },
  methods: {
    ProfileDropdown() {
      this.profileActive = !this.profileActive;
    },
    getWindowWidth() {
      this.windowWidth = document.documentElement.clientWidth;
    }
  }
};
</script>

<style lang="scss">
#nav {
  padding: 30px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 150px;

  a {
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .profile {
    padding: 10px;
    max-width: 256px;
    width: 100%;
    border-radius: var(--border-radius);
    height: max-content;
    transition: 0.3s;
    @media screen and (max-width: 576px) {
      display: flex;
      justify-content: flex-end;
      padding: 0;
    }
    &.active {
      box-shadow: 0px 5px 10px rgba(88, 19, 27, 0.08);
    }
  }

  .profile__container {
    display: grid;
    grid-template-columns: 50px auto 30px;
    grid-gap: 0 10px;
    align-items: center;
    @media screen and (max-width: 576px) {
      display: block;
    }
  }
  .profile__img {
    border-radius: 100%;
  }
  .profile__info {
    .hello {
      color: var(--color-red);
      font-size: 14px;
    }
    .profile__name {
      color: var(--color-red);
      font-weight: bold;
      line-height: 130%;
    }
  }
  .profile__dropdown_button {
    text-align: center;
    height: 30px;
    width: 30px;
    line-height: 30px;
    border: 1px dashed #999999;
    cursor: pointer;

    .profile__dropdown_icon {
      transition: 0.3s;
    }
    &.active .profile__dropdown_icon {
      transform: rotate(180deg) translateY(2px);
    }
  }
  @media screen and (max-width: 600px) {
    padding: 20px;
  }
}
</style>
