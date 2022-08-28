console.log("Map, Filter and Reduce Exercise");

const arr = [5,1,3,2,6];

const users = [
    {firstName : "Akshay", lastName : "Saini", age : 26},
    {firstName : "Anwar", lastName : "Moazam", age : 38},
    {firstName : "Sikandar", lastName : "Khan", age : 28},
    {firstName : "Donald", lastName : "Trump", age : 75},
    {firstName : "Elon", lastName : "Musk", age : 50},
    {firstName : "Deepika", lastName : "Padukone", age : 26}
]

console.log("First Array is : ",arr);
console.log("Second Array is : ",users);

console.log("Example of Map function")

const double = (x)=>x*2;
const triple = (x)=>x*3;
const binary = (x)=>x.toString(2);
const fullName = (x) => `${x.firstName} ${x.lastName}`;

let output = arr.map(double);
console.log("Double value of elements are : ",output);

output = arr.map(triple);
console.log("Triple value of elements are : ",output);

output = arr.map(binary);
console.log("Binary value of elements are : ",output);

console.log("Full names of users array : ")
output = users.map(fullName, "");
for(let name in output){
    console.log(output[name]);
}

console.log("Example of Filter function")
const findOdd = (x) => x%2;
const findEven = (x) => x%2==0;
const greaterThan4 =  (x) => x>4;

output = arr.filter(findOdd);
console.log('Odd Numbers are : ',output);

output = arr.filter(findEven);
console.log('Even Numbers are : ',output);

output = arr.filter(greaterThan4);
console.log('Numbers greater than 4 are : ',output);

console.log("Example of Reduce function");

const findSum = (acc, curr) => {
    acc += curr;
    return acc;
}

const findGreater = (acc,max) => {
    if(acc>max){
        max = acc;
    }
    return max;
}

output = arr.reduce(findSum,0);
console.log('Sum of elements is : ',output);

output = arr.reduce(findGreater,0);
console.log('Greater elements is : ',output);



