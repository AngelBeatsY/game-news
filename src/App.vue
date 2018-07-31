<template>
  <div id="app">
    <!-- <img class="nav_img" src="./assets/bgimg.jpg"> -->
    <b-jumbotron header="Game News" lead="vgTime&Gamersky daily news" class="news-jumbotron">
      <p>赞美太阳</p>
    </b-jumbotron>
    <!-- <router-link :to="{name: 'Home'}">首页</router-link> -->
    <!-- <router-link to="/news">新闻</router-link> -->
    <!-- <router-link to="/forum">论坛</router-link> -->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "App"
  };

</script>

<style scoped>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 5px;
  }

  .news-jumbotron {
    font-weight: bold;
    color: #fbff00;
    position: relative;
    background: rgba(0, 0, 0, 0.5);
  }

  .news-jumbotron::after {
    content: "";
    width: 100%;
    height: 100%;
    background: url("./assets/cyberpunk.jpg") no-repeat 0 -420px;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    filter: grayscale(50%) blur(3px);
  }

  .nav_img {
    width: 60%;
    height: 120px;
    margin: 0 auto;
  }

  button {
    outline: 0;
  }

</style>
