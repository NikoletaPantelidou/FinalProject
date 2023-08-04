const express = require("express");
const cors = require("cors");
const productRouter = require("./routes/productRoute.js");
const userRouter = require("./routes/userRoute.js");
const bagRouter = require("./routes/bagRoute.js");
const favRouter = require("./routes/favRoute.js");
const paymentRouter = require("./routes/paymentRoute.js");
const connection = require("./connection.js");
const app = express();
app.use(express.json());

app.use(cors()); // Enable CORS for all routes

app.listen(4000);

app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/bag", bagRouter);
app.use("/favourites", favRouter);
