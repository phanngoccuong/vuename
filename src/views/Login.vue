<template>
  <div class="login">
    <div class="title text-lg-center title">Login to Shop</div>
    <div class="image">
      <img src="../assets/img/login.png" alt="" class="img-fluid" />
    </div>

    <div class="container login-form">
      <div class="mb-3">
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter your email"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Enter your password"
          v-model="password"
          @keyup.enter="login"
        />
      </div>
      <button type="submit" class="btn btn-danger" @click="login">Login</button>
    </div>
    <div class="register">
      <router-link :to="{ name: 'Register' }">
        <a href="">Don't have an account ? Register now!!</a>
      </router-link>
    </div>
  </div>
</template>

<script>
import { fb } from "../firebase/firebase";

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    login() {
      fb.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace("admin");
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            alert("Wrong password.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  .title {
    font-size: 50px;
    font-weight: 570;
    margin-top: 20px;
  }
  .image {
    img {
      height: 300px;
    }
  }
  .login-form {
    input {
      width: 300px;
      margin: auto;
    }
  }
  .register {
    margin-top: 15px;
    a {
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
