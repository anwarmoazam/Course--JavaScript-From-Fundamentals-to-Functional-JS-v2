let person = {};
person.name = "Mrs. Mohammed Uzair";
let who = person.name; 
console.log(person.name);
console.log(who);
person.name = "Mr. Mohammed Uzair";
console.log(person.name);
console.log(who);
let who1 = person.name;
console.log(who1);
console.log(who);
console.log(this.name); //Blank line

var personA = [];
person.name = "Mrs. White";
var whoA = person.name;
who;
console.log(who);

if(typeof person === "array"){
        console.log(true)
} else{
        console.log(false)
}

if(typeof person === "object"){
        console.log(true)
} else{
        console.log(false)
}