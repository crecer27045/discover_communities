<template>
  <div id="app">
    <Navigation />

    <router-view />

    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default {
  name: "app",
  components: {
    Navigation: Navigation,
    Footer: Footer
  }
};
</script>

<style lang="scss">
#app {
  font-family: NoirPro, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
