// // // //---------- 1/20 module 5-----------

// Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні
// this в місцях звернення до властивостей і методів об'єкта.
// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };
// console.log(pizzaPalace.order("Smoked")); // повертає рядок "Order accepted, preparing «Smoked» pizza")

// // // //---------- 2/20 module 5-----------
// Перед звільненням розробник зламав вихідний код управління акаунтами
// користувачів нашого сервісу доставки їжі.Виконай рефакторинг методів
//  об'єкта customer, розставивши відсутні this під час звернення до властивостей об'єкта.

// Після оголошення об'єкта ми додали виклики методів у тій послідовності,
// в якій твій код перевірятимуть тести.Будь ласка, нічого там не змінюй.
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// // // //---------- 3/20 module 5-----------

// Тестувальники знайшли баги в коді сервісу зберігання історії замовлень їжі.
// Тобі необхідно виправити їх, правильно розставивши this в методах об'єкта historyService,
//  щоб методи почали працювати правильно.
// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map((order) => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map((order) => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter((order) => order.email === email);
//   },
//   // Change code above this line
// };
// console.log(historyService.getOrdersLog());

// // // //---------- 4/20 module 5-----------
// Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);
// {
//   __proto__: parent;
// }

// // Change code above this line
// child.name = "Jason";
// child.age = 27;

// console.log(parent.hasOwnProperty("surname"));
// console.log(child.heritage);

// // // //---------- 5/20 module 5-----------
// Зміни код, побудувавши ланцюжок прототипів таким чином,
//     щоб об'єкт ancestor був прототипом для parent, а той,
//     своєю чергою, був прототипом для child.
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// {
//   __proto__: ancestor;
// }
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// {
//   __proto__: parent;
// }
// child.name = "Jason";
// child.age = 27;

// // Change code above this line
// console.log(ancestor.surname); // повертає "Dawson"

// // // //---------- 6/20 module 5-----------
// Використовуючи ключове слово class, оголоси клас Car з порожнім тілом.

// class Car {}

// // // //---------- 7/20 module 5-----------
// Додай класу Car метод constructor, який приймає три параметри:

// brand - марка автомобіля.
// model - модель автомобіля.
// price - ціна автомобіля.
// Клас Car повинен створювати об'єкт з однойменними властивостями brand,
// model і price, значеннями яких повинні бути передані аргументи під час його
// // виклику з оператором new.
// class Car {
//   // Change code below this line
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   // Change code above this line
// }
// console.log(new Car("Audi", "Q3", 36000)); // утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }

// // // //---------- 8/20 module 5-----------
// Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр - об'єкт
//  з властивостями brand, model і price.
//  Деструктуризуй об'єкт в сигнатурі (підписі) конструктора.
// class Car {
//   // Change code below this line
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }
// console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 })); // утвориться об'єкт
// // { brand: "Nissan", model: "Murano", price: 31700 }

// // // //---------- 9/20 module 5-----------

// Додай класу Car два методи.

// getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
// changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його
// викликати на newPrice.
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     return (this.price = newPrice);
//   }
//   // Change code above this line
// }
// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));

// // // //---------- 10/20 module 5-----------
// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів.
//  Клас очікує тільки один аргумент - початковий масив товарів, який записується у
//  властивість items об'єкта, що створюється.

// Оголоси наступні методи класу:

// getItems() - повертає масив поточних товарів у властивості items об'єкта,
//  який викликає цей метод.
//     addItem(newItem) - приймає новий товар newItem і додає його в масив товарів у
// властивості items об'єкта, який викликає цей метод.
// removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його з масиву
//  товарів у властивості items об'єкта, який викликає цей метод.
// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності,
//     в якій твій код перевірятимуть тести.Будь ласка, нічого там не змінюй.

class Storage {
  constructor({ items }) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(newItem) {
    return this.items.push(newItem);
  }
  removeItem(itemToRemove) {
    return this.items.splice(this.items.indexOf(itemToRemove), 1);
  }
}

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
