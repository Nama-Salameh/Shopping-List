const db = require("../database");

async function getAllItems(req, res) {
  console.log("Start fetching");
  const db = require("../database");

  db.all("SELECT id, image, name, price FROM items", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
    console.log("Finished fetching");
  });
}


async function createItem(req, res) {
  const { image, name, price } = req.body;

  db.run(
    "INSERT INTO items (image, name, price) VALUES (?, ?, ?)",
    [image, name, price],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID });
    }
  );
}

module.exports = {
  getAllItems,
  createItem,
};
