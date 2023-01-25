let THE_MOVIE = localStorage.getItem("THE_MOVIE");
let favorites = JSON.parse(localStorage.getItem("favoriteMovies"));

(async function loadMovie(){

    document.querySelector("title").innerText=THE_MOVIE;

    let movie = await funcs.fetchMovies(THE_MOVIE);

    document.querySelector(".movie-title").innerText= "  "+movie.Title;
    document.querySelector(".movie-year").innerText="  "+movie.Year;
    document.querySelector(".movie-plot").innerText="  "+movie.Plot;
    document.querySelector(".movie-actors").innerText="  "+movie.Actors;
    document.querySelector(".movie-genre").innerText="  "+movie.Genre;
    document.querySelector(".movie-type").innerText="  "+movie.Type;
    document.querySelector(".movie-director").innerText="  "+movie.Director;
    document.querySelector(".movie-released").innerText="  "+movie.Released;
    document.querySelector(".movie-runtime").innerText="  "+movie.Runtime;
    document.querySelector(".movie-rating").innerText="  "+movie.imdbRating;
    document.querySelector(".movie-poster").setAttribute('src', movie.Poster)

    // HANDLING FAVORITE BUTTON
    // function handleFavBtn() {
    //     let addToFavBtn = document.getElementById("add-to-fav");

    //     addToFavBtn.addEventListener("mouseover", mouseInOnFav)
    //     function mouseInOnFav() {
    //         addToFavBtn.classList.remove("fa-regular");
    //         addToFavBtn.classList.add("fa-solid");
    //     }

    //     addToFavBtn.addEventListener("mouseout", mouseOutOnFav)
    //     function mouseOutOnFav() {
    //         addToFavBtn.classList.remove("fa-solid");
    //         addToFavBtn.classList.add("fa-regular");
    //     }

    //     let isFav = false;
    //     for (let m of favorites) { //check if the movie is already in favorites
    //         if ((m.imdbID === movie.imdbID)) {
    //             isFav = true;
    //             addToFavBtn.removeEventListener("mouseout", mouseOutOnFav)
    //             addToFavBtn.classList.remove("fa-regular");
    //             addToFavBtn.classList.add("fa-solid");
    //             addToFavBtn.setAttribute("title", "Remove from favorites");
    //         }
    //     }

    //     addToFavBtn.addEventListener("click", onClickingFav)
    //     function onClickingFav() {
    //         if (!isFav) { // if the movie is not in favorites
    //             alert("Added to favorites")
    //             // CHANGING BUTTON APPEARANCE
    //             addToFavBtn.removeEventListener("mouseout", mouseOutOnFav)
    //             addToFavBtn.classList.remove("fa-regular");
    //             addToFavBtn.classList.add("fa-solid");

    //             // ACTUALLY ADDING TO FAVORITES
    //             favorites.push(movie);
    //             localStorage.setItem("favoriteMovies", JSON.stringify(favorites));
    //         }
    //         else { // if the movie is already in favorites
    //             // CHANGING BUTTON APPEARANCE
    //             addToFavBtn.addEventListener("mouseout", mouseOutOnFav)
    //             addToFavBtn.classList.add("fa-regular");
    //             addToFavBtn.classList.remove("fa-solid");

    //             // ACTUALLY REMOVING FROM FAVORITES
    //             favorites = favorites.filter(m => movie.imdbID !== m.imdbID);
    //             console.log(favorites);
    //             localStorage.setItem("favoriteMovies", JSON.stringify(favorites));
    //         }
    //         isFav = !isFav;
    //     }
    // }
    funcs.handleFavBtn(movie)

})();