const express = require("express");
const mongoose = require('mongoose');


let app = express();
app.use(express.json());
const user =require('./Router/UserRouter');
const product=require('./Router/ProductsRouter');
const category=require('./Router/CategoryRouter');
const trip=require('./Router/TripRouter');
const attraction=require('./Router/AttractionRouter');
const gets = require('./middleware/gets');
const AttractionModel = require("./models/AttractionModel");
const cors=require("cors");



console.log("it conected");


app.use(cors({
    origin: '*', // Allow requests from any origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
}));



const corsOptions ={
   origin:'*', 
   credentials:true,          
  //  access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))



mongoose.connect(
  'mongodb+srv://Miriam:kxt3c2q5HKBrcw3@cluster0.nnxot8c.mongodb.net/packing',
    // 'mongodb+srv://packingDB:packingdb@cluster0.yjg3k.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
),
  () => {
    try {
      //something
    } catch (error) {
      console.error(error);
    }
  };
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('🖥 Connection to DB was succesful jjj');
});

app.listen(8000);
// app.use(gets);
app.use("/users",user);
app.use("/products",product);
app.use("/categories",category);
app.use("/trips",trip);
app.use("/attraction",attraction);