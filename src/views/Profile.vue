<template>
  <div id="profile">
    {{getProfile}}
    <b-container>
      <div v-if="checkParse" class="profile">
        <h2 class="profile__head">Information about you</h2>
        <div class="profile__section">
          <b-alert show variant="info">Город: {{city}}</b-alert>
        </div>
        <div class="profile__section">
          <b-alert show variant="info">Знание языков:</b-alert>
          <b-list-group class="profile__list">
            <b-list-group-item
              class="profile__list__item"
              variant="light"
              v-for="language in languages"
              :key="language.index"
            >{{language}}</b-list-group-item>
          </b-list-group>
        </div>
        <div class="profile__section">
          <b-alert show variant="info">ССылки:</b-alert>
          <b-list-group class="profile__list">
            <b-list-group-item
              class="profile__list__item"
              variant="light"
              v-for="(label, index)  in labels"
              :key="index"
              :href="links[index]"
            >{{label}}</b-list-group-item>
          </b-list-group>
        </div>
      </div>
      <div v-else>
        <h2 class="profile__head">We do not have Information about you</h2>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkParse: false,
      city: "",
      languages: [],
      links: [],
      labels: []
    };
  },
  computed: {
    getProfile: function() {
      if (this.$store.state.checkUser == false) {
        this.$router.push("Login");
      } else {
        let getProfileRequest = new XMLHttpRequest();

        let userInformation;
        let userId = this.$store.state.userId;
        if (userId == 1) {
          this.checkParse = true;
          getProfileRequest.open(
            "GET",
            "https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/" +
              userId,
            true
          );
          getProfileRequest.send();
          getProfileRequest.onreadystatechange = () => {
            if (getProfileRequest.readyState != 4) return;

            if (getProfileRequest.status != 200) {
              alert(
                getProfileRequest.status + ": " + getProfileRequest.statusText
              );
            } else {
              userInformation = JSON.parse(getProfileRequest.response);
              this.$store.commit("writeUserData", userInformation); //write to store from server

              this.city = this.$store.state.userInformation.city;
              this.languages = this.$store.state.userInformation.languages;

              for (
                let index = 0;
                index < this.$store.state.userInformation.social.length;
                index++
              ) {
                this.links[index] = this.$store.state.userInformation.social[
                  index
                ].link;

                this.labels[index] = this.$store.state.userInformation.social[
                  index
                ].label;
              }
            }
          };
        }
      }
    }
  }
};
</script>

<style lang="scss" >
h1 {
  text-align: center;
  margin-top: 7%;
  font-size: 130px;
}
.profile {
  width: 60%;
  margin: auto;
  &__section {
    margin-top: 15px;
  }
  .alert {
    margin: 0;
    font-size: 15px;
  }
  &__list__item {
    font-size: 13px;
  }
}

@media screen and (max-width: 500px) {
  h1 {
    margin-top: 25%;
    font-size: 100px;
  }
}
</style>