							MERN CRASH COURSE	

							1st PROJECT:
I start with create two differents folders backend and frontend.

Npm init -y in the Mern file for both folders.

npm install express mongoose dotenv

create a file in the backend folder with name server.js that wiil be the entry point for the api.

go to the package.json and write under the script "type":"module"
after that we can go back to the server.js and import express from "express";

const app= epxress();

app.listen(5000,()=>{
  console.log"("server started at http://localhost:5000");  
})

we can change the name att the scripts to make the debug and write
"dev": "nodemon backend/server.js" 
after att the terminal npm run dev

npm i nodemon -D  (with this whenever we make a update in the name att the localhost is restarting for us)


app.get("/"(req,res)=>{
  res.send("Server is ready");
})

IN the mongo db create a new project
We write the name that we want
Create Project
Create a Cluster
We copy the password
We select the Drivers and we tryck click
After we copy the connenction string

We paste the contection string in a file that we named .env MONGO_URI= past connection string
for the password we clistra in the password that we copied before.
for the database name we we paste  it after the mongodb.net/

under the network access we can alloyed the acces from everywhere

on the server.js to acces the database we write
import dotenv from dotenv
dotenv.config();

we create a folder congig
we create a db.js

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("MongoDB URI:", process.env.MONGO_URI); // Debug line
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};


in the server js: import {connectDB} from app.listen(5000,()=>{
  connectDB();
  console.log"("server started at http://localhost:5000");  
})

we create a folder models
we create a file product.model.js

in the product.model.js

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String, 
      required: true, this mean he have to have a name
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);

const Product=mongoose.model('Product',productSchema); this means that I will create collection named a product and each product should have this file  that we provided in productSchema

export default Product

simiosi whenever we want to create something we use the post method

What is api:the api is take the order from the user with broswer to the database with request and after is getting the repsonse for example if the order is right he will logga in otherwise it will be denyed.

in the server.js app. 26.14

app.post('/api/products', async (req, res) => {
  const product = req.body; //user will send this data

  if(!product.name||!poduct.price||!product.image){
    return res.status(400).json({success:false,message:"Please provide all fields});
  }
  "ean exoume valei oles tis plirofories tha ftiaxoume ena kainourgio product"
  
  const newProduct =new Product(product) "Product to pairnoume apo to product.model const Product = mongoose.model("Product", productSchema); kai to (product) apo aftin tin seira   if(!product.name||!poduct.price||!product.image)"
  {
    try{
      await newProduct.save();
      res.status(201).json({success true, data newProduct});
    }catch(error){
      console.error("Error in create product:",error.message);
      res.status(500).json({sucess:false,message:"Server Error"})
    }
  });

  Postman dekstop app

  Create a workspace
  blank
  we give a name
 create

 collection name "for this project is products"

add request

Create Product

Post method

we are going to the POST

We fix the url http://localhost:5000/api/products

going to server.js and change to api/products

in the  server.js
app.use(express.json());//allows us to accept JSON data in the req.body

in the Postman we write our Products for example:
  {
  "name":Small watch",
  "price":"199.99,
  "image":"example.com/image"
  }

  we are going to the mongo db  and we can see that our collections have refreshed with the input that we make it

34.00

  in postman we dublicate the file and we change the request to delete

  in server.js we create also a delete

  app.delete("/api/products/:id"),async(req,res)=>{
    const {id} =req.params "we use the id because we use it over
  }

 try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  }

  in postman we dublicate the file and we change the request to get


in server.js

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  }
  catch (error) {
    console.log("error in fetching products", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
})

  in postman we dublicate the file and we change the request to put 
  so that we can update a product to be able to updade a product we
  need to write the id


in the server.js we create 


app.put('/api/products/:id',async(req,res)=>{
  const {id} = req.params;

  const product=req.body;

  if(!mongoose.Types.ObjectId.isValid(id))
  {
    return res.status(404).json({success:false,message:"Invalid Product Id"})
  }

  try {
   const updatedProduct= await Product.findByIdAndUpdate(id,product,{new:true});
    res.status(200).json({sucess:true,data:updatedProduct})
  } catch (error) {
    req.status(500).json({success:false,message:"Server Error"})
  }
})

i  can update a product  just changed from the postman and after refresh the page in mongo 
we just need to copy the link

45.30

we can create a routes folder and a product.route.js
 import express from "express"

const router =express.router();

we take the get post put delete and paste everything in router
//imp:I can make multiple changes i just select one word and 
I tryck ctrl d so when I change the word is changing everywhere

