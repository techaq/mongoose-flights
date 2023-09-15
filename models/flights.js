// require Schema class and model method from Mongoose object
const { Schema, model } = require("mongoose");
// import destinationSchema
const destinationSchema = require("./destination");

// create a new Schema
// defines the shape of the documents in the collection
const flightSchema = new Schema(
  {
    airline: {
      type: String,
      enum: ["American", "Southwest", "United"],
      required: true,
    },
    flightNo: {
      type: Number,
      required: true,
      min: 10,
      max: 9999,
    },
    departs: {
      type: Date,
      default: function () {
        return new Date().setFullYear(new Date().getFullYear() + 1);
      },
    },
    airport: {
      type: String,
      enum: ["AUS", "DAL", "LAX", "SAN", "SEA"],
      default: "SAN",
    },
    destination: [destinationSchema], // use the destinationSchema from model/destination.js
  },
  {
    timestamps: true,
  }
);

const Flights = model("Flights", flightSchema);

// make this exportable to be accessed
module.exports = Flights;
