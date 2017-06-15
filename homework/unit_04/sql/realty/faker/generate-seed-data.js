var faker = require ('Faker');

function fakeStorefronts(){
var address = faker.fake ("  {{address.streetAddress}}  {{address.state}}, {{address.zipCode}} ");
var occupied = true;
var price = 245000;
var kitchen = true;
var sq_ft =   3876;
var owner = faker.fake ("{{company.companyName}}");
var outdoor_seating = true;
var startQuery = "INSERT INTO storefronts ( address, occupied, price, kitchen, sq_ft, owner, outdoor_seating) VALUES "
var query = startQuery + " ('" +
 address + "'," +
 occupied + "," +
 price + "," +
 kitchen + "," +
 sq_ft + ",'" +
 owner + "'," +
 outdoor_seating  +
 ");";

return query;
}

console.log(fakeStorefronts());