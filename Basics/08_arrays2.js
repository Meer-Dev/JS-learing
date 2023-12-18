let marvel_heros = ["ironman", "capt america", "spiderman"]
let dc_heros = ["superman", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1]);

// let all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros); //to merge both arrys but dcheros will not spread

// let new_spread_heros = [...dc_heros, ...marvel_heros]
// console.log(new_spread_heros); //to merge both arrys in one

// let newarry = [8, 9, 0, [1, 3, 5, [2, 4, 8]]]

// let makingAllinOne = newarry.flat(Infinity)

// console.log(makingAllinOne);

// console.log(Array.isArray("Meer"));
// console.log(Array.from("Meer"));
// console.log(Array.from({name: "Meer"})); // when cant convert to arry it gives empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
