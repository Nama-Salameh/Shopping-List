const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("items.db");
const fs = require('fs');

db.run("DELETE FROM items", (err) => {
    console.log("delete items")
  if (err) {
    res.status(500).json({ error: err.message });
    return;
  }
});

db.run(
  `
  CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    image TEXT,
    name TEXT,
    price REAL
  )
`,
  (err) => {
    if (err) {
      console.error("Error creating items table:", err);
    } else {
      console.log("Items table created successfully.");
      populateDatabase();

    }
  }
);


// Populate the database with data from data.json
function populateDatabase() {
    const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    
    // Insert data into the database
    data.forEach((item) => {
      const { itemImage, itemName, itemPrice } = item;
    
      // Read the image file as binary data
      //const imageBuffer = fs.readFileSync(itemImage, null);
    
      db.run('INSERT INTO items (image, name, price) VALUES (?, ?, ?)', [itemImage, itemName, itemPrice], (err) => {
        if (err) {
          console.error('Error inserting item:', err);
        } else {
          console.log('Item inserted successfully.');
        }
      });
    });}
module.exports = db;
