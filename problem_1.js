/* An application that adds the sum of multiples of 3 and 5 up to 1000
*/

var sum = 0;

for (i = 0; i < 1000; i++) {

	if (i % 3 === 0 || i % 5 === 0) {
		sum += i;
	}	
}
console.log("The number is " + sum);