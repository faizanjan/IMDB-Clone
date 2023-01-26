let THE_MOVIE = localStorage.getItem("THE_MOVIE");
let localResponse = JSON.parse(localStorage.getItem("favoriteMovies"));
let favorites = (localResponse !== null ? localResponse : []);

(async function loadMovie() {

    document.querySelector("title").innerText = THE_MOVIE;

    let movie = await funcs.fetchMovies(THE_MOVIE);

    document.querySelector(".movie-title").innerText = "  " + movie.Title;
    document.querySelector(".movie-year").innerText = "  " + movie.Year;
    document.querySelector(".movie-plot").innerText = "  " + movie.Plot;
    document.querySelector(".movie-actors").innerText = "  " + movie.Actors;
    document.querySelector(".movie-genre").innerText = "  " + movie.Genre;
    document.querySelector(".movie-type").innerText = "  " + movie.Type;
    document.querySelector(".movie-director").innerText = "  " + movie.Director;
    document.querySelector(".movie-released").innerText = "  " + movie.Released;
    document.querySelector(".movie-runtime").innerText = "  " + movie.Runtime;
    document.querySelector(".movie-rating").innerText = "  " + movie.imdbRating;
    document.querySelector(".movie-poster").setAttribute('src', movie.Poster)

    funcs.handleFavBtn(movie)

})();