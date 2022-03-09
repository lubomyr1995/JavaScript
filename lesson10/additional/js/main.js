// // - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// // При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// // Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//
// function info(db = document.body) {
//     db.addEventListener("click", e => {
//         console.log('info');
//         console.log('Name of tag: ', e.target.tagName);
//         console.log('Class list: ', e.target.classList.toString());
//         console.log('Id: ', e.target.id);
//         console.log(`Size block: ${e.target.clientHeight}px x ${e.target.clientWidth}px`);
//         console.log('')
//     })
// }
//
// divEx1 = document.createElement('div');
// divEx1.style.height = '100px';
// divEx1.style.width = '100px';
// divEx1.style.backgroundColor = 'red';
// divEx1.classList.add('block1', 'color1')
// divEx1.setAttribute('id', 'ex1');
//
// document.body.append(divEx1);
// info();


// // - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// // При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// // Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//
// function info2(db = document.body) {
//     let style = document.createElement('style');
//     style.innerHTML +=
//         `.divPopup {
//         left: -50px;
//         top: 10px;
//         height: auto;
//         width: auto;
//         background-color: silver;
//         border-radius: 5px;
//         position: absolute;
//     }
//     .showPopup {
//         left: 40%;
//         transition: 1s;
//     }`;
//     document.head.appendChild(style);
//
//     let divMain = document.createElement('div');
//     divMain.classList.add('divPopup', 'showPopup');
//     db.appendChild(divMain);
//
//     db.addEventListener('click', function (e) {
//         divMain.classList.toggle('showPopup');
//         const div0 = document.createElement('div');
//         div0.innerHTML = 'info block:'
//         const div1 = document.createElement('div');
//         div1.innerHTML = `Name of tag: ${e.target.tagName}`;
//         const div2 = document.createElement('div');
//         div2.innerHTML = `Class list: ${e.target.classList.toString()}`;
//         const div3 = document.createElement('div');
//         div3.innerHTML = `Id: ${e.target.id}`;
//         const div4 = document.createElement('div');
//         div4.innerHTML = `Size block: ${e.target.clientHeight}*${e.target.clientWidth}`;
//
//         divMain.append(div0, div1, div2, div3, div4);
//         divMain.classList.toggle('showPopup');
//     });
// }
//
// divEx1 = document.createElement('div');
// divEx1.style.height = '100px';
// divEx1.style.width = '100px';
// divEx1.style.backgroundColor = 'red';
// divEx1.classList.add('block1', 'color1')
// divEx1.setAttribute('id', 'ex1');
//
// document.body.append(divEx1);
// info2();


// // -- взять массив пользователей usersWithAddress
// // - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
// //   Фильтры могут работать как вместе так и по отдельности.
// // 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// // 2й - оставляет старше 29 лет включительно
// // 3й - оставляет тех у кого город киев
// // Данные выводить в документ
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
//
// const form = document.createElement('form');
// form.setAttribute('name', 'formChBoxes')
// document.body.appendChild(form);
//
// let chBox0 = document.createElement('input');
// chBox0.type = 'checkbox'
// chBox0.id = 'chBox0'
// let label0 = document.createElement('label');
// label0.htmlFor = 'chBox0';
// label0.innerText = 'all: ';
// label0.style.display = 'block';
// label0.appendChild(chBox0);
//
// let chBox1 = document.createElement('input');
// chBox1.type = 'checkbox'
// chBox1.id = 'chBox1'
// let label1 = document.createElement('label');
// label1.htmlFor = 'chBox1';
// label1.innerText = 'status false: ';
// label1.style.display = 'block';
// label1.appendChild(chBox1);
//
// let chBox2 = document.createElement('input');
// chBox2.type = 'checkbox'
// chBox2.id = 'chBox2'
// let label2 = document.createElement('label');
// label2.htmlFor = 'chBox2';
// label2.innerText = 'age 29+: ';
// label2.style.display = 'block';
// label2.appendChild(chBox2);
//
// let chBox3 = document.createElement('input');
// chBox3.type = 'checkbox'
// chBox3.id = 'chBox3'
// let label3 = document.createElement('label');
// label3.htmlFor = 'chBox3';
// label3.innerText = 'city Kyiv: ';
// label3.style.display = 'block';
// label3.appendChild(chBox3);
//
// document.forms.formChBoxes.onsubmit = e => e.preventDefault()
// document.forms.formChBoxes.append(label0, label1, label2, label3,);
//
// let divMain = document.createElement('div');
// document.body.appendChild(divMain);
//
// form.onclick = _ => {
//     let users = usersWithAddress;
//
//     if (chBox1.checked) {
//         users = users.filter(v => !v.status);
//     }
//     if (chBox2.checked) {
//         users = users.filter(v => v.age >= 29);
//     }
//     if (chBox3.checked) {
//         users = users.filter(v => v.address.city === 'Kyiv');
//     }
//
//     while (divMain.firstElementChild) {
//         divMain.removeChild(divMain.firstChild);
//     }
//
//     users.forEach(item => {
//         let div = document.createElement('div');
//         div.style.border = '1px solid silver'
//         div.innerText = `id: ${item.id}, name: ${item.name}, age: ${item.age}, status: ${item.status}, address:
//         city: ${item.address.city}, street: ${item.address.street}, number: ${item.address.number}.`
//         divMain.appendChild(div);
//     });
// };


// // - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let divKarusel = document.createElement('div');
// divKarusel.style.margin = '20%'
// divKarusel.style.display = 'flex';
// divKarusel.style.flexDirection = 'row'
// divKarusel.style.justifyContent = 'space-between'
// document.body.appendChild(divKarusel);
//
// let btnL = document.createElement('button');
// btnL.innerText = '<';
// let btnR = document.createElement('button');
// btnR.innerText = '>';
//
// divKarusel.appendChild(btnL);
// let countImg = 6;
// let start = 1;
// let index = 1;
//
// for (let i = 1; i < countImg + 1; i++) {
//     let img = document.createElement('img');
//     img.src = `images/${i}.png`;
//     img.style.display = i === start ? 'block' : 'none';
//     divKarusel.appendChild(img);
// }
// divKarusel.appendChild(btnR);
//
// btnR.onclick = _ => {
//     index = index === countImg ? 1 : index + 1;
//     for (let i = 1; i < countImg + 1; i++) {
//         divKarusel.children.item(i).style.display = i === index ? 'block' : 'none';
//     }
// }
//
// btnL.onclick = _ => {
//     index = index === 1 ? countImg : index - 1;
//     for (let i = countImg; i > 0; i--) {
//         divKarusel.children.item(i).style.display = i === index ? 'block' : 'none';
//     }
// }


// //  Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// //  *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
// let div = document.createElement('div');
// div.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda, autem delectus earum eos necessitatibus quas qui quibusdam vitae voluptatum? Aut dolorum eligendi illum iure iusto omnis quo vitae voluptas! Accusamus animi architecto fugit, iusto nostrum pariatur porro quam ratione reprehenderit sed, sit veniam vitae. Adipisci alias autem, distinctio esse harum itaque iusto laborum maxime minus modi nostrum optio provident quas quasi quos repellendus rerum sapiente tempora ullam vel veniam veritatis vero! Accusantium amet architecto at aut cupiditate delectus et harum ipsum maiores minus nihil nostrum nulla, odio perspiciatis quae quam qui quibusdam quisquam repudiandae suscipit tempore temporibus tenetur voluptatum?'
// document.body.appendChild(div);
// div.onmouseup = _ => {
//     let text = document.getSelection();
//     div.innerHTML = div.innerText.replace(text.toString(), `<i>${text.toString()}</i>`);
// }


// // *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// // при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// // НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// // Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
// let btnL = document.createElement('button');
// btnL.innerText = '< left element';
//
// let btnR = document.createElement('button');
// btnR.innerText = 'right element >';
// document.body.append(btnL, btnR);
