"use strict"
                                                            // Shared destination data — used by index.html AND destination.html
const destinations = [
    {
        id: 1,
        name: "Darjeeling",
        type: "Hill Station",
        location: "West Bengal, India",
        rating: 4.7,
        reviewsCount: "1.4K reviews",
        budget: 10000,
        duration: "3 Days",
        subtitle: "Where the majestic Himalayas meet world-famous tea gardens",
        thumbnail: "./assets/images/darjeeling.jpg",
        heroImage: "./assets/images/darjeeling-hero.jpg",
        description:
            "A famous hill station in the northernmost part of West Bengal, India, nestled in the Eastern Himalayas at an elevation of about 2,042 meters. Famous for the Toy Train, spectacular sunrise over Kanchenjunga, and sprawling tea estates.",
        quote: "The mountains are calling and I must go — especially when it's Darjeeling at sunrise.",
        quoteAuthor: "A Mountain Wanderer",
        highlights: [
            { icon: "fas fa-mountain", name: "Tiger Hill" },
            { icon: "fas fa-train", name: "Toy Train Ride" },
            { icon: "fas fa-leaf", name: "Happy Valley Tea" },
            { icon: "fas fa-place-of-worship", name: "Batasia Loop" },
            { icon: "fas fa-hiking", name: "Sandakphu Trek" },
            { icon: "fas fa-cloud-sun", name: "Peace Pagoda" }
        ],
        bestFor: ["Nature Lovers", "Mountain Biking", "Tea Connoisseurs", "Photography", "Family Trip"],
        bestTimeToVisit: {
            months: "October to March",
            description: "Clear blue skies offer mesmerizing views of snow-capped peaks and comfortable weather for sightseeing."
        },
        budgetBreakdown: {
            travel: "₹2,500",
            stay: "₹3,500",
            food: "₹2,000",
            activities: "₹2,000"
        },
        travelTip: "Book your Toy Train ride tickets well in advance as seats fill up weeks ahead during peak season."
    },
    {
        id: 2,
        name: "Munnar",
        type: "Nature",
        location: "Idukki District, Kerala",
        rating: 4.8,
        reviewsCount: "1.2K reviews",
        budget: 5000,
        duration: "3 Days",
        subtitle: "Where misty mountains meet endless green",
        thumbnail: "./assets/images/tea-gardens-munnar.webp",
        heroImage: "./assets/images/munnar-hero.jpg",
        description:
            "Explore the misty hills, lush tea plantations, and peaceful valleys of Munnar, a beautiful getaway surrounded by the natural charm of Kerala. Known for its rolling green slopes and rare flora like the Neelakurinji.",
        quote: "In Munnar, every turn is a postcard, and every moment feels like a pause in a better version of life.",
        quoteAuthor: "A Traveller",
        highlights: [
            { icon: "fas fa-leaf", name: "Tea Gardens" },
            { icon: "fas fa-binoculars", name: "Eravikulam National Park" },
            { icon: "fas fa-water", name: "Mattupetty Dam" },
            { icon: "fas fa-volume-up", name: "Echo Point" },
            { icon: "fas fa-road", name: "Scenic Drives" },
            { icon: "fas fa-sun", name: "Pleasant Climate" }
        ],
        bestFor: ["Nature Lovers", "Photography", "Honeymoon", "Peace & Relaxation", "Trekking"],
        bestTimeToVisit: {
            months: "September to February",
            description: "The weather is pleasant, and the landscapes are at their greenest following the monsoon."
        },
        budgetBreakdown: {
            travel: "₹1,500",
            stay: "₹2,000",
            food: "₹1,000",
            activities: "₹500"
        },
        travelTip: "Carry a light jacket, as the weather can be cool evenings, even in summer."
    },
    {
        id: 3,
        name: "Varanasi",
        type: "Spiritual",
        location: "Uttar Pradesh, India",
        rating: 4.6,
        reviewsCount: "2.1K reviews",
        budget: 6000,
        duration: "2 Days",
        subtitle: "The spiritual heart of India along the sacred Ganges",
        thumbnail: "./assets/images/varanasi.jpg",
        heroImage: "./assets/images/varanasi-hero.jpg",
        description:
            "One of the oldest living cities in the world, Varanasi sits on the banks of the Ganges. Famous for its ghats, sunrise boat rides, and the nightly Ganga Aarti ceremony, it's a place where ancient rituals continue exactly as they have for centuries.",
        quote: "Varanasi is older than history, older than tradition, older even than legend.",
        quoteAuthor: "Mark Twain",
        highlights: [
            { icon: "fas fa-water", name: "Dashashwamedh Ghat" },
            { icon: "fas fa-ship", name: "Sunrise Boat Ride" },
            { icon: "fas fa-fire", name: "Ganga Aarti" },
            { icon: "fas fa-place-of-worship", name: "Kashi Vishwanath" },
            { icon: "fas fa-utensils", name: "Street Food Tour" },
            { icon: "fas fa-store", name: "Silk Market" }
        ],
        bestFor: ["Culture Seekers", "History Buffs", "Spiritual Explorers", "Foodies", "Photography"],
        bestTimeToVisit: {
            months: "November to February",
            description: "Pleasant winter weather makes walking along the ghats and open-boat rides deeply comfortable."
        },
        budgetBreakdown: {
            travel: "₹2,000",
            stay: "₹2,000",
            food: "₹1,000",
            activities: "₹1,000"
        },
        travelTip: "Arrive at Dashashwamedh Ghat by 6:00 PM to secure a great spot for the grand evening Aarti."
    },
    {
        id: 4,
        name: "Kullu-Manali",
        type: "Hill Station",
        location: "Himachal Pradesh, India",
        rating: 4.7,
        reviewsCount: "1.9K reviews",
        budget: 9000,
        duration: "4 Days",
        subtitle: "Adventure and snow peaks in the lap of the Himalayas",
        thumbnail: "./assets/images/manali.jpg",
        heroImage: "./assets/images/kullu-manali-hero.jpg",
        description:
            "A twin-town getaway in Himachal Pradesh set along the Beas River, known for snow-capped peaks, apple orchards, and adventure sports like paragliding, river rafting, and skiing in Solang Valley.",
        quote: "Manali is where pine forests whisper secrets to the snow-capped peaks.",
        quoteAuthor: "Himalayan Trekker",
        highlights: [
            { icon: "fas fa-snowflake", name: "Solang Valley" },
            { icon: "fas fa-water", name: "Beas River Rafting" },
            { icon: "fas fa-tree", name: "Hadimba Temple" },
            { icon: "fas fa-road", name: "Atal Tunnel" },
            { icon: "fas fa-wind", name: "Paragliding" },
            { icon: "fas fa-shopping-bag", name: "Mall Road" }
        ],
        bestFor: ["Adventure Junkies", "Snow Lovers", "Road Trippers", "Friends Group", "Nature Walkers"],
        bestTimeToVisit: {
            months: "October to June",
            description: "Great for snow activities in winter and pleasant valley weather during summer months."
        },
        budgetBreakdown: {
            travel: "₹2,500",
            stay: "₹3,500",
            food: "₹2,000",
            activities: "₹1,000"
        },
        travelTip: "Book adventure sports packages directly at authorized counters in Solang Valley for safety."
    },
    {
        id: 5,
        name: "Alleppey",
        type: "Backwaters",
        location: "Alappuzha, Kerala",
        rating: 4.7,
        reviewsCount: "1.1K reviews",
        budget: 8000,
        duration: "2 Days",
        subtitle: "The Venice of the East with tranquil palm-fringed canals",
        thumbnail: "./assets/images/allepey.jpg",
        heroImage: "./assets/images/allepey-hero.jpg",
        description:
            "Known as the Venice of the East, Alleppey is famous for its network of tranquil backwaters, houseboat cruises, and coconut-lined canals. A relaxed alternative to hill stations, ideal for slow travel and watching village life drift by from the deck of a houseboat.",
        quote: "Time moves slower on the backwaters of Alleppey, measured only by the ripple of paddles.",
        quoteAuthor: "Backwater Cruiser",
        highlights: [
            { icon: "fas fa-ship", name: "Houseboat Cruise" },
            { icon: "fas fa-water", name: "Vembanad Lake" },
            { icon: "fas fa-umbrella-beach", name: "Marari Beach" },
            { icon: "fas fa-fish", name: "Kerala Seafood" },
            { icon: "fas fa-canoe", name: "Shikara Ride" },
            { icon: "fas fa-seedling", name: "Paddy Fields" }
        ],
        bestFor: ["Couples", "Slow Travelers", "Relaxation", "Food Enthusiasts", "Photography"],
        bestTimeToVisit: {
            months: "August to February",
            description: "Post-monsoon and winter offer refreshing breezes and idyllic conditions for cruising."
        },
        budgetBreakdown: {
            travel: "₹1,500",
            stay: "₹4,000",
            food: "₹1,500",
            activities: "₹1,000"
        },
        travelTip: "Book an overnight houseboat stay with traditional Kerala meals included for the ultimate experience."
    },
    {
        id: 6,
        name: "Kasauli",
        type: "Hill Station",
        location: "Solan District, Himachal Pradesh",
        rating: 4.5,
        reviewsCount: "850 reviews",
        budget: 6500,
        duration: "2 Days",
        subtitle: "A quiet colonial-era pine-scented mountain sanctuary",
        thumbnail: "./assets/images/kasauli.jpg",
        heroImage: "./assets/images/kasauli-hero.jpg",
        description:
            "A quiet, colonial-era hill town in Himachal Pradesh, less crowded than Shimla or Manali, with pine forests, old churches, and easy walking trails like Monkey Point and Sunset Point. A good pick for a short, peaceful weekend getaway.",
        quote: "Kasauli is a breath of fresh pine air away from the rush of the city.",
        quoteAuthor: "Weekend Traveller",
        highlights: [
            { icon: "fas fa-mountain", name: "Monkey Point" },
            { icon: "fas fa-sun", name: "Sunset Point" },
            { icon: "fas fa-church", name: "Christ Church" },
            { icon: "fas fa-tree", name: "Gilbert Trail" },
            { icon: "fas fa-book", name: "Central Library" },
            { icon: "fas fa-mug-hot", name: "Mall Road Cafes" }
        ],
        bestFor: ["Weekend Getaway", "Peace Seekers", "Solo Travelers", "Bird Watching", "Easy Hiking"],
        bestTimeToVisit: {
            months: "March to November",
            description: "Pleasant spring and summer weather with blooming wildflowers and cool mountain shadows."
        },
        budgetBreakdown: {
            travel: "₹1,500",
            stay: "₹3,000",
            food: "₹1,500",
            activities: "₹500"
        },
        travelTip: "Take the Gilbert Trail early in the morning for serene nature walks and bird watching."
    },
    {
        id: 7,
        name: "Goa",
        type: "Beach",
        location: "Goa, India",
        rating: 4.6,
        reviewsCount: "3.2K reviews",
        budget: 9500,
        duration: "3 Days",
        subtitle: "Sun-kissed beaches, Portuguese heritage, and vibrant nightlife",
        thumbnail: "assets/images/goa.jpg",
        heroImage: "assets/images/goa-hero.jpg",
        description:
            "India's most famous coastal getaway, known for its golden beaches, Portuguese colonial architecture, vibrant nightlife, and relaxed beach shacks. North Goa draws crowds for parties and water sports, while South Goa offers quieter, palm-fringed shores.",
        quote: "Goa isn't just a place, it's a state of mind where time slows down to the rhythm of the waves.",
        quoteAuthor: "Beach Bum",
        highlights: [
            { icon: "fas fa-umbrella-beach", name: "Baga & Calangute Beach" },
            { icon: "fas fa-water", name: "Water Sports" },
            { icon: "fas fa-church", name: "Basilica of Bom Jesus" },
            { icon: "fas fa-store", name: "Anjuna Flea Market" },
            { icon: "fas fa-utensils", name: "Beach Shacks" },
            { icon: "fas fa-moon", name: "Nightlife & Pubs" }
        ],
        bestFor: ["Beach Lovers", "Party Goers", "Water Sports", "Foodies", "Friends Trip"],
        bestTimeToVisit: {
            months: "November to February",
            description: "Perfect beach weather with warm sunny days and cool evening sea breezes."
        },
        budgetBreakdown: {
            travel: "₹3,000",
            stay: "₹3,500",
            food: "₹2,000",
            activities: "₹1,000"
        },
        travelTip: "Rent a scooter or car to explore both the lively beaches of North Goa and the tranquil shores of South Goa."
    }
];
