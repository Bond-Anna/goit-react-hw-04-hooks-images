export const Fetch = ({ name, page }) => {
  const URL = 'https://pixabay.com/api/';
  const API_KEY = '22720619-487e18f692264a9911b958ddb';
  return fetch(
    `${URL}?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
