// Задача 1: Объяви переменные с правильными типами
// Создай переменные:
// - имя студента (твоё имя)
let firstName: string = "Maksim";
// - возраст студента (твой возраст)
let age: number = 30;
// - учится ли сейчас (true/false)
let isStudent: boolean = false;
// - список изученных языков программирования (массив строк)
let stack: string[] = ["JavaScript", "Python"];

// Задача 2: Исправь ошибки типов
let price: number = 1000;
let items: string[] = ["laptop", "500", "mouse"];
let isAvailable: boolean = true;

// Задача 3: Создай tuple для города
// Создай переменную city, которая хранит:
// [название города, население (в миллионах), страна]
// Например: ["Санкт-Петербург", 5.6, "Россия"]
let city: [string, number, string] = ["Санкт-Петербург", 5.6, "Россия"];

// Задача 4: Работа с enum
// Создай enum для уровней сложности:
// Easy, Medium, Hard
// Присвой переменной currentLevel значение Medium
enum Level {
  Easy,
  Medium,
  Hard,
}
let currentLevel: Level = Level.Medium;

// Задача 5: Type inference
// Создай 3 переменные БЕЗ явного указания типа:
// - любимая игра
let favoriteGame = "Dead Space";
// - количество пройденных игр
let doneGames = 47;
// - есть ли PlayStation
let havePlaystation = true;
// TypeScript должен сам определить типы

console.log(
  firstName,
  age,
  isStudent,
  stack,
  price,
  items,
  isAvailable,
  city,
  currentLevel,
  favoriteGame,
  doneGames,
  havePlaystation
);
