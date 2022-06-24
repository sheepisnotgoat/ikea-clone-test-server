const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// mongoose
//   .connect("mongodb://localhost:27017/ikea-clone")
//   .then((resolve) => console.log("success"))
//   .catch((err) => console.log(err));

main()
  .then((resolve) => console.log("success"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/ikea-clone");
}

let newProductSchema = new mongoose.Schema({
  productId: { type: String },
  productName: { type: String },
  productPrice: { type: String },
  Rating: { type: String },
  displayImg: { type: String },
});
let Product = mongoose.model("Product", newProductSchema);

let products = [];
// let products = [
//   {
//     productId: "pid101",
//     productName: "Product1",
//     productPrice: "Price1",
//     Rating: "Stars",
//   },
//   {
//     productId: "pid102",
//     productName: "Product2",
//     productPrice: "Price2",
//     Rating: "Stars",
//   },
//   {
//     productId: "pid103",
//     productName: "Product3",
//     productPrice: "Price3",
//     Rating: "Stars",
//   },
//   {
//     productId: "pid104",
//     productName: "Product4",
//     productPrice: "Price4",
//     Rating: "Stars",
//   },
//   {
//     productId: "pid105",
//     productName: "Product5",
//     productPrice: "Price5",
//     Rating: "Stars",
//   },
//   {
//     productId: "pid106",
//     productName: "Product6",
//     productPrice: "Price6",
//     Rating: "Stars",
//   },
//   {
//     productId: "pid107",
//     productName: "Product7",
//     productPrice: "Price7",
//     Rating: "Stars",
//   },
// ];

app.get("/product-data", (req, res) => {
  Product.find({}, (err, allProducts) => {
    if (err) console.error(err);

    res.send(allProducts);
  });
});

app.listen(port, () => {
  console.log("hello inside console");
});
