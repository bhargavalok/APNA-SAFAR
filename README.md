# Apna Safar — Travel Blog Website

A travel blog website built from scratch using HTML, CSS, and vanilla JavaScript, as part of my web development learning journey. No frameworks yet — focused on getting the fundamentals right first.

**Live Demo:** [travel-blog-website-wheat.vercel.app](https://travel-blog-website-wheat.vercel.app/)

---

## 🌍 About the Project

Apna Safar (meaning "Our Journey" in Hindi) is a multi-page travel blog that helps users discover hidden destinations, compare budgets, and plan trips. Built as a hands-on project to practice real-world HTML, CSS, and JavaScript concepts — not just tutorials.

---

## 📄 Pages

**Home** (`index.html`)
- Full-screen hero section with background image and dark overlay
- Hero-style search bar to look up destinations *(UI complete, search logic in progress)*
- Responsive card-grid showcase section with hover effects, pulled dynamically from a JS data array
- Features section explaining what the site offers
- Footer with social media links

**About** (`about.html`)
- About Us section with a two-column checklist layout
- Statistics counter section
- CTA banner linking to the contact page

**Contact** (`contact.html`)
- Two-column layout: company address card + contact form
- Form validation using HTML's `required` attribute

---

## 🛠️ Built With

- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome 6.5 (icons)
- Google Fonts — Montserrat

---

## 🗂️ Project Structure

```
apna-safar/
├── index.html
├── about.html
├── contact.html
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── logo.png
│       ├── hero-bg.jpg
│       ├── company.jpg
│       └── destinations/
│           ├── waterfall.jpg
│           ├── darjeeling.jpg
│           ├── mountain-valley.jpg
│           ├── misty-mountains.jpg
│           ├── coastal-aerial.jpg
│           └── munnar-tea-gardens.jpg
```

---

## 📚 Key Concepts Practiced

**HTML**
- Semantic tags — `header`, `nav`, `section`, `footer`
- Accessible forms — `label`, `required`, `placeholder`, visually-hidden labels for screen readers
- `loading="lazy"` and `alt` attributes for performance and accessibility

**CSS**
- Responsive grid layout (`repeat(auto-fit, minmax(...))`) for the destination showcase
- Flexbox for component-level layout (cards, search bar)
- CSS gradients, `box-shadow`, and hover transitions for a cohesive visual identity
- A deliberate, limited color palette (navy + orange + red as a single accent) instead of scattering multiple accent colors
- Mobile-first responsive breakpoints at 768px and 480px

**JavaScript**
- DOM manipulation — dynamically rendering destination cards from a data array instead of hardcoding HTML
- `template literals` for building card markup
- (In progress) Search/filter logic for the search bar

---

## 🚧 Current Status

- [x] Responsive showcase grid with dynamic card rendering
- [x] Hero-style search bar UI
- [x] Clean, standardized project folder structure
- [ ] Search bar filtering logic (JavaScript)
- [ ] Filter destinations by type/budget
- [ ] Backend integration (planned)

---

## 🚀 What I'm Learning / Next Steps

This project has been about learning to think in layouts before writing CSS, understanding why consistent color and spacing decisions matter, and structuring a codebase the way real-world projects are organized rather than however feels convenient in the moment.

Next steps for this project include finishing the search/filter logic in JavaScript, then gradually evolving the stack — adding a small backend, rebuilding the UI in React, and introducing a scoped AI-assisted feature (e.g. destination matching based on user input) as the project grows into a full-stack application.

---

## 👤 Author

**Alok Bhargav**
- GitHub: [@bhargavalok](https://github.com/bhargavalok)
- Instagram: [@alok_bhargav_](https://www.instagram.com/alok_bhargav_/)