<template>
<div>
  <div class="image-container" v-if="images">
    <div class="card" v-for ='image in images' v-bind:key='image.description'>  
       <img  v-bind:src="image.image"/> 
       <p> {{image.description}} </p>
      </div> 
  </div>
  <div v-else>
    PO
    </div>
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
template {
  background-color: #C6C8EE;
}

div {
  background-color: #C6C8EE;
}

img {
  /* height: 400px;
  width: 300px; */
  /* height: 100%; */
  width: 100%;
}
input {
  font-size: 32px;
}
.image-container {
  /* display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) ); */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.card {
  display: flex;
  width: 400px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 4px;
}
button {
  font-size: 32px;
  margin-left: 20px
};
</style>
