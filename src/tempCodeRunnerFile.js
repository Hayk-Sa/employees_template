const number = 12345;
let sum = 0;
let num = number;

while (num > 0) {
  sum += num % 10; // Получаем последнюю цифру числа и добавляем к сумме
//   num = Math.floor(num / 10); // Удаляем последнюю цифру числа
}

console.log(sum);
