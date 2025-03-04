import axios from 'axios';
// iziToast імпорт бібліотеки
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// SimpleLightbox імпорт бібліотеки
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// loaders імпорт бібліотеки
import 'loaders.css/loaders.min.css';
// Імпорт функцій
import getUrl from './js/pixabay-api';
import renderImages from './js/render-functions';
// Імпорт іконок
import iconSvgError from './img/icon/Group.png';

const form = document.querySelector('.search-form');
const loaderElement = document.querySelector('.loader');
const errorMesage = {
  message:
    'Sorry, there are no images matching your search query.Please try again!',
  messageColor: '#fff',
  backgroundColor: '#ef4040',
  position: 'topRight',
  iconUrl: iconSvgError,
};

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  animationSpeed: 350,
});

lightbox.on('show.simplelightbox', function () {});
lightbox.on('error.simplelightbox', function (e) {
  console.log(e);
});
