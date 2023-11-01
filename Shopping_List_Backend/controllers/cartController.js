const db = require("../database");

async function addToCart(req, res) {
  console.log(res);
  const item = req.body;
  console.log("start item adding to cart");
  db.run(
    "INSERT INTO cart_items (image, name, price) VALUES (?, ?, ?)",
    [item.image, item.name, item.price],
    function (err) {
      if (err) {
        console.error("Error inserting item into cart_items:", err);
        res.status(500).json({ error: "Error inserting item into cart_items" });
      } else {
        console.log("Item added to cart_items:", item);
        res.json({ message: "Item added to cart_items" });
      }
    }
  );
}

function getCart(req, res) {
  console.log("Start fetching cart items");
  const db = require("../database");

  db.all("SELECT id, image, name, price FROM cart_items", (err, rows) => {
    if (err) {
      console.error("Error fetching cart items:", err);
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(rows);
    console.log("Finished fetching cart items");
  });
}
module.exports = {
  getCart,
  addToCart,
};
