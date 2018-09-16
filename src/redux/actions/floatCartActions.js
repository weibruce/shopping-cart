import { LOAD_CART, ADD_PRODUCT, REMOVE_PRODUCT } from '../constants/action-types';


export const loadCart = (cartProducts) => dispatch => {
  dispatch({
    type: LOAD_CART,
    payload: cartProducts,
  });
}

export const addProduct = (productData) => dispatch => {
  dispatch({
    type: ADD_PRODUCT,
    payload: productData,
  });
}

export const removeProduct = (productData) => dispatch => {
  dispatch({
    type: REMOVE_PRODUCT,
    payload: productData,
  });
}
