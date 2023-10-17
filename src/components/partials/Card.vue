<script>
export default {
  name:'Card',
  props:{
    title: String,
    original_title: String,
    vote_average: String,
    original_language: String,
    name: String,
    original_name: String
  },

  data() {
    return {
      percorsoImg: ''
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
    }
  },

}
</script>

<template>
 
    <div class=" col-4 mt-2 " >
      <h2>{{  title || name }}</h2>
      <p>{{  original_title || original_name}}</p>
      <p>{{ vote_average }}</p>
      <img v-if="getFlagImageSource()" :src="percorsoImg" alt="">
      <h4 v-else  >{{ original_language }}</h4>
    </div>

</template>


<style lang="scss" scoped>

img{
  width: 50px;
  height: 30px;
  border-radius: 5px;
}

</style>