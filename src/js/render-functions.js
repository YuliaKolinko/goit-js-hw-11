// const galleryItems = document.querySelector('.gallery');
// const imagesArray = images.map(image => {
//   const li = document.createElement('li');
//   li.classList.add('gallery-item');
//   const link = document.createElement('a');
//   link.classList.add('gallery-link');
//   link.href = image.original;
//   const img = document.createElement('img');
//   img.classList.add('gallery-image');
//   img.src = image.preview;
//   img.alt = image.description;
//   img.setAttribute('data-source', image.original);
//   img.width = 360;
//   img.height = 200;
//   li.append(link);
//   link.append(img);
//   return li;
// });
// let gallery = new SimpleLightbox('.gallery a', {
//   captions: true,
//   captionsData: `alt`,
//   captionDelay: 250,
//   animationSpeed: 350,
// });
// gallery.on('show.simplelightbox', function () {});
// gallery.on('error.simplelightbox', function (e) {
//   console.log(e);
// });
