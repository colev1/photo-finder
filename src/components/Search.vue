<template>
  <form>
    <h1> search for a photo </h1>
    <input type="text" v-model="search"/>
    <button v-on:click="submitSearch"> submit </button>
  </form>
</template>


<script>
export default {
  name: 'Search',
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

<style scoped>
input {
  font-size: 32px;
}
button {
  font-size: 32px;
  margin-left: 20px
};
</style>
