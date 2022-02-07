// // // Ex1. Створити пустий масив та :
// // //      a. заповнити його 50 парними числами за допомоги циклу.
// console.log('Ex1');
// let array = [];
// for (let i = 0; i < 50; i++) {
//     array[i] = i * 2
// }
// console.log(array);
//
// //      b. заповнити його 50 непарними числами за допомоги циклу.
// let array2 = [];
// for (let i = 0; i < 50; i++) {
//     array2[i] = i * 2 + 1
// }
// console.log(array2);
// //      c. Заповнити масив 20ма рандомними числами.
// let array3 = [];
// for (let i = 0; i < 20; i++) {
//     array3[i] = Math.round(Math.random() * 50)
// }
// console.log(array3);
//
// //      d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let array4 = [], min = 8, max = 732;
// for (let i = 0; i < 20; i++) {
//     array4[i] = Math.round(Math.random() * (max - min) + min)
// }
// console.log(array4);
//
// // Ex2. Вивести за допомогою console.log кожен третій елемен
// console.log('Ex2');
// let arr = [11, 0, 22, 37, 47, 39, 40, 48, 35, 43, 1, 21, 44, 43, 32, 36, 10, 15, 18, 49];
// for (let i = 0; i < arr.length; i += 3) {
//     console.log(arr[i])
// }
// // Ex3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
//
// console.log('Ex3. Кожен третій елемен тільки якщо цей елемент є парним:');
// for (let i = 0; i < arr.length; i += 3) {
//     if (arr[i] % 2 === 0)
//         console.log(arr[i])
// }
// // Ex4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним
// //      та записати їх в новий масив
// console.log('Ex4');
// let arr_new = [];
// for (let i = 0; i < arr.length; i += 3) {
//     if (arr[i] % 2 === 0)
//         arr_new.push(arr[i])
// }
// console.log(arr_new);
//
//
// // Ex5. Вивести кожен елемент масиву, сусід справа якого є парним
// console.log('ex5: сусід справа якого є парним');
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i - 1])
//     }
// }
//
//
// // Ex6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки.
// //      Обрахувати середній чек.
// console.log('Ex6');
// let a = [100, 250, 50, 168, 120, 345, 188];
// let s = 0;
// for (let i = 0; i < a.length; i++) {
//     s += a[i];
//
// }
// console.log('s = ' + s);
//
//
// // Ex7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// console.log('Ex7');
// let arr7 = [];
// for (let i = 0; i < 20; i++) {
//     arr7[i] = Math.round(Math.random() * 100)
// }
// console.log(arr7);
// let arr7_new = [];
// for (let i = 0; i < arr7.length; i++) {
//     arr7_new[i] = arr7[i] * 5
// }
// console.log(arr7_new);
//
//
// // Ex8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
// //      і якщо елемент є числом - додати його в інший масив.
// console.log('Ex8');
// let arr8 = [1, true, true, 'hello', 5, 'world', -99, 0, false, 100];
// let arr8_new = [];
// for (let i = 0; i < arr8.length; i++) {
//     if (typeof arr8[i] === "number") {
//         arr8_new.push(arr8[i])
//     }
// }
// console.log(arr8_new);


// // Ex22. - Дано 2 масиви з рівною кількістю об'єктів.
// //         З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// //         Записати цей об'єкт в новий масив
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// let usersWithCities = [];
//
// for (let user of usersWithId) {
//     for (let city of citiesWithId) {
//         if (user.id === city.user_id){
//             user.address = city
//             usersWithCities.push(user);
//         }
//     }
// }
// console.log(usersWithCities);


// // Ex33. - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let ar = [1, 2, 3, 4, 5, 60, 70, 80, 90, 100];
// for (let number of ar) {
//     if (number % 2 === 0) {
//         console.log(number)
//     }
// }


// // Ex44. - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// //       За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let ar44 = [1, 2, 3, 4, 5, 60, 70, 80, 90, 100];
// let arr44_new = [];
// for (let i = 0; i < ar44.length; i++) {
//     arr44_new[i] = ar44[i]
// }
// console.log(arr44_new)


// // Ex55.  - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arr_st = ['a', 'b', 'c'];
// let s = ''
// for (let i = 0; i < arr_st.length; i++) {
//     s += arr_st[i]
// }
// console.log(s);
//
// // За допомогою циклу while зібрати всі букви в слово.
// let s2 = '';
// let i = 0;
// while (i < arr_st.length) {
//     s2 += arr_st[i]
//     i++
// }
// console.log(s2);
//
// // За допомогою циклу for of зібрати всі букви в слово.
// let s3 = '';
// for (let string of arr_st) {
//     s3 += string
// }
// console.log(s3);
