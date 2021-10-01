var game = {};

game.murderer = "??";

game['weapons'] = [
    {type: 'Lasers', location: 'lab'},
    {type: 'angry cats', location: ''},
    {type: 'dish soap', location: ''}
];

game.name = [];
game.name[0] = 'Miss Scarlet';
game.name.push('Mr. Green');
// ['Miss Scarlet','Mr. Green']
console.log(game);

let [a,b,c] = [1, 2];
console.log(a,b);
console.log(c);
c=3;
console.log(c);
console.log([a,b,c]);
