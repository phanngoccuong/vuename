<template>
  <div class="home">
    <NavBar />
    <Intro />
    <IntroProducts />
    <Footer />
  </div>
</template>

<script>
import Intro from "../components/Intro.vue";
import IntroProducts from "../components/IntroProducts.vue";
import Footer from "../components/Footer.vue";
import NavBar from "../components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Intro,
    IntroProducts,
    Footer,
    NavBar,
  },
};
</script>
