// // - Знайти та вивести довижину настипних стрінгових значень
// //     'hello world', 'lorem ipsum', 'javascript is cool'
// console.log('len = ', 'hello world'.length);
// console.log('len = ', 'lorem ipsum'.length);
// console.log('len = ', 'javascript is cool'.length);


// // - Перевести до великого регістру наступні стрінгові значення
// //       'hello world', 'lorem ipsum', 'javascript is cool'
// console.log('Upper: ', 'hello world'.toUpperCase());
// console.log('Upper: ', 'lorem ipsum'.toUpperCase());
// console.log('Upper: ', 'javascript is cool'.toUpperCase());


// // - Перевести до нижнього регістру настипні стрінгові значення
// //       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// console.log('lower: ', 'HELLO WORLD'.toLowerCase());
// console.log('lower: ', 'LOREM IPSUM'.toLowerCase());
// console.log('lower: ', 'JAVASCRIPT IS COOL'.toLowerCase());


// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());


// // - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// //     let str = 'Каждый охотник желает знать';
// //     let arr = stringToArray(str);
// //     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let str = 'Каждый охотник желает знать';
// let stringToArray = str => str.split(' ');
// console.log(stringToArray(str));
// document.writeln(stringToArray(str));


// // - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// //     let str = 'Каждый охотник желает знать';
// //     document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, length) => str.slice(0, length);
// document.writeln(delete_characters(str, 7));


// // - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// //   При цьому всі символи рядка необхідно перевести у верхній регістр.
// //    let str = "HTML JavaScript PHP";
// //    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let insert_dash = str => str.replaceAll(' ', '-').toUpperCase();
// let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str));


// // - Напишіть функцію, яка приймає рядок як аргумент і перетворює
// //   регістр першого символу рядка з нижнього регістру у верхній.
// let first_elUpper = (str) => str[0].toUpperCase() + str.substring(1);
// document.write(first_elUpper('hello world'));
// console.log(first_elUpper('hello world'));


// // // - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capitalize = str => str.split(' ').map(el => el.charAt(0).toUpperCase() + el.substring(1)).join(' ')
// console.log(capitalize('okten its cool'));
