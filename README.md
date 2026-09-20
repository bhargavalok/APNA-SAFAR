# 🌍 Apna Safar — Travel Blog Website

A travel discovery website built from scratch with HTML, CSS, and vanilla JavaScript — no frameworks yet, focused on mastering the fundamentals before moving to React. What started as a static showcase page has evolved into an interactive, state-driven front-end application with live search, filtering, sorting, favorites, and dedicated destination pages.

**Live Demo:** [travel-blog-website-wheat.vercel.app](https://travel-blog-website-wheat.vercel.app/)

---

## 🧭 About the Project

Apna Safar (Hindi for "Our Journey") helps users discover destinations, compare budgets, and explore detailed information about each place. Every feature is built intentionally, from first principles, as part of a structured learning path — understanding *why* a pattern is used, not just copying code that works.

---

## 📄 Pages

**Home** (`index.html`)
- Full-screen hero section with background image and dark overlay
- Hero-style search bar with **live autocomplete suggestions**
- **Category filter chips**, generated dynamically from destination data (no hardcoding)
- **Sort dropdown** — by budget (low–high / high–low) or name (A–Z)
- **Favorites system** — heart any destination, persisted across sessions via `localStorage`
- **"Favorites Only" toggle** to filter the grid down to saved destinations
- Responsive card-grid showcase, fully data-driven and reactive to every filter/search/sort combination
- Features section outlining site value propositions
- Footer with social links

**Destination Detail** (`destination.html`)
- Dynamic single-page template — one file serves *every* destination via a URL query parameter (`destination.html?id=4`)
- Full-width hero banner using a dedicated high-resolution image, separate from the card thumbnail
- Quick-info bar: rating, category, and budget at a glance
- Favorite button wired to the **same shared favorites state** as the homepage — saving here updates the homepage card instantly, and vice versa
- "Add to Trip" action (placeholder — full Trip Planner coming in a future phase)
- Graceful handling of missing or invalid IDs (`destination.html?id=999`) with a "Destination not found" fallback instead of a broken page

**About** (`about.html`)
- Two-column checklist layout, statistics counter section, CTA banner

**Contact** (`contact.html`)
- Two-column layout: company info card + validated contact form

---

## 🛠️ Built With

- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome 6.5
- Google Fonts — Montserrat

---

## 🗂️ Project Structure

```
apna-safar/
├── index.html
├── destination.html
├── about.html
├── contact.html
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── data.js            ← shared destination data (single source of truth)
│   │   ├── favorites.js       ← shared favorites + localStorage logic
│   │   ├── main.js            ← homepage: search, filter, sort, rendering
│   │   └── destination.js     ← detail page: URL parsing, lookup, rendering
│   └── images/
│       ├── logo.png
│       ├── hero-bg.jpg
│       ├── company.jpg
│       ├── waterfall.jpg / waterfall-hero.jpg
│       ├── darjeeling.jpg / darjeeling-hero.jpg
│       ├── misty-mountains.jpg / misty-mountains-hero.jpg
│       ├── munnar-tea-gardens.jpg / munnar-tea-gardens-hero.jpg
│       ├── varanasi.jpg / varanasi-hero.jpg
│       ├── kullu-manali.jpg / kullu-manali-hero.jpg
│       ├── alleppey.jpg / alleppey-hero.jpg
│       └── kasauli.jpg / kasauli-hero.jpg
```

**Why data and favorites live in their own files:** both `index.html` and `destination.html` need the same destination list and the same favorites logic. Keeping them in dedicated shared files (rather than duplicating them per page) means one edit updates every page that depends on it — a small step toward the modular thinking React apps rely on.

**A note on the images folder:** all destination images currently live directly inside `assets/images/`, alongside the site's logo and hero background, rather than in a separate subfolder. This is a deliberate choice for the project's current size — worth revisiting as a `destinations/` subfolder once the number of destinations grows enough to make one flat folder hard to scan.

---

## 📚 Key Concepts Practiced

**HTML**
- Semantic structure, accessible forms with visually-hidden labels
- URL query parameters as a way to drive a page's content (`?id=4`)

**CSS**
- Responsive CSS Grid for the showcase (`repeat(auto-fit, minmax(...))`)
- Flexbox for component-level layout
- A deliberate, restrained color system (navy + one orange/red accent) instead of scattering multiple accent colors
- Mobile-first responsive breakpoints

**JavaScript**
- **State-driven architecture** — one `searchState` object (`query`, `category`, `sortBy`, `favoritesOnly`) drives every render; every user action updates state, then triggers a single re-render pipeline
- Array methods used with intent: `.filter()` for multi-item matching, `.find()` for single-item lookup, `.map()` + `Set` for deriving unique categories, `.sort()` on copies (never mutating original data)
- **Event delegation** for dynamically created elements (category chips, favorite buttons)
- **`localStorage` + `JSON.stringify`/`JSON.parse`** for persisting favorites across sessions
- **`URLSearchParams`** for reading data out of the URL on the detail page
- Clear separation of concerns throughout: **data → logic (pure functions) → render (DOM functions) → events (wiring)**

---

## ✅ Current Status

- [x] Standardized, scalable project folder structure
- [x] Dynamic, data-driven destination cards
- [x] Live search with autocomplete suggestions
- [x] Category filtering (auto-generated from data)
- [x] Sorting by budget and name
- [x] Favorites system with `localStorage` persistence
- [x] Dedicated destination detail pages via URL routing
- [x] Thumbnail vs. hero image separation for correct image resolution at each size
- [ ] Budget range filter
- [ ] Live results counter ("Showing X of Y destinations")
- [ ] Trip Planner (multi-destination itinerary builder)
- [ ] Backend integration
- [ ] React rewrite

---

## 🗺️ Roadmap

**Near-term (still vanilla JS)**
- Budget range slider/filter, combined with the existing search + category + sort pipeline
- Live results counter reflecting the currently filtered list
- "Recently Viewed" destinations, using the same `localStorage` pattern as Favorites
- Trip Planner: let users add destinations to a trip and see a running budget total, building on the "Add to Trip" button already in place on the detail page
- Expanded destination detail sections: highlights, best time to visit, estimated budget breakdown, image gallery, nearby places, and a map embed

**Mid-term (stack evolution)**
- Small Node.js + Express backend, serving destination data as a JSON API instead of a hardcoded array
- Migrate destination data into a real database (MongoDB or PostgreSQL)
- Connect the existing frontend to the new API

**Long-term (full-stack + modern tooling)**
- Rebuild the UI in **React**, converting the current state-driven vanilla JS pattern into components + hooks
- Introduce **TypeScript** for type safety across components and API data
- Adopt **Tailwind CSS** once the project is component-based
- Add a scoped **AI-assisted feature** — e.g., natural-language destination matching ("beach trip under ₹10,000 for 3 days") powered by an LLM API call against the destination dataset
- Full user accounts, so Favorites and Trip Planner data persist per-user in a database instead of per-browser via `localStorage`

---

## 🎯 What I'm Learning

This project has shifted from "make it look nice" to "make it *think* correctly" — building a single state object that drives every interactive feature, keeping data logic and DOM rendering strictly separate, and structuring files the way real, growing codebases are organized rather than however's convenient in the moment. Every feature added has been treated as a deliberate exercise in the *thinking process* behind the code, not just the syntax — with the explicit goal of making the eventual transition to React, TypeScript, and a full backend feel like a natural extension of habits already built, rather than starting over.

---

## 👤 Author

**Alok Bhargav**
- GitHub: [@bhargavalok](https://github.com/bhargavalok)
- Instagram: [@alok_bhargav_](https://www.instagram.com/alok_bhargav_/)
