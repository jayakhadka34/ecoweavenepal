// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { getBaseURL } from "../../apiConfig";
// import ProductCard from "../productcard/ProductCard";
// import Cart from "../cart/Cart";
// import OrderDetails from "../../Orders/OrderDetails";
// import "./LandingPage.scss";

// // import Product1Img from "../../../assets/images/product1.png";
// // import Product2Img from "../../../assets/images/product2.png";
// // import Product3Img from "../../../assets/images/product3.png";

// // const staticProducts = [
// //   { name: "Product 1", price: 200, details: "This is a cool product.", image: Product1Img },
// //   { name: "Product 2", price: 500, details: "Another amazing item.", image: Product2Img },
// //   { name: "Product 3", price: 800, details: "Affordable and great.", image: Product3Img },
// // ];

// const LandingPage = () => {
//   const [adminProducts, setAdminProducts] = useState([]);
//   const [cartItems, setCartItems] = useState([]);
//   const [viewCart, setViewCart] = useState(false);
//   const [orderId, setOrderId] = useState(null);
//   const [quantities, setQuantities] = useState({});

//   useEffect(() => {
//     axios
//       .get(`${getBaseURL()}api/products`)
//       .then((res) => setAdminProducts(res.data))
//       .catch(() => console.log("Error fetching admin products"));
//   }, []);

//   const allProducts = [

//     ...adminProducts.map((p) => ({
//       name: p.name,
//       price: p.price,
//       details: p.details,
//       image: `${getBaseURL()}uploads/${p.image}`,
//     })),
//   ];

//   const handleQuantityChange = (index, change) => {
//     setQuantities((prev) => {
//       const newQty = Math.max(1, (prev[index] || 1) + change);
//       return { ...prev, [index]: newQty };
//     });
//   };

//   const handleBuyNow = (product, index) => {
//     const qty = quantities[index] || 1;
//     setCartItems([...cartItems, { ...product, quantity: qty }]);
//     setViewCart(true);
//   };

//   const handlePlaceOrder = () => {
//     const customerId = sessionStorage.getItem("customerId");
//     const productsPayload = cartItems.map((item) => ({
//       name: item.name,
//       price: item.price,
//       quantity: item.quantity,
//     }));

//     axios
//       .post(`${getBaseURL()}api/orders/create`, {
//         customerId,
//         products: productsPayload,
//       })
//       .then((res) => {
//         setOrderId(res.data.orderId);
//         setCartItems([]);
//         setViewCart(false);
//       })
//       .catch((err) => console.log("Error placing order", err));
//   };

//   if (orderId) {
//     return <OrderDetails orderId={orderId} onBackClick={() => setOrderId(null)} />;
//   }

//   if (viewCart) {
//     return (
//       <Cart
//         cartItems={cartItems}
//         onBack={() => setViewCart(false)}
//         onPlaceOrder={handlePlaceOrder}
//       />
//     );
//   }

//   return (
//     <div className="landing-page">
//       <h1 className="landing-title">Our Products</h1>
//       <div className="product-list">
//         {allProducts.map((product, index) => (
//           <ProductCard
//             key={index}
//             name={product.name}
//             price={product.price}
//             details={product.details}
//             image={product.image}
//           >
//             <div style={{ display: "flex", gap: "10px", marginTop: "10px", alignItems: "center" }}>
//               {/* Quantity box with green + / - */}
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   border: "1px solid #48b05f",
//                   borderRadius: "6px",
//                   overflow: "hidden",
//                 }}
//               >
//                 <button
//                   onClick={() => handleQuantityChange(index, -1)}
//                   style={{
//                     backgroundColor: "#48b05f",
//                     color: "white",
//                     padding: "6px 12px",
//                     border: "none",
//                     cursor: "pointer",
//                     fontSize: "16px",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   –
//                 </button>
//                 <span
//                   style={{
//                     padding: "6px 12px",
//                     minWidth: "30px",
//                     textAlign: "center",
//                     fontWeight: "500",
//                   }}
//                 >
//                   {quantities[index] || 1}
//                 </span>
//                 <button
//                   onClick={() => handleQuantityChange(index, 1)}
//                   style={{
//                     backgroundColor: "#48b05f",
//                     color: "white",
//                     padding: "6px 12px",
//                     border: "none",
//                     cursor: "pointer",
//                     fontSize: "16px",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   +
//                 </button>
//               </div>

