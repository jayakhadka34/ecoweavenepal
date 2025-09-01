// // cartController.js

// const cartModel = require("../models/cartModel");
// const { verifyToken } = require("../utils/token");

// exports.getShoppingCart = (req, res) => {
//   const userId = req.params.userId;
//   cartModel
//     .getShoppingCart(userId)
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.error(err.message);
//       res.status(500).send("Error fetching shopping cart.");
//     });
// };

// exports.addToCart = (req, res) => {
//   const { customerId, productId, quantity } = req.body;
//   //, isPresent
//   cartModel
//     .addToCart(customerId, productId, quantity)
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.error(err.message);
//       res.status(500).send("Error adding product to cart.");
//     });
// };

// exports.removeFromCart = (req, res) => {
//   const productId = req.params.productId;
//   const userId = req.params.userId;
//   cartModel
//     .removeFromCart(productId, userId)
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.error(err.message);
//       res.status(500).send("Error removing product from cart.");
//     });
// };

// exports.buy = (req, res) => {
//   // Extract JWT token from the request headers
//   const token = req.headers.authorization;

//   // Check if token is present and properly formatted
//   if (!token || !token.startsWith("Bearer ")) {
//     return res.status(401).send("Unauthorized: Missing or invalid token");
//   }

//   // Extract the token from the header
//   const tokenValue = token.split(" ")[1];

//   // Verify the token
//   verifyToken(tokenValue)
//     .then((decoded) => {
//       // Token is valid, proceed with cartModel.buy function
//       const customerId = req.params.id;
//       const address = req.body.address;

//       cartModel
//         .buy(customerId, address)
//         .then((result) => {
//           res.send(result);
//         })
//         .catch((err) => {
//           console.error(err.message);
//           res.status(500).send("Error removing product from cart.");
//         });
//     })
//     .catch((err) => {
//       // Token verification failed
//       console.error("Token verification failed:", err);
//       return res.status(401).send("Unauthorized: Invalid token");
//     });
// };

// cartController.js

const cartModel = require("../models/cartModel");
const { verifyToken } = require("../utils/token");

exports.getShoppingCart = (req, res) => {
  const userId = req.params.userId;
  cartModel
    .getShoppingCart(userId)
    .then((result) => res.send(result))
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("Error fetching shopping cart.");
    });
};

exports.addToCart = (req, res) => {
  const { customerId, productId, quantity } = req.body;

  if (!customerId || !productId || !quantity) {
    return res.status(400).send("Missing customerId, productId, or quantity");
  }

  cartModel
    .addToCart(customerId, productId, quantity)
    .then((result) => res.send(result))
    .catch((err) => {
      console.error("Add to cart error:", err.message);
      res.status(500).send("Error adding product to cart.");
    });
};

exports.removeFromCart = (req, res) => {
  const { productId, userId } = req.params;

  cartModel
    .removeFromCart(productId, userId)
    .then((result) => res.send(result))
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("Error removing product from cart.");
    });
};

exports.buy = (req, res) => {
  const token = req.headers.authorization;
  if (!token || !token.startsWith("Bearer ")) {
    return res.status(401).send("Unauthorized: Missing or invalid token");
  }

  const tokenValue = token.split(" ")[1];

  verifyToken(tokenValue)
    .then((decoded) => {
      const customerId = req.params.id;
      const address = req.body.address;

      if (!customerId || !address) {
        return res.status(400).send("Missing customerId or address");
      }

      cartModel
        .buy(customerId, address)
        .then((result) => res.send(result))
        .catch((err) => {
          console.error("Buy error:", err.message);
          res.status(500).send("Error completing the order.");
        });
    })
    .catch((err) => {
      console.error("Token verification failed:", err);
      res.status(401).send("Unauthorized: Invalid token");
    });
};
