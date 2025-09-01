// import "./App.scss";
// import { useState } from "react";
// import LoginRegisterForm from "./components/LoginRegisterContainer/LoginRegisterContainer"
// import AdminCustomerContainer from "./components/AdminCustomerContainer/AdminCustomerContainer";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import { AiOutlineUser } from "react-icons/ai";
// import { Hero } from "./components/hero/Hero";

// function App() {
//   let [isUserAuthenticated, setUserAuthorization] = useState(
//     sessionStorage.getItem("isUserAuthenticated") === "true" || false
//   );
//   let [isAdmin, setAdmin] = useState(
//     sessionStorage.getItem("isAdmin") === "true" || false
//   );
//   let [customerId, setCustomerId] = useState(
//     sessionStorage.getItem("customerId") || undefined
//   );

//   const setUserAuthenticatedStatus = (isAdmin, customerId) => {
//     setUserAuthorization(true);
//     setAdmin(isAdmin);
//     setCustomerId(customerId);
//   };
//   const handleLogout = () => {
//     sessionStorage.removeItem("isUserAuthenticated");
//     sessionStorage.removeItem("isAdmin");
//     sessionStorage.removeItem("customerId");
//     sessionStorage.removeItem("jwt_token");
//     sessionStorage.removeItem("jwt_refresh_token");
//     setUserAuthorization(false);
//     setAdmin(false);
//     setCustomerId(undefined);
//   };
//   return (
//     <div >
//        <Navbar  handleLogout={handleLogout}/>
//       {!isUserAuthenticated ? (
//         <LoginRegisterForm setUserAuthenticatedStatus={setUserAuthenticatedStatus} />
//       ) : (
//         <>
//             <div className="login-button-container">
//                <AiOutlineUser onClick={handleLogout} />
//               <button
//               onClick={handleLogout}
             
//               className="login-button"
//             >
//               Logout
//             </button></div> 

//            {/* <AdminCustomerContainer isAdmin={isAdmin} customerId={customerId} /> */}
//           <Hero/>
//          <Footer/>
//         </>

//       )}
//     </div>
//   );
// }

// export default App;
// import "./App.scss";
// import { useState } from "react";
// import LoginRegisterForm from "./components/LoginRegisterContainer/LoginRegisterContainer";
// import AdminCustomerContainer from "./components/AdminCustomerContainer/AdminCustomerContainer";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import { AiOutlineUser } from "react-icons/ai";
// import { Hero } from "./components/hero/Hero";
// import Cart from "./components/hero/cart/Cart"

// function App() {
//   let [isUserAuthenticated, setUserAuthorization] = useState(
//     sessionStorage.getItem("isUserAuthenticated") === "true" || false
//   );
//   let [isAdmin, setAdmin] = useState(
//     sessionStorage.getItem("isAdmin") === "true" || false
//   );
//   let [customerId, setCustomerId] = useState(
//     sessionStorage.getItem("customerId") || undefined
//   );
//   let [showCart, setShowCart] = useState(false);

//   const setUserAuthenticatedStatus = (isAdmin, customerId) => {
//     setUserAuthorization(true);
//     setAdmin(isAdmin);
//     setCustomerId(customerId);
//   };

//   const handleLogout = () => {
//     sessionStorage.clear();
//     setUserAuthorization(false);
//     setAdmin(false);
//     setCustomerId(undefined);
//     setShowCart(false);
//   };

//   return (
//     <div>
//       <Navbar handleLogout={handleLogout} />

//       {!isUserAuthenticated ? (
//         <LoginRegisterForm setUserAuthenticatedStatus={setUserAuthenticatedStatus} />
//       ) : (
//         <>
//           <div className="login-button-container">
//             <AiOutlineUser onClick={handleLogout} />
//             <button onClick={handleLogout} className="login-button">Logout</button>
//           </div>

//           <AdminCustomerContainer isAdmin={isAdmin} customerId={customerId} />

//           {/* Conditional rendering: Cart or Hero */}
//           {showCart ? (
//             <Cart customerId={customerId} goBack={() => setShowCart(false)} />
//           ) : (
//             <Hero setShowCart={setShowCart} />
//           )}

//           <Footer />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;
// import "./App.scss";
// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginRegisterForm from "./components/LoginRegisterContainer/LoginRegisterContainer";
// import AdminCustomerContainer from "./components/AdminCustomerContainer/AdminCustomerContainer";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import { AiOutlineUser } from "react-icons/ai";
// import { Hero } from "./components/hero/Hero";
// import Cart from "./components/hero/cart/Cart";

// function App() {
//   let [isUserAuthenticated, setUserAuthorization] = useState(
//     sessionStorage.getItem("isUserAuthenticated") === "true" || false
//   );
//   let [isAdmin, setAdmin] = useState(
//     sessionStorage.getItem("isAdmin") === "true" || false
//   );
//   let [customerId, setCustomerId] = useState(
//     sessionStorage.getItem("customerId") || undefined
//   );
// const [showCart, setShowCart] = useState(false);
//   const setUserAuthenticatedStatus = (isAdmin, customerId) => {
//     setUserAuthorization(true);
//     setAdmin(isAdmin);
//     setCustomerId(customerId);
//   };

//   const handleLogout = () => {
//     sessionStorage.clear();
//     setUserAuthorization(false);
//     setAdmin(false);
//     setCustomerId(undefined);
//     setShowCart(false);
//   };

