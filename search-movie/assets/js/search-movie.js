/*API TMDB*/

const API_KEY = "api_key=2e544a09ae1f544670031054df422910";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const searchURL = BASE_URL + "/search/movie?" + API_KEY

const containerMovie = document.querySelector('.container-movie')
const form = document.querySelector('.form')
const search = document.querySelector('.search-movie')

getMovies(API_URL)

function getMovies(url) {
  fetch(url).then(res => res.json()).then(data => {
    showMovies(data.results)
  })
}

function showMovies(data) {
    const containerMovie = document.querySelector('.container-movie')

  data.forEach(movie => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie')
    movieEl.innerHTML = `
    <div class="poster">
      <img src="${IMG_URL + poster_path}" alt="${title}" />
    </div>
    <!--movie info-->
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="evaluation">${vote_average}</span>
      <!--Sinops-->
      <div class="sinops">
        ${overview}
      </div>
    </div>`

    containerMovie.appendChild(movieEl)
  })
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const searchTerm = search.value
  if (searchTerm) {
    getMovies(searchURL + "&query=" + searchTerm)
  } else {
    getMovies(API_URL)
  }
})