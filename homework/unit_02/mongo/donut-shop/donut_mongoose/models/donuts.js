//requirements: require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create your donut schema:
var DonutSchema = new Schema({
//write your schema fields here
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
});

//export your donut with module.exports()
var DonutModel = mongoose.model("Donut", DonutSchema);

module.exports = {
  Donut: DonutModel
};
