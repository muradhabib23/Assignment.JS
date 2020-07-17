// feetToMile
function feetToMile(feet) {
	if (feet < (0)) {
		return 'input cannot be less than zero'; 
	} else {
		return (feet/5280);
	}
}
var result = feetToMile(5000).toFixed(2);
console.log(result);

//woodCalculator
function woodCalculator(chair, table, bed) {
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5;
    
	var totalWood = chairWood + tableWood + bedWood;
	return totalWood;
}
console.log(woodCalculator());

//brickCalculator
function brickCalculator(floor){
    var totalFeet = 0;
    if(floor <= 10){
        totalFeet = floor*15;
    }
    else if(floor <= 20){
        totalFeet = 10*15 + (floor-10)*12;
    }
    else {
        totalFeet = 10*15 + 10*12 + (floor-20)*10;
    }
    var totalBrick = totalFeet*1000;
    return totalBrick
}
console.log(brickCalculator(15));

//tinyFriend
function tinyFriend(names){
    var min = names[0];
for(var i=0; i < names.length; i++){
    var value = names[i];
    if(value < names){
        min = value;
    }
    return min;
}

}
var names = ["Abir","Nishu","Turzo","Tasneem","Mashuk"];
var result = tinyFriends(names);
console.log("Shortest name is: ", result);