//               {/* Add to Cart button */}
//               <button
//                 style={{
//                   backgroundColor: "#48b05f",
//                   padding: "6px 14px",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "6px",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => handleBuyNow(product, index)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </ProductCard>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { getBaseURL } from "../../apiConfig";
// import ProductCard from "../productcard/ProductCard";
// import "./LandingPage.scss";

// const LandingPage = ({ setShowCart }) => {
//   const [adminProducts, setAdminProducts] = useState([]);
//   const [quantities, setQuantities] = useState({});
//   const customerId = sessionStorage.getItem("customerId");

//   useEffect(() => {
//     axios
//       .get(`${getBaseURL()}api/products`)
//       .then((res) => setAdminProducts(res.data))
//       .catch(() => console.log("Error fetching admin products"));
//   }, []);

//   const handleQuantityChange = (index, change) => {
//     setQuantities((prev) => {
//       const newQty = Math.max(1, (prev[index] || 1) + change);
//       return { ...prev, [index]: newQty };
//     });
//   };

//   const handleAddToCart = async (product, index) => {
//     const qty = quantities[index] || 1;

//     try {
//       await axios.post(`${getBaseURL()}api/cart/add`, {
//         customerId,
//         productId: product.productId,
//         quantity: qty
//       });
//       alert("Product added to cart!");

//       // Navigate to Cart page
//       setShowCart(true);

//     } catch (err) {
//       console.error("Error adding to cart:", err);
//       alert("Failed to add product to cart.");
//     }
//   };

//   return (
//     <div className="landing-page">
//       <h1 className="landing-title">Our Products</h1>
//       <div className="product-list">
//         {adminProducts.map((product, index) => (
//           <ProductCard
//             key={index}
//             name={product.name}
//             price={product.price}
//             details={product.details}
//             image={`${getBaseURL()}uploads/${product.image}`}
//             productId={product.productId}
//           >
//             <div style={{ display: "flex", gap: "10px", marginTop: "10px", alignItems: "center" }}>
//               <div style={{ display: "flex", alignItems: "center", border: "1px solid #48b05f", borderRadius: "6px", overflow: "hidden" }}>
//                 <button
//                   onClick={() => handleQuantityChange(index, -1)}
//                   style={{ backgroundColor: "#48b05f", color: "white", padding: "6px 12px", border: "none", cursor: "pointer", fontSize: "16px", fontWeight: "bold" }}
//                 >–</button>
//                 <span style={{ padding: "6px 12px", minWidth: "30px", textAlign: "center", fontWeight: "500" }}>
//                   {quantities[index] || 1}
//                 </span>
//                 <button
//                   onClick={() => handleQuantityChange(index, 1)}
//                   style={{ backgroundColor: "#48b05f", color: "white", padding: "6px 12px", border: "none", cursor: "pointer", fontSize: "16px", fontWeight: "bold" }}
//                 >+</button>
//               </div>

//               <button
//                 style={{ backgroundColor: "#48b05f", padding: "6px 14px", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}
//                 onClick={() => handleAddToCart(product, index)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </ProductCard>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { getBaseURL } from "../../apiConfig";
// import ProductCard from "../productcard/ProductCard";
// import { useNavigate } from "react-router-dom";
// import "./LandingPage.scss";

// const LandingPage = () => {
//   const [adminProducts, setAdminProducts] = useState([]);
//   const [quantities, setQuantities] = useState({});
//   const navigate = useNavigate();
//   const customerId = sessionStorage.getItem("customerId"); // must exist

//   useEffect(() => {
//     axios
//       .get(`${getBaseURL()}api/products`)
//       .then((res) => setAdminProducts(res.data))
//       .catch(() => console.log("Error fetching admin products"));
//   }, []);

//   const handleQuantityChange = (index, change) => {
//     setQuantities((prev) => {
//       const newQty = Math.max(1, (prev[index] || 1) + change);
//       return { ...prev, [index]: newQty };
//     });
//   };

