// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.log(friends.length);
// friends[2] = "java";
// console.table(friends);
// console.log(friends[3]);
// const lastIndex = friends.length - 1;

// console.log(lastIndex);

// for (const friend of friends) {
//   console.log(friend);
// }

// const cart = [50, 57, 25, 36, 14, 47, 58, 69];

// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);
//   //   total += cart[i];
//   if (cart[i] % 2 === 0) {
//     console.log("Парне");
//     total += cart[i];
//   }
// }

// // for (const value of cart) {
// //   total += value;
// // }
// console.log(total);

// const logins = ["jkl;l", "fjIAAA", "KKDKDD", "fresh"];
// const loginToFind = "fresh";
// let message = " ";

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   if (login === loginToFind) {
//     message = "Знайдено";
//     break;
//   }

//   message = "Не знайдено";
// }
// console.log(message);

// console.log(logins.includes("kdjclsjcf"));
// console.log(logins.includes("fresh"));

//краще рішення

// const message = logins.includes(loginToFind) ? "Знайдено" : "Не знайдено";
// console.log(message);

// const nambers = [25, 26, 36, 21, 54, 12, 85, 8, 9, 65, 4];
// let smallesNanber = nambers[0];
// for (const namber of nambers) {
//   if (namber < smallesNanber) {
//     smallesNanber = namber;
//   }
// }
// console.log(smallesNanber);

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// const string = friends.join(" - ");
// console.log(string);

// // const arrey1 = [2, 65, 547, 254, 22];
// const arrey2 = [5, 6, 45, 58, 25, 1];
// let total = 0;

// const nambers = arrey1.concat(arrey2);
// for (const namber of nambers) {
//   total += namber;
// }
// console.log(total);

// const cards = ["card-1", "card-2", "card-3", "card-4", "card-5", "card-6"];
// console.table(cards);
// // const cardToRemove = "card-3";
// // const index = cards.indexOf(cardToRemove);
// // console.log(index);
// // cards.splice(index, 1); //delete
// // console.table(cards);
// const cardToInsert = "card-7";
// // const index = 3;
// // cards.splice(1, 0, 5, 10, 20);
// // console.table(cards);
// cards.splice(4, 1, cardToInsert);
