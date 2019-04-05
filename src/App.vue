<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>


<script>
import AppHeader from "./components/AppHeader";
export default {
  data() {
    return {
      logIn: false
    };
  },

  components: {
    AppHeader
  }
};
</script>

<style scoped lang="sass">
</style>
