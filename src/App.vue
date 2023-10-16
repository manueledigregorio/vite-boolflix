<script >
  import Main from './components/Main.vue';
  import Header from './components/Header.vue';
  import ContainerCard from './components/ContainerCard.vue';
  import Card from './components/partials/Card.vue';
  import { store } from './data/store';

  export default {
    name:'App',
    components:{
      Header,
      Main,
      ContainerCard,
      Card
    },
    data() {
      return {
        store
      }
    },
    methods: {
      
    },



  }

</script>

<template>
  <Header />
  <Main />
  <ContainerCard />
  
</template>

<style lang="scss" scoped>

</style>
