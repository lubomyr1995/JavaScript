// // - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function get_min_el(a, b, c) {
//     if ((a <= b && b <= c) || (a <= c && c <= b)) {
//         console.log(a)
//     } else if ((a >= b && a <= c) || (c >= b && c <= a)) {
//         console.log(b)
//     } else {
//         console.log(c)
//     }
// }
//
// get_min_el(-3, 6, -5);


// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function get_max_el(a, b, c) {
//     if ((a >= b && b >= c) || (a >= c && c >= b)) {
//         console.log(a)
//     } else if ((a <= b && a >= c) || (c <= b && c >= a)) {
//         console.log(b)
//     } else {
//         console.log(c)
//     }
// }
//
// get_max_el(-3, 6, 7);


// // - створити функцію яка повертає найбільше число з масиву
// function max_arr(arr) {
//     let max = arr[0];
//     for (let el of arr) {
//         max = (el > max) ? el : max
//     }
//     return max
// }
//
// console.log(max_arr([0, 5, -2, 15, 100, -20, 20, 100]));


// // - створити функцію яка повертає найменьше число з масиву
// function min_arr(arr) {
//     let min = arr[0];
//     for (let el of arr) {
//         min = (el < min) ? el : min
//     }
//     return min
// }
//
// console.log(min_arr([0, 5, -2, 15, 100, -20, 20, 100]));


// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function sum_arr(arr) {
//     let s = 0
//     for (let el of arr) {
//         s += el
//     }
//     return s
// }
//
// console.log(sum_arr([1, 2, 10]));


// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function arithmetic_mean_arr(arr) {
//     let s = 0
//     for (let el of arr) {
//         s += el
//     }
//     return  s / arr.length
// }
//
// console.log(arithmetic_mean_arr([1, 4, 6, 5]))


// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// //   а виводить найбільше (Math використовувати заборонено);
// function ret_min_get_max(...arr) {
//     let max = arr[0];
//     let min = arr[1];
//     for (let el of arr) {
//         min = (el < min) ? el : min
//         max = (el > max) ? el : max
//     }
//     console.log(min)
//     return max
// }
//
// console.log(ret_min_get_max(2, 5, -10, 22));


// // - створити функцію яка заповнює масив рандомними числами
// function fill_rand_arr(length) {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr[arr.length] = Math.floor(Math.random() * 100);
//     }
//     return arr
// }
//
// console.log(fill_rand_arr(10));


// // - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// //   limit - аргумент, який характеризує кінцеве значення діапазону.
// function fill_rand_arr2(length, range) {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr[arr.length] = Math.round(Math.random() * range);
//     }
//     return arr
// }
//
// console.log(fill_rand_arr2(10, 50));


// // - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function arr_reverse(arr) {
//     let arr_rev = []
//     for (let i = arr.length - 1; i >= 0; i--) {
//         arr_rev.push(arr[i])
//     }
//     return arr_rev
// }
//
// console.log(arr_reverse([1, 2, 3]));