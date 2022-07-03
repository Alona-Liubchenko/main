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

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// Доповни функцію getUsersWithEyeColor(users, color) таким чином,
//     щоб вона повертала масив користувачів, у яких колір очей(властивість eyeColor)
//      збігається зі значенням параметра color.

// Change code below this line
// const getUsersWithEyeColor = (users, color) =>
//   users.filter((user) => user.eyeColor === color);
// };

// const getUsersWithEyeColor = (users, color) =>
//   users.filter((user) => user.eyeColor === color);
// // Change code above this line
// console.log(getUsersWithEyeColor(users, brown));

// // // //---------- 23/48 module 4-----------

// Доповни функцію getUsersWithAge(users, minAge, maxAge) таким чином,
//   щоб вона повертала масив користувачів, вік яких(властивість age)
//   потрапляє у проміжок від minAge до maxAge.

// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
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
//     gender: "female",
//     age: 39,
//   },
// ];
// const getUsersWithAge = (users, minAge, maxAge) =>
//   users.filter(({ age }) => age >= minAge && age <= maxAge);

// // В колбек-функції зручно деструктуризувати властивості об'єкта

// console.log(getUsersWithAge(users, 30, 40));

// // // //---------- 24/48 module 4-----------
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
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
//     gender: "female",
//     age: 39,
//   },
// ];

// // Доповни функцію getUsersWithFriend(users, friendName) таким чином,
// //   щоб вона повертала масив користувачів, у яких є один
// //    з ім'ям в параметрі friendName. Масив друзів користувача
// //    зберігається у властивості friends.

// const getUsersWithFriend = (users, friendName) =>
//   users.filter((user) => user.friends.includes(friendName));
// // Change code above this line
// console.log(getUsersWithFriend(users, "Goldie Gentry"));

// // // //---------- 25/48 module 4-----------
// Доповни функцію getFriends(users) таким чином, щоб вона повертала
//  масив друзів всіх користувачів(властивість friends).
//  У декількох користувачів можуть бути однакові друзі,
//   зроби так, щоб масив, що повертається, не містив повторень.
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
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
//     gender: "female",
//     age: 39,
//   },
// ];
// // const getFriends = (users) => {};
// const getFriends = (users) =>
//   users
//     .flatMap((user) => user.friends)
//     .filter((friend, idx, arr) => arr.indexOf(friend) === idx);

// // // //---------- 26/48 module 4-----------
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
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
//     gender: "female",
//     age: 39,
//   },
// ];
// // Доповни функцію getActiveUsers(users) таким чином,
// //   щоб вона повертала масив активних користувачів,
// //     значення властивості isActive яких - true
// const getActiveUsers = (users) =>
//   users.filter((user) => user.isActive === true);

// // Виклик функції із зазначеним масивом користувачів повертає
// // масив об'єктів користувачів з іменами Sharlene Bush, Elma Head,
// //  Carey Barr і Sheree Anthony
// console.log(getActiveUsers(users));

// // // //---------- 27/48 module 4-----------

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
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
//     gender: "female",
//     age: 39,
//   },
// ];
// // Доповни функцію getInactiveUsers(users) таким чином,
// //   щоб вона повертала масив неактивних користувачів,
// //     значення властивості isActive яких - false.

// // Change code below this line
// const getInactiveUsers = (users) =>
//   users.filter((user) => user.isActive === false);

// // Change code above this line

// console.log(getInactiveUsers(users));

// // // //---------- 28/48 module 4-----------
// Використовуючи метод find(), доповни код таким чином, щоб:

// У змінній bookWithTitle утворився об'єкт книги, назва якої
//   (властивість title) збігається зі значенням змінної BOOK_TITLE.
// У змінній bookByAuthor утворився об'єкт книги,
//  автор якої(властивість author) збігається зі значенням змінної AUTHOR.
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
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);
// console.log(bookWithTitle);
// console.log(bookByAuthor);

// // // //---------- 29/48 module 4-----------
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];
// // Доповни функцію getUserWithEmail(users, email) таким чином,
// //   щоб вона повертала об'єкт користувача, пошта якого (властивість email)
// //    збігається зі значенням параметра email.
// // Change code below this line
// const getUserWithEmail = (users, email) =>
//   users.find((user) => user.email === email);
// // Change code above this line
// console.log(getUserWithEmail(users, "elmahead@omatom.com"));

// // // //---------- 30/48 module 4-----------

