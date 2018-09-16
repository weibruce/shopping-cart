import { UPDATE_SORT } from '../constants/action-types';


export const updateSort = (sort) => dispatch => {

  dispatch({
    type: UPDATE_SORT,
    payload: sort,
  });

}
