<script>
import { store } from '../../data/store'
export default {
  name:'Card',
  props:{
    title: String,
    original_title: String,
    vote_average: String,
    original_language: String,
    name: String,
    original_name: String,
    img_main:String,
    overview:String
  },

  data() {
    return {
      percorsoImg: '',
      store
    }
  },
  methods: {
    getFlagImageSource() {
     if(this.original_language === 'en'){
        this.percorsoImg = 'en.png'
        return true

     }else if (this.original_language === 'it') {
       this.percorsoImg= 'it.png'
       return true
     } else {
        return false

     }
    },

    getImg(){

      return store.imgUrl + this.img_main
    }
  },

  computed:{

    votoIntero() {
      return Math.ceil(this.vote_average / 2);
    }

  }

}
</script>

<template>
 
    <div class=" col-4 mt-4 " >
      <div class="container-card">
        <img v-if=" img_main !== null " class="image-main w-100" :src="getImg()" :alt=" title || name ">
        <img  v-else class="image-main w-100 " src="/public/error-404.png" alt="img non trovata">
        
        <div class="custom-card">
          <h2>{{  title || name }}</h2>
          <p>{{  original_title || original_name}}</p>
          <i v-for="star in votoIntero" :key="star" class="fas fa-star"></i>
          <!-- 5 che sono le stelle, meno le stelline sono 4 esempio ti resta una quella che mancherà   -->
          <i v-for="star in (5 - votoIntero) " :key="star" class="far fa-star"></i>
        
          <img class="lang" v-if="getFlagImageSource()" :src="percorsoImg" alt="">
          <h4 v-else  >{{ original_language }}</h4>
          <p>{{overview }}</p>
        </div>
      </div>
      
    </div>

</template>


<style lang="scss" scoped>

.container-card{
  position: relative;
  

  .custom-card{
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    height: 100%;
    width: 100%;
    color: white;
  }
  &:hover .custom-card{
    display: block;
    background-color: #4343439b;

  }
}


.lang{
  width: 50px;
  height: 30px;
  border-radius: 5px;
}

</style>