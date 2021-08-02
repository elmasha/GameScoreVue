<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
//import Navbar from './components/Navbar.vue'
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  data: () => {
    return {
      apiKey: "6c9865edf6224bb3813f745119fe94fb", // You need an API Key from newsapi.org
    };
  },

  components: {
    Footer,
  },
};
</script>
