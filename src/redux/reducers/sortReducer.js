import { UPDATE_SORT } from '../constants/action-types';


const initialState = {
  item: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SORT:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
