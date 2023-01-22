let searchField = document.getElementById("search-field")
let url = "http://www.omdbapi.com/?i=tt3896198&apikey=91f3949f&t=";
let main = document.getElementsByTagName("main")[0];
let favorites = JSON.parse(localStorage.getItem("favoriteMovies"));

async function fetchMovies(movieName) {
    let response = await fetch(url + movieName);
    let movie = await response.json();
    // console.log(movie);
    return movie;
}

searchField.addEventListener("keydown", handleSearch);

async function handleSearch(event) {
    if (event.key === "Enter") {
        let resultMovie = await fetchMovies(searchField.value);
        searchField.value = "";
        main.innerHTML = "";

        // IF THE MOVIE IS FOUND
        if (resultMovie.Response === "True") {
            let showResult = document.createElement("div");
            showResult.innerHTML = `
                    <div id="movie-card" class="card m-3 bg-warning text-dark">
                        <div class="row g-0 d-flex align-items-around">
                            <div class="image-container col-md-4 d-flex align-items-center">
                                <a class="position-relative play-on-hover play" href="#">
                                    <img class="img-fluid latest-release-image" src="${resultMovie.Poster}"
                                        class="img-fluid rounded-start" alt="Poster not available" />
                                </a>
                            </div>
                            <div class="col-md-7 m-2">
                                <div class="card-body d-flex flex-column justify-content-around align-items-around h-100">
                                
                                <i id="add-to-fav" title="Add to Favorites" class="fa-regular text-light fa-heart mt-1 mb-3 fs-3 align-self-end"></i>
                                <h1 class="card-title">${resultMovie.Title}</h1>
                                    <span class="card-text d-flex flex-column justify-content-center">
                                        <p class="release-date text-light fs-4">
                                            ${resultMovie.Year}
                                        </p>
                                        <p class="actors text-light fs-4"> ${resultMovie.Actors} </p>
                                        <!-- <p class="plot fs-5">${resultMovie.Plot}</p> -->
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    `

            main.appendChild(showResult);

            // HANDLING FAVORITE BUTTON
            let addToFavBtn = document.getElementById("add-to-fav");
            
            addToFavBtn.addEventListener("mouseover", mouseInOnFav)
            function mouseInOnFav() {
                addToFavBtn.classList.remove("fa-regular");
                addToFavBtn.classList.add("fa-solid");
            }
            
            addToFavBtn.addEventListener("mouseout", mouseOutOnFav)
            function mouseOutOnFav() {
                addToFavBtn.classList.remove("fa-solid");
                addToFavBtn.classList.add("fa-regular");
            }
            
            let isFav = false;
            for (let m of favorites) { //check if the movie is already in favorites
                if ((m.imdbID === resultMovie.imdbID)) {
                    isFav = true;
                    addToFavBtn.removeEventListener("mouseout", mouseOutOnFav)
                    addToFavBtn.classList.remove("fa-regular");
                    addToFavBtn.classList.add("fa-solid");
                }
            }

            addToFavBtn.addEventListener("click", onClickingFav)
            function onClickingFav() {
                if (!isFav) { // if the movie is not in favorites
                    alert("Added to favorites")
                    // CHANGING BUTTON APPEARANCE
                    addToFavBtn.removeEventListener("mouseout", mouseOutOnFav)
                    addToFavBtn.classList.remove("fa-regular");
                    addToFavBtn.classList.add("fa-solid");

                    // ACTUALLY ADDING TO FAVORITES
                    favorites.push(resultMovie);
                    localStorage.setItem("favoriteMovies", JSON.stringify(favorites));
                }
                else { // if the movie is already in favorites
                    // CHANGING BUTTON APPEARANCE
                    addToFavBtn.addEventListener("mouseout", mouseOutOnFav)
                    addToFavBtn.classList.add("fa-regular");
                    addToFavBtn.classList.remove("fa-solid");

                    // ACTUALLY ADDING TO FAVORITES
                    favorites = favorites.filter(movie => movie.imdbID!==resultMovie.imdbID);
                    localStorage.setItem("favoriteMovies", JSON.stringify(favorites));
                }
                isFav=!isFav;                
            }


        }

        // IF THE MOVIE IS NOT FOUND
        else {
            let p = document.createElement("p");
            p.classList.add("fs-1", "text-warning")
            p.innerHTML = "Movie not found! <br> Try again"
            main.appendChild(p);
        }

    }
}

//FAVORITES
