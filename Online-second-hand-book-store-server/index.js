const express = require("express");
const app = express();
const cors = require("cors");
const crypto = require("crypto-js");
const crpt = require("crypto");
const User = require("./models/userModel");
const mongoose = require("mongoose");
app.use(cors());
app.use(express.json());
const jwt = require("jsonwebtoken");
const Product = require("./models/productModel");
const ChatRoom = require("./models/chatRoomModel");
const Message = require("./models/messagesModel");
const Category = require("./models/categoryModel");
const Coupon = require("./models/couponModel");
const PaytmChecksum = require("./utils/PaytmChecksum");
const sendEmail = require("./utils/sendEmail");
const sendReciept = require("./utils/sendReciept");
const removePdf = require("./utils/removePdf");
const invoice = require("./utils/invoice");
const { v4: uuidv4 } = require("uuid");
const formidable = require("formidable");
const Token = require("./models/tokenModel");
const Reciept = require("./models/recieptModel");
require("dotenv").config();

// "mongodb+srv://shree:uNczDvUQmO2ivhSB@cluster0.qikchv4.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(
  "mongodb+srv://shree:shreemongo12@cluster0.qikchv4.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/register", async (req, res) => {
  try {
    req.body.password = crypto.AES.encrypt(
      JSON.stringify(req.body.password),
      "my-secret-key@123"
    ).toString();
    const user = await User.create(req.body);
    const t = await Token.create({ userId: user._id, token: uuidv4() });
    const r = await sendEmail(t, user);
    if (r.status == "ok") {
      console.log("mailsent");
      res.json({ status: "ok" });
    } else {
      throw "Email Not Valid";
    }
  } catch (err) {
    res.json({ status: "error", error: err });
  }
});

app.post("/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });
  if (user && user.verified == true) {
    var bytes = crypto.AES.decrypt(user.password, "my-secret-key@123");
    var decryptedData = JSON.parse(bytes.toString(crypto.enc.Utf8));
    if (req.body.password === decryptedData) {
      const token = jwt.sign(
        {
          name: user.name,
          email: user.email,
        },
        "secret123"
      );
      return res.status(200).json({ status: "ok", user: token });
    } else {
      return res.status(300).json({ status: "Invalid Password", user: null });
    }
  } else if (user && user.verified === false) {
    return res.status(300).json({ status: "User Not Verified" });
  } else {
    return res.status(300).json({ status: "User Not Registered" });
  }
});

app.post("/product/new", async (req, res) => {
  try {
    var ctg;
    ctg = await Category.findOne({ name: req.body.category });
    if (!ctg) {
      ctg = await Category.create({ name: req.body.category });
    }
    const usr = await User.findOne({ email: req.body.seller });
    req.body.category = ctg._id;
    req.body.seller = usr._id;
    const product = await Product.create(req.body);
    res.status(200).json({ status: "ok", id: product._id });
  } catch (err) {
    console.log(err);
    res.status(300).json({ status: "error", error: err });
  }
});

app.post("/product/update", async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.body.id },
      { $set: { image: req.body.image } }
    );
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: err });
  }
});

app.get("/categories", async (req, res) => {
  try {
    var cat = await Category.find();
    res.status(200).json({ status: "ok", categories: cat });
  } catch (err) {
    console.log(err);
  }
});

app.get("/products", async (req, res) => {
  try {
    var prod = await Product.find().sort({ createdAt: -1 }).limit(8);
    res.status(200).json({ status: "ok", products: prod });
  } catch (err) {
    console.log(err);
  }
});

app.get("/products/:user", async (req, res) => {
  try {
    var user = await User.findOne({ email: req.params.user });
    var prod = await Product.find({ seller: user._id });
    res.json({ status: "ok", products: prod });
  } catch (err) {
    console.log(err);
  }
});

app.post("/product/details", async (req, res) => {
  try {
    const pro = await Product.findOne({ _id: req.body.id })
      .populate("category")
      .populate("seller");
    res.status(200).json({ status: "ok", details: pro });
  } catch (err) {
    res.status(300).json({ status: "error", error: err });
  }
});

app.post("/product/remove", async (req, res) => {
  try {
    const pro = await Product.findOneAndRemove({ _id: req.body.id });
    res.status(200).json({ status: "ok", details: pro });
  } catch (err) {
    res.status(300).json({ status: "error", error: err });
  }
});

app.post("/cart/add", async (req, res) => {
  try {
    const pro = await User.updateOne(
      { email: req.body.user },
      { $push: { cart: req.body.id } }
    );
    res.status(200).json({ status: "ok", details: pro });
  } catch (err) {
    res.status(300).json({ status: "error", error: err });
  }
});

app.post("/cart/get", async (req, res) => {
  try {
    const pro = await User.findOne({ email: req.body.user }).populate("cart");
    //  const items = await pro.populate("cart")
    res.status(200).json({ status: "ok", items: pro });
  } catch (err) {
    res.status(300).json({ status: "error", error: err });
  }
});

app.post("/cart/remove", async (req, res) => {
  try {
    // const p = await Product.findOne({})
    const pro = await User.updateOne(
      { email: req.body.user },
      { $pull: { cart: req.body.id } }
    ).populate("cart");
    //  const items = await pro.populate("cart")
    res.status(200).json({ status: "ok", items: pro });
  } catch (err) {
    res.status(300).json({ status: "error", error: err });
  }
});

