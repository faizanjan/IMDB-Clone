(function () {
    let favorites = JSON.parse(localStorage.getItem("favoriteMovies"));

    //RENDER FAVORITE MOVIES
    let list = document.getElementById("fav-list")
    renderFavourites(favorites);
    function renderFavourites(moviesToRender) {
        list.innerHTML = "";
        for (let m of moviesToRender) {
            let li = document.createElement("li");
            li.innerHTML = `
            <div class="card m-3 border-warning text-light">
            <div class="row g-0 d-flex fav-movie-item bg-dark justify-content-between align-items-center">
            <div class="image-container col-md-2 d-flex align-items-center"
                        style="width: 10%;">
                        <a class="position-relative goToMov" href="moviepage.html" data-themovie="${m.Title}" target="_blank">
                        <img class="img-fluid img-fluid rounded-start"
                        src="${m.Poster}"
                        alt="Poster Not Available" />
                        </a>
                        </div>
                        <div class="col-8 ">
                        <div class="card-body d-flex flex-column p-1">
                        <a  href="moviepage.html" target="_blank" class="goToMov text-decoration-none" data-themovie="${m.Title}">
                        <p class="card-title text-light fw-bold fs-3 align-self-start">${m.Title}</p> 
                        </a>
                        <span class="card-text d-flex justify-content-between">
                        <small class="release-date text-muted fs-4">
                        ${m.Year}
                        </small>
                        </span>
                        </div>
                        </div>
                        <i class="col-1 fa-solid fa-xmark text-light delete-fav" title="Remove from Favorites?" data-imdbID="${m.imdbID}"></i>
                        </div>
                        </div>
                        `;
            list.appendChild(li);
            // movieNames.push(m.Title);
        }
        deleteFav = document.getElementsByClassName("delete-fav");
        addListenerToDeleteBtn()
    }

    let movieNames = [];
    for (let i of favorites) {
        movieNames.push(i.Title);
    }

    //HANDLING DELETE FUNCTIONALITY
    var deleteFav;
    function addListenerToDeleteBtn() {
        for (let delBtn of deleteFav) {
            delBtn.addEventListener("click", function removeFav() {
                favorites = favorites.filter(movie => {
                    console.log(delBtn.dataset.imdbid, movie.imdbID);
                    return delBtn.dataset.imdbid !== movie.imdbID
                });
                localStorage.setItem("favoriteMovies", JSON.stringify(favorites));
                alert("Movie removed from favorites")
                renderFavourites(favorites);
            });
        }
    }

    // SEARCH IN FAVORITES
    let searchFav = document.getElementById("search-fav");
    searchFav.addEventListener("keyup", handleSearchKeypress);
    let suggestionList = document.getElementById("suggestion-list");
    let suggestionBox = document.getElementById("suggestion-box");

    function handleSearchKeypress(e) {
        if (e.key === "Enter") {
            let newList = favorites.filter((m) => m.Title.toLowerCase().startsWith(searchFav.value.toLowerCase()));
            renderFavourites(newList);
        }
        // AUTOCOMPLETE (SUGGESTIONS)
        else {
            suggestionList.innerHTML = "";
            let suggestions = [];
            for (let m of movieNames) {
                if (m.toLowerCase().startsWith(searchFav.value.toLowerCase())) {
                    suggestions.push(m);
                }
            }
            if (suggestions.length != 0) {
                suggestionBox.style.display = "block";
            }
            if (searchFav.value === "") {
                suggestionBox.style.display = "none";
            }
            for (let s of suggestions) {
                let li = document.createElement("li");
                li.classList.add("fs-5", "text-muted");
                li.id = "suggestion";
                li.innerText = s;
                suggestionList.appendChild(li);
                // console.log(li, suggestionList);
                li.addEventListener("click", function (e) { // event listener for suggestions click
                    searchFav.value = s;
                    renderFavourites(favorites.filter((m) => m.Title.toLowerCase() === s.toLowerCase()));
                })
            }
        }

    }

    // GOING TO MOVIE PAGE
    let goToMov = document.getElementsByClassName("goToMov");
    for (let g of goToMov) {
        g.addEventListener("click", function () {
            console.log(g.dataset.themovie);
            localStorage.setItem("THE_MOVIE", g.dataset.themovie);
        })
    }

    document.addEventListener("click", function (e) { // hides the suggestions when clicked outside
        if (e.target != searchFav && e.target != suggestionBox) {
            suggestionBox.style.display = "none";
        }
    })
})();