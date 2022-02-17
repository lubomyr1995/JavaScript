// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let arrUsers = [];
let user1 = new User(1, 'Ivan', 'Ivanov', 'ivan@gmail.com', '093231415');
let user2 = new User(25, 'Mykola', 'Mykolov', 'kolya@gmail.com', '093234415');
let user3 = new User(9, 'Olya', 'Mykolov', 'kolya@gmail.com', '093234415');
let user4 = new User(4, 'Andriy', 'Mykolov', 'kolya@gmail.com', '093234415');
let user5 = new User(5, 'Stepan', 'Mykolov', 'kolya@gmail.com', '093234415');
let user6 = new User(20, 'Vasyl', 'Mykolov', 'kolya@gmail.com', '093234415');
let user7 = new User(42, 'Natalya', 'Mykolov', 'kolya@gmail.com', '093234415');
let user8 = new User(8, 'Vova', 'Mykolov', 'kolya@gmail.com', '093234415');
let user9 = new User(12, 'Taras', 'Mykolov', 'kolya@gmail.com', '093234415');
let user10 = new User(10, 'Yuriy', 'Mykolov', 'kolya@gmail.com', '093234415');
arrUsers.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
console.log(arrUsers);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(arrUsers.filter(user => user.id % 2 === 0))


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(arrUsers.sort((a, b) => a.id - b.id));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let arrClients = [];
let client1 = new Client(10, 'Ivan', 'Ivanov', 'ivan@gmail.com', '093231415',
    ['beer', 'vine', 'champagne']);
let client2 = new Client(1, 'Artur', 'Lavrov', 'archi@gmail.com', '095231415',
    ['meet']);
let client3 = new Client(11, 'Ivan', 'Ivanov', 'ivan@gmail.com', '093231415',
    ['beer', 'vine', 'champagne']);
let client4 = new Client(9, 'Artur', 'Lavrov', 'archi@gmail.com', '095231415',
    ['meet', 'fish', 'beef', 'pork']);
let client5 = new Client(2, 'Ivan', 'Ivanov', 'ivan@gmail.com', '093231415',
    ['beer', 'vine', 'champagne', 'vodka']);
let client6 = new Client(8, 'Artur', 'Lavrov', 'archi@gmail.com', '095231415',
    ['meet', 'fish', 'beef']);
let client7 = new Client(3, 'Ivan', 'Ivanov', 'ivan@gmail.com', '093231415',
    ['beer', 'vine', 'champagne']);
let client8 = new Client(4, 'Artur', 'Lavrov', 'archi@gmail.com', '095231415',
    ['meet', 'fish', 'beef']);
let client9 = new Client(6, 'Ivan', 'Ivanov', 'ivan@gmail.com', '093231415',
    ['beer']);
let client10 = new Client(5, 'Artur', 'Lavrov', 'archi@gmail.com', '095231415',
    ['meet', 'fish']);
arrClients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
console.log(arrClients);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(arrClients.sort((a, b) => a.order.length - b.order.length))
