<template>
  <div class="login">
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-form @submit="onSubmit">
            <b-form-group id="nameGroup" label="Your name:" label-for="nameInput">
              <b-form-input id="nameInput" v-model="form.name" required placeholder="Enter name"/>
            </b-form-group>
            <b-form-group id="passGroup" label="Your Password:" label-for="passInput">
              <b-form-input
                id="passInput"
                type="password"
                v-model="form.password"
                required
                placeholder="Enter Password"
              />
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-alert
              show
              variant="danger"
              id="error-type"
            >Имя пользователя или пароль введены не верно</b-alert>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if (this.form.name == "admin" && this.form.password == "12345") {
        this.$store.commit("checker");
        setTimeout(() => {
          this.$router.push("Profile");
        }, 100);
      } else {
        document.getElementById("error-type").style.display = "block";
      }
    }
  }
};
</script>
<style scoped>
.login {
  max-width: 500px;
  margin: auto;
  margin-top: 6%;
}
#error-type {
  margin-top: 20px;
  display: none;
}
</style>
