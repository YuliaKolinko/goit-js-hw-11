export function getUrl(Words) {
  const API_KEY = '49149625-6c85390ad8fbd016bc28c7d7b';
  const BASE_URL = 'https://pixabay.com/api/';

  const imageParams = {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  };

  let url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=${ImageParams.image_type}&orientation=${ImageParams.orientation}&safesearch=${ImageParams.safesearch}&per_page=${ImageParams.per_page}&page=${page}`;

  for (const param in imageParams) {
    URL += `&${param}=${imageParams[param]}`;
  }

  return URL;
}
