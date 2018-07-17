import { c } from './../constants';

export default (state = {}, action) => {
  case c.UPLOAD_FILE:
    return action.imageUrl
  default:
    return state;
};
