let data = [];

fetch('travel_recommendation_api.json')
  .then(response => response.json())
  .then(json => data = json)
  .catch(error => console.error("Error loading JSON:", error));

function searchPlaces() {
  const input = document.getElementById("searchInput").value.toLowerCase().trim();
  const results = document.getElementById("results");
  const modal = document.getElementById("modal");

  results.innerHTML = "";

  const filtered = data.filter(item =>
    item.type.toLowerCase() === input ||
    item.type.toLowerCase() === input + "s"
  );

  if (filtered.length === 0) {
    results.innerHTML = "<p>No results found.</p>";
  } else {
    filtered.forEach(place => {
      results.innerHTML += `
        <div class="result-card">
          <img src="${place.imageUrl}" alt="${place.name}">
          <h3>${place.name}</h3>
          <p>${place.description}</p>
        </div>
      `;
    });
  }

  modal.classList.remove("hidden");
}

function clearResults() {
  document.getElementById("searchInput").value = "";
  document.getElementById("results").innerHTML = "";
  closeModal();
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}
