//requirements: require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create your donut schema:
var newDonut = new mongoose.Schema({
//write your schema fields here
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
});

newDonut.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

//export your donut with module.exports()
var DonutModel = mongoose.model("Donut", newDonut);

module.exports = {
  Donut: DonutModel
};
