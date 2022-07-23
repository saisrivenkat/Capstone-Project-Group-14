  import {
    ADD_TO_WISHLIST,
    REMOVE_ITEM_WISHLIST,
    EMPTY_WISHLIST,
  } from '../constants/wishlistConstants';
  
  export const wishlistReducer = (
    state = { wishlistItems: [], shippingInfo: {} },
    action
  ) => {
    switch (action.type) {
      case ADD_TO_WISHLIST:
        const item = action.payload;
  
        const isItemExist = state.wishlistItems.find(
          (i) => i.product === item.product
        );
  
        if (isItemExist) {
          return {
            ...state,
            wishlistItems: state.wishlistItems.map((i) =>
              i.product === isItemExist.product ? item : i
            ),
          };
        } else {
          return {
            ...state,
            wishlistItems: [...state.wishlistItems, item],
          };
        }
  
      case REMOVE_ITEM_WISHLIST:
        return {
          ...state,
          wishlistItems: state.wishlistItems.filter((i) => i.product !== action.payload),
        };
  

      case EMPTY_WISHLIST:
        return {
          ...state,
          wishlistItems: [],
        };
  
      default:
        return state;
    }
  };
  