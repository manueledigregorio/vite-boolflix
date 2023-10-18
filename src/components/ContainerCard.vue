
<script>
import { store } from '../data/store';
import Card from './partials/Card.vue';
export default {
name:'ContainerCard',
components:{
  Card
},
data() {
  return {
    store
  }
},

}
</script>

<template>
  
    <div class="container ">

      <div class="row  py-5" v-if="store.cercaApi !== 'tv' ">
        <h2 v-if="store.movie.length > 0 ">film</h2>
        <Card 
          v-for="items in store.movie"
          :key="items.id"
          :title="items.title"
          :original_title="items.original_title"
          :vote_average="items.vote_average"
          :original_language="items.original_language"
          :name="items.name"      
          :original_name="items.original_name"
          :img_main="items.poster_path"
          :overview="items.overview"
        />
      </div>

      <div class="row py-5 " v-if="store.cercaApi !== 'movie'" >
        <h2 v-if="store.tv.length > 0 ">serie tv</h2>
        <Card 
          v-for="items in store.tv"
          :key="items.id"
          :title="items.title"
          :original_title="items.original_title"
          :vote_average="items.vote_average"
          :original_language="items.original_language"
          :name="items.name"      
          :original_name="items.original_name"
          :img_main="items.poster_path"
          :overview="items.overview"
        />
      </div>
    </div>
 
  
  
 
  
</template>


<style lang="scss" scoped>


    h2{

      color: brown;
    }
</style>