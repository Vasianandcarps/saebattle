let ship = [0, 0, 0, 1, 1, 1, 0];
// let location1 = 3; // расположение 1 клетки корабля
// let location2 = 4; // расположение 2 клетки корабля
// let location3 = 5; // расположение 3 клетки корабля
let guess; // координата ячейки
let hits = 0; // попадания
let guesses = 0; // попытки
let isSunk = false;
while (isSunk == false) {
  guess = prompt("Ваш выстрел! (введите число от 0 до 6):");
  if (guess < 0 || guess > 6) {
    alert("Введите правильный номер!");
  } else if (ship[guess] == -1) {
    alert("Вы уже стреляли в эту ячеку!");
  } else {
    guesses = guesses + 1;

    if (ship[guess] == 1) {
      alert("Попал!");
      ship[guess] -= 2;
      hits = hits + 1;
      if (hits == 3) {
        isSunk = true;
        alert("Вы утопили корабль!");
      }
    } else {
      alert("Промах!");
    }
  }
}
let stats =
  "Вы предприняли " +
  guesses +
  " попыток, чтобы утопить корабль, " +
  "что означает, что общая точность была " +
  3 / guesses;
alert(stats);
