document.addEventListener(
  "DOMContentLoaded",
  () => {
    const recommendationsContainer =
      document.getElementById("recommendations");
    const searchbarInput =
      document.getElementById("searchbarInput");
    const searchBtn =
      document.getElementById("searchBtn");
    const clearBtn =
      document.getElementById("clearBtn");

    const destinations = [
      {
        name: "Paris, France",
        description:
          "Known for its art, fashion, and culture.",
        image: "./assets/paris.jpeg",
      },
      {
        name: "Kyoto, Japan",
        description:
          "Famous for its classical Buddhist temples and gardens.",
        image: "./assets/kyoto.jpg",
      },
      {
        name: "New York, USA",
        description:
          "Known for its iconic skyline and vibrant culture.",
        image: "./assets/newyork.jpg",
      },
      {
        name: "Sydney, Australia",
        description:
          "Famous for its Sydney Opera House and beautiful beaches.",
        image: "./assets/sydney.jpg",
      },
      {
        name: "Cape Town, South Africa",
        description:
          "Known for its stunning landscapes and rich history.",
        image: "./assets/capetown.jpeg",
      },
    ];

    function displayRecommendations(
      recommendations
    ) {
      recommendationsContainer.innerHTML = "";
      recommendations.forEach((destination) => {
        const recommendationDiv =
          document.createElement("div");
        recommendationDiv.classList.add(
          "recommendation"
        );

        const img = document.createElement("img");
        img.src = destination.image;
        img.alt = destination.name;

        const name = document.createElement("h2");
        name.textContent = destination.name;

        const desc = document.createElement("p");
        desc.textContent =
          destination.description;

        recommendationDiv.appendChild(img);
        recommendationDiv.appendChild(name);
        recommendationDiv.appendChild(desc);
        recommendationsContainer.appendChild(
          recommendationDiv
        );
      });
    }

    function filterRecommendations(searchTerm) {
      return destinations.filter(
        (destination) =>
          destination.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          destination.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
    }

    searchBtn.addEventListener("click", () => {
      const searchTerm =
        searchbarInput.value.trim();
      if (searchTerm) {
        const filteredRecommendations =
          filterRecommendations(searchTerm);
        displayRecommendations(
          filteredRecommendations
        );
      }
    });

    clearBtn.addEventListener("click", () => {
      searchbarInput.value = "";
      displayRecommendations(destinations);
    });

    // Initial display of recommendations
    displayRecommendations(destinations);
  }
);