app.post("/coupon/new", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.to });
    req.body.to = user._id;
    const pro = await Coupon.create(req.body);
    res.json({ status: "ok", details: pro });
  } catch (err) {
    res.json({ status: "error", error: err });
  }
});

app.post("/coupon/verify", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.user });
    const coupon = await Coupon.findOne({
      name: req.body.coupon,
      to: user._id,
      product: req.body.id,
    });
    if (coupon) {
      res.json({ status: "true", coupon: coupon });
    } else {
      res.json({ status: "false" });
    }
  } catch (err) {
    res.json({ status: "error", error: err });
  }
});

app.post("/api/payment", async (req, res) => {
  const { user, amount } = req.body;
  const usr = await User.findOne({ email: user });
  var paytmParams = {};

  /* initialize an array */
  paytmParams["MID"] = process.env.Merchant_ID;
  paytmParams["WEBSITE"] = process.env.Website;
  paytmParams["CHANNEL_ID"] = process.env.Channel_ID;
  paytmParams["INDUSTRY_TYPE_ID"] = process.env.Industry_Type;
  paytmParams["CUST_ID"] = usr.email;
  paytmParams["ORDER_ID"] = uuidv4();
  paytmParams["TXN_AMOUNT"] = amount;
  paytmParams["CALLBACK_URL"] = "http://localhost:5000/api/callback";
  paytmParams["EMAIL"] = usr.email;
  paytmParams["MOBILE_NO"] = usr.contact.toString();

  /**
   * Generate checksum by parameters we have
   * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeysudjfkfkfifyiif
   */
  var paytmChecksum = PaytmChecksum.generateSignature(
    paytmParams,
    process.env.Merchant_Key
  );
  paytmChecksum
    .then(function (checksum) {
      let params = {
        ...paytmParams,
        CHECKSUMHASH: checksum,
      };
      res.json({ params: params });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.post("/api/callback", (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, file) => {
    /* import checksum generation utility */

    var Checksum = fields.CHECKSUMHASH;
    delete fields.CHECKSUMHASH;

    var isVerifySignature = PaytmChecksum.verifySignature(
      fields,
      process.env.MERCHANT_KEY,
      Checksum
    );
    if (isVerifySignature) {
      console.log("Cecksum Validated");
      if (fields.STATUS === "TXN_SUCCESS" && fields.RESPMSG === "Txn Success") {
        // sendReciept();
        res.redirect("http://localhost:3000/thankyou");
      } else {
        res.redirect("http://localhost:3000/fail");
      }
    } else {
      console.log("Checksum Mismatched");
      res.redirect("http://localhost:3000/fail");
    }
    // removePdf();
  });
});

app.post("/sendreciept", async (req, res) => {
  const data = await sendReciept(req.body.email);
  console.log(data);
  removePdf();
  res.json({ status: "ok" });
});

app.get("/fail", async (req, res) => {
  removePdf();
  res.json({ status: "ok" });
});

app.get("/category", async (req, res) => {
  try {
    const category = await Category.find();
    res.json({ status: "ok", category });
  } catch (error) {}
});

app.get("/category/:cat", async (req, res) => {
  try {
    const cat = req.params.cat;
    const category = await Category.findOne({ name: cat });
    var prod = await Product.find({ category: category._id });
    res.json({ status: "ok", products: prod, category: cat });
  } catch (err) {
    console.log(err);
  }
});

app.get("/search/:key", async (req, res) => {
  try {
    const key = req.params.key;
    //var prod = await Product.find({ $text: { $search: key } });
    pipeline = [
      {
        $search: {
          index: "searchProducts",
          text: {
            query: key,
            path: {
              wildcard: "*",
            },
          },
        },
      },
    ];
    var prod = await Product.aggregate(pipeline);
    res.json({ status: "ok", products: prod });
  } catch (err) {
    console.log(err);
  }
});

app.post("/invoice", async (req, res) => {
  const r = await invoice(req.body.prod);
  res.json(r);
});

app.get("/email", async (req, res) => {
  const r = await sendEmail(
    { token: "12345" },
    { email: "shree.samal1502@gmail.com" }
  );
  res.json(r);
});

app.get("/verify/:t", async (req, res) => {
  try {
    const t = req.params.t;
    const token = await Token.findOne({ token: t });
    const user = await User.findOneAndUpdate(
      { _id: token.userId },
      { $set: { verified: true } }
    );
    res.json({ status: "verified" });
  } catch (error) {
    res.json({ status: "Not verified" });
  }
});

// get email of user to display on verification page
app.get("/getEmail/:token", async (req, res) => {
  try {
    const tokenObj = await Token.findOne({ token: req.params.token });
    const user = await User.findOne({ _id: tokenObj.userId });
    if (user) {
      res.status(200).json({
        email: user.email,
        error: null,
      });
    } else {
      res.status(200).json({
        email: user.email,
        error: "exp",
      });
    }
  } catch (error) {
    res.status(200).json({
      error: "exp",
    });
  }
});

app.get("/token/delete/:token", async (req, res) => {
  const tokenObj = await Token.findOneAndRemove({ token: req.params.token });
  res.status(200).json({
    tokenObj,
  });
});

module.exports = app.listen(5000, () => {
  console.log("server started");
});
