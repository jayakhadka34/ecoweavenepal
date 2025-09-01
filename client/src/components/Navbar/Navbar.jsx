// import React from "react";
// import { AiOutlineUser } from "react-icons/ai";
// import { CiHeart } from "react-icons/ci";
// import { LuShoppingCart } from "react-icons/lu";
// import "./Navbar.scss";
// import logo from "../../assets/images/logo.png";

// const Navbar = ({ handleLogout }) => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img src={logo} alt="Logo" />
//         EcoWeavesNepal
//       </div>
//       <div className="navbar-icon">
//         <LuShoppingCart />
//         <CiHeart />
//         <AiOutlineUser onClick={handleLogout} />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// src/components/navbar/Navbar.jsx
// import React, { useContext } from "react";
// import { CartContext } from "../../context/CartContext";
// import { LuShoppingCart } from "react-icons/lu";
// import "./Navbar.scss";

// const Navbar = ({ setShowCart }) => {
//   const { cartItems } = useContext(CartContext);

//   return (
//     <nav className="navbar">
//       <h2>My Shop</h2>
//       <div className="cart-icon" onClick={() => setShowCart(true)}>
//         <LuShoppingCart size={25} />
//         <span className="cart-count">{cartItems.length}</span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// import React, { useContext } from "react";
// import { CartContext } from "../../context/CartContext";
// import { LuShoppingCart } from "react-icons/lu";
// import "./Navbar.scss";

// const Navbar = ({ setShowCart }) => {
//   // const { cartItems } = useContext(CartContext);
// const context = useContext(CartContext) || {};
// const { cartItems = [] } = context;

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">EcoWeavesNepal</div>
//       <div className="cart-icon" onClick={() => setShowCart(true)}>
//         <LuShoppingCart size={25} />
//         <span className="cart-count">{cartItems.length}</span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// Navbar.jsx
// import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext"; // Make sure this path is correct
// import { LuShoppingCart } from "react-icons/lu";
// import "./Navbar.scss";

// const Navbar = ({ setShowCart }) => {
//   // Get cartItems and setCartItems from context
//   const { cartItems, setCartItems } = useContext(CartContext);

//   // Function to add a dummy item to cart
//   const handleAddDummyItem = () => {
//     const newItem = {
//       id: Date.now(),
//       name: `Product ${cartItems.length + 1}`,
//       price: Math.floor(Math.random() * 100) + 1,
//     };
//     setCartItems([...cartItems, newItem]);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <h2>My Shop</h2>
//       </div>

//       <div className="navbar-right">
//         {/* Cart Button */}
//         <button
//           className="cart-btn"
//           onClick={() => setShowCart((prev) => !prev)}
//         >
//           <LuShoppingCart size={24} />
//           <span className="cart-count">{cartItems.length}</span>
//         </button>

//         {/* Dummy Add Item Button */}
//         <button className="add-btn" onClick={handleAddDummyItem}>
//           Add Item
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// import React, { useContext } from "react";
// import { CartContext } from "../../context/CartContext"; // make sure the path matches your file
// import { LuShoppingCart } from "react-icons/lu";
// import "./Navbar.scss";

// const Navbar = ({ setShowCart }) => {
//   // Safe destructuring in case context is undefined
//   const context = useContext(CartContext) || {};
//   const { cartItems = [] } = context;

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">EcoWeavesNepal</div>
//       <div className="cart-icon" onClick={() => setShowCart(true)}>
//         <LuShoppingCart size={25} />
//         <span className="cart-count">{cartItems.length}</span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// Navbar.jsx
// Navbar.jsx
// Navbar.jsx
// import React, { useContext } from "react";
// import { AiOutlineUser } from "react-icons/ai";
// import { CiHeart } from "react-icons/ci";
// import { LuShoppingCart } from "react-icons/lu";
// import { CartContext } from "../context/CartContext"; // adjust path if needed
// import "./Navbar.scss";
// import logo from "../../assets/images/logo.png";

// const Navbar = ({ handleLogout, setShowCart }) => {
//   // Safely get cartItems from context
//   const context = useContext(CartContext) || {};
//   const { cartItems = [] } = context;

//   return (
//     <nav className="navbar">
//       {/* Logo */}
//       <div className="navbar-logo">
//         <img src={logo} alt="Logo" />
//         EcoWeavesNepal
//       </div>

//       {/* Icons */}
//       <div className="navbar-icon">
//         {/* Cart icon with count */}
//         <div className="cart-icon-wrapper" onClick={() => setShowCart(true)}>
//           <LuShoppingCart />
//           <span className="cart-badge">{cartItems.length}</span>
//         </div>

//         <CiHeart />
//         <AiOutlineUser onClick={handleLogout} />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useContext } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { CartContext } from "../context/CartContext"; // correct relative path
import "./Navbar.scss";
import logo from "../../assets/images/logo.png";

const Navbar = ({ handleLogout, setShowCart }) => {
  const { cartItems = [] } = useContext(CartContext) || {};

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        EcoWeavesNepal
      </div>

      {/* Icons */}
      <div className="navbar-icon">
        {/* Cart icon with count, toggle cart open/close */}
        <div
          className="cart-icon-wrapper"
          onClick={() => setShowCart(prev => !prev)}
        >
          <LuShoppingCart />
          <span className="cart-badge">{cartItems.length}</span>
        </div>

        <CiHeart />
        <AiOutlineUser onClick={handleLogout} />
      </div>
    </nav>
  );
};

export default Navbar;
