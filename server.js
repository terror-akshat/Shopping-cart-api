const express = require("express");
const app = express();
app.use(express.json());
const cartRoutes = require("./routes/cart.routes");

// middleWare for cart routes
app.use("/cart", cartRoutes);


// server entry point.
app.listen(process.env.POST, () => {
  console.log("Server is running on port 3000");
});