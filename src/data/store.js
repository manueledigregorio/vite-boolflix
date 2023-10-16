import { reactive } from 'vue'

export const store = reactive({

apiUrl:'https://api.themoviedb.org/3/search/movie?api_key=9a87e876f8f87992b3b7000125862a4e&query',
  searchFilm: [],
  nameToSearch:''

})