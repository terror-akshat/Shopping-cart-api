const cartService = require("../service/cart.service");

// This is resonsible for adding item to cart
const addToCart = (req, res) => {
  try {
    const { itemId, name, price, quantity } = req.body;
    if (!itemId || !name || !price || !quantity) {
      return res.status(400).json({
        success: false,
        message: "itemId, name, price and quantity are required",
      });
    }

    const cart = cartService.addItem({
      itemId,
      name,
      price,
      quantity,
    });

    res.status(201).json({
      success: true,
      data: cart,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

// This is responsible for getting the cart details using ID
const getCart = (req, res) => {
  try {
    const cart = cartService.getCart();
    res.status(200).json({
      success: true,
      data: cart.json(),
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

// This is responsible for removing item from cart
const removeItem = (req, res) => {
  try {
    const { itemId } = req.params;
    cartService.removeItem(itemId);

    res.status(200).json({
      success: true,
      message: "Item removed successfully",
    });
  } catch (err) {
    return res.status(404).json({ message: "The item is missing" });
  }
};

module.exports = {
  addToCart,
  getCart,
  removeItem,
};
