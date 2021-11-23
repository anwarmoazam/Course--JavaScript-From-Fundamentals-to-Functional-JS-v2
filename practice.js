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

function checkScope(){

	describe('Scope Exercises', function () {

		var ACTUAL;

		beforeEach(function (){
			ACTUAL = null;
		});

		it('a function has access to its own local scope variables', function () {
			var fn = function () {
				var name = 'inner';
				ACTUAL = name;
			};
			fn();
			expect(ACTUAL === 'inner').to.be.true;
		});

		it('inputs to a function are treated as local scope variables', function (){
            var fn = function (name) {
                ACTUAL = name;
            };
            fn('inner');
            expect(ACTUAL === '???').to.be.true;
        });

        it('blocks scope can be created with let', function () {
            var fn = function () {
                var where = 'outer'
                {
                    let where = 'inner'
                }
                ACTUAL = where
            };
            fn();
            expect(ACTUAL === '???').to.be.true;
        });

        it('a function has access to the variables contained within the same scope that function was creted in', function () {
            var name = 'outer';
            var fn = function () {
                var name = 'outer';
                var fn = function () {
                    ACTUAL = name;
                };
                fn();
                expect(ACTUAL === '???').to.be.true;
        }
    });

        it('a function\'s local scope variables are not available outside that function',function () {
            var firstFn = function () {
                var localToFirstFn = 'inner';
            };
            firstFn();
            expect(function () {
                ACTUAL = localToFirstFn;
            }).to.throw();
            expect(ACTUAL === '???').to.be.true;
        });

        it('a function\'s local scope variables are not available anywhere outside that function, regardless of the context it\'s called in', function () {
            var firstFn = function () {
                secondFn();
            };
            var secondFn = function () {
                ACTUAL = localToFirstFn
            };
            expect(function () {
                secondFn();
            }).to.throw();
            expect(function () {
                firstFn();
            })

        })



	})
};


const newClue = (name) => {
    const length = name.length;

    return (weapon) => {
        let clue = length + weapon.length;
        return !!(clue %1);
    };
};

console.log(newClue(['anwar']));

const ifElse = (condition, isTrue, isFalse) => {
    return condition ? isTrue() : isFalse();
};


console.log(ifElse(true, () => {console.log(true);}, () => {console.log(false);}))

const ifElse1 = (condition, isTrue, isFalse) => {
    return condition ? isTrue() : isFalse();
}

const logTrue = () => {console.log(true);};
const logFalse = () => {console.log(false);};

console.log(ifElse1(true, logTrue, logFalse));

var doMathSoIDontHaveTo = function(n, func) {return func(n); };

var square = function(n) {return n*n; };

var increment = function(n) {return n+1; };

console.log(doMathSoIDontHaveTo(5, square));
console.log(doMathSoIDontHaveTo(2, increment));

// output not come
/* const ifElse2 = (condition, isTrue, isFalse, p) => {
    return condition ? isTrue(p) : isFalse(p);
};

const fn1 = () => {console.log(true);};
const fn2 = () => {console.log(false);};

console.log(ifElse2(true, fn1, fn2, 'Hi'));
*/

const ifElse3 = (condition, isTrue, isFalse, ...args) => {
    console.log()
    return condition ? isTrue(...args) : isFalse(...args);
};

// const isTrue = () => {console.log(true);};
// const isFalse = () => {console.log(false);};

// console.log(ifElse3(true, fn1, fn2, 'Hi', 'bye'));

const ifElse4 = (condition, isTrue, isFalse) => {
    const args = [].slice.call(arguments, 3)
    return condition ? isTrue.apply(this, args) : isFalse.apply(this, args);
};

const logTrue1 = (msgs) => {console.log(msgs);};
const logFalse1 = (msgs) => {console.log(msgs);};

console.log(ifElse3(true, logTrue1, logFalse1));

const reduce = function(list, cb, initial) {
    let memo = initial;
    for (let i=0; i<list.length; i++){
        if (i === 0 && memo === undefined) {
            memo = list[0];
            i++;
        } else {
            memo = cb(list[i], memo)
        }
    }
    return memo;
}

console.log(reduce([3,4,3], (v, sum) => v + sum, 0)); 

const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
]

const consider = (name) => {
    return `I think it could be... ${name}`;
};

const exclaim = (statement) => {
    return `${statement.toUpperCase()}!`;
};

const blame = (str) => {return str};

// console.log(blame('you'));

const myAlert = () => {
    const x = "Help! I think i found a clue!";
    const alerter = () => {
        alert(x);
    };

    setTimeout(alerter, 1000);
    console.log("What happens first? this log or the alert?");
};

// myAlert();



const myAlert1 = () => {
    const x = "Help! I think i found a clue!";
    let count = 0;
    const alerter = () => {
        alert(`${x} ${++count}`);
    };

    return alerter;
};

myAlert1();


const funcAlert = myAlert1();
// const funcAlert2 = myAlert1();

// funcAlert();
// funcAlert();

// funcAlert2();

const newClue1 = (name) => {
    const length = name.length;

    return (weapon) => {
        let clue = length + weapon.length;
        return !!(clue % 1);
    };
};

const didAnwarDoItWithA = newClue1('anwar');

console.log(didAnwarDoItWithA);
console.log(didAnwarDoItWithA('candlestick'));

var scope = 'Global scope';
function checkScope() {
    var scope = 'Local scope';
    function innerFunc(){
        return scope;
    };
    return innerFunc;
};

var test = checkScope();
console.log(test);
console.log(test());

function findSomeOne() {
    function speak() {
        console.log(who);
    }
    let who = 'Why hello there, Professor Plum';
    return speak();
}

console.log(findSomeOne());


const makeTimer = () => {
    let elapsed = 0;

    const stopwatch = () => { return elapsed; };

    const increase = () => elapsed++;

    setInterval(increase, 5000);

    return stopwatch;
};

let timer = makeTimer();

// console.log(timer());

const curry = (fn) => {
    return (arg) => {
        return (arg2) => {
            return fn(arg, arg2);
        }
    }
}

console.log(curry());