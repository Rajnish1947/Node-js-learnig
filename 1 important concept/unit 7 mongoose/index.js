// kumarrajnish28443
//dBoxebGh8scNpch2

require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const server = express();
const productRouter = require('./routes/product')
const userRouter = require('./routes/users')
console.log('env',process.env.DB_PASSWORD)

//db connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://kumarrajnish28443:dBoxebGh8scNpch2@cluster1.k98w5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")

  console.log('database connected')
}
//Schema








//bodyParser
server.use(express.json());
server.use(morgan('default'));
server.use(express.static(process.env.PUBLIC_DIR));
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);




server.listen(process.env.PORT, () => {
  console.log('server started');
});