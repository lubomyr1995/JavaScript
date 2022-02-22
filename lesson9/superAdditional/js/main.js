let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// // - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let arr0 = [];
// for (const user of users) {
//     arr0.push(user.address)
// }
// console.log(arr0)


// // - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// //   Всі данні в одному блоці.
// for (const user of users) {
//     let div = document.createElement('div')
//     div.innerText = `name: ${user.name}, age: ${user.age}, status: ${user.status}, Address: ${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}`;
//     div.style.marginBlock = '20px'
//     document.body.appendChild(div);
// }


// // - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// //   розділивши всі властивості по своїм блокам (div>div*4)
// for (let user of users) {
//     let div = document.createElement("div");
//     div.style.border = '2px solid red'
//     div.style.margin = '5px'
//     let name = document.createElement("h2");
//     let age = document.createElement("h3");
//     let status = document.createElement("h4");
//     let address = document.createElement("div");
//     name.innerText = user.name;
//     age.innerText = user.age;
//     status.innerText = user.status;
//     address.innerText = `${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}`;
//     address.classList.add('address')
//     div.append(name, age, status, address);
//     document.body.append(div);
// }


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//   розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// let rec = (obj, doc = document.body) => {
//     for (const key in obj) {
//         if (typeof obj[key] === "object") {
//             let div = document.createElement('div')
//             div.classList.add(key)
//             div.style.marginLeft = '10px'
//             div.style.border = '2px solid black'
//             div.style.margin = '5px'
//             doc.append(div)
//             rec(obj[key], div)
//         } else {
//             let div = document.createElement('div')
//             div.innerText = `${key}: ${obj[key]}`
//             doc.append(div)
//         }
//     }
// }
// rec(users)