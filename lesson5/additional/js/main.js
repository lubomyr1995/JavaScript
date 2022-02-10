// // - Дано натуральное число n. Выведите все числа от 1 до n.
// let get_enumerate = n => {
//     for (let i = 1; i < n + 1; i++) {
//         console.log(i)
//     }
// };
// get_enumerate(20);


// // - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B,
// //   или в порядке убывания в противном случае.
// let enumerate = (a, b) => {
//     if (a < b) {
//         for (let i = a; i < b + 1; i++) {
//             console.log(i);
//         }
//     } else {
//         for (let i = a; i >= b; i--) {
//             console.log(i);
//         }
//     }
// };
// enumerate(24, 20);


// // -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// //   EXAMPLE:
// //   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
// //   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
// //   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// let foo = (arr, i) => {
//     let arr_new = [];
//     for (let j = 0; j < arr.length; j++) {
//         if (i === j) {
//             let t = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = t;
//         }
//         arr_new.push(arr[j]);
//     }
//     return arr_new
// };
// console.log(foo([9, 8, 0, 4], 0));
// console.log(foo([9, 8, 0, 4], 1));
// console.log(foo([9, 8, 0, 4], 2));


// // - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// // Двожина масиву від 2 до 100
// // EXAMPLE:
// // [1,0,6,0,3] => [1,6,3,0,0]
// // [0,1,2,3,4] => [1,2,3,4,0]
// // [0,0,1,0]   => [1,0,0,0]
// let zero_end = (arr) => {
//     let arr_new = [];
//     let arr_zero = [];
//     if (arr.length >= 2 && arr.length <= 100) {
//         for (let el of arr) {
//             if (el === 0) {
//                 arr_zero.push(el)
//             } else {
//                 arr_new.push(el)
//             }
//         }
//     }
//     return arr_new.concat(arr_zero)
// }
//
// console.log(zero_end([1, 0, 6, 0, 3]));
// console.log(zero_end([0, 1, 2, 3, 4]));
// console.log(zero_end([0, 0, 1, 0]));
