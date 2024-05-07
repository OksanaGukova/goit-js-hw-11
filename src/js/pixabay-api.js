
export function searchImages(query) {
const API_KEY = '43705346-f08330685c72fc18a8a8b3aad';
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
    })
    .catch(onFetchError)
    .finally(() => {
      form.reset();
      loader.classList.add('is-hidden');
    });
}

function onFetchError(error) {
  alert(error);
}