//   return (
//     <Router>
//       <Navbar handleLogout={handleLogout} setShowCart={setShowCart} />

//       {!isUserAuthenticated ? (
//         <LoginRegisterForm setUserAuthenticatedStatus={setUserAuthenticatedStatus} />
//       ) : (
//         <>
//           <div className="login-button-container">
//             <AiOutlineUser onClick={handleLogout} />
//             <button onClick={handleLogout} className="login-button">
//               Logout
//             </button>
//           </div>

//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <>
//                   <AdminCustomerContainer isAdmin={isAdmin} customerId={customerId} />
//                   <Hero />
//                   <Footer />
//                 </>
//               }
//             />
//             <Route path="/cart" element={<Cart />} />
//           </Routes>
//         </>
//       )}
//     </Router>
//   );
// }

// export default App;
// import "./App.scss";
// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginRegisterForm from "./components/LoginRegisterContainer/LoginRegisterContainer";
// import AdminCustomerContainer from "./components/AdminCustomerContainer/AdminCustomerContainer";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import { AiOutlineUser } from "react-icons/ai";
// import { Hero } from "./components/hero/Hero";
// import Cart from "./components/hero/cart/Cart";
// import { CartProvider } from "./components/context/CartContext";

// function App() {
//   const [isUserAuthenticated, setUserAuthorization] = useState(
//     sessionStorage.getItem("isUserAuthenticated") === "true" || false
//   );
//   const [isAdmin, setAdmin] = useState(
//     sessionStorage.getItem("isAdmin") === "true" || false
//   );
//   const [customerId, setCustomerId] = useState(
//     sessionStorage.getItem("customerId") || undefined
//   );

//   // Cart toggle state lifted here
//   const [showCart, setShowCart] = useState(false);

//   const setUserAuthenticatedStatus = (isAdmin, customerId) => {
//     setUserAuthorization(true);
//     setAdmin(isAdmin);
//     setCustomerId(customerId);
//   };

//   const handleLogout = () => {
//     sessionStorage.clear();
//     setUserAuthorization(false);
//     setAdmin(false);
//     setCustomerId(undefined);
//     setShowCart(false);
//   };

//   return (
//     <CartProvider>
//       <Router>
//         {/* Navbar is global and can toggle cart */}
//         <Navbar handleLogout={handleLogout} setShowCart={setShowCart} showCart={showCart} />

//         {!isUserAuthenticated ? (
//           <LoginRegisterForm setUserAuthenticatedStatus={setUserAuthenticatedStatus} />
//         ) : (
//           <>
//             <div className="login-button-container">
//               <AiOutlineUser onClick={handleLogout} />
//               <button onClick={handleLogout} className="login-button">
//                 Logout
//               </button>
//             </div>

//             <Routes>
//               <Route
//                 path="/"
//                 element={
//                   <>
//                     <AdminCustomerContainer isAdmin={isAdmin} customerId={customerId} />
//                     <Hero showCart={showCart} setShowCart={setShowCart} />
//                     <Footer />
//                   </>
//                 }
//               />
//               <Route path="/cart" element={<Cart setShowCart={setShowCart} />} />
//             </Routes>
//           </>
//         )}
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;
import "./App.scss";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginRegisterForm from "./components/LoginRegisterContainer/LoginRegisterContainer";
import AdminCustomerContainer from "./components/AdminCustomerContainer/AdminCustomerContainer";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { AiOutlineUser } from "react-icons/ai";
import { Hero } from "./components/hero/Hero";
import Cart from "./components/hero/cart/Cart";
import { CartProvider } from "./components/context/CartContext";

function App() {
  const [isUserAuthenticated, setUserAuthorization] = useState(
    sessionStorage.getItem("isUserAuthenticated") === "true" || false
  );
  const [isAdmin, setAdmin] = useState(
    sessionStorage.getItem("isAdmin") === "true" || false
  );
  const [customerId, setCustomerId] = useState(
    sessionStorage.getItem("customerId") || undefined
  );

  // Cart toggle state
  const [showCart, setShowCart] = useState(false);

  const setUserAuthenticatedStatus = (isAdmin, customerId) => {
    setUserAuthorization(true);
    setAdmin(isAdmin);
    setCustomerId(customerId);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    setUserAuthorization(false);
    setAdmin(false);
    setCustomerId(undefined);
    setShowCart(false);
  };

  return (
    <CartProvider>
      <Router>
        {/* Navbar can toggle cart */}
        <Navbar
          handleLogout={handleLogout}
          setShowCart={setShowCart}
          showCart={showCart}
        />

        {!isUserAuthenticated ? (
          <LoginRegisterForm setUserAuthenticatedStatus={setUserAuthenticatedStatus} />
        ) : (
          <>
            <div className="login-button-container">
              <AiOutlineUser onClick={handleLogout} />
              <button onClick={handleLogout} className="login-button">
                Logout
              </button>
            </div>

            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <AdminCustomerContainer isAdmin={isAdmin} customerId={customerId} />
                    <Hero showCart={showCart} setShowCart={setShowCart} />
                    <Footer />
                  </>
                }
              />
              <Route path="/cart" element={<Cart setShowCart={setShowCart} />} />
            </Routes>
          </>
        )}
      </Router>
    </CartProvider>
  );
}

export default App;
