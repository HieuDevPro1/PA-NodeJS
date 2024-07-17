const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  orderNo: { type: String, required: true, unique: true },
  productCost: { type: Number, required: true },
  productName: { type: String, required: true },
  productPaymentMode: {
    type: String,
    required: true,
    enum: ["Credit Card", "Debit Card", "Cash on delivered", "Online Payment"],
  },
  startDate: { type: Date, required: true },
  paymentStatus: {
    type: String,
    required: true,
    enum: ["Pending", "Completed", "Failed"],
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
