const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/items', require('./routes/itemsRoutes'));
app.use('/api/cart', require('./routes/cartRoutes'));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log('Server Listening');
});
