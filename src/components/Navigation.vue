<template>
  <div id="nav">
    <a href="/" class="logo"><img src="/img/svg/logo.svg" alt=""/></a>
  </div>
</template>

<style lang="scss">
#nav {
  padding: 30px 60px;

  a {
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
