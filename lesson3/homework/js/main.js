// // Ex1 --створити масив з:
// // - з 5 числових значень
// // - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// // - та вивести його в консоль
// let arr1 = [-1, 2, -3, 4, 5,], arr2 = ['hello', 'world', 'I', 'love', 'often'], arr3 = [1, 3, 'hello', true, false];
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);


// // Ex2 -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// //
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let arr = [];
// arr[0] = 2;
// arr[1] = 10;
// arr[2] = true;
// console.log(arr)
//
// document.write('<p>2</p>');
// for (let i = 0; i < 10; i++) {
//     document.write('<div>Lorem ipsum dolor sit amet.</div>')
// }
//
// document.write('<p>3</p>');
// for (let i = 1; i < 11; i++) {
//     document.write(`<div>${i} Lorem ipsum dolor sit amet.</div>`)
// }
//
// document.write('<p>4</p>');
// let i = 0;
// while (i < 20) {
//     document.write('<h1>Lorem ipsum dolor sit.</h1>')
//     i++
// }
// document.write('<p>5</p>');
// let j = 1;
// while (j < 21) {
//     document.write(`<h1>${j} Lorem ipsum dolor sit.</h1>`)
//     j++
// }


// // Ex3 - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// console.log('ex1');
// let arr1 = [1, 2, 3, 4, 5, 4, 3, 2, 1, 0];
// for (let i of arr1) {
//     console.log(i)
// }
//
// console.log('ex2');
// let arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
// for (let i of arr2) {
//     console.log(i);
// }
//
// console.log('ex3');
// arr3 = [1, 3, 'hello', -5, 5, true, -100, false, 'world', 'end'];
// for (let i of arr3) {
//     console.log(i)
// }
//
// console.log('ex4');
// arr4 = [1, 3, 'hello', -5, 5, true, -100, false, 'world', 'end'];
// for (let i of arr4) {
//     if (typeof i === "boolean") {
//         console.log(i)
//     }
// }
//
// console.log('ex5');
// for (let i of arr4) {
//     if (typeof i === "number") {
//         console.log(i)
//     }
// }
//
// console.log('ex6')
// for (let i of arr4) {
//     if (typeof i === "string") {
//         console.log(i)
//     }
// }


// // Ex4 - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних
// //       індексів. Вивести в консоль всі його елементи в циклі.
// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// console.log('ex1');
// let arr0 = [];
// arr0[0] = 'help';
// arr0[1] = 'me';
// arr0[2] = 'please';
// arr0[3] = -5;
// arr0[4] = true;
// arr0[5] = 10;
// arr0[6] = false;
// arr0[7] = 'world';
// arr0[8] = 'okten';
// arr0[9] = 'web';
// for (let i of arr0) {
//     console.log(i)
// }
//
// console.log('ex2');
// for (let i = 1; i < 11; i++) {
//     console.log('крок циклу : ' + i + '; ');
//     document.write('крок циклу : ' + i + '; ');
// }
//
// console.log('ex3');
// document.write('<p>ex3</p>')
// for (let i = 1; i < 101; i++) {
//     console.log('крок циклу : ' + i + '; ');
//     document.write('крок циклу : ' + i + '; ');
// }
//
// console.log('ex4');
// document.write('<p>ex4</p>')
// for (let i = 1; i < 101; i += 2) {
//     console.log('крок циклу : ' + i + '; ');
//     document.write('крок циклу : ' + i + '; ');
// }
//
// console.log('ex5 Парні кроки:');
// document.write('<p>ex5</p>')
// for (let i = 1; i < 101; i++) {
//     if (i % 2 === 0) {
//     console.log('крок циклу : ' + i + '; ');
//     document.write('крок циклу : ' + i + '; ');
//     }
// }
//
// console.log('ex6 Непарні кроки:');
// document.write('<p>ex6</p>')
// for (let i = 1; i < 101; i++) {
//     if (i % 2 === 1) {
//         console.log('крок циклу : ' + i + '; ');
//         document.write('крок циклу : ' + i + '; ');
//     }
// }