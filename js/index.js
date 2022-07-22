//console.log("I'm ready!")
// Iteration 1: Names and Input
let hacker1 = "Genis"
let hacker2 = "Madu"
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if(hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, XX characters!`)
}

// Iteration 3: Loops
let result = hacker1.toUpperCase().split("").join(" ").replace(/\s+/g, " ");
console.log(result);

