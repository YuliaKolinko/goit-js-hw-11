export function getUrl(request) {
  const API_KEY = '49149625-6c85390ad8fbd016bc28c7d7b';
  const BASE_URL = 'https://pixabay.com/api/';

  const imageParams = {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
  };

  let URL = `${BASE_URL}` + `${API_KEY}` + '&q=' + encodeURIComponent(request);

  for (const param in imageParams) {
    URL += `&${param}=${imageParams[param]}`;
  }

  return URL;
}
