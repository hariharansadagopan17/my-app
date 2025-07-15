document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');

  searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value;
    console.log('Searching for:', searchTerm);
  });
});