/* 
🌟 APP: Make Netflix

Create a fetchMovies() function that will make a dynamic API call to what you need 👇
========================================

- fetchMovies()

** fetchMovies takes in an URL, a div id or class from the HTML, and a path (poster or backdrop)



These are the 3 main functions you must create 👇
========================================

- getOriginals()

- getTrendingNow()

- getTopRated()


** These functions will provide the URL you need to fetch movies of that genere **

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 CLASS 👉 'original__movies' = Div that holds Netflix Originals
#2 ID 👉 'trending' = Div that holds trending Movies
#3 ID 👉 'top_rated' = Div that holds top rated Movies
*/

// Call the main functions the page is loaded
window.onload = () => {
  getOriginals();
  getTrendingNow();
  getTopRated();
};

/**
 * Makes dynamic API calls to retrieve movie data and displays it in the specified HTML element.
 * @param {string} url - The URL of the API endpoint to fetch movie data from.
 * @param {string} dom_element - The HTML element where the movie data will be displayed.
 * @param {string} path_type - The type of image path to use for displaying movie images.
 */
function fetchMovies(url, dom_element, path_type) {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then((data) => {
      showMovies(data, dom_element, path_type);
    })
    .catch((error) => {
      console.log(error);
    });
}

//  ** Function that displays the movies to the DOM **
showMovies = (movies, dom_element, path_type) => {
  // Create a variable that grabs id or class
  var moviesEl = document.querySelector(dom_element);

  // Loop through object
  for (var movie of movies.results) {
    // Within loop create an img element
    var imageElement = document.createElement("img");

    // Set attribute
    imageElement.setAttribute("data-id", movie.id);

    // Set source
    imageElement.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`;

    // Add event listener to handleMovieSelection() onClick
    imageElement.addEventListener("click", (e) => {
      handleMovieSelection(e);
    });
    // Append the imageElement to the dom_element selected
    moviesEl.appendChild(imageElement);
  }
};

// ** Function that fetches Netflix Originals **
function getOriginals() {
  var url =
    "https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213";
  fetchMovies(url, ".original__movies", "poster_path");
}
// ** Function that fetches Trending Movies **
function getTrendingNow() {
  var url =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045";
  fetchMovies(url, "#trending", "backdrop_path");
}
// ** Function that fetches Top Rated Movies **
function getTopRated() {
  var url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1";
  fetchMovies(url, "#top_rated", "backdrop_path");
}

/**
 * Retrieves the movie trailer data from an API based on the provided movie ID.
 * @param {number} id - The ID of the movie for which the trailer data is requested.
 * @returns {Promise} - A promise that resolves to the movie trailer data in JSON format if the fetch is successful. If there is an error, the promise is rejected with an error message.
 */
async function getMovieTrailer(id) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`;
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    throw new Error("Something went wrong");
  }
}

/**
 * Updates the movie trailer displayed in an iframe based on the provided list of trailers.
 * If there are trailers available, it sets the source of the iframe to the first trailer's YouTube link.
 * If there are no trailers, it hides the iframe and displays a message indicating that the movie trailer was not found.
 *
 * @param {Array} trailers - A list of trailer objects containing information about each trailer, including the YouTube key, site, and type.
 */
const setTrailer = (trailers) => {
  const iframe = document.getElementById("movieTrailer");
  const movieNotFound = document.querySelector(".movieNotFound");

  if (trailers.length > 0) {
    movieNotFound.classList.add("d-none");
    iframe.classList.remove("d-none");
    iframe.src = `https://www.youtube.com/embed/${trailers[0].key}`;
  } else {
    iframe.classList.add("d-none");
    movieNotFound.classList.remove("d-none");
  }
};

const handleMovieSelection = (e) => {
  const id = e.target.getAttribute("data-id");
  const iframe = document.getElementById("movieTrailer");
  // here we need the id of the movie
  getMovieTrailer(id).then((data) => {
    const results = data.results;
    const youtubeTrailers = results.filter((result) => {
      if (result.site == "YouTube" && result.type == "Trailer") {
        return true;
      } else {
        return false;
      }
    });
    setTrailer(youtubeTrailers);
  });

  // open modal
  $("#trailerModal").modal("show");
  // we need to call the api with the ID
};
