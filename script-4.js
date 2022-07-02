// ---------- 6/48 module 4-----------
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   //   for (let i = 0; i < numbers.length; i += 1) {
//   //     if (numbers[i] > value) {
//   //       filteredNumbers.push(numbers[i]);
//   //     }
//   //   }
//   numbers.forEach((element) => {
//     if (element > value) {
//       filteredNumbers.push(element);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// ---------- 7/48 module 4-----------

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   //   for (let i = 0; i < firstArray.length; i += 1) {
//   //     if (secondArray.includes(firstArray[i])) {
//   //       commonElements.push(firstArray[i]);
//   //     }
//   //   }
//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   return commonElements;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));

// ---------- 8/48 module 4-----------

// function calculateTotalPrice(quantity, pricePerItem) {
//   // Change code above this line
//   return quantity * pricePerItem;
// }

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };
// console.log(calculateTotalPrice(5, 100));

// ---------- 9/48 module 4-----------

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// console.log(calculateTotalPrice(5, 100));

// ---------- 10/48 module 4-----------

// Виконай рефакторинг функції calculateTotalPrice(orderedItems),
//  замінивши її оголошення на стрілочну функцію.
//  Заміни колбек - функцію, передану в метод forEach(), на стрілочну функцію.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };
// console.log(calculateTotalPrice([12, 85, 37, 4])); //повертає 138

//---------- 11/48 module 4-----------
// Заміни оголошення функції filterArray() і
// колбек для методу forEach() на стрілочні функції.
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];
//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// };
// console.log(filterArray([1, 2, 3, 4, 5], 3)); //повертає [4, 5]

//---------- 12/48 module 4-----------
// Заміни оголошення функції getCommonElements() і колбек для методу
// forEach() на стрілочні функції.
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];
//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   // Change code above this line
//   return commonElements;
// };
// console.log(getCommonElements([1, 2, 3], [2, 4])); // повертає [2]

//---------- 13/48 module 4-----------
// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює
//  кожен елемент, значення якого - це парне число, додаючи до нього
//  значення параметра value.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою -
//     не змінювала масив чисел numbers, а створювала, наповнювала і
//     повертала новий масив з оновленими значеннями.

// function changeEven(numbers, value) {
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   // Change code above this line
// // }
// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   numbers.forEach((element) => {
//     if (element % 2 === 0) {
//       element = element + value;
//       newArray.push(element);
//     } else newArray.push(element);
//   });
//   return newArray;
// }

// // Change code above this line

// console.log(changeEven([1, 2, 3, 4, 5], 10)); //повертає новий масив [1, 12, 3, 14, 5])

// //---------- 14/48 module 4-----------
// Доповни код таким чином, щоб у змінній planetsLengths вийшов
//  масив довжин назв планет.Обов'язково використовуй метод map().

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// // Change code below this line
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);

// //---------- 15/48 module 4-----------
// Використовуючи метод map(), зроби так, щоб у змінній titles
//  вийшов масив назв книг(властивість title) з усіх об'єктів масиву books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map((books) => books.title);

// console.log(titles);

// // //---------- 16/48 module 4-----------
// Використовуючи метод flatMap(), зроби так, щоб у
//  змінній genres вийшов масив усіх жанрів
// книг(властивість genres) з масиву книг books.
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap((books) => books.genres);

// console.log(genres);

// // //---------- 17/48 module 4-----------
// Доповни функцію getUserNames(users) таким чином, щоб вона повертала масив імен
// користувачів(властивість name) з масиву об'єктів в параметрі users.
// Change code below this line
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];);
// // Change code below this line
// // const getUserNames = (users) => users.map((user) => user.name);

// // // Change code above this line
// // console.log(user.name);

// // // //---------- 18/48 module 4-----------

// // Доповни функцію getUserEmails(users) таким чином, щоб вона повертала
// // масив поштових адрес користувачів
// //     (властивість email) з масиву об'єктів в параметрі users.
// // Change code below this line
// const getUserEmails = (users) => users.map((user) => user.email);

// // Change code above this line
// console.log(getUserEmails);

// // // //---------- 19/48 module 4-----------

// Доповни код таким чином, щоб у змінній evenNumbers утворився
//  масив парних чисел з масиву numbers, а в змінній oddNumbers -
//     масив непарних.Обов'язково використовуй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line
// const evenNumbers = numbers.filter((item) => item % 2 === 0);
// const oddNumbers = numbers.filter((item) => item % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

// // // //---------- 20/48 module 4-----------

// Доповни код таким чином, щоб у змінній allGenres був масив всіх
// жанрів книг(властивість genres) з масиву books, а у змінній
// uniqueGenres - масив унікальних жанрів, без повторень.
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap((books) => books.genres);
// const uniqueGenres = allGenres.filter(
//   (gender, index, array) => array.indexOf(gender) === index
// );

// console.log(allGenres);
// console.log(uniqueGenres);

// // // //---------- 21/48 module 4-----------
// Використовуючи метод filter(), доповни код таким чином, щоб:

// У змінній topRatedBooks утворився масив книг, рейтинг яких
//     (властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних
// автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(({ author }) => author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// // // //---------- 22/48 module 4-----------

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];

// Доповни функцію getUsersWithEyeColor(users, color) таким чином,
//     щоб вона повертала масив користувачів, у яких колір очей(властивість eyeColor)
//      збігається зі значенням параметра color.

// Change code below this line
const getUsersWithEyeColor = (users, color) => {
  users.filter;
};
// Change code above this line
console.log(users, blue);
