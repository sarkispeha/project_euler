var sum = 0;
var fibo1 = 1;
var fibo2 = 2;


for (i = 0; i < 40; i++) {
	fibo1 = fibo1 + fibo2;
	fibo2 = fibo2 + fibo1;
	
	console.log(fibo1, fibo2);
	}
	