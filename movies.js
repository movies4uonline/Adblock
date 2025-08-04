
const movies = [
  {
    "title": "Ronth (2025)",
    "poster": "https://image.tmdb.org/t/p/w500/abcd.jpg",
    "language": "Malayalam",
    "quality": "HD"
  },
  {
    "title": "The Marvels",
    "poster": "https://image.tmdb.org/t/p/w500/xyz.jpg",
    "language": "English",
    "quality": "CAM"
  }
];

const container = document.getElementById('movie-container');

movies.forEach(movie => {
  const card = document.createElement('div');
  card.className = 'movie-card';
  card.innerHTML = \`
    <img src="\${movie.poster}" alt="\${movie.title}">
    <h3>\${movie.title}</h3>
    <p>Language: \${movie.language}</p>
    <p>Quality: \${movie.quality}</p>
  \`;
  container.appendChild(card);
});
