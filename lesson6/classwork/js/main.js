// // - Дано список імен.
// // let n1 = 'Harry..Potter'
// // let n2 = 'Ron---Whisley'
// // let n3 = 'Hermione__Granger'
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// // let n1 = 'Harry Potter'
// // let n2 = 'Ron Whisley'
// // let n3 = 'Hermione Granger'
// let foo = (str) => {
//     let char = ['.', '-', '_', '*', '/', '`', '%'];
//     let arr = str.split('');
//     for (let i = 0; i < arr.length; i++) {
//         char.forEach(elChar => {
//             if (arr[i] === elChar) {
//                 arr[i] = ' '
//             }
//         })
//     }
//     return arr.join('').split(' ').filter(n => n).join(' ');
// }
// console.log(foo('Harry......---Potter'));


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let random100 = n => {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.round(Math.random() * 100))
    }
    return arr
}
console.log(random100(20));

// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// //   Відсортувати його за допомоги sort
// let arrSort = random100(20).sort((a, b) => a - b);
// console.log(arrSort);


// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// //   відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let arrDiv2 = random100(20).filter(a => a % 2 === 0);
// console.log(arrDiv2);


// // - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції).
// //   за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arrS = random100(10).map(k => k.toString());
// console.log(arrS);


// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// //   або навпаки в залежності від значення аргументу direction.
// let sortNums = (arr, direction) => {
//     if (direction === '+') {
//         return arr.sort((a, b) => a - b)
//     } else if (direction === '-') {
//         return arr.sort((a, b) => b - a)
//     } else {
//         return 'Incorrectly entered data'
//     }
// }
// console.log(sortNums(random100(10), '-'));


// // - є масив:
// //         -- відсортувати його за спаданням за monthDuration;
// //         -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let arrSort = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
// console.log(arrSort);
// let arrF = coursesAndDurationArray.filter(obj => obj.monthDuration > 5);
// console.log(arrF);


