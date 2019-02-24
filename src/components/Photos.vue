<template>
  <div class="image-container">
    <div class="card" v-for ='image in images' v-bind:key='image.description'>  
       <img  v-bind:src="image.image"/> 
       <p> {{image.description}} </p>
      </div> /
  </div>
</template>


<script>
export default {
  name: 'Photos',
  data(){
    return {
      // images = []
    }
  },
  methods: {
  },
  props: {
    images: Array
  }
}
</script>

<style scoped>
img {
  height: 400px
}
input {
  font-size: 32px;
}
.image-container {
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
}
.card {
  display: flex;
  height: 500px;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
}
button {
  font-size: 32px;
  margin-left: 20px
};
</style>
