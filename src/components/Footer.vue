<template>
  <div id="footer">
    <div class="footer-left">
      <a href="#">Policy & Terms</a><a href="#">TL;DR</a><a href="#">Privacy</a>
    </div>
    <div class="footer-right"><div class="copy">Locals.com ® 2020</div></div>
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
  .footer-left a {
    color: var(--color-text);
    text-decoration: none;
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
  .copy {
    font-size: 14px;
    opacity: 0.5;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    padding: 20px;
    align-items: center;
  }
}
</style>
