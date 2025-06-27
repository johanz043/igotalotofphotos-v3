// ----- Create <head> content -----
const head = document.head;

// Title
const title = document.createElement('title');
title.textContent = 'igotalotofphotos';
head.appendChild(title);

// Meta tags
const metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');
head.appendChild(metaCharset);

const metaViewport = document.createElement('meta');
metaViewport.name = 'viewport';
metaViewport.content = 'width=device-width, initial-scale=1.0';
head.appendChild(metaViewport);

const metaIE = document.createElement('meta');
metaIE.httpEquiv = 'X-UA-Compatible';
metaIE.content = 'IE=edge';
head.appendChild(metaIE);

// Styles
const style = document.createElement('style');
style.textContent = `
    body {
        background-color: rgb(82, 82, 82);
        margin: 0;
        font-family: Arial, sans-serif;
    }

    a.link {
        text-decoration: none;
        color: #0077cc;
    }

    a.link:hover {
        text-decoration: underline;
    }

    .Photos {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        padding: 20px;
    }

    .Photos img {
        width: 100%;
        height: auto;
        border-radius: 8px;
        object-fit: cover;
    }

    .Photos figcaption {
        font-size: 18px;
        text-align: center;
        margin-top: 8px;
        color: black;
    }

    .Title {
        padding: 20px;
        color: white;
    }

    .Title p {
        font-size: 25px;
    }

    .Title h1 {
        font-size: 30px;
    }
`;
head.appendChild(style);

// ----- Create <body> content -----
const body = document.body;

// Title Section
const titleDiv = document.createElement('div');
titleDiv.className = 'Title';

const h1 = document.createElement('h1');
h1.textContent = "Johanz's Photos";

const p1 = document.createElement('p');
p1.innerHTML = `Welcome to my photography page! This page is an extension from my photography account on Instagram 
    <a href="https://www.instagram.com/igotalotofphotos" target="_blank" class="link">@igotalotofphotos</a>`;

const p2 = document.createElement('p');
p2.textContent = 'All the photos on this website have been taken by me on my Nikon D5300. Enjoy looking around!';

titleDiv.appendChild(h1);
titleDiv.appendChild(p1);
titleDiv.appendChild(p2);
body.appendChild(titleDiv);

// Photo Data
const photoData = [
    {
        href: 'beach-photos.html',
        imgSrc: 'beach-photos/P7.JPG',
        caption: 'Beach Photos'
    },
    {
        href: 'melbourne-city.html',
        imgSrc: 'melbourne-city/P7.JPG',
        caption: 'Melbourne City'
    },
    {
        href: 'st-kilda-gardens.html',
        imgSrc: 'st-kilda-gardens/P6.JPG',
        caption: 'St Kilda Botanical Gardens'
    }
];

// Photos Section
const photosDiv = document.createElement('div');
photosDiv.className = 'Photos';

photoData.forEach(photo => {
    const figure = document.createElement('figure');

    const link = document.createElement('a');
    link.href = photo.href;

    const img = document.createElement('img');
    img.src = photo.imgSrc;
    img.alt = photo.caption;

    const caption = document.createElement('figcaption');
    caption.textContent = photo.caption;

    link.appendChild(img);
    link.appendChild(caption);
    figure.appendChild(link);
    photosDiv.appendChild(figure);
});

body.appendChild(photosDiv);
