const express = require('express');
const routes = require('./routes');
const app = express();
require('./config/db')();

const PORT = process.env.PORT || 5000;

// parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if(process.env.NODE_ENV ==="production"){
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log('app running on PORT: ' + PORT);
});