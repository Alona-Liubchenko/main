// const totalPrice = 300;
// const massage = "Welcom!";
// console.log(totalPrice);
// console.log(massage);

// const type = typeof 5;// визначення типу змінної (рядок чи число)
// console.log(type);

// alert("qwer");
// console.log(alert);

// const should = confirm("нажми");// підтвердження
// console.log(should);

// let price = prompt("Введіть ціну");
// price = Number(price);
// console.log(price);

// let element = "70.4556px";
// // const result = Number.parseInt(element);//
// const result = Number.parseFloat(element);
// console.log(result);

// let salery = 1300.2558969;
// salery = salery.toFixed(2);
// console.log(salery);

// let base = prompt("give a number");
// base = Number(base);
// let power = prompt("give a power");
// power = Number(power);
// const result = base ** power;
// console.log(result);

// const base = 5;
// const prompt = 2;
// // const result = Math.pow(base, prompt);
// const result = base ** prompt;//=Math.pow(base, prompt)
// console.log(result);

// console.log(Math.random());//виклик случайного числа

// const max = 50;
// const min = 30;
// const result = Math.round(Math.random() * (max - min) + min); //Math.round - округляє
// console.log(result);
//
// const firstName = "Lybch";
// const lastName = "Lina";
// const result = firstName + lastName;
// console.log(result);

// ----------індекс рядка------------

// const base = "forvard";
// console.log(base[5]);
// console.log(base.slice(3));

//--------пошук в рядку--------

// const blackListedWord1 = "спам";
// const blackListedWord2 = "распродажа";
// const string1 = "Привет, я принц Абдул, это не спам, предлогаю тебе миллион";
// const string2 = "Самая большая РАСПРОДАЖА на этой недел, не пропустите";
// const string3 = "рекламная компания #fletmaster";
// console.log(string1.includes(blackListedWord1));
// console.log(string2.includes(blackListedWord2));
// console.log(string3.includes(blackListedWord2));
// console.log(string2.toLowerCase().includes(blackListedWord2)); //toLowerCase - приводить все в нижній регістр

//--------boolean------

// console.log(Boolean(0));

// console.log(6 && 10); // && логічне і , зупиняється на першому folse

// console.log(8 || 0 || 16); // || - логічне або, зупиняється на першому true

// console.log(!25); //!- оператоп логічного ні

// const x1 = 20;
// const x2 = 60;
// const namber = 10;
// console.log(`Число ${namber} входить у відрізок до ${x1}`, namber < x1);
// console.log(`Число ${namber} входить у відрізок після ${x2}`, namber > x2);

// ------ отримати доступ-------
// const subscription = "pro";
// const canAccessContent = subscription === "pro" || subscription === "vip";
// console.log(`доступ`, canAccessContent);

//-------ternarnsk-------

// const balance = -1000;
// // let message;

// // if (balance >= 0) {
// //   message = "позитивний баланс";
// // } else {
// //   `негативний баланс`;
// // }

// const message = balance >= 0 ? "позитивний баланс" : "негативний баланс";
// console.log(message);

// const stars = 6;
// let prise;
// // if (stars === 1) {
// //   prise = 20;
// // }

// switch (stars) {
//   case 1:
//     prise = 20;
//     break;
//   case 2:
//     prise = 30;
//     break;
//   case 3:
//     prise = 40;
//     break;
//   default:
//     console.log("doesn't have that many stars");
// }
// console.log(prise);

// for (const n = 0; n < 10; n += 1) {
//   console.log(i);
// }

// const min = 10;
// const max = 20;
// let total = 0;

// for (let i = min; i < max; i += 1) {
//   console.log(i);
//   if (i % 2 === 0) {
//     console.log("чутное", i);

//     total += i;
//   }
// }
// console.log(total);

// const min = 5;
// const max = 10;
// let total = 0;

// for (let i = min; i < max; i += 1) {
//   console.log(i);
//   if (i % 2 !== 0) {
//     console.log("не чутное", i);
//     continue;
//   }
//   {
//     console.log("чутное", i);
//     total += i;
//   }
// }
// console.log(total);

// let balance = 3000;
// const payment = 2000;

// console.log(
//   `Загальна сума замовлення ${payment} кредитів. Перевіряємо кількість доступних коштів на рахунку`
// );
// if (payment <= balance) {
//   console.log(`ok`);
//   balance -= payment;
//   console.log(`На рахунку залишилося ${balance} кредитів`);
// } else {
//   console.log(`На рахунку не достатньо коштів для здійснення операції`);
// }

// console.log(`Операція завершена`);

// let totalSpent = 50;
// let payment = 500;
// let discount = 0;
// if (totalSpent < 100) {
//   discount = 0;
// } else if (totalSpent >= 100 && totalSpent < 1000) {
//   console.log(`Бронзовий партнер, знижка 2%`);
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   console.log(`Срібний партнер, знижка 5%`);
//   discount = 0.05;
// } else {
//   console.log(`Золотий партнер, знижка 10%`);
//   discount = 0.1;
// }
// payment = payment - payment * discount;
// console.log(
//   `Виконуємо замовлення на суму ${payment} зі знижкою ${discount * 100}%`
// );
// totalSpent += payment;
// console.log(`${totalSpent}`);
