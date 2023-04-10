// // function isPrime(n) {
// //   if (n < 2) {
// //     return false;
// //   }
// //   for (var i = 2; i <= Math.sqrt(n); i++) {
// //     if (n % i === 0) {
// //       return false;
// //     }
// //   }
// //   return true;
// // }
// // for (var i = 0; i < 10; i++) {
// //   if (isPrime(i)) {
// //     console.log(i);
// //   }
// // }
// function isSemiPrime(n) {
//   if (n < 4) {
//     return false; // semi-prime numbers must be greater than or equal to 4
//   }
//   for (var i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0 && isPrime(i) && isPrime(n / i)) {
//       return true; // if n has two prime factors, return true
//     }
//   }
//   return false; // if n doesn't have two prime factors, return false
// }

// function isPrime(n) {
//   if (n < 2) {
//     return false; // 1 and negative numbers are not prime
//   }
//   for (var i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false; // if n has a factor other than 1 and itself, it's not prime
//     }
//   }
//   return true; // n is prime
// }

// // example usage
// console.log(isSemiPrime(15)); // true (3 * 5)
// console.log(isSemiPrime(21)); // true (3 * 7)
// console.log(isSemiPrime(35)); // true (5 * 7)
// console.log(isSemiPrime(10)); // false

// const { ages } = require("./modules");
// console.log(ages);
// const os = require("os");
// console.log(os.platform(), os.homedir());

// // read Files

// fs.readFile("./Docs/blog1.txt", (err, data) => {
//   if (err) throw err;
//   if (data) {
//     console.log(data.toString());
//   }
// });

// Writie Files

// fs.writeFile("./Docs/blog2.txt", "aya saha", () => {
//   console.log("C rigli");
// });

// creat Directories

// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err, dir) => {
//     if (err) {
//       console.log("Error creating directory");
//     }
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err, dir) => {
//     if (err) throw err;
//     console.log("Folder deleted");
//   });
// }
// console.log("Hey");

// Deleting Files

// if (fs.existsSync("./Docs/DELETE.txt")) {
//   fs.unlink("./Docs/DELETE.txt", (Error) => {
//     if (Error) {
//       throw new Error();
//     }
//     console.log("File Deleted");
//   });
// }

// streams and buffers
// const fs = require("fs");
// const readStream = fs.createReadStream("./Docs/blog3.txt");
// const writeStream = fs.createWriteStream("./Docs/blog4.txt");
// readStream.on("data", (chunk) => {
//   console.log(chunk.toString());
//   writeStream.write("\n New Chunk \n");
//   writeStream.write(chunk);
// });
// const readStream = fs.createReadStream("./Docs/blog3.txt");
// const writeStream = fs.createWriteStream("./Docs/blog4.txt");

// readStream.on("data", (chunk) => {
//   console.log("NEW CHUNK BAE");
//   console.log(chunk.toString());
//   writeStream.write("\n New Chunk \n");
//   writeStream.write(chunk);
// });
// const temp = parseInt(prompt("Enter The current Temperature: "));
// const type = prompt("Type of the current Temperature: ");
// let bingo;

// if (type === "k") {
//   bingo = temp - 273;
// } else if (type === "C") {
//   bingo = temp;
// }

// if (bingo <= 0) {
//   console.log("Solid");
// } else if (bingo > 0 && bingo < 100) {
//   console.log("Liquid");
// } else if (bingo >= 100) {
//   console.log("Gas");
// }
// const pieds = parseInt(prompt("Type of the current path: "));
// const temp = parseInt(prompt("Type of the current path: "));

// function feetToMeters(feet) {
//   return feet * 0.3048;
// }

// function celsiusToFahrenheit(celsius) {
//   return celsius * 1.8 + 32;
// }

// const result1 = feetToMeters(pieds);
// const result2 = celsiusToFahrenheit(temp);

// console.log(result1);
// console.log(result2);

// const charr = prompt("Type of the current num1: ");

// function detection(charr) {
//   if (charr.length > 80) {
//     alert("stopping");
//     return;
//   }
//   let count = 1;
//   for (let i = 1; i < charr.length; i++) {
//     if (charr[i] === " ") {
//       count++;
//     }
//   }
//   console.log(count);
// }

// // detection(charr);
// const ch = prompt("Enter the Palindrome");

// const arr = ch.split(""); // convert string to array of characters
// const bingo = arr.filter((char) => char !== " "); // remove spaces using filter method
// const newCh = bingo.join(""); // convert array back to string

// console.log(newCh); // output the new string without spaces

// class Temp {
//   constructor(heures, minutes) {
//     this.heures = heures;
//     this.minutes = minutes;
//   }
// }

// class Session {
//   constructor(numero_poste, heures_debut, heures_fin) {
//     this.numero_poste = numero_poste;
//     this.heures_debut = new Temp(heures_debut.heures, heures_debut.minutes);
//     this.heures_fin = new Temp(heures_fin.heures, heures_fin.minutes);
//   }

//   calculili() {
//     let heures = this.heures_fin.heures - this.heures_debut.heures;
//     let minutes = this.heures_fin.minutes - this.heures_debut.minutes;
//     if (minutes < 0) {
//       minutes = 60 + minutes;
//       heures--;
//     }
//     this.duree = new Temp(heures, minutes);
//   }
// }

// let bingo = new Session(1, new Temp(10, 30), new Temp(12, 45));
// bingo.calculili();
// console.log(
//   bingo.duree.heures + " heures et " + bingo.duree.minutes + " minutes"
// );

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
function maxSubArray(nums) {
  let max_so_far = -Infinity;
  let max_ending_here = 0;

  for (let i = 0; i < nums.length; i++) {
    max_ending_here = max_ending_here + nums[i];
    if (max_ending_here < 0) {
      max_ending_here = 0;
    }
    if (max_so_far < max_ending_here) {
      max_so_far = max_ending_here;
    }
  }

  return max_so_far;
}
