<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Games</h2>
    <span v-for="(value,key,index) in di">
      value:{{value}} key:{{key}} index:{{index}}
      <br>
    </span>
    <b-button @click="btnClick()">add</b-button>
    <ul id="example-1">
      <li v-for="item in items">
        {{ item.message }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome!',
        di: {
          "link1": {
            "title": "刺客辣条：BUG命",
            "p": "阿育BUG天下第一"
          },
          "link2": {
            "title": "守望先锋",
            "p": "这个世界需要更多英雄"
          },
          "time": "20180725"
        },
        items: [{
            message: 'Foo'
          },
          {
            message: 'Bar'
          }
        ]
      }
    },
    methods: {
      btnClick() {
        this.items.push({
          message: 'Baz'
        })
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  a {
    color: #42b983;
  }

  button:focus {
    outline: 0;
  }

</style>
