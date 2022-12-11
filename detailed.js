
clickedMovie = localStorage.getItem('clickedMovie')
console.log(clickedMovie);
fetch(`https://api.themoviedb.org/3/search/collection?api_key=f95aecc47e9b7acb63aae287f0cd17eb&language=en-US&query=${clickedMovie}&page=1`)
    .then(data => data.json())
    .then(result => displayClicked(result))
    .catch(error => console.log(error));

function displayClicked(result) {
    console.log(result);
    if (result.total_results == 0) {
        htmlData = `<center><p>There is no details for this movie</p></center>`;
        clicked.innerHTML = htmlData;
        detid.innerHTML='oopss..'
    } else {
        details = result.results;
        console.log(details);
        poster = JSON.stringify(details[0].backdrop_path).replace(/\"/g, "");
        originalLang = JSON.stringify(details[0].original_language).replace(/\"/g, "");
        isAdult = JSON.stringify(details[0].adult).replace(/\"/g, "") ? '18+' : '5+';
        description = JSON.stringify(details[0].overview).replace(/\"/g, "");
        name = JSON.stringify(details[0].name).replace(/\"/g, "");
        origName = JSON.stringify(details[0].original_name).replace(/\"/g, "");
        detid.innerHTML=name;
        htmlData = `
        <div class="w-100 clicked-poster"
        style="background-image: url('https://image.tmdb.org/t/p/w500${poster}');">
        <div class="row">
            <div class="col-6">
                <p>Duration 3h</p>
                <p> ${name} | ${originalLang} | ${isAdult} </p>
                <h1 class="clicked-name">${origName}</h1>
                <p class="clicked-details">${description}</p>
            </div>
            <div class="col-6"></div>
            <div class="d-flex">
                <button class="btn btn-danger rounded-pill mx-3  px-3 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-play-fill" viewBox="0 0 16 16">
                        <path
                            d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                    <span>Watch Now</span></button>
                <button class="btn btn-dark rounded-pill px-3 py-2">+ Add List</button>
            </div>
        </div>
    </div>    `;
        clicked.innerHTML = htmlData;
    }
}