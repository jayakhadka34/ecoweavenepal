// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { getBaseURL } from "../apiConfig";
// import "./AdminProductList.scss";

// const ProductList = (props) => {
//   const [products, setProducts] = useState([]);
//   const [productName, setProductName] = useState("");
//   const [productPrice, setProductPrice] = useState(0);
//   const [productDesc, setProductDesc] = useState("");

//   const addProduct = () => {
//     let name = productName;
//     let price = productPrice;
//     let description = productDesc;
//     if (name !== "" && price > 0 && description !== "") {
//       axios
//         .post(`${getBaseURL()}api/products/create`, { name, price, description })
//         .then((res) => {
//           console.log("Product added");
//           fetchProducts();
//         })
//         .catch((err) => console.log("Product added"));
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const openProductDetails = (product) => {
//     props.handleProductDetails(product);
//   };

//   const deleteProduct = (productId) => {
//     axios
//       .delete(`${getBaseURL()}api/products/delete/${productId}`)
//       .then((res) => {
//         console.log("Deletion successful");
//         fetchProducts();
//       })
//       .catch((err) => console.log("Error"));
//   };

//   const fetchProducts = () => {
//     axios
//       .get(`${getBaseURL()}api/products`)
//       .then((res) => {
//         const data = res.data;
//         setProducts(data);
//       })
//       .catch((err) => console.log("Couldn't receive list"));
//   };

//   return (
//     <div className="product-list-container">
//       <div className="add-product-section">
//         <label htmlFor="productName">Product Name:</label>
//         <input
//           type="text"
//           id="productName"
//           value={productName}
//           onChange={(e) => {
//             setProductName(e.target.value);
//           }}
//           placeholder="Product Name"
//         />
//         <label htmlFor="productPrice">Price:</label>
//         <input
//           type="number"
//           id="productPrice"
//           value={productPrice}
//           onChange={(e) => {
//             setProductPrice(e.target.value);
//           }}
//           placeholder="Price"
//         />
//         <label htmlFor="productDesc">Description:</label>
//         <input
//           type="text"
//           id="productDesc"
//           value={productDesc}
//           onChange={(e) => {
//             setProductDesc(e.target.value);
//           }}
//           placeholder="Description"
//         />
//         <button onClick={addProduct}>Add Product</button>
//       </div>
//       <div className="product-list">
//         <h1>Product List</h1>
//         <table>
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Name</th>
//               <th>Price</th>
//               <th>Created Date</th>
//               <th>Details</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((product) => {
//               return (
//                 <tr key={product.productId}>
//                   <td>{product.productId}</td>
//                   <td>{product.name}</td>
//                   <td>{product.price}</td>
//                   <td>{product.createdDate}</td>
//                   <td>
//                     <button
//                       onClick={() => {
//                         openProductDetails(product);
//                       }}
//                     >
//                       Details
//                     </button>
//                   </td>
//                   <td>
//                     <button onClick={() => deleteProduct(product.productId)}>
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ProductList;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { getBaseURL } from "../apiConfig";
// import "./AdminProductList.scss";

// const ProductList = (props) => {
//   const [products, setProducts] = useState([]);
//   const [productName, setProductName] = useState("");
//   const [productPrice, setProductPrice] = useState(0);
//   const [productDesc, setProductDesc] = useState("");
//   const [productImage, setProductImage] = useState(null);

//   const addProduct = () => {
//     if (productName !== "" && productPrice > 0 && productDesc !== "") {
//       const formData = new FormData();
//       formData.append("name", productName);
//       formData.append("price", productPrice);
//       formData.append("description", productDesc);

//       if (productImage) {
//         formData.append("image", productImage);
//       }

//       axios
//         .post(`${getBaseURL()}api/products/create`, formData, {
//           headers: { "Content-Type": "multipart/form-data" },
//         })
//         .then((res) => {
//           console.log("Product added");
//           fetchProducts();
//           // Reset inputs
//           setProductName("");
//           setProductPrice(0);
//           setProductDesc("");
//           setProductImage(null);
//         })
//         .catch((err) => console.log("Error adding product", err));
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const openProductDetails = (product) => {
//     props.handleProductDetails(product);
//   };

//   const deleteProduct = (productId) => {
//     axios
//       .delete(`${getBaseURL()}api/products/delete/${productId}`)
//       .then((res) => {
//         console.log("Deletion successful");
//         fetchProducts();
//       })
//       .catch((err) => console.log("Error deleting product"));
//   };

//   const fetchProducts = () => {
//     axios
//       .get(`${getBaseURL()}api/products`)
//       .then((res) => {
//         setProducts(res.data);
//       })
//       .catch((err) => console.log("Couldn't receive product list"));
//   };

//   return (
//     <div className="product-list-container">
//       <div className="add-product-section">
//         <label htmlFor="productName">Product Name:</label>
//         <input
//           type="text"
//           id="productName"
//           value={productName}
//           onChange={(e) => setProductName(e.target.value)}
//           placeholder="Product Name"
//         />

//         <label htmlFor="productPrice">Price:</label>
//         <input
//           type="number"
//           id="productPrice"
//           value={productPrice}
//           onChange={(e) => setProductPrice(e.target.value)}
//           placeholder="Price"
//         />

//         <label htmlFor="productDesc">Description:</label>
//         <input
//           type="text"
//           id="productDesc"
//           value={productDesc}
//           onChange={(e) => setProductDesc(e.target.value)}
//           placeholder="Description"
//         />

//         <label htmlFor="productImage">Image:</label>
//         <input
//           type="file"
//           id="productImage"
//           accept="image/*"
//           onChange={(e) => setProductImage(e.target.files[0])}
//         />

//         {productImage && (
//           <div className="image-preview">
//             <img
//               src={URL.createObjectURL(productImage)}
//               alt="Preview"
//               style={{ width: "150px", marginTop: "10px" }}
//             />
//           </div>
//         )}

//         <button onClick={addProduct}>Add Product</button>
//       </div>

//       <div className="product-list">
//         <h1>Product List</h1>
//         <table>
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Name</th>
//               <th>Price</th>
//               <th>Created Date</th>
//               <th>Details</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((product) => (
//               <tr key={product.productId}>
//                 <td>{product.productId}</td>
//                 <td>{product.name}</td>
//                 <td>{product.price}</td>
//                 <td>{product.createdDate}</td>
//                 <td>
//                   <button onClick={() => openProductDetails(product)}>
//                     Details
//                   </button>
//                 </td>
//                 <td>
//                   <button onClick={() => deleteProduct(product.productId)}>
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ProductList;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { getBaseURL } from "../apiConfig";
import "./AdminProductList.scss";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDesc, setProductDesc] = useState("");
  const [productImage, setProductImage] = useState(null);

  const addProduct = () => {
    if (productName !== "" && productPrice > 0 && productDesc !== "") {
      const formData = new FormData();
      formData.append("name", productName);
      formData.append("price", productPrice);
      formData.append("description", productDesc);
      console.log("productImage: ", productImage);
      if (productImage) {
        formData.append("image", productImage);
      }

      axios
        .post(`${getBaseURL()}api/products/create`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          console.log("Product added");
          fetchProducts();
          setProductName("");
          setProductPrice(0);
          setProductDesc("");
          setProductImage(null);
        })
        .catch((err) => console.log("Error adding product", err));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const openProductDetails = (product) => {
    props.handleProductDetails(product);
  };

  const deleteProduct = (productId) => {
    axios
      .delete(`${getBaseURL()}api/products/delete/${productId}`)
      .then((res) => {
        console.log("Deletion successful");
        fetchProducts();
      })
      .catch((err) => console.log("Error deleting product"));
  };

  const fetchProducts = () => {
    axios
      .get(`${getBaseURL()}api/products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log("Couldn't receive product list"));
  };

  return (
    <div className="product-list-container">
      <div className="add-product-section">
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Product Name"
        />

        <label htmlFor="productPrice">Price:</label>
        <input
          type="number"
          id="productPrice"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          placeholder="Price"
        />

        <label htmlFor="productDesc">Description:</label>
        <input
          type="text"
          id="productDesc"
          value={productDesc}
          onChange={(e) => setProductDesc(e.target.value)}
          placeholder="Description"
        />

        <label htmlFor="productImage">Image:</label>
        <input
          type="file"
          id="productImage"
          accept="image/*"
          onChange={(e) => setProductImage(e.target.files[0])}
        />

        {productImage && (
          <div className="image-preview">
            <img
              src={URL.createObjectURL(productImage)}
              alt="Preview"
              style={{ width: "150px", marginTop: "10px" }}
            />
          </div>
        )}

        <button onClick={addProduct}>Add Product</button>
      </div>

      <div className="product-list">
        <h1>Product List</h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Created Date</th>
              <th>Details</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.productId}>
                <td>{product.productId}</td>
                <td>
                  {product.image ? (
                    <img
                      src={`${getBaseURL()}uploads/${product.image}`}
                      alt={product.name}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.createdDate}</td>
                <td>
                  <button onClick={() => openProductDetails(product)}>
                    Details
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteProduct(product.productId)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
