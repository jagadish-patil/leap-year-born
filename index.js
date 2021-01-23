var readlineSync = require("readline-sync");
var chalk = require("chalk");

// input
var username = readlineSync.question("Hi, What's your name? ");

console.log();

console.log(chalk.green("Welcome " + username.toUpperCase()));

console.log(chalk.yellow("\tLet us know, you were born on a leap year or not?\n"));

var yearOfBirth = prompt("What's your Year of Birth? ");

console.log();
if(isNaN(yearOfBirth)){
  console.log(chalk.bgCyan("Invalid Input!, you did not mention your Year of Birth"));
} 
else{
leapYear(yearOfBirth)
}

//processing
function leapYear(yearOfBirth){
  
  // leap year if perfectly divisible by 400
  if(yearOfBirth % 400 === 0){
    //console.log("Leap year");     //ouput
    console.log("##########");
    console.log(chalk.green.bold("Nice! " + username.toUpperCase() + ", You born on a leap year" + "\nPlease share it on social media, so that other people know it"));
    console.log("##########");
  } 
  // not a leap year if divisible by 100 , not divisible by 400  
  else if(yearOfBirth % 100 === 0){
    console.log(chalk.bgCyan("You were not born on a leap year"));    
  }
  // leap year if divisible by 4 , not divisible by 100
  else if(yearOfBirth % 4 === 0){    
    console.log("##########");
    console.log(chalk.green.bold("Nice! " + username.toUpperCase() + ", You born on a leap year" + "\nPlease share it on social media, so that other people know it"));    
    console.log("##########");
  }
  // all other years are not lear year
  else {
    console.log(chalk.bgCyan("You were not born on a leap year"));    
  }

}

console.log();
console.log("---end---");

/*
// To test - some sample output examples
2020 - y
2021 - n
100  - n
1000 - n
1800 - n
2000 - y
2012 - y
*/