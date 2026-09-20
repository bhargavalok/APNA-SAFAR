"use strict"

    // NOTE: "destinations" comes from data.js
    // NOTE: 'favorites functions' come from favorites.js
    // Both must be loaded via <script> BEFORE this file in index.html

                                                            // DOM REFERENCES
const cardContainer = document.querySelector("#destination-container");
const searchInput = document.querySelector("#search-input");
const searchForm = document.querySelector("#search-form");
const suggestionsBox = document.querySelector("#search-suggestions");
const filtersBox = document.querySelector("#category-filters");
const sortSelect = document.querySelector("#sort-select");
const favoritesToggle = document.querySelector("#favorites-toggle");

                                                            // APP STATE
const searchState = {
    query: "",
    category: "All",
    sortBy: "relevance",
    favoritesOnly: false
};

                                                            // CARD TEMPLATE
function createDestinationCard(destination) {
    const row = document.createElement("div");
    row.className = "row";
    row.dataset.id = destination.id;

    const favorited = isFavorite(destination.id);

    row.innerHTML = `
        <div class="img-box">
        <img src="${destination.thumbnail}"
        alt="${destination.name}"
        loading="lazy"
            >
            <button class="favorite-btn ${favorited ? "active" : ""}" data-id="${destination.id}" aria-label="Toggle favorite">
                <i class="fa-${favorited ? "solid" : "regular"} fa-heart"></i>
            </button>
        </div>
        <div class="text-box">
            <h2 class="text-black">${destination.name}</h2>
            <p class="text-grey">
                ${destination.description}
            </p>
            <p>Type: ${destination.type}</p>
            <p>Budget: ₹${destination.budget}</p>
            <a href="destination.html?id=${destination.id}"
            class="btn btn-primary text-red btn-secondary">
                View Details
            </a>
        </div>
    `;
    return row;
}

                                                            // PURE LOGIC: FILTER
function findMatches(state) {
    const lowerQuery = state.query.trim().toLowerCase();

    return destinations.filter(destination => {
        const matchesCategory =
            state.category === "All" || destination.type === state.category;

        const matchesQuery =
            lowerQuery === "" ||
            destination.name.toLowerCase().includes(lowerQuery) ||
            destination.type.toLowerCase().includes(lowerQuery);

        const matchesFavorites =
            !state.favoritesOnly || isFavorite(destination.id);

        return matchesCategory && matchesQuery && matchesFavorites;
    });
}

                                                            // PURE LOGIC: SORT
function applySort(list, sortBy) {
    const sorted = [...list];

    if (sortBy === "budget-asc") {
        sorted.sort((a, b) => a.budget - b.budget);
    } else if (sortBy === "budget-desc") {
        sorted.sort((a, b) => b.budget - a.budget);
    } else if (sortBy === "name-asc") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    return sorted;
}

                                                            // RENDER FUNCTIONS
function renderDestinationCards(list) {
    cardContainer.innerHTML = "";

    if (list.length === 0) {
        cardContainer.innerHTML = `<p class="no-results">No destinations match your search. Try a different name, category, or filter.</p>`;
        return;
    }

    list.forEach(destination => {
        const card = createDestinationCard(destination);
        cardContainer.appendChild(card);
    });
}

function renderSuggestions(matches) {
    suggestionsBox.innerHTML = "";

    if (matches.length === 0) {
        suggestionsBox.classList.remove("active");
        return;
    }

    matches.forEach(destination => {
        const item = document.createElement("li");
        item.className = "suggestion-item";
        item.textContent = destination.name;
        item.addEventListener("click", () => {
            searchState.query = destination.name;
            searchInput.value = destination.name;
            suggestionsBox.classList.remove("active");
            runSearch();
            scrollToShowcase();
        });
        suggestionsBox.appendChild(item);
    });

    suggestionsBox.classList.add("active");
}

function renderCategoryChips() {
    const categories = ["All", ...new Set(destinations.map(d => d.type))];

    filtersBox.innerHTML = "";

    categories.forEach(category => {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "category-chip";
        chip.textContent = category;
        if (category === searchState.category) {
            chip.classList.add("active");
        }
        filtersBox.appendChild(chip);
    });
}

function scrollToShowcase() {
    document.querySelector("#explore-places").scrollIntoView({ behavior: "smooth" });
}

                                                            // CENTRAL PIPELINE
function runSearch() {
    const matches = findMatches(searchState);
    const sorted = applySort(matches, searchState.sortBy);
    renderDestinationCards(sorted);
}

                                                            // EVENT WIRING
searchInput.addEventListener("input", () => {
    searchState.query = searchInput.value;
    renderSuggestions(findMatches(searchState));
});

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchState.query = searchInput.value;
    suggestionsBox.classList.remove("active");
    runSearch();
    scrollToShowcase();
});

filtersBox.addEventListener("click", (e) => {
    if (!e.target.classList.contains("category-chip")) return;

    searchState.category = e.target.textContent;
    renderCategoryChips();
    runSearch();
});

sortSelect.addEventListener("change", () => {
    searchState.sortBy = sortSelect.value;
    runSearch();
});

favoritesToggle.addEventListener("click", () => {
    searchState.favoritesOnly = !searchState.favoritesOnly;
    favoritesToggle.classList.toggle("active", searchState.favoritesOnly);
    runSearch();
});

cardContainer.addEventListener("click", (e) => {
    const heartButton = e.target.closest(".favorite-btn");
    if (!heartButton) return;

    const id = Number(heartButton.dataset.id);
    toggleFavorite(id);
    runSearch();
});

document.addEventListener("click", (e) => {
    if (!searchForm.contains(e.target) && !suggestionsBox.contains(e.target)) {
        suggestionsBox.classList.remove("active");
    }
});

                                                            // INITIAL PAGE LOAD
renderCategoryChips();
runSearch();