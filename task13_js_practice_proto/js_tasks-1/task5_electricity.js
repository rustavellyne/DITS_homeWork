
///////station power////////////////////////////////////////
function Station(power_){
	if(power_ >= 1 && power_ <= 1000){
		this.power = power_;
		this.nightPower = power_;
	} else console.log("out of task")
}
Station.prototype.getDayPower = function(){
	return this.power;
}
Station.prototype.getNightPower = function(){
	return this.nightPower;
}
//var station1 = new Station(1000);
//console.log(station1.getPower())
/////////////////solar///////////////////////////////////////////////
function SolarPanel(power){
	if(power>=1 && power <= 50){
		this.power = power;
	} else console.log("out of task");
}
SolarPanel.prototype.nightPower = 0;
SolarPanel.prototype.getNightPower = function(){
	return this.nightPower;
}

SolarPanel.prototype.getDayPower = function(){
	return this.power;
}

function OneMegaSolar(){
	this.power = 1;
}
// var solar50 = new SolarPanel(50);
// console.log(solar50.getDayPower(), solar50.getNightPower());

OneMegaSolar.prototype = Object.create(SolarPanel.prototype);
OneMegaSolar.prototype.constructor = OneMegaSolar;
//var solar1 = new OneMegaSolar();
//console.log(solar1.getPower());
////////////////////////////////HOUSE////////////////////
function House(apartments, size){
	if(apartments >=1 && apartments <= 400){
		this.apartments = apartments;
		var needDayPower = 0.004;
		var needNightPower = 0.001;
		var size_=size;
	} else console.log("out of task");

	this.getNeedDayPower = function(){
		return -1*(needDayPower * this.apartments*size_)
	} 
	this.getNeedNightPower = function(){
		return -1*(needNightPower * this.apartments*size_)
	} 
}
//var house1 = new House(400,15);
//console.log(house1.getNeedDayPower())
//////////////////////////////////////////////////////////////
function PowerLine(power, cost){
	this.powerLet = power;
	this.cost = cost;
}
PowerLine.prototype.getLetPower = function(){
	return this.powerLet;
}
PowerLine.prototype.getCost = function(){
	return this.cost;
}
//var line1 = new PowerLine(1500, 20);
/////////////////

function ElectricityNet(generators, consumers, line){
	////generated electricity
	ElectricityNet.generateNightPower = generators.reduce(function(sum, current) {
	  return sum + current.getNightPower();
	}, 0);
	
	ElectricityNet.generateDayPower = generators.reduce(function(sum, current) {
	  return sum + current.getDayPower();
	}, 0)

	/////need electricity
	ElectricityNet.needNightPower = consumers.reduce(function(sum, current) {
	  return sum + current.getNeedNightPower();
	}, 0);
	
	ElectricityNet.needDayPower = consumers.reduce(function(sum, current) {
	  return sum + current.getNeedDayPower();
	}, 0)
	/////lines
	ElectricityNet.linePass = line.reduce(function(sum, current) {
	  return sum + current.getLetPower();
	}, 0);
	ElectricityNet.lineCost = line.reduce(function(sum, current) {
	  return sum + current.getCost();
	}, 0);
	/////////balance//////
	///
	ElectricityNet.nightBalance = ElectricityNet.generateNightPower + ElectricityNet.needNightPower;
	ElectricityNet.dayBalance = ElectricityNet.generateDayPower + ElectricityNet.needDayPower;

	ElectricityNet.analise = function(){
		if (ElectricityNet.generateNightPower < ElectricityNet.linePass && ElectricityNet.generateDayPower < ElectricityNet.linePass){
			if(ElectricityNet.nightBalance < 0){
				console.log("we need"+ElectricityNet.nightBalance + "more energy at Night, in costs "+(ElectricityNet.nightBalance)*(ElectricityNet.lineCost))
			} else {
				console.log("we have superfluous energy "+ElectricityNet.nightBalance + " at Night, we can sell for "+(ElectricityNet.nightBalance)*(ElectricityNet.lineCost))
			}
			if(ElectricityNet.dayBalance < 0){
				console.log("we need "+ElectricityNet.dayBalance + " more energy in Day, it costs "+ -1*(ElectricityNet.dayBalance)*(ElectricityNet.lineCost))
			} else {
				console.log("we have superfluous energy "+ElectricityNet.dayBalance + " it Day, we can sell for "+ -1*(ElectricityNet.dayBalance)*(ElectricityNet.lineCost))
			}

		} else {
			console.log("Need more powerlines")
		}
	}

}
/////generate electricity
var solar50 = new SolarPanel(50);
var solar51 = new SolarPanel(50);
var solar1 = new OneMegaSolar();
var solar2 = new OneMegaSolar();
var solar3 = new OneMegaSolar();
var station1 = new Station(1000);
var arrayGen = [solar50,solar51, solar1,solar2,solar3, station1];

//////consumer electricity
var quartal1 = new House(400,1115);
var quartal2 = new House(300, 140);
var quartal3 = new House(200, 130);
var quartal4 = new House(100, 160);
var arrayConsumers = [quartal1, quartal2, quartal3, quartal4];

///// lines
var line1 = new PowerLine(1500, 20);
var arrayLines =[line1];

//////results
var someElectric = new ElectricityNet(arrayGen, arrayConsumers, arrayLines);

///debug
console.log("generation of electricity");
console.log(ElectricityNet.generateNightPower);
console.log(ElectricityNet.generateDayPower);
console.log("need of electricity");
console.log(ElectricityNet.needNightPower);
console.log(ElectricityNet.needDayPower);
console.log("Pass of Lines and COST");
console.log(ElectricityNet.linePass);
console.log(ElectricityNet.lineCost);
console.log("balance");
console.log(ElectricityNet.nightBalance);
console.log(ElectricityNet.dayBalance);
/////////////////////////////////////
ElectricityNet.analise()


