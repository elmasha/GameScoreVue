<template>
  <div>
    <nav id="nav-bar-menu">
      <vs-navbar class="nabarx">
        <div slot="title">
          <vs-navbar-title>
            <img id="Gmlogo" :src="logo" />
          </vs-navbar-title>
        </div>

        <vs-navbar-item index="0">
          <router-link to="/" id="nav-item">Home</router-link>
        </vs-navbar-item>
        <vs-navbar-item index="1">
          <router-link to="/" id="nav-item">News</router-link>
        </vs-navbar-item>

        <vs-navbar-item index="2">
          <div>
            <router-link id="nav-item" to="/login">Login</router-link>
          </div>
        </vs-navbar-item>

        <vs-navbar-item index="3">
          <div>
            <router-link id="nav-item" to="/register">Register</router-link>
          </div>
        </vs-navbar-item>
      </vs-navbar>
    </nav>
  </div>
</template>
<script>
export default {
  data: () => ({
    logo: require("@/assets/logo.png"),
  }),
};
</script>

<style>
#Gmlogo {
  min-width: 20%;
  width: 30%;
  flex: 100%;
  justify-content: start;
}
#nav-item {
  justify-content: end;
  font-weight: 500;
  font-size: 16px;
  color: #f19124;
}
#nav-item:hover {
  font-weight: 500;
  font-size: 16px;
  color: #08da4e;
}
#nav-bar-menu {
  background: #fff;
  position: relative;
  height: 70px;
}
.left {
  background: #fff;
  color: #000;
}
.nav-title {
}
</style>
