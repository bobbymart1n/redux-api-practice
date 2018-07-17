import constants from './../constants';
const { types } = constants;

const reducer = (state = {}, action) => {
  let newBeer
  let newBeerByStateSlice;
  switch (action.type) {
  case types.GET_BEER:
    console.log(action.payload);
    newBeer = {
      data: action.payload,
      id: action.id
    };
    newBeerByStateSlice = Object.assign({}, state, {
      [action.id]: newBeer
    });
    return newBeerByStateSlice
  default:
    return state;
  }
};

export default reducer;
