
async function fetchMovie() {
  const apiKey = "6c405598ca978aae93d05f8b06126966"; // Replace with your TMDb API key
  const id = document.getElementById("movieId").value;
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos`);
  const data = await res.json();

  const movieEl = document.getElementById("movieContainer");
  const trailer = data.videos.results.find(v => v.type === "Trailer");

  movieEl.innerHTML = `
    <h2>${data.title}</h2>
    <p>${data.overview}</p>
    <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title}" />
    ${trailer ? `<p><a href="https://www.youtube.com/watch?v=${trailer.key}" target="_blank">Watch Trailer</a></p>` : ""}
  `;
}
