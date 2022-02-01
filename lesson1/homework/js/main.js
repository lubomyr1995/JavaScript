// //Завд1,2
// let s1 = 'hello';
// let s2 = 'owu';
// let s3 = 'com';
// let s4 = 'ua';
// let a1 = 1;
// let a2 = 10;
// let a3 = -999;
// let a4 = 123;
// let a5 = 3.14;
// let a6 = 2.7;
// let a7 = 16;
// let bull1 = true;
// let bull2 = false;
// console.log(s1, s2, s3, s4);
// console.log(a1, a2, a3, a4, a5, a6, a7);
// console.log(bull1, bull2);
// alert(s1);
// alert(s2);
// alert(s3);
// alert(s4);
// alert(a1);
// alert(a2);
// alert(a3);
// alert(a4);
// alert(a5);
// alert(a6);
// alert(a7);
// alert(bull1);
// alert(bull2);
// document.write(s1, s2, s3, s4);
// document.write(a1, a2, a3, a4, a5, a6, a7);
// document.write(bull1, bull2);
//
// s1 = 'Hii'
// s2 = 'google'
// s3 = 'edu'
// s4 = 'eu'
// a1 = 5;
// a2 = -10;
// a3 = -99;
// a4 = 1235;
// a5 = 3.1415;
// a6 = 2.72;
// a7 = 18;
// bull1 = false;
// bull2 = true;
//
// console.log(s1, s2, s3, s4);
// console.log(a1, a2, a3, a4, a5, a6, a7);
// console.log(bull1, bull2);
// alert(s1);
// alert(s2);
// alert(s3);
// alert(s4);
// alert(a1);
// alert(a2);
// alert(a3);
// alert(a4);
// alert(a5);
// alert(a6);
// alert(a7);
// alert(bull1);
// alert(bull2);
// document.write(s1, s2, s3, s4);
// document.write(a1, a2, a3, a4, a5, a6, a7);
// document.write(bull1, bull2);


// // завд 3,4 - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// // - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// //     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// let firstName = 'Любомир';
// let middleName = 'Васильович';
// let lastName = 'Змійовський';
// let person = firstName + ' ' + middleName + ' ' + lastName;
//
// let fName = prompt('Яке ваше імя?');
// let mName = prompt('Як ви по батькові?');
// let age = prompt('Який ваш вік?');
// alert(`Вітаю ${fName} ${mName}. Тобі ${age} років`)


// // Завд 5, 6 За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// //   let a = 100; let b = '100'; let c = true;
// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a, typeof b, typeof c);


// // Завд 7 - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// // В однакових виразах не використовувати однакові оператори!!!
// //   5 ? 6 -> true
// //   5 ? 6 -> false
// //   5 ? 6 -> false
// //   5 ? 6 -> false
// //   10 ? 10 -> true
// //   10 ? 10 -> true
// //   10 ? 10 -> false
// //   10 ? 10 -> false
// //   10 ? 10 -> false
// //   123 ? '123' -> false
// //   123 ? '123' -> true
// console.log(5 < 6);
// console.log(5 > 6);
// console.log(5 === 6);
// console.log(5 >= 6);
// console.log(10 == 10);
// console.log(10 <= 10);
// console.log(10 != 10);
// console.log(10 !== 10);
// console.log(10 < 10);
// console.log(123  === '123');
// console.log(123  == '123');


// // Завд8. - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//      let str = "20";
//      let a = 5;
//      document.write(str + a);  // виведе 205
//      document.write(str - a + "<br/>");  // виведе 15 - js прочитає автоматично str як число
//      document.write(str * "2" + "<br/>"); // виведе 40 ^
//      document.write(str / 2 + "<br/>");   // виведе 5 ^

