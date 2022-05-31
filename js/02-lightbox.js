import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// Variables
const galleryContainer = document.querySelector(".gallery");
const picturesMarkup = creatGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', picturesMarkup);
// 1.Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону 
// элемента галереи.Используй готовый код из первого задания.
function creatGalleryMarkup(items) {
return items.map(({ preview, original, description }) => {
        return `
    <a class="gallery__item" href="${original}">
        <img 
        class="gallery__image" 
        src="${preview}" 
        alt="${description}"/>
    </a>`;
}).join('');  
}

// 2.Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. 
// Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
// new SimpleLightbox('.some-element a', { /* options */ });
let gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: "250"});


// Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из 
// атрибута alt.Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия 
// изображения.