<template>
  <div id="footer">
    <div class="footer-left">
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
  name: "Footer"
};
</script>

<style lang="scss">
#footer {
  display: flex;
  justify-content: space-between;
  padding: 30px 60px;
  margin-top: auto;
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
