
import React, { useContext } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { CartContext } from "../context/CartContext"; 
import "./Navbar.scss";
import logo from "../../assets/images/logo.png";

const Navbar = ({ handleLogout, setShowCart }) => {
  const { cartItems = [] } = useContext(CartContext) || {};

  return (
    <nav className="navbar">
   
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        EcoWeavesNepal
      </div>

     
      <div className="navbar-icon">
        
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
