<script >
  import Header from './components/Header.vue';
  import ContainerCard from './components/ContainerCard.vue';
  import Card from './components/partials/Card.vue';
  import { store } from './data/store';
  import axios from 'axios';
  export default {
    name:'App',
    components:{
      Header,
      ContainerCard,
      Card
    },
    data() {
      return {
        store
      }
    },
    methods: {
      getApi(){
        
        axios.get(store.apiUrl + store.cercaApi, {
          params:store.apiParams
           
        })
        .then(res =>{
          if (store.cercaApi === 'movie') {
            store.searchFilm = res.data.results
            console.log(store.searchFilm)
          }
          if(store.cercaApi === 'tv'){

            store.searchTv = res.data.results
            console.log(store.searchFilm)
          }
          
        })
        .catch(err =>{
          console.log(err)
        })


      }
    },



  }

</script>

<template>
  <Header @search ='getApi'/>
  <ContainerCard v-if="store.searchFilm.length > 0 " />
  
</template>

<style lang="scss" scoped>

</style>
