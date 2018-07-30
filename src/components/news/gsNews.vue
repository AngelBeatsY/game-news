<template>
  <div class="gs_news container">
    <h1>游民星空新闻--{{msg}}</h1>
    <div class="news_div col-md-6" v-for='link in Object.keys(data_json)'>
      <div class="img_box">
        <a href="http://www.gamersky.com/" title="GamerSky">
          <img src="../../assets/gs_logo.png" alt="GamerSky">
        </a>
      </div>
      <div class="n_info">
        <span class="n_tab">新闻</span>
        <a v-bind:href="link">
          <h2 class="n_title">{{data_json[link]}}</h2>
        </a>
        <span class="n_auther">Limbo</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "gsNews",
    data() {
      return {
        data_json: "",
        msg: ""
      };
    },
    mounted() {
      this.axios.get("/api/gsNews").then(body => {
        if (typeof body.data == "object") {
          this.data_json = body.data;
        } else {
          this.data_json = JSON.parse(body.data);
          let i = 0;
          for (let x in this.data_json) {
            i++;
          }
          this.msg = i;
        }
      });
      /*this.axios.get('/static/newsInfo.json').then(body=>{
			this.data_json = JSON.parse(body.data);
			// for(let x in this.data_json){
			// 	console.log(x);
			// }
		});*/
    }
  };

</script>

<style scoped>
  .gs_news {
    font-family: Microsoft Yahei;
    color: #333;
    text-align: center;
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
    padding: 10px 10px 10px 20px;
    box-sizing: border-box;
    width: 450px;
    height: 120px;
    border-radius: 3px;
    text-align: left;
    box-shadow: 0px 1px 3px 0px #888;
    transition: box-shadow 0.3s;
    display: inline-block;
  }

  .news_div:hover {
    box-shadow: 0px 3px 12px -3px #888;
  }

  .img_box {
    width: calc(38%-20px);
    width: -webkit-calc(38% - 20px);
    height: 100%;
    background: #808080;
    float: right;
  }

  .img_box img {
    width: 100%;
    height: 100%;
  }

  .n_info {
    width: 62%;
    height: 100%;
    padding: 0px;
  }

  .n_tab {
    position: relative;
    left: -20px;
    top: -10px;
    color: #707070;
    background: rgba(177, 177, 177, 0.2);
    border-left: 4px solid #000;
    font-size: 14px;
    line-height: 16px;
    padding: 0 5px;
  }

  .n_title {
    font-size: 16px;
    font-weight: bold;
    line-height: 22px;
    /*max-height: 56px;*/
    height: 44px;
    overflow: hidden;
    word-wrap: break-word;
  }

  .n_auther {
    padding: 0 7px;
    color: #7d7d7d;
    font-size: 14px;
    border-left: 2px solid #7d7d7d;
    overflow: hidden;
    text-overflow: ellipsis;
  }

</style>
