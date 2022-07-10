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

const balance = -1000;
// let message;

// if (balance >= 0) {
//   message = "позитивний баланс";
// } else {
//   `негативний баланс`;
// }

const message = balance >= 0 ? "позитивний баланс" : "негативний баланс";
console.log(message);
