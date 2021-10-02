// let person = {};
// person.name = "Mrs. Mohammed Uzair";
// let who = person.name; 
// console.log(person.name);
// console.log(who);
// person.name = "Mr. Mohammed Uzair";
// console.log(person.name);
// console.log(who);
// let who1 = person.name;
// console.log(who1);
// console.log(who);
// console.log(this.name); //Blank line

var person = [];
person.name = "Mrs. White";
var who = person.name;
who;
// console.log(who);

// if(typeof person === "array"){
//         console.log(true)
// } else{
//         console.log(false)
// }

// if(typeof person === "object"){
//         console.log(true)
// } else{
//         console.log(false)
// }

// Arrays value multiply by 5
let i=0;
let arr1 = Array.from({length:4}, () => 
    Array.from({length:4}, () => i++)
)
let result = []
for (i=0;i<arr1.length;i++)
{
    let subresult = []
    for(j=0;j<arr1[i].length;j++)
    {
        subresult.push(arr1[i][j]*5);
    }
    result.push(subresult)
}

// ============================================================
//         JavaScript From Fundamental to Functional
// ============================================================


var person = {};
person.name = "Anwar Moazam";
person.name;
var who = person.name;
console.log(person);
console.log(who);
who.story;
console.log(who);

var person1 = {name: "Uzair"};
console.log(person1);