// Використовуючи метод every(), доповни код таким чином, щоб:

// У змінній eachElementInFirstIsEven був результат перевірки всіх
// елементів масиву firstArray на парність.
// У змінній eachElementInFirstIsOdd був результат перевірки всіх
//  елементів масиву firstArray на непарність.
// У змінній eachElementInSecondIsEven був результат перевірки всіх
//  елементів масиву secondArray на парність.
// У змінній eachElementInSecondIsOdd був результат перевірки всіх
// елементів масиву secondArray на непарність.
// У змінній eachElementInThirdIsEven був результат перевірки всіх
//  елементів масиву thirdArray на парність.
// У змінній eachElementInThirdIsOdd був результат перевірки всіх
//  елементів масиву thirdArray на непарність.
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(
//   (element) => element % 2 === 0
// );
// const eachElementInFirstIsOdd = firstArray.every(
//   (element) => element % 2 !== 0
// );

// const eachElementInSecondIsEven = secondArray.every(
//   (element) => element % 2 === 0
// );
// const eachElementInSecondIsOdd = secondArray.every(
//   (element) => element % 2 !== 0
// );

// const eachElementInThirdIsEven = thirdArray.every(
//   (element) => element % 2 === 0
// );
// const eachElementInThirdIsOdd = thirdArray.every(
//   (element) => element % 2 !== 0
// );

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);
// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);
// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);

// // // //---------- 31/48 module 4-----------
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];
// // Доповни функцію isEveryUserActive(users) таким чином,
// //   щоб вона перевіряла, чи всі користувачі зараз активні(властивість isActive)
// //    і повертала true або false.
// // Change code below this line
// const isEveryUserActive = (users) =>
//   users.every((user) => user.isActive === true);
// // Change code above this line
// console.log(isEveryUserActive(users));

// // // //---------- 32/48 module 4-----------
// Використовуючи метод some(), доповни код таким чином, щоб:

// У змінній anyElementInFirstIsEven був результат перевірки наявності парних
// елементів в масиві firstArray.
// У змінній anyElementInFirstIsOdd був результат перевірки наявності непарних
//  елементів в масиві firstArray.
// У змінній anyElementInSecondIsEven був результат перевірки наявності парних
//  елементів в масиві secondArray.
// У змінній anyElementInSecondIsOdd був результат перевірки наявності непарних
//  елементів в масиві secondArray.
// У змінній anyElementInThirdIsEven був результат перевірки наявності парних
//  елементів в масиві thirdArray.
// У змінній anyElementInThirdIsOdd був результат перевірки наявності непарних
//  елементів в масиві thirdArray.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some((element) => element % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((element) => element % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(
//   (element) => element % 2 === 0
// );
// const anyElementInSecondIsOdd = secondArray.some(
//   (element) => element % 2 !== 0
// );

// const anyElementInThirdIsEven = thirdArray.some((element) => element % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((element) => element % 2 !== 0);
// console.log(anyElementInFirstIsEven);
// console.log(anyElementInFirstIsOdd);
// console.log(anyElementInSecondIsEven);
// console.log(anyElementInSecondIsOdd);
// console.log(anyElementInThirdIsEven);
// console.log(anyElementInThirdIsOdd);

// // // //---------- 33/48 module 4-----------

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];
// // Доповни функцію isAnyUserActive(users) таким чином,
// //   щоб вона перевіряла наявність активних користувачів(властивість isActive)
// //    і повертала true або false.
// // Change code below this line
// const isAnyUserActive = (users) => users.some((user) => user.isActive === true);
// // Change code above this line

// console.log(isAnyUserActive(users));

// // // //---------- 34/48 module 4-----------
// Ігровому сервісу необхідний функціонал підрахунку середнього часу,
//   проведеного в іграх.Доповни код таким чином, щоб у змінній
//   totalPlayTime вийшло загальний ігровий час з масиву playtimes.
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce(
//   (total, playtime) => (total += playtime)
// );

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(playtimes); //  - це масив [1270, 468, 710, 244]
// console.log(averagePlayTime); //673

// // // //---------- 35/48 module 4-----------

// Нашому сервісу необхідно розрахувати середній час,
//   проведений в одній грі для кожного гравця,
//   і отримати загальну суму цих значень часу.Розрахувати
//     час для кожного з гравців можна, розділивши його час(властивість playtime)
//     на кількість ігор(властивість gamesPlayed).
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return (total += player.playtime / player.gamesPlayed);
// }, 0);

// console.log(totalAveragePlaytimePerGame); // - це число 1023

// // // //---------- 36/48 module 4-----------

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];
// Доповни функцію calculateTotalBalance(users) таким чином,
//   щоб вона рахувала і повертала суму всіх коштів(властивість balance),
//     які зберігають користувачі з масиву users.

