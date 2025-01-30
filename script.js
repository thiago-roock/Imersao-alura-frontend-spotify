const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://localhost:5500');

    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url, {
        mode: 'no-cors',
        credentials: 'include',
        method: 'GET',
        headers: headers
      })
        .then((response) => response.json())
        .then((result) => displayResults(result, searchTerm))
        .catch(error => console.log('Request failed: ' + error.message));

}

function displayResults(result, searchTerm) {
    resultPlaylist.classList.add("hidden");
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = ''; // Limpa os resultados anteriores    

    const filteredArtists = result.filter(artist => artist.name.toLowerCase().includes(searchTerm) );


  filteredArtists.forEach(artist => {    
      const artistCard = document.createElement('div');
      artistCard.classList.add('artist-card');

      artistCard.innerHTML = `
          <div class="card-img">
              <img class="artist-img" src="${artist.urlImg}" />
              <div class="play">
                  <span class="fa fa-solid fa-play"></span>
              </div>
          </div>
      <div class="card-text">              
              <span class="artist-name">${artist.name}</span>
              <span class="artist-categorie">Artista</span>
          </div>
      `;
       gridContainer.appendChild(artistCard);
  });

  resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === '') {
        resultPlaylist.classList.remove('hidden');
        resultArtist.classList.add('hidden');
        return;
    }

    requestApi(searchTerm);
});