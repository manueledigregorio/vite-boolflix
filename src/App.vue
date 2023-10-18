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
      getApi(type){
        
        axios.get(store.apiUrl + type, {
          params:store.apiParams
           
        })
        .then(res =>{
          if (store.cercaApi !== 'tv') {
            store[type] = res.data.results
            console.log(store.searchFilm)
          }
          if(store.cercaApi !== 'movie'){

            store[type] = res.data.results
            console.log(store.searchFilm)
          }
          
        })
        .catch(err =>{
          console.log(err)
        })


      },

      startApi(){
        this.getApi('movie');
        this.getApi('tv')

      }
    },



  }

</script>

<template>
  <div class="custom">
    <Header @search ='startApi'/>
    <ContainerCard />
  </div>
  
  
</template>

<style lang="scss" scoped>
  .custom{
    background-color: #434343;
    min-height: 100vh;
  }
</style>
