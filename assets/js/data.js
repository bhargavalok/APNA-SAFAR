"use strict"
                                                            // Shared destination data — used by index.html AND destination.html
const destinations = [
    {
        id: 1,
        name: "Darjeeling",
        type: "Hill Station",
        location: "West Bengal, India",
        rating: 4.7,
        budget: 10000,
        thumbnail: "./assets/images/darjeeling.jpg",
        heroImage : "./assets/images/darjeeling-hero.jpg",
        description:
            "A famous hill station in the northernmost part of West Bengal, India, nestled in the Eastern Himalayas at an elevation of about 2,042 meters."
    },
    {
        id: 2,
        name: "Munnar",
        type: "Nature",
        location: "Idukki District, Kerala",
        rating: 4.8,
        budget: 5000,
        thumbnail: "./assets/images/tea-gardens-munnar.webp",
        heroImage : "./assets/images/munnar-hero.jpg",
        description:
            "Explore the misty hills, lush tea plantations, and peaceful valleys of Munnar, a beautiful getaway surrounded by the natural charm of Kerala."
    },
    {
        id: 3,
        name: "Varanasi",
        type: "Spiritual",
        location: "Uttar Pradesh, India",
        rating: 4.6,
        budget: 6000,
        thumbnail: "./assets/images/varanasi.jpg",
        heroImage : "./assets/images/varanasi-hero.jpg",
        description:
            "One of the oldest living cities in the world, Varanasi sits on the banks of the Ganges. Famous for its ghats, sunrise boat rides, and the nightly Ganga Aarti ceremony, it's a place where ancient rituals continue exactly as they have for centuries."
    },
    {
        id: 4,
        name: "Kullu-Manali",
        type: "Hill Station",
        location: "Himachal Pradesh, India",
        rating: 4.7,
        budget: 9000,
        thumbnail: "./assets/images/manali.jpg",
        heroImage : "./assets/images/kullu-manali-hero.jpg",
        description:
            "A twin-town getaway in Himachal Pradesh set along the Beas River, known for snow-capped peaks, apple orchards, and adventure sports like paragliding, river rafting, and skiing in Solang Valley."
    },
    {
    id: 5,
    name: "Alleppey",
    type: "Backwaters",
    location: "Alappuzha, Kerala",
    rating: 4.7,
    budget: 8000,
    thumbnail: "./assets/images/allepey.jpg",
    heroImage: "./assets/images/allepey-hero.jpg",
    description:
        "Known as the Venice of the East, Alleppey is famous for its network of tranquil backwaters, houseboat cruises, and coconut-lined canals. A relaxed alternative to hill stations, ideal for slow travel and watching village life drift by from the deck of a houseboat."
},
{
    id: 6,
    name: "Kasauli",
    type: "Hill Station",
    location: "Solan District, Himachal Pradesh",
    rating: 4.5,
    budget: 6500,
    thumbnail: "./assets/images/kasauli.jpg",
    heroImage: "./assets/images/kasauli-hero.jpg",
    description:
        "A quiet, colonial-era hill town in Himachal Pradesh, less crowded than Shimla or Manali, with pine forests, old churches, and easy walking trails like Monkey Point and Sunset Point. A good pick for a short, peaceful weekend getaway."
},
{
    id: 7,
    name: "Goa",
    type: "Beach",
    location: "Goa, India",
    rating: 4.6,
    budget: 9500,
    thumbnail: "assets/images/goa.jpg",
    heroImage: "assets/images/goa-hero.jpg",
    description:
        "India's most famous coastal getaway, known for its golden beaches, Portuguese colonial architecture, vibrant nightlife, and relaxed beach shacks. North Goa draws crowds for parties and water sports, while South Goa offers quieter, palm-fringed shores."
}
];