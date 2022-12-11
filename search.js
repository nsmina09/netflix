
movieTosearch = localStorage.getItem('movie');
console.log('local storage', movieTosearch);
fetch(`https://api.themoviedb.org/3/search/collection?api_key=f95aecc47e9b7acb63aae287f0cd17eb&language=en-US&query=${movieTosearch}&page=1`)
    .then(data => data.json())
    .then(result => display(result))
    .catch(error => console.log(error));

function display(result) {
    console.log(result);
    htmlData = '';
    movies = result.results;
    title.innerHTML = movieTosearch.toUpperCase();
    if (result.total_results == 0) {
        htmlData = `<center><p >No items to shown</p></center>`;
        resultspf.innerHTML = htmlData;
        searchfor.innerHTML=` oops..`
    } else {
        for (let movie of movies) {
            movName = JSON.stringify(movie.name).replace(/\"/g, "");
            poster = JSON.stringify(movie.backdrop_path).replace(/\"/g, "");
            searchfor.innerHTML=` ${movName}`
            htmlData = `
         
<div class="search-div ">
<div class="search-poster ">
<button onClick="localSaving2('${movName}')"  style="background-color: black;border:none;">
<img  height="200px" width="180px" src="https://image.tmdb.org/t/p/w500${poster}" alt=${movName}>
</button>
</div>
<svg  xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
  </svg>
  <h4 class="">${movName}</h4>
</div>

`;
            resultspf.innerHTML += htmlData;
        }
    }
}

function localSaving2(moviename){
    localStorage.setItem('searchedresult',moviename);
    console.log(moviename);
    window.location='detailed2.html';
   }
   
