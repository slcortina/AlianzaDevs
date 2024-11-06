let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

(function (x) {
  for (let i = 0; i < 10; i++) console.log(i * x);
})(2);

console.log(numbers.map((item) => item * 2));

function Get(number) {
  return number % 2 === 0;
}

const array = numbers.filter((item) => Get(item));
console.log(array);

for (const item of numbers) {
  console.log("Soy : ", item);
}
((x) => console.log(x * 2))(2);

((x, y) => console.log(x * y))(4, "10");
