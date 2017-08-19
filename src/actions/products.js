import axios from 'axios';
import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  SAVE_PRODUCT_SUCCESS,
  SAVE_PRODUCT_ERROR,
  CLEAR_EDITION,
} from './types';

export const getProducts = (id) => (dispatch) => (
  axios.get('produtos').then((result) => (
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: result.data,
    })
  ), (error) => (
    dispatch({
      type: GET_PRODUCTS_ERROR,
      payload: error,
    })
  ))
);

export const getProduct = (id) => (dispatch) => (
  axios.get(`produtos/${id}`).then((result) => (
    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: result.data,
    })
  ), (error) => (
    dispatch({
      type: GET_PRODUCT_ERROR,
      payload: error,
    })
  ))
);

export const save = (product) => (dispatch) => {
  const successSaveProduct = (dispatch, result) => dispatch({
    type: SAVE_PRODUCT_SUCCESS,
    payload: result.data,
  });

  const errorSaveProduct = (dispatch, error) => dispatch({
    type: SAVE_PRODUCT_ERROR,
    payload: error,
  });

  if (product.id) {
    axios.put(`produtos/${product.id}`, product).then(
      (res) => successSaveProduct(dispatch, res),
      (error) => errorSaveProduct(dispatch, error)
    );
  }

  axios.post('produtos', product).then(
    (res) => successSaveProduct(dispatch, res),
    (error) => errorSaveProduct(dispatch, error)
  );
};

export const clearEdition = () => ({
  type: CLEAR_EDITION,
});
