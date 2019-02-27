<template>
  <div id="app">
      <h1 v-bind:class="{'small-header': showImages}"> 
        PhotoFindr 
      </h1>
      <h4> search for a photo by keyword.. </h4>
    <form v-bind:class="{'small-form': showImages}">
      <font-awesome-icon icon="search" class="search-icon" />
      <input type="text" v-model="keyword" placeholder="search" />
      <button v-on:click="submitSearch"> 
        search
      </button>
    </form>
    <div 
      class ='results-container' 
      v-bind:class="{'hidden': showImages=== false}"
    >
      <p>
        total images matching keyword: {{this.results.total}}
      </p>
      <div v-bind:class="{'show-results': showImages}">
        <button class="page-back-btn" v-on:click="pageBack">  
          <font-awesome-icon icon="arrow-left" class="search-icon" />
        </button>
          page {{this.page}} out of {{this.results.pages}}
        <button class="page-next-btn" v-on:click="pageForward">  
          <font-awesome-icon icon="arrow-right" class="search-icon" />
        </button>
      </div>
    </div>
      <Loading v-if="loading" />
      <Photos v-else 
        :images="images" 
        :results="results" 
        :showImages="showImages"
      />
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
      page: 0,
      loading: null,
      showImages: false,
      results: {},
      searchedTerm: ''
    }
  },
  methods: {
    async submitSearch (e) {
    e.preventDefault()
    this.loading = true
    this.page = 1
      let url = `https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=${this.keyword}&page=${this.page}`
      try {
        const response = await fetch(url)
        const result = await response.json()
        const cleanedPhotos = cleanPhotos(result.results)
      this.images = cleanedPhotos
      this.results = {total: result.total, pages: result.total_pages}
      this.loading = false
      this.showImages = true
      this.searchedTerm = this.keyword
      this.keyword = ''
      } catch(error) {
        console.log(error)
      }
    },
    async fetchPictures(url) {
      const response = await fetch(url)
      const result = await response.json()
      const cleanedPhotos = cleanPhotos(result.results)
      this.images = cleanedPhotos
      this.results = {total: result.total, pages: result.total_pages}
      this.loading = false
      this.showImages = true
    },
    pageBack () {
      if(this.page > 1) {
        this.page--
        let url = `https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=${this.searchedTerm}&page=${this.page}`
        this.fetchPictures(url)
      }
    },
     pageForward() {
      if(this.page < this.results.pages) {
        this.page++
        let url = `https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=${this.searchedTerm}&page=${this.page}`
        this.fetchPictures(url)
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Quicksand');


#app {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  align-items: center;
  background-color: #2c3e50;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: 'Quicksand', sans-serif;
  height: 102vh;
  margin-top: -10px;
  padding: 0;
  text-align: center;
}

h1 {
  font-size: 80px;
  color: white;
}

form {
  background-color: rgba(242, 232, 232, .4);
  border-radius: 40px;
  padding: 10px;
  width: 90vw;
}

.hidden {
  display: none
}

.small-header {
  font-size: 40px;
  color: white;
}

.search-icon {
  font-size: 32px;
}


input {
  background-color: unset;
  border: none;
  color: white;
  font-family: 'Quicksand', sans-serif;
  font-size: 40px;
  margin: 20px;
}
button {
  background-color: #2c3e50;
  border-radius: 4px;
  border: solid white 1px;  
  color: white;
  font-family: 'Quicksand', sans-serif;
  font-size: 32px;
  margin-left: 20px;
};

button:hover {
  background-color: grey;
}
.show-results {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
