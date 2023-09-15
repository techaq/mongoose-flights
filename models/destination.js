const { Schema, model } = require("mongoose");

const destinationSchema = new Schema(
  {
    airport: {
      type: String,
      enum: ["AUS", "DAL", "LAX", "SAN", "SEA"],
      required: true,
    },
    arrival: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Flights = model("Destination", destinationSchema);

// make this exportable to be accessed
module.exports = destinationSchema;
