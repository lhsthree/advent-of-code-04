const fs = require('fs')
let inputArray = fs.readFileSync("data.txt").toString().split("\n\n");

const REQUIRED = [
	"byr:",
	"iyr:",
	"eyr:",
	"hgt:",
	"hcl:",
	"ecl:",
	"pid:",
]

 const passports = inputArray.toString().replace(/\r/g, "").split('\n\n');
    const validPassports = passports.filter(data => {
        return REQUIRED.every(field => data.includes(field));
    })
    console.log(`There are ${validPassports.length} valid passports.`);