//   const handleAddToCart = async (product, index) => {
//     const qty = quantities[index] || 1;

//     if (!customerId) return alert("Please login first!");

//     try {
//       await axios.post(`${getBaseURL()}api/cart/add`, {
//         customerId,
//         productId: product.productId,
//         quantity: qty,
//       });

//       alert("Product added to cart!");

//       // Navigate to Cart page
//       navigate("/cart");
//     } catch (err) {
//       console.error("Error adding to cart:", err.response?.data || err.message);
//       alert("Failed to add product to cart.");
//     }
//   };

//   return (
//     <div className="landing-page">
//       <h1 className="landing-title">Our Products</h1>
//       <div className="product-list">
//         {adminProducts.map((product, index) => (
//           <ProductCard
//             key={index}
//             name={product.name}
//             price={product.price}
//             details={product.details}
//             image={`${getBaseURL()}uploads/${product.image}`}
//             productId={product.productId}
//           >
//             <div style={{ display: "flex", gap: "10px", marginTop: "10px", alignItems: "center" }}>
//               {/* Quantity selector */}
//               <div style={{ display: "flex", alignItems: "center", border: "1px solid #48b05f", borderRadius: "6px", overflow: "hidden" }}>
//                 <button
//                   onClick={() => handleQuantityChange(index, -1)}
//                   style={{ backgroundColor: "#48b05f", color: "white", padding: "6px 12px", border: "none", cursor: "pointer", fontSize: "16px", fontWeight: "bold" }}
//                 >–</button>
//                 <span style={{ padding: "6px 12px", minWidth: "30px", textAlign: "center", fontWeight: "500" }}>
//                   {quantities[index] || 1}
//                 </span>
//                 <button
//                   onClick={() => handleQuantityChange(index, 1)}
//                   style={{ backgroundColor: "#48b05f", color: "white", padding: "6px 12px", border: "none", cursor: "pointer", fontSize: "16px", fontWeight: "bold" }}
//                 >+</button>
//               </div>

//               {/* Add to Cart button */}
//               <button
//                 style={{ backgroundColor: "#48b05f", padding: "6px 14px", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}
//                 onClick={() => handleAddToCart(product, index)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </ProductCard>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { getBaseURL } from "../../apiConfig";
// import ProductCard from "../productcard/ProductCard";
// import { useNavigate } from "react-router-dom";
// import { CartContext } from "../../../context/CartContext"; // import CartCountContext
// import "./LandingPage.scss";

// const LandingPage = () => {
//   const [adminProducts, setAdminProducts] = useState([]);
//   const [quantities, setQuantities] = useState({});
//   const navigate = useNavigate();
//   const customerId = sessionStorage.getItem("customerId"); // must exist
//   const { setCartCount } = useContext(CartCountContext); // access setCartCount

//   useEffect(() => {
//     axios
//       .get(`${getBaseURL()}api/products`)
//       .then((res) => setAdminProducts(res.data))
//       .catch(() => console.log("Error fetching admin products"));
//   }, []);

//   const handleQuantityChange = (index, change) => {
//     setQuantities((prev) => {
//       const newQty = Math.max(1, (prev[index] || 1) + change);
//       return { ...prev, [index]: newQty };
//     });
//   };

//   const handleAddToCart = async (product, index) => {
//     const qty = quantities[index] || 1;

//     if (!customerId) return alert("Please login first!");

//     try {
//       await axios.post(`${getBaseURL()}api/cart/add`, {
//         customerId,
//         productId: product.productId,
//         quantity: qty,
//       });

//       alert("Product added to cart!");

//       // Update Navbar cart count immediately
//       setCartCount(prev => prev + qty);

//       // Navigate to Cart page
//       navigate("/cart");
//     } catch (err) {
//       console.error("Error adding to cart:", err.response?.data || err.message);
//       alert("Failed to add product to cart.");
//     }
//   };

