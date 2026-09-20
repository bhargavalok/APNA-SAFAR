"use strict"
                                                            // Shared favorites logic — used by index.html AND destination.html
function loadFavorites() {
    const stored = localStorage.getItem("favoriteDestinations");
    return stored ? JSON.parse(stored) : [];
}

function saveFavorites(ids) {
    localStorage.setItem("favoriteDestinations", JSON.stringify(ids));
}

let favoriteIds = loadFavorites();

function isFavorite(id) {
    return favoriteIds.includes(id);
}

function toggleFavorite(id) {
    if (isFavorite(id)) {
        favoriteIds = favoriteIds.filter(favId => favId !== id);
    } else {
        favoriteIds.push(id);
    }
    saveFavorites(favoriteIds);
}