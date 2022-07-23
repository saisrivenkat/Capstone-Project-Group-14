import React, { Fragment, useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";
import ListReviews from "../review/ListReviews";

import { useAlert } from "react-alert";
import {
  getProductDetails,
  newReview,
  clearErrors,
} from "../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { addItemToWishlist, removeItemFromWishlist } from "../../actions/wishlistActions";

import { addItemToCart } from "../../actions/cartActions";
import { NEW_REVIEW_RESET } from "../../constants/productConstants";

const Wishlist = ({ history }) => {
  const dispatch = useDispatch();

  const { wishlistItems } = useSelector((state) => state.wishlist);

   const removeWishlistItemHandler = (id) => {
    dispatch(removeItemFromWishlist(id));
  };

  const increaseQty = (id, quantity, stock) => {
    const newQty = quantity + 1;

    if (newQty > stock) return;

    dispatch(addItemToWishlist(id, newQty));
  };

  const decreaseQty = (id, quantity) => {
    const newQty = quantity - 1;

    if (newQty <= 0) return;

    dispatch(addItemToWishlist(id, newQty));
  };


  // const { loading, error, product } = useSelector(
  //   (state) => state.productDetails
  // );
  // const [quantity,newQty,,id, setQuantity] = useState(1);
  // const addToCart = ({match}) => {
  //   dispatch(addItemToCart(match.params.id, quantity));
  //   alert.success("Item Added to Cart");
 
  // }
 
  
  return (
    <Fragment>
      <MetaData title={"Your Wishlist"} />
      {wishlistItems.length === 0 ? (
        <h2 className="mt-5">Your WishList is Empty</h2>
      ) : (
        <Fragment>
          <h2 className="mt-5">
            Your WishList: <b>{wishlistItems.length} items</b>
          </h2>

          <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-8">
              {wishlistItems.map((item) => (
                <Fragment>
                  <hr />

                  <div className="cart-item" key={item.product}>
                    <div className="row">
                      <div className="col-4 col-lg-3">
                        <img
                          src={item.image}
                          alt="Laptop"
                          height="90"
                          width="115"
                        />
                      </div>

                      <div className="col-5 col-lg-3">
                        <Link to={`/product/${item.product}`}>
                          {item.name}
                        </Link>
                        
                      </div>

                      <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                        <p id="card_item_price">₹ {item.price}</p>
                      </div>

                      <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                        <div className="stockCounter d-inline">
                          <span
                            className="btn btn-secondary minus"
                            onClick={() =>
                              decreaseQty(item.product, item.quantity)
                            }
                          >
                            -
                          </span>

                          <input
                            type="number"
                            className="form-control count d-inline"
                            value={item.quantity}
                            readOnly
                          />

                          <span
                            className="btn btn-primary plus"
                            onClick={() =>
                              increaseQty(
                                item.product,
                                item.quantity,
                                item.stock
                              )
                            }
                          >
                            +
                          </span>
                        </div>
                      </div>

                      <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                        <i
                          id="delete_cart_item"
                          className="fa fa-trash btn btn-danger"
                          onClick={() => removeWishlistItemHandler(item.product)}
                        ></i>
                      </div>
                     
                            {/* <button
                      type="button"
                      id="cart_btn"
                      className="btn btn-primary d-inline mt-4 "
                     disabled={product.stock === 0}
                     onClick={addToCart}
                    >
                      Add to Cart
                    </button>
       */}
                    </div>
                  </div>
                  <hr />
                </Fragment>
              ))}
            </div>

            {/* <div>
              <button
                type="button"
                id="cart_btn"
                className="btn btn-primary d-inline ml-4"
                disabled={product.stock === 0}
                onClick={addToCart}
              >
                Add to Cart
              </button>
              </div> */}
            {/* <div className="col-12 col-lg-3 my-4">
              <div >
                <button
                  id="checkout_btn"
                  className="btn btn-primary btn-block"
                  onClick={'addCartItem'}
                >
                  Add to Cart
                </button>
              </div>
            </div> */}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Wishlist;
