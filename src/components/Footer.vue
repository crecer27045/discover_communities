<template>
  <div id="footer">
    <div class="footer-left"></div>
    <div class="footer-right"><div class="copy">Locals.com Ⓡ 2020</div></div>
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
  .copy {
    font-size: 14px;
    opacity: 0.5;
  }
}
</style>
