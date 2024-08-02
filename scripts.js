document.addEventListener("DOMContentLoaded", function () {
  const beerList = document.getElementById("beerList");

  // Fetch the JSON data
  fetch("beers.json")
    .then((response) => response.json())
    .then((beers) => {
      beers.forEach((beer) => {
        const card = document.createElement("div");
        // Tailwind classes for card styling with hover effect
        card.className =
          "bg-gray-700 rounded overflow-hidden shadow-lg p-4 m-2 text-center transition-transform transform hover:scale-105 hover:shadow-2xl";

        // Determine color based on quantity
        let quantityColor;
        if (beer.Quantity <= 5) {
          quantityColor = "text-red-400"; // 0-5: Red
        } else if (beer.Quantity <= 23) {
          quantityColor = "text-yellow-400"; // 6-23: Yellow
        } else {
          quantityColor = "text-green-400"; // 24+: Green
        }

        // Construct the card's inner HTML with centered text
        card.innerHTML = `
          <h2 class="font-bold text-xl mb-2 text-white">${beer.Name}</h2>
          <div class="flex justify-center items-center text-gray-300">
            <p class="${quantityColor} font-semibold">Quantity: ${beer.Quantity}</p>
          </div>
        `;

        beerList.appendChild(card);
      });
    })
    .catch((error) => console.error("Error fetching beer data:", error));
});

// Update the footer year automatically
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
});
