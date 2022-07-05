import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryItemsRef = galleryItems
    .map(({ preview, original, description }) => {
        return `<div class = "gallery__item">
    <a class = "gallery__link" href = "${original}">
    <img class = "gallery__image" data-source ="${original}" src = "${preview}"
    alt = "${description}"></a></div>`;
    })
    .join("");
    
    gallery.insertAdjacentHTML("beforeend", galleryItemsRef);


const lightbox = new SimpleLightbox(".gallery a", { 
    captionsPosition: "buttom",
    captionsData: "alt",
    captionsDelay: "250",
     });