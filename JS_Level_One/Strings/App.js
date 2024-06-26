let firstname="priyanka";
console.log(firstname.length);
console.log(firstname.charAt(0))
console.log(firstname.at(0));
console.log(firstname[0])


/*Extracting String Parts
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
 */


let newName=firstname.slice(0,5)
console.log(firstname);

//********Uppercase and lowerCase */

console.log(firstname.toLowerCase());
console.log(firstname.toUpperCase());

//JavaScript String concat()*///

let lastName='karale';
console.log(lastName.concat(" "+firstname))

///Javascript include//

let msg=" Hello from javascripy";
let result=msg.includes('From');
console.log(msg)

///trim()///
msg.trim();
console.log(msg.trim());  


