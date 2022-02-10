// // - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let get_min = (a, b, c) => {
//     if ((a <= b && b <= c) || (a <= c && c <= b)) {
//         console.log(a)
//     } else if ((a >= b && a <= c) || (c >= b && c <= a)) {
//         console.log(b)
//     } else {
//         console.log(c)
//     }
// }
//
// get_min(-3, 6, -5);


// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let get_max = (a, b, c) => {
//     if ((a >= b && b >= c) || (a >= c && c >= b)) {
//         console.log(a)
//     } else if ((a <= b && a >= c) || (c <= b && c >= a)) {
//         console.log(b)
//     } else {
//         console.log(c)
//     }
// }
//
// get_max(-36, 6, 7);


// // - створити функцію яка повертає найбільше число з масиву
// let get_max_arr = (arr) => {
//     let max = arr[0];
//     for (let el of arr) {
//         max = (el > max) ? el : max
//     }
//     return max
// }
// console.log(get_max_arr([0, 5, -2, 15, 100, -20, 20, 100]));


// // - створити функцію яка повертає найменьше число з масиву
// let get_min_arr = (arr) => {
//     let min = arr[0];
//     for (let el of arr) {
//         min = (el < min) ? el : min
//     }
//     return min
// }
// console.log(get_min_arr([0, 5, -2, 15, 100, -20, 20, 100]));


// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let get_sum_arr = (arr) => {
//     let s = 0;
//     for (let el of arr) {
//         s += el
//     }
//     return s
// }
// console.log(get_sum_arr([1, 2, 10]));


// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arithmetic_mean_arr = (arr) => {
//     let s = 0
//     for (let el of arr) {
//         s += el
//     }
//     return s / arr.length
// }
//
// console.log(arithmetic_mean_arr([1, 2, 6, 10]));


// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// //   а виводить найбільше (Math використовувати заборонено);
// let fn_ret_min_get_max = (...arg) => {
//     let max = arg[0];
//     let min = arg[0];
//     for (let el of arg) {
//         min = (el < min) ? el : min
//         max = (el > max) ? el : max
//     }
//     console.log(max)
//     return min
// }
//
// console.log(fn_ret_min_get_max(-20, 5, -10, 22));


// // - створити функцію яка заповнює масив рандомними числами
// let get_rand_arr = (length) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr[arr.length] = Math.floor(Math.random() * 100);
//     }
//     return arr
// }
// console.log(get_rand_arr(20));


// // - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// //   limit - аргумент, який характеризує кінцеве значення діапазону.
// let get_rand_array = (length, limit) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr[arr.length] = Math.round(Math.random() * limit);
//     }
//     return arr
// }
//
// console.log(get_rand_array(20, 1000));


// // - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let reverse_array = (arr) => {
//     let new_arr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         new_arr.push(arr[i])
//     }
//     return new_arr
// }
// console.log(reverse_array([1, 2, 3]));