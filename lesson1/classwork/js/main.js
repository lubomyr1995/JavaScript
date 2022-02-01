// // 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
// // let arr = Array.from({length: 10}, () => Math.round(Math.random() * 10));
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//     result += arr[i]
// };
// console.log(result);


// // 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
// let book = {
//     name:'World',
//     pagesOfPages: 200,
//     genre: 'Sci-fi',
// };


// // 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
// let book = {
//     name:'JavaScript',
//     pagesOfPages: 200,
//     genre: 'Sci-fi',
//     author: 'Brendan Ayk'
// };


// // 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
// let book = [
//     {name: 'Harry Potter', pagesOfPages: 500, genre: 'Sci-Fi', author: 'J. K. Rowling'},
//     {name: 'America on Fire', pagesOfPages: 250, genre: 'Sci-Fi', author: 'Brendan Ayk'},
//     {name: 'China Room', pagesOfPages: 400, genre: 'Sci-Fi', author: 'China Room'},
// ];
// console.log(book[0], book[1], book[2]);


// // 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// //    Значення площі зберігати в змінній s.
// let height = 23;
// let width = 10;
// let s = height*width;
// console.log(s);


// //6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// //         результат помістіть у змінну v.
// let height = 10;
// let dC = 4;
// let v = Math.PI*(dC**2)*height/4;
// console.log(v);


// // 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// // Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
// let n = 3;
// let m = 4;
// let k = (n**2+m**2)**(1/2)
// console.log(k)
