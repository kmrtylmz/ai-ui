<template>
  <main>
    <div class="login">
      <div class="box">
        <center>
          <h2 class="title">
            LOGIN
          </h2>
          <form v-on:submit.prevent="onSubmit" class="user-form">
            <input placeholder="Email" v-model="email" />
            <input placeholder="******" v-model="password" />
            <button>GO ON</button>
          </form>
        </center>
      </div>
    </div>

    <Footer :field="email ? email : 'to be continued like One Piece'" />
  </main>
</template>

<script>
import { Footer } from "@/components";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    Footer,
  },
  methods: {
    onSubmit() {
      console.log(this.$store);
      if (this.email === "emrekasg01" && this.password === "123")
        this.$store.commit("Auth/betrue", { isAuthenticated: true });
      // temporarily
      else
        this.$store.dispatch("Auth/login", {
          email: this.email,
          password: this.password,
        });
      // it will be updated. Next step : Setup membership system for api
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
* {
  font-family: "Poppins", sans-serif;
}
.login {
  background-color: #d4f1f7;
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.box {
  margin-bottom: 15%;
  width: 30%;
  height: 30%;
  background-color: white;
  border-radius: 30px;
  padding: 30px;
}
.user-form {
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  width: 50%;
}
.user-form > * {
  margin-top: 5%;
}
.user-form > input {
  height: 3vh;
  border: none;
  border-bottom: 1px gray solid;
}
.user-form > input:hover {
  transition: 0.8s all;
  border: 1px gray solid;
}
.user-form > button {
  background-color: #08252b;
  color: white;
  border-radius: 15px;
  border: #08252b;
  height: 3vh;
  transition: 0.8s all;
}
.user-form > button:hover {
  transition: 0.8s all;
  border: 1px #08252b solid;
  color: #08252b;
  background-color: white;
  border-radius: 5px;
}
</style>
