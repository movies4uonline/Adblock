function openModal(title) {
  document.getElementById('movieModal').style.display = 'flex';
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('watchLink').href = `https://example.com/watch/${title}`;
  document.getElementById('downloadLink').href = `https://example.com/download/${title}`;
  document.getElementById('telegramLink').href = `https://t.me/movies4u_bot?start=${title}`;
}

function closeModal() {
  document.getElementById('movieModal').style.display = 'none';
}
