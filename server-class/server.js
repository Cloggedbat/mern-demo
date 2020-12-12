const express = require ('express')
const app = express();
const routes = require("./routes")
require('./config/db')();

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes)

app.listen(PORT,()=>{
    console.log('app running on PORT: ' + PORT)
})