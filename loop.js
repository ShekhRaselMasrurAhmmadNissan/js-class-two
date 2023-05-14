const myName = 'rasel';

/**
 * Type of Loop
 * 1. For Loop
 * 2. While Loop
 * 3. Do While Loop
 */

// 1-10

// for (/*information*/){
// 	/*Task */
// }

// for (let i = 1; i <= 10; i *= 2) {
// 	console.log(i);
// }

// 1-100 even value
// let i = 1;
// for (i; i <= 10; i++) {
// 	if (i % 2 === 1) {
// 		console.log(i);
// 	}
// }

// while (/*condition*/) {
// 	/*Task*/
// }

// let i = 12;
// while (i < 10) {
// 	console.log(i);
// 	i++;
// }

// do {/*Task*/ } while(/*Condition*/)

// let i = 0;

// do {
// 	console.log(i);
// 	i++;
// } while (i < 10);

// Break
for (let i = 0; i <= 10; i++) {
	if (i % 2 === 0) {
		// break;
		continue;
	}
	console.log(i);
}
