<template>
<div>
  <div class="image-container" v-if="images.length > 0" 
  >
    <div class="card" v-for ='image in images' v-bind:key='image.id' 
    @mouseover="shownCard = image.id"
    @mouseleave="shownCard = null" 
    v-bind:style="{ backgroundImage: 'url('+image.image+')' }">  
       <p class="description" v-if="shownCard === image.id"> {{image.description}} </p>
      </div> 
  </div>
  <div v-else-if="showImages">
    <p>
      no images matched your search!
      </p>
    </div>
    </div>
</template>


<script>
export default {
  name: 'Photos',
  data(){
    return {
      hoverState: false,
      shownCard: null
    }
  },
  methods: {
    hoverImage (id) {
      this.active = !this.active
    }
  },
  props: {
    images: Array,
    results: Object,
    loading: Boolean,
    showImages: Boolean
  }
}
</script>

<style scoped>

input {
  font-size: 32px;
}
.image-container {
  /* display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) ); */
  background-color: #2c3e50;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.card {
  display: flex;
  width: 400px;
  height: 400px;
  background-position: center; 
  background-size: cover;
  border-radius: 20px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 4px;
  margin: 16px;
}
button {
  font-size: 32px;
  margin-left: 20px
}

.description {
  z-index: 2;
  position: relative;
}

.hidden {
  display: none
}
</style>
