// Load movies from JSON
fetch('movies.json')
  .then((res) => res.json())
  .then((movies) => {
    displayMovies(movies);
    setupSearch(movies);
  });

function displayMovies(movies) {
  const container = document.getElementById('movie-grid');
  container.innerHTML = '';
  movies.forEach((movie) => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
      <div class="poster-container" onclick="openModal('${movie.title}', '${movie.trailer}', '${movie.watch}', '${movie.download}')">
        <img src="${movie.poster}" alt="${movie.title}" class="poster" />
        <div class="badge">${movie.badge}</div>
        <div class="play-button">&#9658;</div>
      </div>
      <div class="title">${movie.title}</div>
    `;
    container.appendChild(card);
  });
}

function setupSearch(movies) {
  const input = document.getElementById('search-input');
  input.addEventListener('input', () => {
    const keyword = input.value.toLowerCase();
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(keyword)
    );
    displayMovies(filtered);
  });
}

function openModal(title, trailer, watch, download) {
  const modal = document.getElementById('modal');
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close" onclick="closeModal()">&times;</span>
      <h2>${title}</h2>
      <a href="${trailer}" target="_blank">▶ Watch Trailer</a><br/>
      <a href="${watch}" target="_blank">🎬 Watch Now</a><br/>
      <a href="${download}" target="_blank">⬇ Download</a>
    </div>
  `;
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}
