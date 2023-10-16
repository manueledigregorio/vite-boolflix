
<script>
import { store } from '../data/store';
import Card from './partials/Card.vue';
export default {
name:'ContainerCard',
comments:{
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
  <div class="row">
    <Card 
    v-for="items in store.nameToSearch"
    :key="items.id"
    :title="items.title"
    :original_title="items.original_title"
    :vote_average="items.vote_average"
    :original_language="items.original_language"/>

  </div>
 
  
</template>


<style lang="scss" scoped>

</style>