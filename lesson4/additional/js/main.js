// // - створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
// //   якщо два аргументи - складає або конкатенує їх між собою.
// function bring_out_sum(...arg) {
//     if (arg.length === 0) {
//         console.log(arg[0])
//     } else {
//         let s = arg[0];
//         for (let i = 1; i < arg.length; i++) {
//             s += arg[i]
//         }
//         console.log(s)
//     }
// }
//
// bring_out_sum(1, 2, 'ss');


// // - створити функцію  яка приймає два масиви та
// //   скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// function bring_out_sum_arr(arr1, arr2) {
//     let arr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         arr.push(arr1[i] + arr2[i])
//     }
//     return arr
// }
//
// console.log(bring_out_sum_arr([1, 2, 3], [9, 10, 11]));


// // - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// function get_key(arr) {
//     let arr_new = [];
//     for (let i of arr) {
//         for (let iKey in i) {
//             arr_new.push(iKey)
//         }
//     }
//     return arr_new
// }
//
// console.log(get_key([{name: 'Dima', age: 13}, {model: 'Camry'}]));


// // // - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// function get_value(arr) {
//     let arr_new = [];
//     for (let i of arr) {
//         for (let iKey in i) {
//             arr_new.push(i[iKey])
//         }
//     }
//     return arr_new
// }
//
// console.log(get_value([{name: 'Dima', age: 13}, {model: 'Camry'}]));