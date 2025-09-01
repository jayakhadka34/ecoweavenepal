// import React from "react";
// import "./Footer.scss";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <p className="subscribe-heading">Subscribe to our emails</p>
//       <p className="subscribe-text">Get our latest offers and news straight in your inbox</p>
      
//       {/* <p>© {new Date().getFullYear()} ECO WEB NEPAL. All rights reserved.</p> */}
//     </footer>
//   );
// };

// export default Footer;
import React, { useState } from "react";
import "./Footer.scss";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed Email:", email); 
    
    setEmail(""); 
  };

  return (
    <>
    
    
    
    
    <footer className="footer">
      <p className="subscribe-heading">Subscribe to our emails</p>
      <p className="subscribe-text">
        Get our latest offers and news straight in your inbox
      </p>

      <form className="subscribe-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="subscribe-input"
          required
        />
        <button type="submit" className="subscribe-button">
          Subscribe
        </button>
      </form>
     
    </footer>
     <div className="footer-down">
      <div className="col-1">
        <p><strong>Shopping</strong></p>
        <p>Ecofriendly Product</p>
        <p>Resuable</p>
      </div>
      <div className="col-2">
        <p><strong>About</strong></p>
        <p>Blog</p>
        <p>Careers</p>
      </div>
      <div className="col-3">
        <p> <strong>Customers Polices</strong></p>
        <p>Contact Us</p> 
        <p>Shipping</p>
        <p>Terms & Conditions</p>
        <p>Returns & Refund Policy</p>
      </div>
      <div className="col-4">
        <p><strong>Follow Us</strong></p>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Twitter</p>
      </div>
      </div>
    </>
  );
};

export default Footer;
