const movies = [
    { 
      title: "The Dark Knight", 
      genre: "action", 
      rating: 5,
      starring: ["Christian Bale", "Heath Ledger", "Gary Oldman"] 
    },
    { 
      title: "Forrest Gump", 
      genre: "drama", 
      rating: 4,
      starring: ["Tom Hanks", "Robin Wright"] 
    },
    { 
      title: "Inception", 
      genre: "sci-fi", 
      rating: 4,
      starring: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"] 
    },
    { 
      title: "Inception", 
      genre: "sci-fi", 
      rating: 4,
      starring: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"] 
    },
    { 
      title: "Inception", 
      genre: "sci-fi", 
      rating: 4,
      starring: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"] 
    },
  ];

function getTopRated() { 
    const sortedMovies = movies.sort((a, b) => b.rating - a.rating)
    return sortedMovies.splice(0, 3)
} // output: an array no longer than 3 movies

console.log(getTopRated())

function featuredActors(actors = []) {
    let filteredMovies = movies.filter(movie => actors.every(actor => movie.starring.includes(actor)));
    if (filteredMovies.length === 0) {
        const randomIndex = Math.floor(Math.random() * movies.length);
        return movies[randomIndex];
    } else {
        return filteredMovies;
    }
} // output: a movie or a string

console.log(featuredActors(["Tom Hanks", "Robin Wright"]))