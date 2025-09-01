
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getBaseURL } from "../../apiConfig";
import Modal from "react-modal";
import "./Cart.scss"; 

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [showPaypal, setShowPaypal] = useState(false);
  const customerId = sessionStorage.getItem("customerId");

  useEffect(() => {
    if (!customerId) return;

    const fetchCart = async () => {
      try {
        const res = await axios.get(`${getBaseURL()}api/cart/${customerId}`);
        setCartItems(res.data);
        const totalPrice = res.data.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(totalPrice);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCart();
  }, [customerId]);

  const handleRemove = async (productId) => {
    try {
      await axios.delete(`${getBaseURL()}api/cart/remove/${productId}/${customerId}`);
      setCartItems(prev => prev.filter(item => item.productId !== productId));
      setTotal(prev => prev - cartItems.find(i => i.productId === productId).price * cartItems.find(i => i.productId === productId).quantity);
    } catch (err) {
      console.error(err);
      alert("Failed to remove item");
    }
  };

  const handleDummyPayment = () => {
    setShowPaypal(true);
  };

  const confirmPayment = () => {
    alert("Payment successful! Thank you for your order.");
    setCartItems([]);
    setTotal(0);
    setShowPaypal(false);
  };

  if (!customerId) return <p>Please login first</p>;

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Cart is empty</p>
      ) : (
        <div className="cart-grid">
          {cartItems.map(item => (
            <div key={item.productId} className="cart-item">
              <h4 className="item-name">{item.name}</h4>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
              <p>Total: ${item.price * item.quantity}</p>
              <button className="remove-btn" onClick={() => handleRemove(item.productId)}>Remove</button>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h3>Total: ${total}</h3>
          <button className="paypal-btn" onClick={handleDummyPayment}>
            Pay with PayPal
          </button>
        </div>
      )}

      {/* Dummy PayPal Modal */}
      <Modal
        isOpen={showPaypal}
        onRequestClose={() => setShowPaypal(false)}
        contentLabel="Dummy PayPal Payment"
        ariaHideApp={false}
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
          content: { maxWidth: "400px", margin: "auto", padding: "30px", textAlign: "center", borderRadius: "10px" }
        }}
      >
        <img
          src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
          alt="PayPal"
          style={{ marginBottom: "20px" }}
        />
        <h2>PayPal Payment</h2>
        <p>Total Amount: <strong>${total}</strong></p>
        <div style={{ marginTop: "20px" }}>
          <button
            style={{
              padding: "10px 25px",
              background: "#0070ba",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              marginRight: "10px",
              fontWeight: "bold"
            }}
            onClick={confirmPayment}
          >
            Confirm Payment
          </button>
          <button
            style={{
              padding: "10px 25px",
              background: "#ccc",
              color: "#000",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
            onClick={() => setShowPaypal(false)}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Cart;
