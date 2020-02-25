<template>
  <div id="footer">
    <div v-if="authStatus" class="footer-left">
      <a href="#">Policy & Terms</a>
      <a href="#">TL;DR</a>
      <a href="#">Privacy</a>
    </div>
    <div class="footer-right">
      <div class="copy">Locals.com ® 2020</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      // authStatus: this.$store.getters.IS_AUTHENTICATED
    };
  },
  computed: {
    authStatus() {
      return this.$store.getters.IS_AUTHENTICATED;
    }
  }
};
</script>

<style lang="scss">
#footer {
  display: flex;
  justify-content: space-between;
  padding: 30px 60px;
  margin-top: auto;
  max-width: 1440px;
  margin: auto auto 0;
  width: 100%;
  // @media screen and (max-width: 576px) {

  // }
  .footer-left {
    @media screen and (max-width: 576px) {
      margin-bottom: 15px;
    }
    a {
      color: var(--color-text);
      text-decoration: none;
      &:not(:last-child) {
        margin-right: 20px;
      }
    }
  }
  .footer-right {
    @media screen and (min-width: 576px) {
      margin-left: auto;
    }
  }
  .copy {
    font-size: 14px;
    opacity: 0.5;
  }
  @media screen and (max-width: 576px) {
    flex-direction: column;
    padding: 30px 20px;
    align-items: center;
  }
}
</style>
