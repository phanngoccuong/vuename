<template>
  <div class="Intro">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-4">
          <div class="intro-content">
            <div class="intro-title">
              <h1>Shop for Gamer</h1>
              <p>Provide the best service ever</p>
            </div>
            <div class="intro-btn">
              <button type="button" class="btn btn-danger">Explore now</button>
              <button type="button" class="btn btn-secondary">Products</button>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="logo">
            <img src="../assets/img/logo2.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",
};
</script>

<style lang="scss" scoped>
.intro-btn {
  button {
    margin-right: 10px;
  }
}
.logo {
  img {
    height: 665px;
    width: 966px;
    @media (max-width: 600px) {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
