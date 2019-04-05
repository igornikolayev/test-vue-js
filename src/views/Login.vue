<template>
  <div class="login">
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-form name="formLogin" id="formLogin">
            <b-form-group id="emailGroup" label="Your email:" label-for="emailInput">
              <b-form-input
                id="emailInput"
                v-model="form.email"
                name="email"
                type="email"
                required
                placeholder="Enter name"
              />
            </b-form-group>
            <b-form-group id="passGroup" label="Your Password:" label-for="passInput">
              <b-form-input
                id="passInput"
                type="password"
                v-model="form.password"
                required
                placeholder="Enter Password"
                name="password"
              />
            </b-form-group>
            <b-button type="submit" @click="onSubmit" variant="primary">Submit</b-button>
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
        email: "max@test.com",
        password: "12345"
      }
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      //post

      let postRequestForm = new XMLHttpRequest();
      postRequestForm.open(
        "POST",
        "https://mysterious-reef-29460.herokuapp.com/api/v1/validate",
        false
      );

      postRequestForm.setRequestHeader("Content-type", "application/json");

      postRequestForm.send(
        JSON.stringify({
          email: document.forms.formLogin.email.value, // 'max@test.com',
          password: document.forms.formLogin.password.value // '12345'
        })
      );

      postRequestForm.onreadystatechange = function() {
        if (postRequestForm.readyState != 4) return;

        if (postRequestForm.status != 200) {
          alert(postRequestForm.status + ": " + postRequestForm.statusText);
        }
      };

      let dataFromServer = JSON.parse(postRequestForm.responseText);

      if (dataFromServer.status == "ok") {
        this.$store.commit("checker", dataFromServer.data.id);

        setTimeout(() => {
          this.$router.push("Profile");
        }, 100);

        document.getElementById("error-type").style.display = "none";
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
