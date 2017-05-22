console.log('tamagotchi file is loaded');

//your constructor function here
var tamagotchi = function (name, creatureType) {
  this.name = name;
  this.creatureType= creatureType;
  this.foodInTummy = 10;
  this.restedness = 10;
  this.health = 10;
  this.cry = function(){
      console.log("WAHH!!! "+this.name+" is crying!!")
      this.foodInTummy--;
      console.log(this.name+"\'s food level is now "+this.foodInTummy+"/10!");
  };
  this.puke = function() {
    this.health--;
    console.log('Grooooss! '+this.name+' barfed!!!!');
    console.log(this.name+"\'s health is now "+this.health+"/10!");
  };  
  this.yawn = function() {
    this.restedness--;
    console.log('Awwwwww! '+this.name+' is sleepy!!!!');
    console.log(this.name+"\'s restedness is now "+this.restedness+"/10!");
  };  
  //Start/Stop Functions
  this.start = function(){
    console.log("Starting " + this.name);
    var self = this;
    this.hungerTimer = setInterval(function() {
      self.cry();
    }, 6000);
    this.yawnTimer = setInterval(function() {
      self.yawn();
    }, 10000);
    this.sickTimer = setInterval(function() {
      self.puke();
    }, 25000);
  };
  this.stop = function(){
    console.log("Stopping " + this.name);
    clearInterval(this.hungerTimer);
    clearInterval(this.yawnTimer);
    clearInterval(this.sickTimer);
  };
};
//create new Tamagotchis
var tom1 = new Tamagotchi('Ziggy', 'dog');
var tom2 = new Tamagotchi('Grover', 'dog');
//test out your Tamagotchies below via console.logs
console.log(tom1);
console.log(tom2);