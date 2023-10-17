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
    <div  class="d-flex justify-content-around align-items-center col-3 right">

      <input @keyup.enter="$emit('search')" v-model="store.apiParams.query" type="text" placeholder="search here" >
      
      <select v-model="store.cercaApi"  class=" form-select-sm " aria-label="Default select example">
        <option value="">All</option>
        <option value="movie">Movie</option>
        <option value="tv">Series TV</option>
      </select>
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
  select{
    padding: 7px
  }


}
 
</style>