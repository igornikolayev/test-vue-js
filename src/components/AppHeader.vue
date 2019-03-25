<template>
  <div class="header">
    <b-container>
      <b-row align-h="between">
        <b-col cols="12" sm="6" class="logo-wraper">
          <img class="logo" alt="Vue logo" src="../assets/logo.png">
        </b-col>
        <b-col cols="12" sm="6">
          <nav class="navigation">
            <router-link to="/">
              <span class="navigation__item">Home</span>
            </router-link>
            <router-link to="/News">
              <span class="navigation__item">News</span>
            </router-link>
            <router-link to="/Profile">
              <span class="navigation__item">Profile</span>
            </router-link>
            <router-link to="/Login">
              <span
                class="navigation__item"
                @click="$store.commit('logOut')"
              >{{this.$store.state.buttonLogin}}</span>
            </router-link>
          </nav>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
</script>

<style scoped>
* {
  text-decoration: none !important;
}
.header {
  padding: 20px;
}
.header__wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.logo {
  height: 30px;
}
.navigation {
  float: right;
}
.navigation__item {
  white-space: nowrap;
  padding: 2px 12px 3px;
  border-radius: 10px;
}

.navigation__item:hover {
  color: #ffffff;
  cursor: pointer;
  background: cadetblue;
}
@media screen and (max-width: 500px) {
  .logo-wraper {
    margin-bottom: 20px;
    display: flex;
    justify-content: center !important;
    align-self: center;
  }
  .navigation {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    float: none;
  }
}
</style>
