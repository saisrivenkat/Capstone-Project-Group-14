import React, { Fragment, useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import "../../App.css";
import MetaData from '../layout/MetaData';
import Loader from '../layout/Loader';
import Sidebar from './Sidebar';

import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProductReviews,
  deleteReview,
  bulkProduct,
  clearErrors,
} from '../../actions/productActions';
import { BULK_PRODUCT_RESET } from '../../constants/productConstants';


const BulkProduct = ({ history }) => {
    const dispatch = useDispatch();
    const alert = useAlert();
  
    const { loading, error, success } = useSelector((state) => state.bulkProduct);
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
  
    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
  
      if (success) {
        alert.success("Product Created Successfully");
        history.push("/admin/dashboard");
        dispatch({ type: BULK_PRODUCT_RESET });
      }
    }, [dispatch, alert, error, success, history]);
  
    const createProductSubmitHandler = (e) => {
      e.preventDefault();
  
      const myForm = new FormData();
      myForm.append("csv", file);
      dispatch(bulkProduct(myForm));
    };
  
    const bulkProductFileChange = (e) => {
      const files = Array.from(e.target.files);
      setFile(files[0]);
      setFileName(files[0].name);
    };
  
    return (
      <Fragment>
        <MetaData title="Create Product" />
        <div className="dashboard">
          <Sidebar />
  
          <div className="bulkProductContainer">
            <form className="createProductForm" encType="multipart/form-data" onSubmit={createProductSubmitHandler}>
              <h1>Bulk Product Create</h1>
  
              <h6>{fileName}</h6>
              <div id="createProductFormFile">
                <input type="file" name="avatar" multiple onChange={bulkProductFileChange} />
              </div>
  
              <button id="createProductBtn" type="submit" disabled={loading ? true : false}>
                Create
              </button>
            </form>
          </div>
        </div>
      </Fragment>
    );
  };
  
  export default BulkProduct;
  