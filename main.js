// // Nullish Coalescing Operator

// const idade_condition = null;

// document.body.innerText = "A idade é: " + (idade_condition ?? "Não informado");

// //------------------------------------------------------------------------------

// // Objetos

// const user = {
//   name: "Victor",
//   age: "31",
//   address: {
//     street: "Minha rua",
//     number: "55",
//   },
// };

// // => usando in
// document.body.innerText = "street" in user;

// // => usando Object.keys
// document.body.innerText = Object.keys(user);

// // => usando Object.values
// document.body.innerText = JSON.stringify(Object.values(user));

// // => usando Object.entries
// document.body.innerText = JSON.stringify(Object.entries(user));

// // ---------------------------------------------------------------------------

// // Desestruturação

// //forma 1 -> const address = user.address;

// // forma 2
// const { address } = user;

// // é possível atribuir mais de uma variável a partir do objeto, alé de mudar o conteúdo da chave
// const { name, age: idade, nickname = "Olimpio" } = user;

// function showName({ name }) {
//   return name;
// }

// document.body.innerText = JSON.stringify({ address, name, idade, nickname });

// document.body.innerText = showName(user);

// // -------------------------------------------------------------------------------

// // Rest Operator

// const company = {
//   corporateName: "Company X",
//   nickname: "CX",
//   address: {
//     street: "company street",
//     number: "1000",
//   },
// };

// const { corporateName, ...rest } = company;

// const array = [1, 2, 3, 4, 5, 6];

// //const [frist, second, ...resto] = array;

// // => pulando um ´ndice do aaray
// const [frist, , third, ...resto] = array;

// document.body.innerText = JSON.stringify({ frist, third, resto });

// //-----------------------------------------------------------------------

// // Short Syntax

// const name1 = "Victor";
// const age1 = 31;

// const user1 = {
//   name1,
//   age1,
// };

// document.body.innerText = JSON.stringify(user1);

// //-------------------------------------------------------------------------

// // Optional Chaning

// const user2 = {
//   name: "Victor",
//   age: "31",
//   // address: {
//   //   street: "Minha rua",
//   //   number: "55",
//   // },
// };

// document.body.innerText = user2?.address?.street ?? "Não foi informado";

// const key = "street";

// document.body.innerText = user2[key];

// --------------------------------------------------------------------------

// Métodos de array

const list = [1, 2, 3, 4, 5, "teste"];

// => For
// for (const i of array) {
//   document.body.innerText += i;
// }

// => ForEach
// list.forEach((item) => {
//   document.body.innerText += item;
// });

// => Map
// const newList = list.map((item) => {
//   if (item % 2 == 0) {
//     return item * 10;
//   } else {
//     return item;
//   }
// });

// => Filter
// const newList = list.filter((item) => item % 2 == 0);

// const newList = list.filter((item) => item % 2 == 0).map((item) => item * 10);

// => Every
// const onlyNumbers = list.every((item) => typeof item === "number");

// => Some
const atLeastOneNumber = list.some((item) => typeof item !== "number");

document.body.innerText = atLeastOneNumber;
