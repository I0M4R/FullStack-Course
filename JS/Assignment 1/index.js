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
// Q 7
var i = "Ahmed is learning JavaScript";
var c = 0;
while (c < i.length) {
  c++;
}
console.log("Total char is ", c);
// Q 8
var i = 2;
while (i <= 50) {
  if (i % 2 == 1) {
    console.log("number is ", i);
  }
  i++;
}
// Q 9
var i = 0;
while (i <= 5) {
  var s = s + "*";
  console.log(s);
  i++;
}

//Q 10
var i = [2, 3, 5, 8, 9];
var r = 0;
var e = 0;
for (var x = 0; x < i.length; x++) {
  if (i[x] % 2 == 1) {
    r = r + 1;
  } else {
    e = e + 1;
  }
}
console.log("odd number is ", r);
console.log("Even number is ", e);
// Q 11
var i = [1, 2, 3, 4, 5];
for (var x = 4; x >= 0; x--) {
  console.log(i[x]);
}
// Q 12
var i = [1, 3, 5, 7, 9];
for (var x = 0; x < i.length; x++) {
  if (i[x] == 5) {
    console.log(x);
  }
}
// Q 13
var i = [
  [1, 2],
  [3, 4],
  [5, 6],
];
for (var x = 0; x < i.length; x++) {
  var o = 0;
  for (o; o < 2; o++) {
    if (i[x][o] % 2 == 1) {
      console.log(i[x][o]);
    }
  }
}
// function factorial(n) {
//   var r = 1;
//   for (var x = n - 1; x > 0; x--) {
//     r = x * n;
//     n = r;
//   }
//   return r;
// }
// console.log(factorial(5));

function fa(n) {
  if (n == 0) {
    return 1;
  }
  return n * fa(n - 1);
}
console.log(fa(5));
