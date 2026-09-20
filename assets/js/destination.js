"use strict"

        // NOTE: "destinations" comes from data.js
        // NOTE: 'favorites functions' come from favorites.js
        // Both must be loaded via <script> BEFORE this file in destination.html

                                                            // STEP 1: Read the id from the URL
const params = new URLSearchParams(window.location.search);
const requestedId = Number(params.get("id"));

                                                            // STEP 2: Find the matching destination
const destination = destinations.find(d => d.id === requestedId);

                                                            // DOM REFERENCES
const detailContainer = document.querySelector("#destination-detail");

                                                            // STEP 3: Handle invalid or missing id
function renderNotFound() {
    detailContainer.innerHTML = `
        <div class="not-found">
            <h2>Destination not found</h2>
            <p>The destination you're looking for doesn't exist or the link is broken.</p>
            <a href="index.html#explore-places" class="btn btn-primary text-red btn-secondary">
                Back to Explore
            </a>
        </div>
    `;
}

                                                            // STEP 4: Render the destination details
function renderDestination(destination) {
    const favorited = isFavorite(destination.id);

    detailContainer.innerHTML = `
        <div class="detail-hero" style="background-image: url('${destination.heroImage}')">
            <div class="detail-hero-overlay">
                <div class="container">
                    <a href="index.html" class="breadcrumb">Home</a>
                    <span class="breadcrumb-separator">/</span>
                    <a href="index.html#explore-places" class="breadcrumb">Explore</a>
                    <span class="breadcrumb-separator">/</span>
                    <span class="breadcrumb-current">${destination.name}</span>

                    <p class="detail-location"><i class="fas fa-map-marker-alt"></i> ${destination.location}</p>
                    <h1 class="detail-title">${destination.name}</h1>

                    <div class="detail-quick-info">
                        <span><i class="fas fa-star"></i> ${destination.rating}</span>
                        <span><i class="fas fa-leaf"></i> ${destination.type}</span>
                        <span><i class="fas fa-rupee-sign"></i> ${destination.budget} approx.</span>
                    </div>

                    <div class="detail-actions">
                        <button id="detail-favorite-btn" class="favorite-btn-large ${favorited ? "active" : ""}">
                            <i class="fa-${favorited ? "solid" : "regular"} fa-heart"></i>
                            ${favorited ? "Saved" : "Save"}
                        </button>
                        <button id="add-to-trip-btn" class="btn-add-trip">
                            <i class="fas fa-suitcase-rolling"></i> Add to Trip
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container detail-body">
            <h2 class="detail-section-title">About ${destination.name}</h2>
            <p class="detail-description">${destination.description}</p>
        </div>
    `;

    // Wire the favorite button on THIS page to the same shared favorites system
    document.querySelector("#detail-favorite-btn").addEventListener("click", (e) => {
        toggleFavorite(destination.id);
        const nowFavorited = isFavorite(destination.id);
        e.currentTarget.classList.toggle("active", nowFavorited);
        e.currentTarget.innerHTML = `
            <i class="fa-${nowFavorited ? "solid" : "regular"} fa-heart"></i>
            ${nowFavorited ? "Saved" : "Save"}
        `;
    });

    // Placeholder for now — real trip logic comes in a later feature
    document.querySelector("#add-to-trip-btn").addEventListener("click", () => {
        alert(`${destination.name} added to your trip! (Trip Planner feature coming soon)`);
    });
}

                                                            // RUN
if (!destination) {
    renderNotFound();
} else {
    renderDestination(destination);
}