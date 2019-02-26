<template>
  <div id="app">
      <h1 v-bind:class="{'small-header': showImages}"> PhotoFindr </h1>
    <form v-bind:class="{'small-form': showImages}">
      <h4> search for a photo by keyword.. </h4>
      <input type="text" v-model="keyword" placeholder="search"/>
      <button v-on:click="submitSearch"> submit </button>
    </form>
    <div v-bind:class="{'show-results': !showImages}">
      total images matching keyword: {{this.results.total}}
    </div>
      <Loading v-if="loading" />
      <Photos v-else :images="images" />
  </div>
</template>

<script>
import apiKey from './apiKey.js'
import cleanPhotos from './helpers/cleanPhotos'
import Photos from './components/Photos'
import Loading from './components/Loading'

export default {
  name: 'app',
  components: {
    Photos,
    Loading
  },
  data(){
    return {
      keyword: '',
      images: [],
      page: 1,
      loading: '',
      showImages: false,
      results: {}
    }
  },
  methods: {
    async submitSearch (e) {
    e.preventDefault()
    this.loading = true
    const url = `https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=${this.keyword}&page=${this.page}`
      const response = await fetch(url)
      const result = await response.json()
      const cleanedPhotos = cleanPhotos(result.results)
      this.images = cleanedPhotos
      this.results = {total: result.total, pages: result.total_pages}
      this.loading = false
      this.showImages = true
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Quicksand');

#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: -10px;
  padding: 0;
  height: 102vh;
}

h1 {
  font-size: 80px;
}

.hidden {
  display: none
}

.small-header {
  font-size: 40px;
}

input {
  font-family: 'Quicksand', sans-serif;
  font-size: 32px;
}
button {
  font-family: 'Quicksand', sans-serif;
  font-size: 32px;
  margin-left: 20px
};

button:hover {
  background-color: grey;
}
</style>
