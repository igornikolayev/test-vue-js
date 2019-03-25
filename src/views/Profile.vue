<template>
  <div>
    {{check}}
    <h1>Profile</h1>
  </div>
</template>

<script>
export default {
  computed: {
    check: function() {
      if (this.$store.state.checkUser == false) {
        this.$router.push("Login");
      }
      return "";
    }
  }
};
</script>

<style >
h1 {
  text-align: center;
  margin-top: 7%;
  font-size: 130px;
}
@media screen and (max-width: 500px) {
  h1 {
    margin-top: 25%;
    font-size: 100px;
  }
}
</style>