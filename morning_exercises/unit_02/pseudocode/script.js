//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
  var smallBarrelPrice = 60;
  var largeBarrelTotalCost = (total - (small * smallBarrelPrice)) / large;
  var largeBarrelPrice = largeBarrelTotalCost/large
return largeBarrelPrice;
};
barrels(3,5,885)
//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  earthCircumference = 1000*24;
  var dollarsPerMile = fuelPrice/milesPerGallon;
  var costToTravelAroundTheWorld = dollarsPerMile*earthCircumference;
  return costToTravelAroundTheWorld
};
shipFuelCost(3,12)
//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
  var totalJuice = a+c;
  var costcoPunchPureJuiceGallons = b*a;
  var KirklandPureJuiceGallons = d*c;
  var totalGallonsOfPureFruitJuice = costcoPunchPureJuiceGallons+KirklandPureJuiceGallons;
  var percentPureFruitJuice = (totalGallonsOfPureFruitJuice/totalJuice)/100
  return percentPureFruitJuice;
};
calcFruitJuice(3,20,2,55)
//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