//   return (
//     <div className="landing-page">
//       <h1 className="landing-title">Our Products</h1>
//       <div className="product-list">
//         {adminProducts.map((product, index) => (
//           <ProductCard
//             key={index}
//             name={product.name}
//             price={product.price}
//             details={product.details}
//             image={`${getBaseURL()}uploads/${product.image}`}
//             productId={product.productId}
//           >
//             <div style={{ display: "flex", gap: "10px", marginTop: "10px", alignItems: "center" }}>
//               {/* Quantity selector */}
//               <div style={{ display: "flex", alignItems: "center", border: "1px solid #48b05f", borderRadius: "6px", overflow: "hidden" }}>
//                 <button
//                   onClick={() => handleQuantityChange(index, -1)}
//                   style={{ backgroundColor: "#48b05f", color: "white", padding: "6px 12px", border: "none", cursor: "pointer", fontSize: "16px", fontWeight: "bold" }}
//                 >–</button>
//                 <span style={{ padding: "6px 12px", minWidth: "30px", textAlign: "center", fontWeight: "500" }}>
//                   {quantities[index] || 1}
//                 </span>
//                 <button
//                   onClick={() => handleQuantityChange(index, 1)}
//                   style={{ backgroundColor: "#48b05f", color: "white", padding: "6px 12px", border: "none", cursor: "pointer", fontSize: "16px", fontWeight: "bold" }}
//                 >+</button>
//               </div>

//               {/* Add to Cart button */}
//               <button
//                 style={{ backgroundColor: "#48b05f", padding: "6px 14px", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}
//                 onClick={() => handleAddToCart(product, index)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </ProductCard>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { getBaseURL } from "../../apiConfig";
import ProductCard from "../productcard/ProductCard";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./LandingPage.scss";

const LandingPage = () => {
  const [adminProducts, setAdminProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();
  const customerId = sessionStorage.getItem("customerId");
  const { cartItems, setCartItems } = useContext(CartContext);

  useEffect(() => {
    axios
      .get(`${getBaseURL()}api/products`)
      .then((res) => setAdminProducts(res.data))
      .catch(() => console.log("Error fetching admin products"));
  }, []);

  const handleQuantityChange = (index, change) => {
    setQuantities((prev) => {
      const newQty = Math.max(1, (prev[index] || 1) + change);
      return { ...prev, [index]: newQty };
    });
  };

  const handleAddToCart = async (product, index) => {
    const qty = quantities[index] || 1;

    if (!customerId) return alert("Please login first!");

    try {
      await axios.post(`${getBaseURL()}api/cart/add`, {
        customerId,
        productId: product.productId,
        quantity: qty,
      });

      alert("Product added to cart!");

      // Update CartContext for Navbar count
      const existing = cartItems.find(
        (item) => item.productId === product.productId
      );
      if (existing) {
        setCartItems(
          cartItems.map((item) =>
            item.productId === product.productId
              ? { ...item, quantity: item.quantity + qty }
              : item
          )
        );
      } else {
        setCartItems([...cartItems, { ...product, quantity: qty }]);
      }

      navigate("/cart"); // optional
    } catch (err) {
      console.error("Error adding to cart:", err.response?.data || err.message);
      alert("Failed to add product to cart.");
    }
  };

  return (
    <div className="landing-page">
      <h1 className="landing-title">Our Products</h1>
      <div className="product-list">
        {adminProducts.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            details={product.details}
            image={`${getBaseURL()}uploads/${product.image}`}
            productId={product.productId}
          >
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "10px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #48b05f",
                  borderRadius: "6px",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => handleQuantityChange(index, -1)}
                  style={{
                    backgroundColor: "#48b05f",
                    color: "white",
                    padding: "6px 12px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  –
                </button>
                <span
                  style={{
                    padding: "6px 12px",
                    minWidth: "30px",
                    textAlign: "center",
                    fontWeight: "500",
                  }}
                >
                  {quantities[index] || 1}
                </span>
                <button
                  onClick={() => handleQuantityChange(index, 1)}
                  style={{
                    backgroundColor: "#48b05f",
                    color: "white",
                    padding: "6px 12px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  +
                </button>
              </div>
              <button
                style={{
                  backgroundColor: "#48b05f",
                  padding: "6px 14px",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
                onClick={() => handleAddToCart(product, index)}
              >
                Add to Cart
              </button>
            </div>
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
