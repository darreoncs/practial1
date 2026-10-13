document.getElementById("wrapper").innerHTML = "";

const movies = [
    {
        title: "Beetlejuice",
        year: 1988,
        genre: "comedy"
    },
    {
        title: "The Cabin in the Woods",
        year: 2011,
        genre: "horror"

    },
    {
        title: "The Conjuring",
        year: 2013,
        genre: "horror"
    },
    {
        title: "Moonlight",
        year: 2016,
        genre: "drama"
    },
    {
        title: "Gladiator",
        year: 2000,
        genre: "action"
    },
    {
        title: "Interstellar",
        year: 2014,
        genre: "sci-fi"
    },
    {
        title: "Avatar",
        year: 2009,
        genre: "sci-fi"
    },
    {
        title: "Mad Max",
        year: 2015,
        genre: "action"
    },
    {
        title: "21 Jump Street",
        year: 2012,
        genre: "comedy"
    },
    {
        title: "Fight Club",
        year: 1999,
        genre: "drama"
    }
];

function render(moviesToShow) {

     document.getElementById("movieCount").textContent = 
    `Showing ${moviesToShow.length} of ${movies.length} movies`;
    
    const movieList = document.getElementById("movie-list");

    const movieHTML = moviesToShow.map(function(movie) {
        return `
            <div>
                <h2>${movie.title}</h2>
                <p>Year: ${movie.year}</p>
                <p>Genre: ${movie.genre}</p>
            </div>
        `;
    });
    movieList.innerHTML = movieHTML.join("");
}

render(movies);

document.getElementById("sortTitle").addEventListener("click", function() {
    const sortedMovies = [...movies].sort(function(a, b) {
        return a.title.localeCompare(b.title);
    });
    render(sortedMovies);
});

document.getElementById("sortYear").addEventListener("click", function() {
    const sortedMovies = [...movies].sort(function(a, b) {
        return a.year - b.year;
    });
    render(sortedMovies);
});

document.getElementById("genreFilter").addEventListener("change", function() {
    const selectedGenre = this.value;
    if (selectedGenre === "all") {
        render(movies);
    } else {
        const filteredMovies = movies
            .filter(function(movie) {
                return movie.genre === selectedGenre;
            })
            .sort(function(a, b) {
                return a.title.localeCompare(b.title);
            });
        render(filteredMovies);
    }
});

document.getElementById("pickForme").addEventListener("click", function() {
    const insideGenre = document.getElementById("genreFilter").value;
    let moviesToPickFrom = movies;
    if (insideGenre !== "all") {
        moviesToPickFrom = movies.filter(function(movie) {
            return movie.genre === insideGenre;
        });
    }
    if (moviesToPickFrom.length > 0) {
        const randomIndex = Math.floor(Math.random() * moviesToPickFrom.length);
        const pickedMovie = moviesToPickFrom[randomIndex];
        render([pickedMovie]);
    } else {
        render([]);
    }
});

