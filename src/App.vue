<template>
  <div id="app">
    <!-- <img class="nav_img" src="./assets/bgimg.jpg"> -->
    <b-container>
      <b-navbar toggleable="md" type="dark" variant="info">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand :to="{name: 'Home'}">首页</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item to="/news">新闻</b-nav-item>
            <b-nav-item to="/forum">论坛</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Go</b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
    <!-- <router-link :to="{name: 'Home'}">首页</router-link> -->
    <!-- <router-link to="/news">新闻</router-link> -->
    <!-- <router-link to="/forum">论坛</router-link> -->

    <router-view name="myHelloWorld"></router-view>
    <!-- <router-view name="myHeader"></router-view> -->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "App"
  };

</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 5px;
  }

  .nav_img {
    width: 60%;
    height: 120px;
    margin: 0 auto;
  }

</style>
