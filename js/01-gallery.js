import { galleryItems } from './gallery-items.js';
// Change code below this line

// Variables
const galleryContainer = document.querySelector(".gallery");
const picturesMarkup = creatGalleryMarkup(galleryItems);
let instance; //змінна з бібліотеки
galleryContainer.insertAdjacentHTML('beforeend', picturesMarkup);
// Реализация делегирования
galleryContainer.addEventListener('click', onGalleryItemClick);

// 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
function creatGalleryMarkup(items) {
return items.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
    <a class="gallery__link" target="_self" href="${original}" >
    <img
      
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
}).join('');
}

// 2.Реализация делегирования на div.gallery и получение url большого изображения.
function onGalleryItemClick(evt) {
  evt.preventDefault(); 

  const isGalleryImageEl = evt.target.classList.contains("gallery__image");
  if (!isGalleryImageEl) {
    return;
  }
  const url = evt.target.dataset.source; 
  const alt = evt.target.alt;
  openModalWindow(url, alt);
} 

// 3.  Открытие модального окна по клику на элементе галереи. 
function openModalWindow(url,alt) {
   instance = basicLightbox.create(`
    <img 
      src="${url}"
      alt ="${alt}"
    > 
`)
  instance.show();

  window.addEventListener("keydown", closeModalWindow);
}

// 4*. Добавь закрытие модального окна по нажатию клавиши Escape. Сделай так, чтобы прослушивание клавиатуры было только пока открыто модальное окно.
//  У библиотеки basicLightbox есть метод для программного закрытия модального окна.

function closeModalWindow(evt) {
  if (evt.key !== "Escape" ) {
    return;
  }
  instance.close();
  console.log(instance)
}

