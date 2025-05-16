// Q 1
var num = 1;
while (num <= 10) {
  console.log(num);
  num++;
}
// Q 2
var num1 = 1;
while (num1 <= 20) {
  if (num1 % 2 == 0) {
    console.log("number is even", num1);
  }
  num1++;
}
// Q 3
var num2 = 1;

while (num2 <= 10) {
  var result = num2 * 5;
  num2++;
  console.log(result);
}
// Q 4
var num3 = 0;
var sum = 0;
while (num3 <= 100) {
  sum = num3 + sum;
  num3++;
  console.log(sum);
}
// Q 5
var rev = "ahmed";
var cont = 5;
while (cont > 0) {
  cont--;
  console.log(rev[cont]);
}
// Q 6
var numbers = [5, 2, 9, 1, 7];
var max = numbers[0];
var i = 0;
while (i <= 4) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  i++;
}
console.log(max);
