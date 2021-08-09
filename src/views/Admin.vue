<template>
  <div class="admin">
    <div
      class="page-wrapper default-theme sidebar-bg bg1"
      :class="{ toggled: !closeSidebar }"
    >
      <a
        id="show-sidebar"
        @click="closeSidebar = false"
        class="btn btn-sm btn-dark"
        href="#"
      >
        <i class="fas fa-bars"></i>
      </a>
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <a href="#">Gaming Shop</a>
            <div id="close-sidebar" @click="closeSidebar = true">
              <i class="fas fa-times"></i>
            </div>
          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header">
            <div class="user-pic">
              <img
                class="img-responsive img-rounded"
                src="../assets/img/user.png"
                alt="User picture"
              />
            </div>
            <div class="user-info">
              <span class="user-name"
                >Cuong
                <strong>Phan</strong>
              </span>
              <span class="user-role"> {{ email }} </span>
              <span class="user-status">
                <i class="fa fa-circle"></i>
                <span>Online</span>
              </span>
            </div>
          </div>
          <!-- sidebar-search  -->
          <div class="sidebar-item sidebar-search">
            <div>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control search-menu"
                  placeholder="Search..."
                  style="height:30px"
                />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i
                      class="fa fa-search"
                      aria-hidden="true"
                      style="height:18px"
                    ></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- sidebar-menu  -->
          <div class=" sidebar-item sidebar-menu">
            <ul>
              <li class="header-menu">
                <span>Menu</span>
              </li>

              <li>
                <router-link to="/admin/overview">
                  <i class="fa fa-chart-line"></i>
                  <span>Overview</span>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/products">
                  <i class="fab fa-amazon"></i>
                  <span>Products</span>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/orders">
                  <i class="fa fa-shopping-cart" style="margin-left:-14px"></i>
                  <span>Orders</span>
                </router-link>
              </li>

              <li>
                <router-link to="/admin/profile">
                  <i class="fa fa-user" style="margin-left:-15px"></i>
                  <span>Profile</span>
                </router-link>
              </li>
              <li>
                <a href="#" @click="logout">
                  <i class="fa fa-power-off" style="margin-left:-9px"></i>
                  <span>Log out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main class="page-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import { fb } from "../firebase/firebase";

export default {
  name: "Admin",
  components: {},
  data() {
    return {
      email: null,
      closeSidebar: false,
    };
  },
  methods: {
    logout() {
      fb.auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
