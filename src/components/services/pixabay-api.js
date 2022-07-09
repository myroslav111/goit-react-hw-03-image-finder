function fetchPage(name) {
  return fetch(
    `https://pixabay.com/api/?key=23788919-1e868a4f1ae72234cc449d190&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=1`
  ).then(res => res.json());
}

const api = { fetchPage };
export default api;
