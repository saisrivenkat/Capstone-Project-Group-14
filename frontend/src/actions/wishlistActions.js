import axios from 'axios';

import {
  ADD_TO_WISHLIST,
  REMOVE_ITEM_WISHLIST,
  EMPTY_WISHLIST
} from '../constants/wishlistConstants';

//add to wishlist
export const addItemToWishlist = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/product/${id}`);

  dispatch({
    type: ADD_TO_WISHLIST,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.images[0].url,
      stock: data.product.stock,
      quantity,
    },
  });


localStorage.setItem('wishlistItems', JSON.stringify(getState().wishlist.wishlistItems));
};


//remove items from wishlist
export const removeItemFromWishlist = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_ITEM_WISHLIST,
    payload: id,
  });

  localStorage.setItem('wishlistItems', JSON.stringify(getState().wishlist.wishlistItems));
  
};

// empty wishlist
export const emptyWishlist = () => async (dispatch) => {
  dispatch({
    type: EMPTY_WISHLIST,
  });
};
