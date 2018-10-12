//SuperType constructor function
function SuperType(){
	this.name = "Manohar"
}

//SuperType prototype
SuperType.prototype.getSuperName = function(){
	return this.name
}

//SubType prototype function
function SubType(){
	this.age = 35
}

//Inherit the properties from SuperType
SubType.prototype = new SuperType();

//Add new property to SubType prototype
SubType.prototype.getSubAge = function(){
	return this.age;
}

//Create a SubType object
var subTypeObj = new SubType();
console.log(subTypeObj.name); //Output: Manohar
console.log(subTypeObj.age); //Output: 35

console.log(subTypeObj.getSuperName()); //Output: Manohar
console.log(subTypeObj.getSubAge()); //Output: 35