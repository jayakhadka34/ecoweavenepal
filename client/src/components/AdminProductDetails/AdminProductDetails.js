import React, { useEffect, useState } from "react";
import axios from "axios";
import OrdersByProductId from "../Orders/OrdersByProductId";
import { getBaseURL } from "../apiConfig"; 
import "./AdminProductDetails.scss";

const ProductDetails = (props) => {
  // const [id, setId] = useState(props.productId);
  const [productDetails, setProductDetails] = useState(true);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDesc, setProductDesc] = useState("");
  const [productImage, setProductImage]= useState(null)

  useEffect(() => {
    axios
      .get(`${getBaseURL()}api/products/${props.productId}`) 
      .then((res) => {
        let data = res.data;
        setProductName(data[0].name);
        setProductPrice(data[0].price);
        setProductDesc(data[0].description);

        setProductDetails(true);
      })
      .catch((err) => {
        console.log("Sorry couldn't fetch details");
        setProductDetails(false);
      });
   
  }, []);

  const saveProduct = () => {
  const formData = new FormData();
  formData.append("id", props.productId);
  formData.append("name", productName);
  formData.append("price", productPrice);
  formData.append("description", productDesc);

  if (productImage) {
    formData.append("image", productImage); 
  }

  axios
    .post(`${getBaseURL()}api/products/update`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((res) => {
      console.log("Successful");
    })
    .catch((err) => {
      console.error("Error uploading product:", err);
    });
};



  const handleBackClickToProductList = () => {
    props.onBackClick();
  };

  return (
    <div className="product-details-container">
      <div className="top-right">
        <button onClick={handleBackClickToProductList}>Back</button>
      </div>
      {productDetails ? (
        <>
          <input
            type="text"
            value={props.productId}
            disabled
            placeholder="Product Id"
          ></input>
          <input
            type="text"
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
            placeholder="Product Name"
          ></input>
          <input
            type="text"
            value={productPrice}
            onChange={(e) => {
              setProductPrice(e.target.value);
            }}
            placeholder="Price"
          ></input>
          <input
            type="text"
            value={productDesc}
            onChange={(e) => {
              setProductDesc(e.target.value);
            }}
            placeholder="Description"
          ></input>
          <input  type="file" accept="image/*" onChange={(e)=>{setProductImage(e.target.files[0])}}/>
          <button onClick={(e) => saveProduct()}>Save</button>
        </>
      ) : null}

      <OrdersByProductId productId={props.productId} />
    </div>
  );
};

export default ProductDetails;
