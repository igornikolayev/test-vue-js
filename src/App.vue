<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>


<script>
import AppHeader from "./components/AppHeader";
import AppPreloader from "./components/AppPreloader";

export default {
  data() {
    return {
      logIn: false
    };
  },

  components: {
    AppHeader,
    AppPreloader
  }
};
</script>

<style scoped lang="sass">
</style>
