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

// callback 
// functions
// filter
// map
// reduce
// foreach

// {objects}

var person = {};
person.name = "Anwar Moazam";
person.name;
var who = person.name;
// console.log(person);
// console.log(who);
who.story;
// console.log(who);

var person1 = {name: "Uzair"};
// console.log(person1);


// [Arrays]

var data = [];
var plea = "would she";
// data.age = 32;
data.name = "Hafizur Rehman";

// console.log(data);
// var who = data.name;
// console.log(who);
data[plea] = "Hello";

// console.log(data);

// Non-valid Characters

var box = {};
box['material'] = "cardboard";
box[0] = 'meow';
box['^&*'] = "testing 123";
box[0]=true;
// console.log(box);


var game = {};

game.murderer = "??";
game['weapons'] = [
    {type: 'lasers', location: 'lab'},
    {type: 'angry cats', location: ''},
    {type: 'dish soap', location: ''}  
];

game.name = [];
game.name[0] = "Miss Scarlet";
game.name.push("Mr. Green");
// game.push("Hi");

// console.log(Object.entries(game));
console.log(game);

const g = {
    'suspects': [
        {
            name:"Rusty",
            color:"Orange"
        },{
            name:"Miss Scarlet",
            color:"red"
        }
    ]
}

// for(let i=0; i<g.suspects.length;i++){
//     for(let key in g.suspects[i]){
//         if(g.suspects[i][key]==="Rusty"){
//             console.log("Found");
//         } else{
//             console.log("Next time");
//         }
//     }
// }

// var [{color: firstColor},{color: secondColor}] = suspects;

var rooms = ['observatory','ballroom','library'];
var logger = function(val){
    console.log(val);
};

// _.each(rooms,logger);

// const weapons = ['candlestick','lead pipe','revolver'];
// const result1 = weapons.map((x)=>`Broken ${x}`);
// console.log(weapons);
// console.log(result1);

const weapons = ['candlestick','lead pipe','revolver'];
const makeBroken = function(item){
    return `broken ${item}`;
};

// const brokenWeapons = _.map(weapons,makeBroken);

// console.log(brokenWeapons);
