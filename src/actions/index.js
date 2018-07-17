import constants from './../constants';
const { types } = constants;

export function fetchBeer() {
  return async dispatch => {
    let response = await fetch('https://api.punkapi.com/v2/beers/random');
    let data = await response.json();
    console.log(data);
    dispatch(beerCheck(data));
  }
}
export const beerCheck = (data) => ({
  type: types.GET_BEER,
  payload: data[0],
  id: data[0].id,
});
