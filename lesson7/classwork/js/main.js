// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// //   максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// //   -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// //   -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// //   -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// //   -- changeYear (newValue) - змінює рік випуску на значення newValue
// //   -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function CarCreate_objs(model, manufacturer, year, maxspeed, engine) {
//     this.model = model;
//     this.manifacture = manufacturer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.engine = engine;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxspeed} на годину`)
//     };
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== "function") console.log(`${key}: ${this[key]}`)
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed += newSpeed;
//         return this.maxspeed // не сказано
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//         return this.year // не обовязково) в завданні не сказано повертати
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver
//     }
// }
//
// let car1 = new CarCreate_objs('Peugeot', 'France', 2014, 230, 1997);
// console.log(car1);
// car1.drive();
// car1.info();
// console.log(car1.increaseMaxSpeed(70));
// console.log(car1.changeYear(2020));
// car1.info();
// car1.addDriver('desmond');
// car1.info();


// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// // максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// //     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// //     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// //     -- changeYear (newValue) - змінює рік випуску на значення newValue
// //     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class CarObjs {
//     constructor(model, manufacture, year, maxSpeed, engine) {
//         this.model = model;
//         this.manufacture = manufacture;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
//     info() {
//         for (const key in this) {
//             console.log(`${key}: ${this[key]}`)
//         }
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed
//     }
//
//     changeYear(newValue) {
//         this.year = newValue
//     }
//
//     addDriver(driver) {
//         this.driver = driver
//     }
// }
//
// let car2 = new CarObjs('Skoda', 'Germany', 2016, 240, 1997);
// car2.drive();
// car2.info();
// car2.increaseMaxSpeed(60);
// car2.changeYear(2022);
// car2.addDriver('Neo');
// car2.info();


// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// // За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// // Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Cinderella {
//     constructor(name, age, sizeFoot) {
//         this.name = name;
//         this.age = age;
//         this.sizeFoot = sizeFoot;
//     }
// }
//
// let cin1 = new Cinderella('vika', 20, 36);
// let cin2 = new Cinderella('yulia', 27, 37);
// let cin3 = new Cinderella('ira', 19, 36);
// let cin4 = new Cinderella('natalya', 40, 40);
// let cin5 = new Cinderella('diana', 26, 36);
// let cin6 = new Cinderella('lida', 20, 37);
// let cin7 = new Cinderella('oksana', 20, 38);
// let cin8 = new Cinderella('galya', 34, 36);
// let cin9 = new Cinderella('vira', 18, 35);
// let cin10 = new Cinderella('nadya', 19, 38);
// let arrCinderella = [];
// arrCinderella.push(cin1, cin2, cin3, cin4, cin5, cin6, cin7, cin8, cin9, cin10);
// console.log(arrCinderella);
//
// class Prince {
//     constructor(name, age, findShose) {
//         this.name = name;
//         this.age = age;
//         this.findShose = findShose;
//     }
// }
//
// let prince = new Prince('Stepan', 27, 35);
//
// let para = (arrCinderella, prince) => {
//     for (let i = 0; i < arrCinderella.length; i++) {
//         if (arrCinderella[i].sizeFoot === prince.findShose) {
//             console.log(arrCinderella[i].name + ' - твоя попелюшка')
//         }
//     }
// }
// para(arrCinderella, prince);
//
// console.log(arrCinderella.find(obj => obj.sizeFoot === prince.findShose));
