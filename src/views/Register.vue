<template>
  <div class="register">
    <div class="title text-lg-center title">Register now</div>
    <div class="image">
      <img src="../assets/img/login.png" alt="" class="img-fluid" />
    </div>

    <div class="container login-form">
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Enter your username"
          v-model="name"
        />
      </div>
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
        />
      </div>
      <button type="submit" class="btn btn-danger" @click="register">
        Register
      </button>
    </div>
    <div class="register">
      <router-link>
        <a href="">Don't have an account ? Register now!!</a>
      </router-link>
    </div>
  </div>
</template>
<script>
import { fb, db } from "../firebase/firebase";
//import $ from "jquery";
export default {
  name: "Register",
  data() {
    return {
      name: null,
      email: null,
      password: null,
    };
  },
  methods: {
    register() {
      fb.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          db.collection("profiles")
            .doc(user.user.uid)
            .set({
              name: this.name,
            })
            .then(function() {
              console.log("Document successfully written!");
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
            });
          this.$router.replace("admin");
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            alert("The password is too weak.");
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
.register {
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
