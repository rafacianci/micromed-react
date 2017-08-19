import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_SUCCESS,
  CLEAR_EDITION,
} from '../actions/types';

const initialState = {
  data: [],
  product: {},
};

export default (state = initialState, action) => {
  if (action.type === GET_PRODUCTS_SUCCESS) {
    return {
      data: action.payload,
    };
  }

  if (action.type === CLEAR_EDITION) {
    return {
      ...state,
      product: null,
    };
  }

  if (action.type === GET_PRODUCT_SUCCESS) {
    return {
      ...state,
      product: action.payload,
    };
  }

  return state;
};
