"use strict"
                                                            // Destination cards
const destinations = [
    {
        name: "Hidden Waterfall Paradise",
        type: "Nature",
        budget: 5000,
        image: "Images/pexels-firman-fatthul-154779494-27572319.jpg",
        description:
            "Discover the beauty of untouched nature where crystal-clear water cascades through lush green forests."
    },
        {
            name : "Darjeeling",
            type : "Hill Station",
            budget : 10000,
            image : "Images/1-the-land-of-the-thunderbolt-darjeeling-west-bengal-city-ff.jpg",
            description: 
            " a famous hill station in the northernmost part of West Bengal, India, nestled in the Eastern Himalayas at an elevation of about 2,042 meters"
        },
    {
        name: "Majestic Mountain Valley",
        type: "Adventure",
        budget: 7000,
        image: "Images/pexels-michael-schlierf-757699958-33315262.jpg",
        description:
            "Experience breathtaking views of towering mountains surrounded by peaceful green meadows."
    },
    {
    name: "Munnar",
    type: "Nature",
    budget: 5000,
    image: "Images/tea-gardens-munnar.webp",
    description:
        "Explore the misty hills, lush tea plantations, and peaceful valleys of Munnar, a beautiful getaway surrounded by the natural charm of Kerala."
}
];



function createDestinationCard(destination) { 
    const row = document.createElement("div"); 
    row.className = "row";
    row.innerHTML = `
        <div class="img-box">
            <img 
                src="${destination.image}"     
                alt="${destination.name}"    
                loading="lazy"
            >
        </div>
        <div class="text-box">
            <h2 class="text-black">${destination.name}</h2>
            <p class="text-grey">
                ${destination.description}
            </p>
            <p>Type: ${destination.type}</p>
            <p>Budget: ₹${destination.budget}</p>
            <a href="about.html"
            class="btn btn-primary text-red btn-secondary">
                More
            </a>
        </div>
    `;
    return row;
}


const cardContainer =
    document.querySelector("#destination-container");


    destinations.forEach(destination => {
    const card = createDestinationCard(destination);
        cardContainer.appendChild(card);
});

                                                                                                                                // 



                                                        // SEARCH BUTTON 







