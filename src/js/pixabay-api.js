export function searchImages(param) {
  const API_KEY = '47428145-66711742d009cc5b9838094e7';
  const URL = 'https://pixabay.com/api/';

  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: param,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${URL}?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch(error => console.log(error.message));
}
