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

// function getTopRated() { 
//     const sortedMovies = movies.sort((a, b) => b.rating - a.rating)
//     return sortedMovies.splice(0, 3)
// } // output: an array no longer than 3 movies

// console.log(getTopRated())

function featuredActors(actors = []) {
    return movies.filter(movie => movie.starring.includes(actors))
} // output: a movie or a string

console.log(featuredActors(["Tom Hanks", "Robin Wright"]))