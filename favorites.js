let favorites = JSON.parse(localStorage.getItem("favoriteMovies"));

let list = document.getElementById("fav-list")
let movieNames = [];
renderFavourites();
function renderFavourites() {
    list.innerHTML = "";
    for (let m of favorites) {
        let li = document.createElement("li");
        li.innerHTML = `
        <li class="text-light ">
            <div class="card m-3 border-warning">
                <div class="row g-0 d-flex fav-movie-item bg-dark justify-content-between align-items-center">
                    <div class="image-container col-md-2 d-flex align-items-center"
                        style="width: 10%;">
                        <a class="position-relative play-on-hover play" href="#">
                            <img class="img-fluid queue-img img-fluid rounded-start"
                                src="${m.Poster}"
                                alt="Poster Not Available" />
                        </a>
                    </div>
                    <div class="col-8 ">
                        <div class="card-body d-flex flex-column p-1">
                            <p class="card-title text-light fw-bold fs-3 align-self-start">${m.Title}</p>
                            <span class="card-text d-flex justify-content-between">
                                <small class="release-date text-muted fs-4">
                                    ${m.Year}
                                </small>
                            </span>
                        </div>
                    </div>
                    <i class="col-1 fa-solid fa-xmark text-light delete-fav" data-imdbID="${m.imdbID}"></i>
                </div>
            </div>
        </li>
        `;
        list.appendChild(li);
        movieNames.push(m.Title);
    }
    deleteFav = document.getElementsByClassName("delete-fav");
}
var deleteFav;

for (let delBtn of deleteFav) {
    delBtn.addEventListener("click", function removeFav() {
        favorites = favorites.filter(movie => {
        console.log(delBtn.dataset.imdbid, movie.imdbID);
        return delBtn.dataset.imdbid !== movie.imdbID
    });
    localStorage.setItem("favoriteMovies", JSON.stringify(favorites));
    renderFavourites();
    });
}
