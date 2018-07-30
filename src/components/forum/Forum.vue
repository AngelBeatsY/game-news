<template>
  <div>
    <h1>论坛</h1>
    <!-- <button class="btn btn-primary" @click="btnClick('')">主要</button> -->
    <!-- <button class="btn btn-success" @click="btnClick('news')">信息</button> -->
    <b-button @click="btnClick('')">Home</b-button>
    <b-button @click="btnClick('news')">News</b-button>
    <pre>
			{{ content }}
		</pre>
  </div>
</template>
<script>
  export default {
    name: "Forum",
    data() {
      return {
        content: ""
      };
    },
    methods: {
      btnClick(str) {
        this.$router.push({
          path: `/${str}`
        });
      }
    },
    mounted() {
      let url = "http://api.komavideo.com/news/list";
      this.axios.post(url).then(body => {
        this.content = body.data;
      });
    }
  };

</script>
<style scoped>


</style>
