<template>
  <div id="app">
      <h1> search for a photo </h1>
    <form>
      <input type="text" v-model="keyword"/>
      <button v-on:click="submitSearch"> submit </button>
      <Photos :images="images" />
    </form>
  </div>
</template>

<script>
import apiKey from './apiKey.js'
import cleanPhotos from './helpers/cleanPhotos'
import Photos from './components/Photos'

export default {
  name: 'app',
  components: {
    Photos
  },
  data(){
    return {
      keyword: '',
      images: []
    }
  },
  methods: {
    async submitSearch (e) {
    e.preventDefault()
      const response = await fetch(`https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=${this.keyword}`)
      const result = await response.json()
      const cleanedPhotos = cleanPhotos(result.results)
      this.images = cleanedPhotos
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