// Change code below this line
// const calculateTotalBalance = (users) =>
//   users.reduce((total, user) => total + user.balance, 0);
// // Change code above this line
// console.log(calculateTotalBalance(users)); //20916

// // // //---------- 37/48 module 4-----------

// Доповни функцію getTotalFriendCount(users) таким чином,
//   щоб вона рахувала і повертала загальну кількість друзів(властивість friends)
//    усіх користувачів з масиву users.
// const getTotalFriendCount = (users) =>
//   users.reduce((total, user) => total + user.friends.length, 0);

// console.log(getTotalFriendCount(users)); //14

// // // //---------- 38/48 module 4-----------

// Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла
// копія масиву releaseDates, відсортована за зростанням,
//   а у змінній alphabeticalAuthors - копія масиву імен авторів authors,
//     відсортована за алфавітом.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// // // //---------- 39/48 module 4-----------

// Онлайн бібіліотеці необхідно відображати книги, відсортовані за датою видання,
//   за її зростанням або спаданням.Доповни код таким чином,
//   щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates,
//   відсортована за зростанням, а у змінній descendingReleaseDates - копія,
//     відсортована за спаданням.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(ascendingReleaseDates); //[1967, 1973, 1984, 1997, 2008, 2012, 2016]
// console.log(descendingReleaseDates); //[2016, 2012, 2008, 1997, 1984, 1973, 1967]

// // // //---------- 40/48 module 4-----------

// Онлайн бібіліотеці необхідно відображати книги, відсортовані за автором,
// в алфавітному і зворотному алфавітному порядку.Доповни код таким чином,
// щоб у змінній authorsInAlphabetOrder вийшла копія масиву authors,
// відсортована за алфавітом, а у змінній authorsInReversedOrder - копія,
//   відсортована у зворотному алфавітному порядку.
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// console.log(authorsInAlphabetOrder); //["Bernard Cornwell", "Fyodor Dostoevsky",
// // "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]
// console.log(authorsInReversedOrder); //["Tanith Lee", "Robert Sheckley", "Howard Lovecraft",
// // "Fyodor Dostoevsky", "Bernard Cornwell"]

// // // //---------- 41/48 module 4-----------
// Доповни код таким чином, щоб:

// У змінній sortedByAuthorName вийшов масив книг,
//   відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг,
//   відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований
//  за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований
// за спаданням рейтингу.

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
// Change code below this line

// const sortedByAuthorName = [...books].sort((firstAutor, secondAutor) =>
//   firstAutor.author.localeCompare(secondAutor.author)
// );

// const sortedByReversedAuthorName = [...books].sort((firstAutor, secondAutor) =>
//   secondAutor.author.localeCompare(firstAutor.author)
// );

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// // const inAscendingScoreOrder = students.sort(
// //   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// // );
// // const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
// //   firstStudent.name.localeCompare(secondStudent.name)
// // );
// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

// // // //---------- 42/48 module 4-----------

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];
// Доповни функцію sortByAscendingBalance(users) таким чином,
//   щоб вона повертала масив користувачів, відсортований за
//   зростанням їх балансу(властивість balance).
// Change code below this line
// const sortByAscendingBalance = (users) =>
//   [...users].sort((a, b) => a.balance - b.balance);
// // Change code above this line
// console.log(sortByAscendingBalance(users));

// // // //---------- 43/48 module 4-----------

// Доповни функцію sortByDescendingFriendCount(users) таким чином,
//   щоб вона повертала масив користувачів, відсортований за спаданням
//   кількості їхніх друзів(властивість friends).

// // Change code below this line
// const sortByDescendingFriendCount = (users) =>
//   [...users].sort((a, b) => b.friends.length - a.friends.length);
// // Change code above this line

// // // //---------- 44/48 module 4-----------

// Доповни функцію sortByName(users) таким чином, щоб вона повертала масив
// користувачів, відсортований за їх ім'ям (властивість name) в алфавітному порядку.
// Change code below this line
// const sortByName = (users) =>
//   [...users].sort((a, b) => a.name.localeCompare(b.name));

// // // //---------- 45/48 module 4-----------
