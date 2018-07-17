import { c } from './constants';
async function fetchFacesFromImage(image) {
  let response = await fetch('https://api.cloudmersive.com/image/face/locate', {
    method: 'POST',
    body: image
  });
  let data = await response.json();
  console.log(data);
}
export const imageCheck = (image) => {
  return async (dispatch) => {
    try {
      const data = await fetchFacesFromImage(image);
      dispatch(fetchFacesFromImage(data));
    } catch (e) {
      console.log('Response Failed:', e);
    }
  }
}
export const requestFaceCheck = (image) => ({
  type: c.UPLOAD_FILE,
  image
});
