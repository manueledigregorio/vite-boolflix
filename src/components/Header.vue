<script>
import { store } from '../data/store';
export default {
name:'Header',
data() {
  return {
    store
  }
},
}
</script>

<template>
  <div class="row my-container">
    <div class="col-9">
      <img src="/public/logo-boolflix.png" alt="">
    </div>
    <div class="col-3 right">
      <input v-model="store.nameToSearch" type="text" name="" id="">
      <button @click="$emit('search')" type="button" class="btn btn-danger">Cerca</button>
    </div>
  </div>
</template>


<style lang="scss" scoped>

.my-container{
  background-color: #1B1B1B;
  height: 80px;

  img{
    width: 150px;
    padding:20px
  }


}
 
</style>