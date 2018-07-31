<template>
  <div class="vg_news container">
    <h1>vgTime新闻--{{msg}}</h1>
    <div class="news_div col-md-4" v-for='link in Object.keys(data_json)'>
      <span class="n_tab">新闻</span>
      <a v-bind:href="link">
        <img class="n_img" v-bind:src="data_json[link]['cover']" />
      </a>
      <div class="n_info">
        <a v-bind:href="link">
          <h2 class="n_title">{{data_json[link]["title"]}}</h2>
        </a>
        <p>{{data_json[link]["p"]}}</p>
        <span>{{data_json[link]["username"]}}</span>
      </div>
    </div>
    <div>
      <button @click="loadMore" class="btn" v-if="!loadfinish">加载更多...</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vgNews",
    data() {
      return {
        data_json: "",
        msg: "",
        loadfinish: false,
        page: 1
      };
    },
    methods: {
      loadMore() {
        this.page++;
        this.axios.get(`/api/vgNews/${this.page}`).then(body => {
          if (typeof body.data != "object") {
            body.data = JSON.parse(body.data);
          }
          this.data_json = body.data['news'];
          this.msg = body.data['details']['sum'];
          if (body.data['details']['loaded'] >= this.msg) {
            this.loadfinish = true;
          }
        });
      }
    },
    mounted() {
      this.axios.get(`/api/vgNews/${this.page}`).then(body => {
        if (typeof body.data != "object") {
          body.data = JSON.parse(body.data);
        }
        this.data_json = body.data['news'];
        this.msg = body.data['details']['sum'];
      });
    }
  };

</script>

<style scoped>
  .vg_news {
    font-family: Microsoft Yahei;
    color: #333;
    text-align: center;
    margin-bottom: 35px;
  }

  a {
    color: #272727;
  }

  a:hover {
    color: #2abaca;
    text-decoration: none;
  }

  .news_div {
    position: relative;
    margin: 25px 25px;
    padding: 0;
    box-sizing: border-box;
    width: 320px;
    height: 350px;
    border-radius: 3px;
    text-align: left;
    box-shadow: 0px 1px 3px 0px #888;
    transition: box-shadow 0.3s;
    display: inline-block;
  }

  .news_div:hover {
    box-shadow: 0px 3px 12px -3px #888;
  }

  .n_tab {
    position: absolute;
    left: 1px;
    top: 10px;
    color: #fff;
    background: rgba(25, 25, 25, 0.7);
    border-left: 4px solid #000;
    font-size: 18px;
    line-height: 20px;
    padding: 0 7px;
  }

  .n_img {
    width: 100%;
  }

  .n_info {
    width: 100%;
    padding: 10px 10px;
  }

  .n_title {
    font-size: 18px;
    font-weight: bold;
    line-height: 28px;
    /*max-height: 56px;*/
    height: 56px;
    overflow: hidden;
    word-wrap: break-word;
  }

  .n_info p {
    margin: 0;
    padding: 0 7px;
    height: 40px;
    line-height: 20px;
    color: #7d7d7d;
    font-size: 14px;
    overflow: hidden;
    word-wrap: break-word;
  }

  .n_info span {
    padding: 0 7px;
    color: #7d7d7d;
    font-size: 12px;
    line-height: 20px;
    border-left: 3px solid #7d7d7d;
  }

</style>
