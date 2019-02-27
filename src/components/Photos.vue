<template>
  <div>
    <div class="image-container" v-if="images.length > 0" 
    >
      <div 
        class="card" 
        v-for ='image in images' 
        v-bind:key='image.id' 
        @mouseover="shownCard = image.id"
        @mouseleave="shownCard = null" 
        v-bind:style="{ backgroundImage: 'url('+image.image+')' }">  
        <p class="description" 
          v-if="shownCard === image.id"> 
          {{image.description}} 
        </p>
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
  data() {
    return {
      hoverState: false,
      shownCard: null
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
  background-color: #2c3e50;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.card {
  align-items: center;
  background-position: center; 
  background-size: cover;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: flex-end;
  margin: 16px;
  padding: 4px;
  width: 400px;
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
