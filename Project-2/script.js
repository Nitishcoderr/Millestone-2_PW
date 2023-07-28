const API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieBox = document.querySelector('#movie-box')
// Data fetch
const getMovie = async(api)=>{
    const response = await fetch(api)
    const data = await response.json()
    showMovies(data.results)
}

// data showing on card
const showMovies = (data)=>{
    // reset moviebox
    movieBox.innerHTML = " "
    data.forEach((item)=>{
        const box = document.createElement('div');
        box.classList.add('box');
        box.innerHTML = `
        <div class="poster-img">
        <img src="${ IMGPATH + item.poster_path}" alt="img">
        </div>
                <div class="movie-about">
                    <h2>Title: ${item.title}</h2>
                    <div class="watch-btn">
                    <button>WATCH NOW</button>
                    </div>
                </div>
        `;
        movieBox.appendChild(box)
    });
};

document.querySelector('#search').addEventListener('keyup',function(event){
    if(event.target.value != ""){
        getMovie(SEARCHAPI + event.target.value)
    }
    else{
        getMovie(API)
    }
})


getMovie(API)