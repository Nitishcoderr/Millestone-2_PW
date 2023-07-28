# MOVIE APP

* In this application i fetched the data from themoviedb to build this application

* In this application user can search movie 

### Fetch function

```
const movieBox = document.querySelector('#movie-box')
// Data fetch
const getMovie = async(api)=>{
    const response = await fetch(api)
    const data = await response.json()
    showMovies(data.results)
}
```

### Search function
```
document.querySelector('#search').addEventListener('keyup',function(event){
    if(event.target.value != ""){
        getMovie(SEARCHAPI + event.target.value)
    }
    else{
        getMovie(API)
    }
})
```