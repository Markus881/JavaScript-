const searchBar = document.getElementById('searchBar');
const url =
  'https://yts.mx/api/v2/list_movies.json?sort_by=download_count&limit=50';
const urlR = 'https://yts.mx/api/v2/movie_suggestions.json?movie_id=4';
let ytsMovies = [];
const submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  randomMovies();
});
const randomMovies = async () => {
  try {
    const res = await fetch(urlR);
    ytsMovies = await res.json();
    displayMovies(ytsMovies.data.movies);
    // console.log(ytsMovies);
  } catch (err) {
    console.log(err);
  }
};

searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredMovies = ytsMovies.data.movies.filter((movie) => {
    return movie.title_english.toLowerCase().includes(searchString);
  });
  displayMovies(filteredMovies);
});

const loadMovies = async () => {
  try {
    const res = await fetch(url);
    ytsMovies = await res.json();
    displayMovies(ytsMovies.data.movies);
    // console.log(ytsMovies);
  } catch (err) {
    console.log(err);
  }
};

const displayMovies = (movie_list) => {
  const htlmString = movie_list
    .map((movie) => {
      return `
    <li class="movie">
    <img src="${movie.medium_cover_image}"></img>
    <h2>${movie.title_long}
    <p>${movie.description_full}

    </li>
    `;
    })
    .join('');
  movieList.innerHTML = htlmString;
};

loadMovies();
