const navButton = document.querySelector('#hamburger');
const navList = document.querySelector('ul');

navButton.addEventListener('click', () => {
    navList.classList.toggle('show');
    navButton.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6-24",
        area: 382207,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Palmyra New York",
        location: "Palmyra, New York, United States",
        dedicated: "2000, April, 6",
        area: 10900,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/palmyra-new-york/400x250/palmyra-temple-lds-901867-wallpaper.jpg"
    },
    {
        templeName: "Redlands California",
        location: "Redlands, California, United States",
        dedicated: "2003, September, 14",
        area: 17300,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/redlands-california/400x250/redlands-temple-lds-165642-wallpaper.jpg"
    },
    {
        templeName: "Apia Samoa",
        location: "Apia, Samoa",
        dedicated: "1983, August, 5-7",
        area: 18691,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/apia-samoa/320x180/apia-samoa-temple-lds-495972-wallpaper.jpg"
    },
    {
        templeName: "St. George Utah",
        location: "St. George, Utah, United States",
        dedicated: "1877, April, 6-8",
        area: 143969,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/400x250/st-george-utah-temple-clouds-922212-wallpaper.jpg"
    }
];

const album = document.getElementById("temple-album");

makeTempleFigures(temples);

function makeTempleFigures(filteredTempleList) {
    album.innerHTML = "";
    for (const temple of filteredTempleList) {
        const newCard = document.createElement("figure");
        newCard.classList.add("temple-card");

        const newImage = document.createElement("img");
        newImage.loading = "lazy"
        newImage.src = temple.imageUrl;
        newImage.alt = `${temple.templeName} Temple`;
        newImage.width = 400;
        newImage.height = 300;

        const newCaption = document.createElement("figcaption");
        newCaption.innerHTML = `<h2 class="temple-name">${temple.templeName}</h2> 
    <p><span class="card-section">Location:</span> ${temple.location}</p>
    <p><span class="card-section">Dedicated:</span> ${temple.dedicated}</p> 
    <p><span class="card-section">Size:</span> ${temple.area} sq ft</p>`

        newCard.appendChild(newImage);
        newCard.appendChild(newCaption);
        album.appendChild(newCard);
    }
}

// Filters for old temples(before 1900), new temples(after 2000), 
// large temples(>90000 sq ft), small temples (<10000 sq ft)
const header = document.getElementById("header");
const homeDisplay = document.getElementById("home");
const oldTemples = document.getElementById("old");
const newTemples = document.getElementById("new");
const largeTemples = document.getElementById("large");
const smallTemples = document.getElementById("small");

homeDisplay.addEventListener("click", () => {
    makeTempleFigures(temples);
    header.textContent = "All Temple Photos";
});

oldTemples.addEventListener("click", () => {
    let olds = temples.filter(temple => parseInt(temple.dedicated.split(",")) < 1900);
    makeTempleFigures(olds);
    header.textContent = "Before 1900";
});

newTemples.addEventListener("click", () => {
    let news = temples.filter(temple => parseInt(temple.dedicated.split(",")) > 2000);
    makeTempleFigures(news);
    header.textContent = "After 2000";
});

largeTemples.addEventListener("click", () => {
    let large = temples.filter(temple => temple.area > 90000);
    makeTempleFigures(large);
    header.textContent = "Greater than 90,0000 sq ft";
});

smallTemples.addEventListener("click", () => {
    let small = temples.filter(temple => temple.area < 10000);
    makeTempleFigures(small);
    header.textContent = "Smaller than 10,000 sq ft";
});