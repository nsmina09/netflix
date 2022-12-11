const apiKey = 'f95aecc47e9b7acb63aae287f0cd17eb';
const baseUrl = 'https://api.themoviedb.org/3';
const imageAppendUrl = 'https://image.tmdb.org/t/p/w500';

fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=f95aecc47e9b7acb63aae287f0cd17eb')
    .then(data => data.json())
    .then(allData => displayMovies(allData))
    .catch(error => errorHandle());

function displayMovies(allData) {
    htmlData = '';
    movies = allData.results;

    for (let movie of movies) {
        poster = JSON.stringify(movie.poster_path).replace(/\"/g, "");
        moviename = JSON.stringify(movie.title).replace(/\"/g, "");
        htmlData = `
   <div style="display:inline-block;height:150px;width:120px;background-color:black">
   <button onClick="localSaving('${moviename}')" style="background-color: black;border:none">
   <img  height="150px" width="120px" src="https://image.tmdb.org/t/p/w500${poster}" alt=${moviename}> </button>
</div> `;
        trending.innerHTML += htmlData;
    }
}

fetch('https://api.themoviedb.org/3/trending/tv/day?api_key=f95aecc47e9b7acb63aae287f0cd17eb')
    .then(data => data.json())
    .then(allData => displayTv(allData))
    .catch(error => console.log(error));

function displayTv(allData) {
    htmlData = '';
    movies = allData.results;

    for (let movie of movies) {
        poster = JSON.stringify(movie.poster_path).replace(/\"/g, "");
        moviename = JSON.stringify(movie.name).replace(/\"/g, "");
        htmlData = `
   <div style="display:inline-block;height:150px;width:120px;background-color:black">
   <button onClick="localSaving('${moviename}')" style="background-color: black;border:none">
   <img  height="150px" width="120px" src="https://image.tmdb.org/t/p/w500${poster}" alt=${moviename}> </button>
</div> `;
        freeto.innerHTML += htmlData;
    }
}

fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=f95aecc47e9b7acb63aae287f0cd17eb')
    .then(data => data.json())
    .then(allData => displayAgain(allData))
    .catch(error => console.log(error));

function displayAgain(allData) {
    htmlData = '';
    movies = allData.results;

    for (let movie of movies) {
        poster = JSON.stringify(movie.poster_path).replace(/\"/g, "");
        moviename = JSON.stringify(movie.name).replace(/\"/g, "");
        htmlData = `
   <div style="display:inline-block;height:150px;width:120px;background-color:black">
   <button onClick="localSaving('${moviename}')" style="background-color: black;border:none">
   <img  height="150px" width="120px" src="https://image.tmdb.org/t/p/w500${poster}" alt=${moviename}> </button>
</div> `;
        again.innerHTML += htmlData;
    }
}


fetch('https://api.themoviedb.org/3/movie/popular?api_key=f95aecc47e9b7acb63aae287f0cd17eb&language=en-US&page=1')
    .then(data => data.json())
    .then(allData => displayPopular(allData))
    .catch(error => console.log(error));

function displayPopular(allData) {
    htmlData = '';
    movies = allData.results;

    for (let movie of movies) {
        poster = JSON.stringify(movie.poster_path).replace(/\"/g, "");
        moviename = JSON.stringify(movie.title).replace(/\"/g, "");
        htmlData = `
   <div style="display:inline-block;height:150px;width:120px;background-color:black">
   <button onClick="localSaving('${moviename}')" style="background-color: black;border:none">
   <img  height="150px" width="120px" src="https://image.tmdb.org/t/p/w500${poster}" alt=${moviename}> </button>
</div> `;
        popular.innerHTML += htmlData;
    }
}

fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f95aecc47e9b7acb63aae287f0cd17eb&language=en-US&page=1')
    .then(data => data.json())
    .then(allData => displayToprated(allData))
    .catch(error => console.log(error));

function displayToprated(allData) {
    htmlData = '';
    movies = allData.results;

    for (let movie of movies) {
        poster = JSON.stringify(movie.poster_path).replace(/\"/g, "");
        moviename = JSON.stringify(movie.title).replace(/\"/g, "");
        htmlData = `
   <div style="display:inline-block;height:150px;width:120px;background-color:black">
   <button onClick="localSaving('${moviename}')" style="background-color: black;border:none">
   <img  height="150px" width="120px" src="https://image.tmdb.org/t/p/w500${poster}" alt=${moviename}> </button>
</div> `;
        toprated.innerHTML += htmlData;
    }
}

fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=f95aecc47e9b7acb63aae287f0cd17eb&language=en-US&page=2')
    .then(data => data.json())
    .then(allData => displayNowplaying(allData))
    .catch(error => console.log(error));

function displayNowplaying(allData) {
    htmlData = '';
    movies = allData.results;

    for (let movie of movies) {
        poster = JSON.stringify(movie.poster_path).replace(/\"/g, "");
        moviename = JSON.stringify(movie.title).replace(/\"/g, "");
        htmlData = `
   <div style="display:inline-block;height:150px;width:120px;background-color:black">
   <button onClick="localSaving('${moviename}')" style="background-color: black;border:none">
   <img  height="150px" width="120px" src="https://image.tmdb.org/t/p/w500${poster}" alt=${moviename}> </button>
</div> `;
        nowplaying.innerHTML += htmlData;
    }
}

fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=f95aecc47e9b7acb63aae287f0cd17eb&language=en-US&page=1')
    .then(data => data.json())
    .then(allData => displayUpcoming(allData))
    .catch(error => console.log(error));

function displayUpcoming(allData) {
    htmlData = '';
    movies = allData.results;

    for (let movie of movies) {
        poster = JSON.stringify(movie.poster_path).replace(/\"/g, "");
        let moviename = JSON.stringify(movie.title).replace(/\"/g, "");
        htmlData = `
   <div style="display:inline-block;height:150px;width:120px;background-color:black">
   <button onClick="localSaving('${moviename}')" style="background-color: black;border:none">
   <img  height="150px" width="120px" src="https://image.tmdb.org/t/p/w500${poster}" alt=${moviename}> </button>
</div> `;
        upcoming.innerHTML += htmlData;
    }
}

function searchMovie() {
    searchValue = searchValue.value;
    console.log(searchValue);
    localStorage.setItem('movie',searchValue);
    window.location = 'search.html';
}

function localSaving(moviename){
 localStorage.setItem('clickedMovie',moviename);
 console.log(moviename);
 window.location='detailed.html';
}

function errorHandle(){
    htmlData = `<center><p>oops something went wrong...please check your connection</p></center>`; 
    errordiv.innerHTML = htmlData;
}