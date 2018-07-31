<template>
  <div class="news">
    <h2>
      <router-link to="/gsNews">GamerSky</router-link>
      <br>
      <router-link to="/vgNews">VGTime</router-link>
    </h2>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "News",
    data() {
      return {
        msg: ""
      };
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    color: rgb(94, 95, 95);
    text-decoration: none;
  }

  a:hover {
    color: #3ccaf5;
  }

  h2 {
    position: fixed;
    right: 12%;
    top: 40%;
    text-align: left;
    line-height: 48px;

  }

  h2 a {
    border-left: 3px solid #27def7;
    padding-left: 12px;
  }

</style>
