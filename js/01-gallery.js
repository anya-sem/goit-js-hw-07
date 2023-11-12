import { galleryItems } from './gallery-items.js';
// Change code below this line

// import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/dist/basicLightbox.min.css';
    
const container = document.querySelector(".gallery")

container.insertAdjacentHTML("beforeend", createMarkup(galleryItems))
container.addEventListener("click", handleClick)

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `).join("")
}


function handleClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains("gallery__image")) {
        return;
    };

    const originalImageURL = event.target.dataset.source;
    // console.log(originalImageURL);
    
    const lightBox = basicLightbox.create(
        `<img src="${originalImageURL}" width="800" height="600"`
    );
    lightBox.show();
}

console.log(handleClick(event));

// console.log(galleryItems);
