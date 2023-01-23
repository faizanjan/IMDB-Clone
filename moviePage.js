let THE_MOVIE = localStorage.getItem("THE_MOVIE");

(async function loadMovie(){
    let movie = await fetchMovies(THE_MOVIE);
    // console.log(movie.Title, movie);
//     let display = document.createElement("div");
//     // console.log(movie);
//     display.classList.add("w-75", "h-50")
//     display.innerHTML = `
//     <div id="fav-movie-card" class="card m-3 bg-warning text-dark m-auto mt-5">
//         <div class="row g-0 d-flex align-items-around">
//             <div class="image-container col-md-4 d-flex align-items-center" >
//                 <a class="position-relative play-on-hover play" href="#">
//                     <img class="img-fluid latest-release-image" src="${movie.Poster}"
//                         class="img-fluid rounded-start" alt="Poster not available" />
//                 </a>
//             </div>
//             <div class="col-md-7 m-2">
//                 <div class="card-body d-flex flex-column justify-content-around align-items-around h-100">

//                     <i id="add-to-fav" title="Add to Favorites"
//                         class="fa-regular text-light fa-heart mt-1 mb-3 fs-3 align-self-end"></i>
//                     <h1 class="card-title">${movie.Title}</h1>
//                     <span class="card-text d-flex flex-column justify-content-center">
//                         <p class="release-date text-grey fs-4">
//                             ${movie.Year}
//                         </p>
//                         <!-- <p class="actors text-light fs-4"> ${movie.Actors} </p>-->
//                         <p class="plot fs-5 text-light">${movie.Plot}</p>
//                     </span>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `
// let main = document.getElementsByTagName("main")[0];
// main.appendChild(display);

    let movieTitle = document.querySelector(".movie-title")
    let movieYear = document.querySelector(".movie-year")
    let moviePlot = document.querySelector(".movie-plot")
    let movieActors = document.querySelector(".movie-actors")
    let moviePoster = document.querySelector(".movie-poster")

    movieTitle.innerText= movie.Title;
    movieYear.innerText=movie.Year;
    moviePlot.innerText=movie.Plot;
    moviePoster.setAttribute('src', movie.Poster)
    movieActors.innerText=(movie.Actors);
    console.log(movie.Actors);

})();