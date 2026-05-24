const anime = [
  {
    title: "Attack on Titan",
    rating: 9.1
  },
  {
    title: "Solo Leveling",
    rating: 8.9
  }
];

const animeList = document.getElementById("anime-list");

anime.forEach(a => {
  animeList.innerHTML += `
    <div class="card">
      <h2>${a.title}</h2>
      <p>⭐ Rating: ${a.rating}</p>
    </div>
  `;
});
