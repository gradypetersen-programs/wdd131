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
    }
];

const album = document.getElementById("temple-album");

for (const temple of temples) {
    const newCard = document.createElement("figure");
    newCard.classList.add("temple-card");

    const newImage = document.createElement("img");
    newImage.src = temple.imageUrl;
    newImage.alt = `${temple.templeName} temple`;
    newImage.loading = "lazy"

    const newCaption = document.createElement("figcaption");
    newCaption.innerHTML = `<p class="temple-name">${temple.templeName}</p> 
    <p><span class="card-section">Location:</span> ${temple.location}</p>
    <p><span class="card-section">Dedicated:</span> ${temple.dedicated}</p> 
    <p><span class="card-section">Size:</span> ${temple.area} sq ft</p>`

    newCard.append(newImage);
    newCard.append(newCaption);
    album.append(newCard);
}
