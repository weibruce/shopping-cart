import { UPDATE_FILTER } from '../constants/action-types';


export const updateFilters = (filters) => dispatch => {

  dispatch({
    type: UPDATE_FILTER,
    payload: filters,
  });

}
