<template>
  <div id="app">
    <form>
      <h1> search for a photo </h1>
      <input type="text" v-model="search"/>
      <button v-on:click="submitSearch"> submit </button>
    </form>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import Search from './components/Search.vue' 

export default {
  name: 'app',
  data(){
    return {
      search: '',
    }
  },
  methods: {
    submitSearch () {
      console.log('th')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
input {
  font-size: 32px;
}
button {
  font-size: 32px;
  margin-left: 20px
};
</style>
