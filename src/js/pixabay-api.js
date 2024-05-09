
const API_KEY = '43705346-f08330685c72fc18a8a8b3aad';
const BASE_URL = 'https://pixabay.com/api/';


export const fetchPhotos = (query = 'cat') => {
  const searchParams = new URLSearchParams({
    q: query,
   
    per_page: 20,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?key=${API_KEY}&q=${searchParams}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    }
  );
};