
document.addEventListener("DOMContentLoaded", () => {
  function renderMovies(sectionId, movieList) {
    const container = document.getElementById(sectionId);
    movieList.forEach(movie => {
      const div = document.createElement("div");
      div.className = "movie-card";
      div.innerHTML = \`
        <img src="\${movie.poster}" alt="\${movie.title}" />
        <div class="movie-title">\${movie.title}</div>
      \`;
      div.onclick = () => showModal(movie);
      container.appendChild(div);
    });
  }

  function showModal(movie) {
    const modal = document.getElementById("modal");
    const content = document.getElementById("modal-content");
    content.innerHTML = \`
      <h2>\${movie.title}</h2>
      <video src="\${movie.video}" controls autoplay style="width:100%"></video>
    \`;
    modal.classList.remove("hidden");
  }

  document.getElementById("modal").addEventListener("click", () => {
    document.getElementById("modal").classList.add("hidden");
  });

  renderMovies("trending-movies", movies.trending);
  renderMovies("south-movies", movies.south);
});
