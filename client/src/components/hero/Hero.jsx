// // import React from 'react'
// // import "./Hero.scss";
// // import Information from './infopage/Information';
// // import LandingPage from './landingpage/LandingPage';

// // export const Hero = () => {
// //   return (
// //     <div className='hero'>
// //         <div>
// //         <Information/>
// //         <LandingPage/>
// //         </div>

// //         </div>
// //   )
// // }
// // import React from 'react';
// // import "./Hero.scss";
// // import Information from './infopage/Information';
// // import LandingPage from './landingpage/LandingPage';

// // export const Hero = ({ setShowCart }) => {
// //   return (
// //     <div className='hero'>
// //       <div>
// //         <Information />
// //         <LandingPage setShowCart={setShowCart} />
// //       </div>
// //     </div>
// //   )
// // }

// import React, { useState } from "react";
// import "./Hero.scss";
// import Information from "./infopage/Information";
// import LandingPage from "./landingpage/LandingPage";
// import Cart from "./cart/Cart";

// export const Hero = () => {
//   const [showCart, setShowCart] = useState(false);

//   return (
//     <div className="hero">
//       <Information />

//       {showCart ? (
//         <Cart setShowCart={setShowCart} /> // Show Cart page
//       ) : (
//         <LandingPage setShowCart={setShowCart} /> // Show products
//       )}
//     </div>
//   );
// };

// src/components/hero/Hero.jsx
// import React, { useState } from "react";
// import "./Hero.scss";
// import Information from "./infopage/Information";
// import LandingPage from "./landingpage/LandingPage";
// import Cart from "./cart/Cart";
// import { CartProvider } from  "../../context/CartContext"; // import CartProvider

// export const Hero = () => {
//   const [showCart, setShowCart] = useState(false);

//   return (
//     <CartProvider>
//       <div className="hero">
//         <Information />

//         {showCart ? (
//           <Cart setShowCart={setShowCart} /> // Show Cart page
//         ) : (
//           <LandingPage setShowCart={setShowCart} /> // Show products
//         )}
//       </div>
//     </CartProvider>
//   );
// };
// src/components/hero/Hero.jsx
// import React, { useState } from "react";
// import "./Hero.scss";
// import Information from "./infopage/Information";
// import LandingPage from "./landingpage/LandingPage";
// import Cart from "./cart/Cart";
// import Navbar from "../Navbar/Navbar";
// import { CartProvider } from "../../context/CartContext";

// export const Hero = () => {
//   const [showCart, setShowCart] = useState(false);

//   return (
//     <CartProvider>
//       <div className="hero">
//         <Navbar setShowCart={setShowCart} />
//         <Information />

//         {showCart ? (
//           <Cart setShowCart={setShowCart} /> // Show Cart page
//         ) : (
//           <LandingPage setShowCart={setShowCart} /> // Show products
//         )}
//       </div>
//     </CartProvider>
//   );
// };
// src/components/hero/Hero.jsx
// import React, { useState } from "react";
// import "./Hero.scss";
// import Information from "./infopage/Information";
// import LandingPage from "./landingpage/LandingPage";
// import Cart from "./cart/Cart";
// import { CartProvider } from "../../context/CartContext";
// import Navbar from "../Navbar/Navbar";

// export const Hero = () => {
//   const [showCart, setShowCart] = useState(false);

//   return (
//     <CartProvider>
//       <div className="hero">
//         {/* <Navbar setShowCart={setShowCart} /> */}
//         <Information />

//         {showCart ? (
//           <Cart setShowCart={setShowCart} /> // Show Cart page
//         ) : (
//           <LandingPage setShowCart={setShowCart} /> // Show products
//         )}
//       </div>
//     </CartProvider>
//   );
// };
import React from "react";
import "./Hero.scss";
import Information from "./infopage/Information";
import LandingPage from "./landingpage/LandingPage";
import Cart from "./cart/Cart";

export const Hero = ({ showCart, setShowCart }) => {
  return (
    <div className="hero">
      <Information />
      {showCart ? (
        <Cart setShowCart={setShowCart} /> // Show Cart page
      ) : (
        <LandingPage setShowCart={setShowCart} /> // Show products
      )}
    </div>
  );
};
