// // створити функцію яка обчислює та повертає площу прямокутника
// let area_p = (a, b) => a * b
// console.log(area_p(10, 5));


// // - створити функцію яка обчислює та повертає площу кола
// let area_circle = (r) => Math.PI * r * r;
// console.log(area_circle(5));


// // - створити функцію яка обчислює та повертає площу циліндру
// let area_cyl = (r, h) => 2 * Math.PI * r * (h + r);
// console.log(area_cyl(3, 6));


// // - створити функцію яка приймає масив та виводить кожен його елемент
// let get_el_arr = (arr) => {
//     for (let el of arr) {
//         console.log(el)
//     }
// }
//
// get_el_arr([2, 5, 8, -1]);


// // - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let create_tag_p = (text) => document.write(`<p>${text}</p>`);
// create_tag_p('hello')


// // - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let create_ul_3li = (text) => document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`)
// create_ul_3li('okten');


// // - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// //   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let create_ul_li = (text, count_li) => {
//     document.write('<ul>')
//     for (let i = 0; i < count_li; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write('</ul>')
// }
// create_ul_li('web', 10);


// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let create_li_arr = (arr) => {
//     document.write('<ul>')
//     for (let el of arr) {
//         document.write(`<li>${el}</li>`)
//     }
//     document.write('</ul>')
// }
// create_li_arr([1, 'hello', true]);


// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age,
// //   та виводить їх в документ. Для кожного об'єкту окремий блок.
// let get_obj_arr = (arr) => {
//     for (let obj of arr) {
//         document.write(`<div>${obj.id}. ${obj.name} - ${obj.age}.</div>`)
//     }
// }
// get_obj_arr([{id: 1, name: 'Ivan', age: 20}, {id: 2, name: 'Andriy', age: 18}, {id: 3, name: 'Stepan', age: 25}]);
