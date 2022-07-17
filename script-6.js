// console.log(document);

// const navEl = document.querySelector(".site-nav");
// console.log(navEl);
// navEl.classList.add("super-cool"); //добавити
// navEl.classList.remove("site-nav"); //видалити
// navEl.classList.replace("super-cool", "qwerty"); //замінити
// console.log(navEl.classList.contains("qwerty")); //пошук за назвою
// const firstNavItemEl = navEl.firstElementChild;
// console.log(firstNavItemEl);
// console.log(navEl.children);

// const titleEl = document.createElement("h1");
// titleEl.classList.add("page-title");
// titleEl.textContent = "Title!)";
// // console.log(titleEl);
// const imageEl = document.createElement("img");
// imageEl.src = "./img.jpg";
// imageEl.alt = "va";
// imageEl.width = 320;
// // console.log(imageEl.width);
// // console.log("imageEl", imageEl);
// // document.body.appendChild(imageEl);

// const heroEl = document.querySelector(".hero");
// // heroEl.appendChild(imageEl);
// heroEl.append(titleEl, imageEl);

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D88" },
//   { label: "pink", color: "#E91E63" },
// ];
// const colorPickerContainerEl = document.querySelector("js-color-picker");
// const elements = [];
// for (let i = 0; i < colorPickerOptions.length; i += 1) {
//   const option = colorPickerOptions[i];
//   const buttonEl = document.createElement("button");
//   buttonEl.type = "button";
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;
//   elements.push(buttonEl);
// }
// console.log(elements);
// colorPickerContainerEl.append(...elements);

const titleEl = document.querySelector(".title");
// console.log(titleEl.textContent);
// console.log(titleEl.innerHTML);
titleEl.innerHTML = "<a href=''>це посилання</a>";
titleEl.innerHTML = "";
